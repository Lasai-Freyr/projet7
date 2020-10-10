const Post = require("../models/Post");
const User = require('../models/User');

exports.Likes = ( req, res, next) =>  {
    const id = req.params.id;
    console.log("check id : ", id);
    Post.findByPk(id,(err, data) => {
        if (err) {
          res.status(500).send({message: 'Une erreur s\'est produite'});
        } 
        else { 
            console.log("data1 : ", data);
            console.log("data2 : ", data[0].usersLiked);
            console.log("req.body : ", req.body);
            console.log("req.body.userId : ", req.body.data.userId);
            console.log("data[0].usersDisliked: ", data[0].usersLiked);
            const userId = req.body.data.userId;
            const like = req.body.data.like;
            let usersLikedOff = [data[0].usersLiked];
            let usersLiked = usersLikedOff.filter( function(val){return val !== ''} );
            let usersDislikedoff = [data[0].usersDisliked];
            let usersDisliked = usersDislikedoff.filter( function(val){return val !== ''} );
            const userWantsToLike = (like == 1);
            const userWantsToDislike = (like == -1);
            const userWantsToCancelLike = ( usersLiked.includes(userId) &&  (like == 1));
            const userWantsToCancelDislike = (usersDisliked.includes(userId) && (like == -1) );
            const userCanLike = (!usersLiked.includes(userId));
            const userCanDislike = (!usersDisliked.includes(userId));
            const notTheFirstVote = (usersLiked.includes(userId) || usersDisliked.includes(userId));

            if (userWantsToLike && userCanLike)  {usersLiked.push(`${userId}`)};
            if (userWantsToDislike && userCanDislike) {usersDisliked.push(`${userId}`)};

            if (userWantsToCancelLike && notTheFirstVote)  {
                let index = usersLiked.indexOf(userId);
                usersLiked.splice(index, 1);
            }

            if (userWantsToCancelDislike && notTheFirstVote) {
                let index = usersDisliked.indexOf(userId);
                usersDisliked.splice(index, 1);   
            }  

            console.log("testlike", usersLiked);
            let likes = usersLiked.length;
            let dislikes = usersDisliked.length;
            
            let updateLike = {"likes": likes, "dislikes": dislikes, "usersLiked": usersLiked, "usersDisliked": usersDisliked};
            Post.modifLike(id, updateLike);
            res.status(200).send({ message: 'like/dislike ajouté'});
        }
    })
}