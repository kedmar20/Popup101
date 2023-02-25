const app = require("./app.js");
const { port } = require("./config");

app.listen(port, () => {
  console.log(`Server läuft auf dem Port: ${port}`);
});
