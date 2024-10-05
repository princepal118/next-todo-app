import mongoose from 'mongoose'

// const {default : mongoose} = require('mongoose')
const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    }

},{timestamps: true})

//creating the modal.

const TodoModal = mongoose.models.todo || mongoose.model('todo',Schema)
export default TodoModal;