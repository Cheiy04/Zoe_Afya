# Zoe_Afya

Welcome to the web Platform Project built using the MERN (MongoDB, Express.js, React, Node.js) Stack. This project provides a robust and full-featured mental health application where we bridge the gap between patients and specialists. Implementing a chatbot with user friendly responses and assistance.

**Live App Demo** 
- https://zoe-afya.vercel.app/
- https://www.youtube.com/watch?v=Og8GGC8lOOM

## Features

- **Therapy Booking**: Seamless and ease of booking therapists


## Getting Started

### Prerequisites

1. Clone the repository to your local machine


```bash
git clone https://github.com/Cheiy04/Zoe_Afya.git
```

```bash
cd client
```

3. Create a MongoDB database and obtain your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).


### Env Variables

1. To the  `.env` and add the following environment variables:

```dotenv
NODE_ENV=development
PORT=5000
JWT_SECRET=ADD_YOUR_JWT_SECRET_HERE
MONGO_URI=ADD_YOUR_MONGO_URI_HERE
PAGINATION_MAX_LIMIT=12 # This will show 12 products per page; you can change it.
EMAIL_HOST=smtp-relay.brevo.com
EMAIL_PORT=587
EMAIL_USER=ADD_YOUR_BREVO_LOGIN
EMAIL_PASS=ADD_YOUR_BREVO_PASSWORD
EMAIL_FROM=ADD_YOUR_BREVO_LOGIN
```

### Install Dependencies

Run the following commands to install dependencies for both the frontend and backend:

```bash
cd client
npm install ...
cd ..
cd server
npm install ...

```



### Run

To run only the backend:

```bash
cd server
npm run dev
```

To run only the frontend:

```bash
cd client
npm run dev
```


## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Cheiy04/Zoe_Afya.git
   ```

3. Navigate to the project directory:

   ```bash
   cd Zoe_Afya
   ```

4. Create a new branch for your contributions:

   ```bash
   git checkout -b feature/your-feature-name
   git checkout -b issues/your-issue-name
   ```

## Making Changes

1. Implement your changes and improvements.

2. Ensure that your changes adhere to the project's coding style and conventions.

3. Test your changes thoroughly to avoid introducing bugs.

4. Update the project documentation if necessary.

## Committing Changes

1. Commit your changes with a descriptive commit message:

   ```bash
   git add .
   git commit -m "Add your descriptive commit message here"
 


