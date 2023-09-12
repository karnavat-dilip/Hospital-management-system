import express from 'express'
import cors from 'cors'
import con from './modal/modal.js'
import Router from './Controler/Route.js'
import path from 'path'
import { fileURLToPath } from 'url';
const app = express()

const PORT = process.env.PORT || 9000

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(cors())
app.use('/', Router)
app.use(express.static(path.join(__dirname, '../front-end', 'build')))

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end', 'build','/index.html'))
})
app.listen(PORT, () => {
    console.log(`app is lisning on port ${PORT}`);
})