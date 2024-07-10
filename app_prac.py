import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
    # base_url="https://api.aimlapi.com",
)

response = client.chat.completions.create(
    model="gpt-3.5-turbo-1106",
    messages=[
        {
            "role": "system",
            "content": "You are a medical and a health assistnant who knows only about medicine and health",
        },
        {
            "role": "user",
            "content": "Tell me, what is the function of the placenta?"
        },
    ],
)

message = response.choices[0].message.content
print(f"Assistant: {message}")