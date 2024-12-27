const mongoose = require('mongoose')

const connectToMB = async () => {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/task-management'
        );
        console.log('MongoDB Connected!');
    } catch (error) {
        console.error('Unable to connect MongoDB:', error.message);
    }
};


module.exports={
    connectToMB
}