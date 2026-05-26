const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>������ 실무형 GitOps 프로젝트 구동 중!</h1>
              <p>현재 응답하는 Pod(컨테이너): <b>${process.env.HOSTNAME}</b></p>`);
});

app.get('/healthz', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
