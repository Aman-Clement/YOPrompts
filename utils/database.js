import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async()=>{


    if(isConnected){
        console.log('MongoDb is alreaddy connected')
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName  : "YOPrompts",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected=true;
        console.log("MongoDB connected")
    }catch(error){
        console.log(error)
    }
}