import mongoose from 'mongoose'

const connectToMongoDb = async () => {
    try{
        await mongoose.connect(process.env.mongo_db_URI)
        console.log("connected to MongoDb");

    }catch(error){
        console.log("Error connecting to MongoDb");
    }
} 

export default connectToMongoDb;
 