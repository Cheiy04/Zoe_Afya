from flask import Flask, request, render_template, jsonify
import markdown
import os

app = Flask(__name__)

OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
from openai import OpenAI
client = OpenAI(api_key= OPENAI_API_KEY)
assistant = client.beta.assistants.create(
    name="health Assistant",
    instructions="You are a useful medical assistant. Answer and chat with patients and answer questions or concerns which are ONLY RELATED TO HEALTH OR MEDICINE!.",
    tools=[{"type": "code_interpreter"}],
    model="gpt-4o")

thread = client.beta.threads.create()

def get_ai_response(prompt):
  message = client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content=prompt
  )
  run = client.beta.threads.runs.create_and_poll(
    thread_id=thread.id,
    assistant_id=assistant.id,
    instructions="Only answer questions about 'health', 'medicine', or 'mental health', else  you must return 'I am sorry I don't know about that.I only deal with medicine and health issues. Please contact the customer care for more direction'.BE BRIEF."
  )
  if run.status == 'completed': 
    messages = client.beta.threads.messages.list(
      thread_id=thread.id
    )
    return messages.data[0].content[0].text.value
  else:
    return run.status


def chatbot_response(user_input):
    # Replace this with your actual chatbot logic
    response = f"{markdown.markdown(get_ai_response(user_input))}"
    return response


@app.route('/', methods=['GET'])
def index():
    return render_template('bot.html')


@app.route('/chat', methods=['POST'])
def chat():
   user_input = request.json['user_input']
   bot_response = chatbot_response(user_input)
   return jsonify({
        'user_input': user_input,
        'bot_response': bot_response
    })

   

    # if request.method == 'POST':
    #     user_input = request.form['user_input']
    #     bot_response = chatbot_response(user_input)
    #     return render_template('index.html', user_input=user_input, bot_response=bot_response)
    # return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
