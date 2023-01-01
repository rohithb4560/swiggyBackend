const { post} = require("../index");


module.exports.createpost=body=> {
  return post.create(body);
}

module.exports.deletepost= filterQuery=> {
  return post.findByIdAndDelete(filterQuery);
}

module.exports.getpost = filterQuery=>{
    return post.findOne(filterQuery)
}

module.exports.getAllposts =(filterQuery)=>{
    return post.find(filterQuery)
}
module.exports.updatePost =(filterquery,body)=>{
  return post.findOneAndUpdate(filterquery,body)
}

module.exports.postComment =(filterquery,body)=>{
  return post.findByIdAndUpdate(filterquery,body)
}