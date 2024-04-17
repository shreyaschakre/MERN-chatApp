import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getRecieverSocketId, io } from "../socket/socket.js"


export const sendMesasge = async (req,res) =>{
    try {
        const {message} = req.body
        const {id: recieverId} = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: {$all : [senderId, recieverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, recieverId]
            })
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message
        })

        // Check if conversation is still null
        if (!conversation) {
            // Handle the case where conversation is still null
            console.error("Error: Conversation not found or could not be created");
            // You may choose to return an error response or throw an error here
        } else {
            // Push the new message to the conversation
            conversation.messages.push(newMessage._id);
        }

        //await conversation.save()
        //await newMessage.save()

        //this runs in parallel
        await Promise.all([conversation.save(),newMessage.save()]) 
        res.status(201).json(newMessage)

        // SOCKET IO functionality
        const recieverSocketId = getRecieverSocketId(recieverId)
        if(recieverSocketId){
        // io.to(<sockey_id>).emit() used to send message to specific client
            io.to(recieverSocketId).emit("newMessage",newMessage)
        }

    } catch (error) {
        console.log("Error in sendMessage Controller", error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

export const getMessage =async (req, res) => {
    try {
        const {id : userToChatId} = req.params
        const senderId = req.user._id

       
        //console.log(`sender id = ${senderId} , ${typeof(senderId)}`);
        //console.log(`usertochatid id = ${userToChatId} , ${typeof(userToChatId)}`);
        

        const conversation = await Conversation.findOne({
            participants : { $all:[senderId, userToChatId]}
        }).populate("messages"); // not ref but actually ref

        if(!conversation) return res.status(200).json([])

        const messages = conversation.messages

        res.status(200).json(messages)

    } catch (error) {
        console.log("Error in getMessage Controller", error.message);
        res.status(500).json({error:"Internal server error"})
    }
}