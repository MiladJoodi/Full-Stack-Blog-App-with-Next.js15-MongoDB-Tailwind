import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://winbetacom:winbetacom@cluster0.lq7ohfu.mongodb.net/blog-app?retryWrites=true&w=majority&appName=Cluster0')
    console.log("DB Connected")
}

