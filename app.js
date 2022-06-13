require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { json } = require('express');
mongoose.connect('mongodb://localhost:27017/xpeedstudio');

const port = process.env.PORT || 3300;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).end("Xpeed is running...");
});

app.get('/api/top-cat-products/projector', async (req, res) => {
    const allProjectorProduct = await getProjectorTopCatProducts();
    res.status(200).json(
        {
            success: true,
            message: "Success",
            data: allProjectorProduct
        }
    );
});
app.get('/api/top-cat-products/googleglass', async (req, res) => {
    const allGoogleGlassProduct = await getGoogleGlassTopCatProducts();
    res.status(200).json(
        {
            success: true,
            message: "Success",
            data: allGoogleGlassProduct
        }
    );
});
app.get('/api/top-cat-products/headphone', async (req, res) => {
    const allHeadPhoneProduct = await getHeadPhoneTopCatProducts();
    res.status(200).json(
        {
            success: true,
            message: "Success",
            data: allHeadPhoneProduct
        }
    );
});
app.get('/api/top-cat-products/light', async (req, res) => {
    const allLightProduct = await getLightTopCatProducts();
    res.status(200).json(
        {
            success: true,
            message: "Success",
            data: allLightProduct
        }
    );
});
app.get('/api/top-cat-products/laptop', async (req, res) => {
    const allLaptopProduct = await getLaptopTopCatProducts();
    res.status(200).json(
        {
            success: true,
            message: "Success",
            data: allLaptopProduct
        }
    );
});
//single 
// app.get('/api/products/new', async (req, res) => {
//     await createNewProduct();
//     res.status(200).end("Product created");
// });

//Multi products
// app.get('/api/products/all', async (req, res) => {
//     await storeProducts();
//     res.status(200).end("Products created");
// });

app.listen(port, () => {
    console.log(`Xpeed is running on port ${port}`);
});


// mongoose
const productSchema = new mongoose.Schema({
    name: String,
    regularPrice: Number,
    salePrice: Number,
    rating: Number,
    imageUrl: String,
    category: String
});

const topCatModel = mongoose.model('TopCatProduct', productSchema);

async function createNewProduct(realProduct) {
    newProduct = new topCatModel(
        realProduct
    );

    await newProduct.save();
}

async function getProjectorTopCatProducts() {
    const allCatProducts = await topCatModel.find({ category: "Projector" });
    return allCatProducts;
}
async function getGoogleGlassTopCatProducts() {
    const allCatProducts = await topCatModel.find({ category: "Google Glass" });
    return allCatProducts;
}
async function getHeadPhoneTopCatProducts() {
    const allCatProducts = await topCatModel.find({ category: "Head Phone" });
    return allCatProducts;
}
async function getLightTopCatProducts() {
    const allCatProducts = await topCatModel.find({ category: "Light" });
    return allCatProducts;
}
async function getLaptopTopCatProducts() {
    const allCatProducts = await topCatModel.find({ category: "Laptop" });
    return allCatProducts;
}
// const allProductsArray = [
//     {
//         name: "Xpeed Projector",
//         regularPrice: 640,
//         salePrice: 540,
//         rating: 4,
//         imageUrl: "http://localhost:4200/assets/images/36-2.png",
//         category: "Laptop"
//     },
//     {
//         name: "Apple iPhone 7s",
//         salePrice: 540,
//         rating: 5,
//         imageUrl: "http://localhost:4200/assets/images/24-1.png",
//         category: "Laptop"
//     },
//     {
//         name: "Apple iPhone 6s",
//         salePrice: 540,
//         rating: 4.5,
//         imageUrl: "http://localhost:4200/assets/images/21-1.png",
//         category: "Laptop"
//     },
//     {
//         name: "Wireless Microphone",
//         regularPrice: 640,
//         salePrice: 540,
//         rating: 4.5,
//         imageUrl: "http://localhost:4200/assets/images/Cannon-2-Mini-Smart-Bluetooth-1.png",
//         category: "Laptop"
//     },
//     {
//         name: "CC Camera",
//         regularPrice: 640,
//         salePrice: 540,
//         rating: 3.5,
//         imageUrl: "http://localhost:4200/assets/images/08-2.png",
//         category: "Laptop"
//     },
//     {
//         name: "Moving Camera",
//         regularPrice: 640,
//         salePrice: 540,
//         rating: 3.5,
//         imageUrl: "http://localhost:4200/assets/images/07-300x300-1-1.jpeg",
//         category: "Laptop"
//     },
//     {
//         name: "Core i7 Laptop",
//         regularPrice: 640,
//         salePrice: 540,
//         rating: 3.5,
//         imageUrl: "http://localhost:4200/assets/images/01-1.png",
//         category: "Laptop"
//     },
//     {
//         name: "Unlocked Mobile Phone",
//         regularPrice: 640,
//         salePrice: 540,
//         imageUrl: "http://localhost:4200/assets/images/iphone7-1.png",
//         category: "Laptop"
//     },
//     {
//         name: "Stereo Headset",
//         regularPrice: 640,
//         salePrice: 540,
//         rating: 4.5,
//         imageUrl: "http://localhost:4200/assets/images/Bluetooth-Headphones-Wireless-Stereo-Headset-1.jpeg",
//         category: "Laptop"
//     },
//     {
//         name: "Rated 5.00 out of 5 Camera Drone",
//         regularPrice: 640,
//         salePrice: 540,
//         rating: 4.5,
//         imageUrl: "http://localhost:4200/assets/images/camera-drone-1.png",
//         category: "Laptop"
//     },
//     {
//         name: "Holy Stone Drone",
//         regularPrice: 640,
//         salePrice: 540,
//         rating: 4.5,
//         imageUrl: "http://localhost:4200/assets/images/WIFI-FPV-With-720P-Camera-High-Hold-Foldable-Drones-1.jpeg",
//         category: "Laptop"
//     },
//     {
//         name: "LED Projector",
//         regularPrice: 640,
//         salePrice: 540,
//         rating: 4.5,
//         imageUrl: "http://localhost:4200/assets/images/Bluetooth-Smart-Projector-1.jpeg",
//         category: "Laptop"
//     }
// ];



// async function storeProducts() {
//     for (let i = 0; i < allProductsArray.length; i++) {
//         await createNewProduct(allProductsArray[i]);

//     }
// }