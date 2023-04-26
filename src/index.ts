import express from 'express';
import diaryRoute from './routes/diaries'

const app = express();
const PORT = 3000;

app.use(express.json())// Middleware for convert the req.body to json

app.use('/api/diaries',diaryRoute)

app.listen(PORT,()=>{
    console.log(`listen on port ${PORT}`);
})
