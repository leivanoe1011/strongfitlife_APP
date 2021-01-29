

const mongoose = require("mongoose");
const Message = mongoose.model("Message");

exports.getAllmessages = async (req, res) => {

    const { id } = req.body;
    // const returnArr = [];
    
    const messages = await Message.find({chatroom : id})
        .populate("user","firstName");
        // populate({ path: 'user', select: 'email' });

    // messages.forEach(function(msg) {

    //     const tempMessage ={
    //         message : msg.message,
    //         name : msg.user.name,
    //         userId : msg.user._id
    //     }
    //     console.log(message.user.email);
    //     returnArr.push(tempMessage)
    // })
    
    res.json(messages);
    // res.json(returnArr);
};

