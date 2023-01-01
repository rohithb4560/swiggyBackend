var express = require('express');
var mongoose = require('mongoose');
const router = require('router')
const item = require('../index')
const axios = require('axios');
const {createitem,deleteitem,getitem,getAllitems,updateitem,itemComment} = require('../Methods/index')

module.exports.createitem = async (req,res)=>{
    const data =await createitem(req.body)
  
    res.send(data)
}

module.exports.deleteitem  = async (request,response)=>{
    const data = await deleteitem({...request.body});
    response.send(data);
}

module.exports.getitem = async (req,res)=>{
    const data = await getitem(req.body)
    res.send(data)
}
module.exports.getAllitems = async (req,res)=>{
    const data = await getAllitems(req.body)
    res.send(data)
}

module.exports.updateitem = async (req,res)=>{
    const filterQuery = { _id:req.body._id};

    const item = await getitem(filterQuery)
 
    const data = await updateitem(filterQuery,{...req.body})
    res.send(data)
}
module.exports.itemComment = async (req,res)=>{

    const filterQuery = { _id:req.body._id};

    const item = await getitem(filterQuery)

     const itemComments = item.comments
    const allComments = [...itemComments,...req.body.comments]
    console.log(allComments)
    const data = await itemComment(filterQuery,{comments:allComments})
    res.send(data)


}


// module.exports
