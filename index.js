const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.142y4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db('fruitsValley').collection('services');
        app.get('/services', async (req, res) => {


        })
    }
    finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running Food Valley Wirehouse Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
})

[
    {
        "itemName": "Mango",
        "img": "https://i.ibb.co/W3Dh5L0/mango.jpg",
        "description": "As a seasonal fruit, mango is a great fruit to everyone. The supplier supplies mango from various state.",
        "quantity": "132",
        "price": "50",
        "supplier": "MammaGo Enterprise"
    },
    {
        "itemName": "Orange",
        "img": "https://i.ibb.co/XZwr6WY/orange.jpg",
        "description": "Orange is a royal fruit that loved by all type of people. The supplier supplies so much fresh orange.",
        "quantity": "146",
        "price": "75",
        "supplier": "Orangers EndFame Enterprise"
    },
    {
        "itemName": "Papaya",
        "img": "https://i.ibb.co/6Jszdd0/papaya.jpg",
        "description": "Papaya is a general fruit but it has many more important vitamins and minerals. Pappu Uncle supplies great papaya from his field.",
        "quantity": "300",
        "price": "80",
        "supplier": "Pappu Enterprise"
    },
    {
        "itemName": "Jackfruit",
        "img": "https://i.ibb.co/WpS9Wkm/jackfruit.jpg",
        "description": "Jackfruit is a seasonal fruit. It is needless to anything about seasonal fruit like jackfruit. And when it is from our suppliers; Ah!!",
        "quantity": "540",
        "price": "120",
        "supplier": "Native Food Dealer"
    },
    {
        "itemName": "Banana",
        "img": "https://i.ibb.co/LgWBYgR/banana.jpg",
        "description": "Banana is an average level fruit as it can grow anywhere. But if it is about quality, Banana Mania's banana is best.",
        "quantity": "135",
        "price": "50",
        "supplier": "Banana Mania Enterprise"
    },
    {
        "itemName": "Guava",
        "img": "https://i.ibb.co/VvfmjKJ/guava.jpg",
        "description": "Nowadays guava is treated as a common fruit as it is so tasty and less costly. Fruit Fofo supplies best quality guava from their own field.",
        "quantity": "100",
        "price": "160",
        "supplier": "Fruit Fofo Enterprise"
    }
]