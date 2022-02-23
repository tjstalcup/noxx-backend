const app = require('./app');

const { PORT } = require("./config");

app.listen(PORT, () => {
    console.log(`NoXX Server listening on port ${PORT}`);
});