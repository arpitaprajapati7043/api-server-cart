const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();
// Enable helmet with contentSecurityPolicy middleware
app.use(helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://apis.google.com'],
    // Add other directives as needed
  },
}));


// Specify allowed origins using environment variable
const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000'];
app.use(cors({ origin: allowedOrigins }));

// Your routes and other middleware...


app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
