import mongoose from "mongoose"

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO,{
            useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true, // Enable SSL for the connection
        })
    }catch(err){
        throw new Error("Connection failed")
    }
}
export default connect