import express from 'express'
import cors from 'cors'
import con from './modal/modal.js'
import Router from './Controler/Route.js'
const app = express()

const PORT = process.env.PORT || 9000

app.use(cors())
app.use('/',Router)
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
app.listen(PORT, () => {
    console.log(`app is lisning on port ${PORT}`);
})