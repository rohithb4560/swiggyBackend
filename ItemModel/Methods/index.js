const { item} = require("../index");


module.exports.createitem=body=> {
  return item.create(body);
}

module.exports.deleteitem= filterQuery=> {
  return item.findByIdAndDelete(filterQuery);
}

module.exports.getitem = filterQuery=>{
    return item.findOne(filterQuery)
}

module.exports.getAllitems =(filterQuery)=>{
    return item.find(filterQuery)
}
module.exports.updateitem =(filterquery,body)=>{
  return item.findOneAndUpdate(filterquery,body)
}

module.exports.itemComment =(filterquery,body)=>{
  return item.findByIdAndUpdate(filterquery,body)
}