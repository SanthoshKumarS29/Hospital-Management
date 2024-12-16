import mongoose from "mongoose";


const ConnectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.DB)
        console.log("BD Connected")
    } catch (error) {
        console.log(error)
    }
}

export default ConnectDB