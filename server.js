import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import todoRoutes from './routes/todos.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('✅ Backend is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`✅ Server running on port ${PORT}`));
