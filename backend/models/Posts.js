const postSchema = Schema ({
    postId: { type: String},
    userId: { type: String},
    title: { type: String},
    type: { type: String},
    datePost: { type: Date}
})


module.exports = model('Post', postSchema);