const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));
// Rota principal
app.get('/api', (req, res) => {
res.json({ message: 'API funcionando!' });
});
// Rota para servir o index.html
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Inicia o servidor se não estiver em ambiente de produção Vercel
if (process.env.NODE_ENV !== 'production') {
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});
}
// Exporta a aplicação para o Vercel
module.exports = app;
