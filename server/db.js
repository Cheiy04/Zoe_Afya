const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()


// const connectDB = async () => {
//   try {
//     const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.vn2ssmg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
    
//     await mongoose.connect(uri);
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); 
//   }
// };
module.exports = async function connectDB(){
  try{
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.vn2ssmg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
    await mongoose.connect(uri)
    console.log('Connected succesfuly to MongoDB')
  }
  catch(error){
    console.error('Error connecting to MongoDB: ', error)
  }
};

