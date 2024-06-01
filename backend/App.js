const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Noteapp')
    .then(() => console.log('database connected'))

const cors = require('cors');
app.use(express.json())
app.use(cors())
const Adddetails=require('./Models/Adddetails')




app.post('/adddata', async (req, res) => {
    try {
        const adddata = new Adddetails({ ...req.body })
        console.log("adddata", adddata);
        const response = await adddata.save();   
        res.status(201).json(response);
    } 
    catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/viewdetails', async (req, res) => {
    try {
        const response = await Adddetails.find();
        console.log("Retrieved data:", response);
        res.json(response);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});


app.delete('/deletenotes/:id',async(req,res)=>{
    try{
    const id=req.params.id;
    console.log("id",id);
    let response=await Adddetails.findByIdAndDelete(id)
    console.log('response',response);
    res.json(response)
    }
    catch {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
     
  })







  

app.listen(8000, () => {
    console.log('connected');
})