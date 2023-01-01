module.exports = app => {
    app.use("/swiggy", require("./PostModel/Routes/index")),
    app.use('/swiggy',require('./ItemModel/Routes/index'))
    // app.use("/whatsapp", require("./Connection/Routes/index"))
  };