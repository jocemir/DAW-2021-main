const express = require('express');
const groupRouter = require('./routes/group-router');
const productRouter = require('./routes/product-router');
const brandRouter = require('./routes/brand-router');

const app = express();

const PORT = 3333;

//Middleware
app.use(express.json());

//Rota principal
app.get('/', (req, res) => {
    res.send(`Olá Mundo = Prova`);
});

//Demais rotas
app.use('/groups', groupRouter);
app.use('/products', productRouter);
app.use('/brand', brandRouter);

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
    
});