const mongoose = require('mongoose');

const special = mongoose.model('Event', {
    eventname : {type: String},
    description: {type: String}
});

module.exports = special;
