var express = require('express');
var mongoose = require('mongoose');
const router = require('router')
const post = require('../index')
const axios = require('axios');
const {createpost,deletepost,getpost,getAllposts,updatePost,postComment} = require('../Methods/index')

module.exports.createpost = async (req,res)=>{
    const data =await createpost(req.body)
  
    res.send(data)
}

module.exports.deletepost  = async (request,response)=>{
    const data = await deletepost({...request.body});
    response.send(data);
}

module.exports.getpost = async (req,res)=>{
    const data = await getpost(req.body)
    res.send(data)
}
module.exports.getAllposts = async (req,res)=>{
    const data = await getAllposts(req.body)
    res.send(data)
}

module.exports.updatePost = async (req,res)=>{
    const filterQuery = { _id:req.body._id};

    const post = await getpost(filterQuery)
 
    const data = await updatePost(filterQuery,{...req.body})
    res.send(data)
}
module.exports.postComment = async (req,res)=>{

    const filterQuery = { _id:req.body._id};

    const post = await getpost(filterQuery)

     const postComments = post.comments
    const allComments = [...postComments,...req.body.comments]
    console.log(allComments)
    const data = await postComment(filterQuery,{comments:allComments})
    res.send(data)


}


// module.exports
