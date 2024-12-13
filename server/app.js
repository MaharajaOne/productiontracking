const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Placeholder routes
app.use('/api/users', require('./routes/users'));
app.use('/api/tasks', require('./routes/tasks'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));