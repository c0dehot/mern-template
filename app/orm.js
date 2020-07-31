const mongoose = require( 'mongoose' );

mongoose.connect(process.env.MONGODB_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

// include mongoose models (it will include each file in the models directory)
const db = require( './models' );

// input : userId, tag*
// output: <array> [{thumbId, name, imageUrl, tags, creationTime, isFavourite }]
async function listUsers(){
    // if a tag is given do a find-where 'tag' in tags
    const userList = await db.users.find({},'-createdAt -updatedAt -__v');
 
    return userList;
 }