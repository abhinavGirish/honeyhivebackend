// jobQueue.js
const Queue = require('bull');

const jobQueue = new Queue('llm-pipeline-jobs', {
  redis: {
    host: 'localhost',
    port: 6379, // Default Redis port
  },
});

module.exports = jobQueue;
