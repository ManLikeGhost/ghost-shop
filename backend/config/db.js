import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const connect = await mongoose.connect( process.env.MONGODB_CONNECT_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } )
    console.log(`MONGO_DB CONNECTED SUCCESSFULLY: ${connect.connection.host}`)
  } catch (error) {
    console.error( `Error is ${ error.message }` )
    process.exit(1)
  }
}

export default connectDB