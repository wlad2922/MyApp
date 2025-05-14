const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Статические файлы
app.use(express.static('public'));

// Пример API
app.get('/api/test', (req, res) => {
    res.json({ status: "OK", message: "Hello from backend!" });
});

// Проверка initData (безопасность)
app.post('/validate', express.json(), (req, res) => {
    const initData = req.body.initData;
    // Реализуйте проверку подписи через crypto
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});