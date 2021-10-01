const express = require('express');
const groupRouter = require('./routes/cidade-route');

const app = express();

const PORT = 3333;

//Middleware
app.use(express.json());

//Rota principal
app.get('/', (req, res) => {
    res.send(`It's working! pratica02`);
});

//Demais rotas
app.use('/cidade', groupRouter);
app.use('/estado', groupRouter);

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
    
});