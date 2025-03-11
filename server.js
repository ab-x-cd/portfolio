const express = require("express");
const app = express();
const port = 3070;
const path = require("path");

app.set('view engine', 'ejs');

app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'assets')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

app.get("/animscss", (req, res) => {
  res.sendFile(path.join(__dirname, "projets_css", "accueilcss.html"));  });

app.get("/animbounce", (req, res) => {
  res.sendFile(path.join(__dirname, "projets_css", "bounce", "animrebond.html"));  });
 
app.get("/solar", (req, res) => {
  res.sendFile(path.join(__dirname, "projets_css", "solar", "solar.html"));  });


  app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "errors", "404.html"));
  });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, '/errors/500.html'));
});


app.listen(port, () => {
  console.log(`🚀 Serveur en ligne sur http://localhost:${port}`);
  });