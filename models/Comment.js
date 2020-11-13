import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "text"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }
}); 

const model = mongoose.model("Commnet", commentSchema);

export default model;