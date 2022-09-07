function apiResponse(results){
    return {"status":200, "error":null,"response":results}; // return json
    //return JSON.stringify({"status":200, "error":null,"response":results}); // return string
};

module.exports = {apiResponse};