const express = require('express');
const cors = require('cors');
const groupRouter = require('./routes/group-router');
const productRouter = require('./routes/product-router');
const cidadeRouter = require('./routes/cidade-router');
const estadoRouter = require('./routes/estado-router');

const app = express();

const PORT = 3333;

//Middleware
app.use(express.json());
app.use(cors());

//Rota principal
app.get('/', (req, res) => {
    res.send(`Olá Mundo = Prova22`);
});

//Demais rotas
app.use('/groups', groupRouter);
app.use('/products', productRouter);
app.use('/cidade', cidadeRouter);
app.use('/estado', estadoRouter);

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
    
});