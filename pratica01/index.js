const express = require('express');
const groupRouter = require('./routes/cidade-route');
const productRouter = require('./routes/estado-route');

const app = express();

const PORT = 3333;

//Middleware
app.use(express.json());

//Rota principal
app.get('/', (req, res) => {
    res.send(`It's working!2`);
});

//Demais rotas
app.use('/cidade', cidadeRouter);
app.use('/estado', estadotRouter);

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
    
});