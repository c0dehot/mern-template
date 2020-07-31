const mongoose = require('mongoose')
const Schema = mongoose.Schema

let users = new Schema ({
   name:  { type: String, required: true, trim: true },
   email:  { type: String, trim: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] },
   password:  { type: String, trim: true },
   session: { type: String, default: '' }
}, {
   timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
})

module.exports = mongoose.model('users', users)