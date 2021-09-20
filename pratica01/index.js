const express = require('express');
const cidadeRouter = require('./routes/cidade-router');
const estadotRouter = require('./routes/estado-router');

const app = express();

const PORT = 3333;

//Middleware
app.use(express.json());

//Rota principal
app.get('/', (req, res) => {
    res.send(`It's working!3`);
});

//Demais rotas
app.use('/cidade', cidadeRouter);
app.use('/estado', estadoRouter);

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
    
});