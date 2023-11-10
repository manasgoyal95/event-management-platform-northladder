const mongoose = require('mongoose')

const connectDb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://manasgoyal95:manas123@cluster1.ex96nuq.mongodb.net/events")
        console.log(`Server running on ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`${error}`)
    }
}

module.exports = connectDb