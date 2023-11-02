const express = require('express');
const app = express();
const port = 3000;

// Middleware for handling form data
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

// Handle job submission
app.post('/submit-job', (req, res) => {
  const pipelineCode = req.body.pipelineCode;
  const inputs = req.body.inputs.split('\n');
  const metrics = req.body.metrics.split('\n');
  
  // Enqueue the job with the provided data
  // You will need to implement this part with a job queue library
  // and store job details in the database

  // Enqueue the job with user data
  const jobData = { pipelineCode, inputs, metrics };
  const jobMetrics = await jobQueue.add(jobData);


  res.send('Job submitted successfully');

  try {
    if (jobMetrics.result) {
        // Job is complete, and results are available
        return res.status(200).json({ status: 'completed', result: jobMetrics.result });
    } else if (jobMetrics .error) {
        // Job encountered an error
        return res.status(200).json({ status: 'error', error: jobMetrics.error });
    } else {
        // Job is still in progress
        return res.status(200).json({ status: 'in-progress' });
    }
    } catch (error) {
    return res.status(500).json({ message: 'Error retrieving job status', error: error.message });
    }

});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
