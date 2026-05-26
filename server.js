const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>������ 2026년 대기업 인프라 엔지니어 이직 성공!</h1>
              <p>완전 자동화 GitOps(GitHub Actions + ArgoCD) 파이프라인 구동 중입니다.</p>
              <p>현재 응답하는 인프라 Pod: <b style="color: blue;">${process.env.HOSTNAME}</b></p>`);
});

app.get('/healthz', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
