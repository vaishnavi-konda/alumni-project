const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  job_title: {
    type: String,
    required: true,
  },
  job_description: {
    type: String,
    required: true,
  }, 
  author: {
    type: String, 
  }
});

module.exports = mongoose.model("job", jobSchema);
