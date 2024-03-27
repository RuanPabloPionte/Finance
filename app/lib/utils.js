const mongoose = require('mongoose')

const connection = {}

export const connectToDB = async()=>{
    try {
        if(connection.isConnected) return;
        const db = await mongoose.connect('mongodb://localhost:27017/finance')
        connection.isConnected = db.connections[0].readyState;
        console.log(connection)
    } catch (error) {
        console.log(error)
    }    
}

