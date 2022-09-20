require('dotenv').config();
const mongoose = require('mongoose');

const URL = process.env.MONGODB_URI;
try {
    (async () => {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    })();
} catch (error) {
    throw new Error(error.message)
}
