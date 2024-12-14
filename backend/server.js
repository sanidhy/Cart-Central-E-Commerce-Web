const express=require('express');
const multer=require('multer');
const mongoose=require('mongoose')
const cors=require('cors');


const port=process.env.PORT || 9000;
const app=express()
app.use(cors())
app.use(express.json())




console.log("HIHIHI")

mongoose.connect('mongodb://localhost:27017/E_Comm_data',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const upload=multer({storage:multer.memoryStorage()});

const productSchema=new mongoose.Schema({
    itemTitle:{
        type:String,
        required:true,
        trim:true,
    },
    imgs:{
        type:String,
        required:true,
    },
})

const Product=mongoose.model('Products_data',productSchema)

app.post('upload-json',upload.single('file'),async(req,res)=>{
    try{

        const jsonData=JSON.parse(req.file.buffer.toString());
        if(!jsonData.product || !Array.isArray(jsonData.product)){
            return res.status(400).json({error:'Invalid JSON structure'});
        }
        await product.insertMany(jsonData.product);

        console.log("Successfully uploaded");
        res.json({message:'JSON data uploaded sucessfully'});

    }catch(error){
        console.error('Error uploading JSOn data:',error);
        res.status(500).json({error:'Error uploading JSON data'});

    }
});


app.get('/fetch-json',async(req,res)=>{
    try{

        const products=await Product.find();
        console.log("Sucessfully Send Data")
        res.json(products)
    }
    catch(error)
    {
        console.error('Error fetching JSON data:',error);
        res.status(500).json({error:'Error fetching JSON Data'});
    }
});

app.get('/fetch-json-product-data',async(req,res)=>{
    try{
        const product_data=await productSchema.find();
        res.json(product_data);
    }
    catch(error){
        console.error('Error fetching JSON data:',error);
        res.status(500).json({error:'Error fetching JSON data'});
    }
})


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})