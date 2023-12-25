const {Schema,model,models} = require("mongoose");

const QueryRequest = new Schema({
    name: {type: String},
    email: {type: String, required: true},
    message: {type: String, required: true}
})

const QuerySchema = models.QueryRequest || model("Query" , QueryRequest);

module.exports = QuerySchema;