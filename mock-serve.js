const Mock = require('mockjs');
const cors = require('cors');
const content = require('./src/mock/content.js');
const express = require('express');

const app = express();
const port = 3000; // 指定端口号
app.use(cors());
app.get('/api/content', (req, res) => {
    res.json(Mock.mock(content.list));
});

app.listen(port, () => {
    console.log(`Mock Server is running on port ${port}`);
});
