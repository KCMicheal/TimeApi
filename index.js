const express = require('express');
const app = express();

app.get('/api/time', (req, res) => {
    res.json({ currentTime: new Date().toISOString() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Time API running on port ${port}`));
