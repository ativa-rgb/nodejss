import express from "express";
import {client} from "./db.js";

const app = express();


//middleware => function menangani riquest sebelum ke route

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
//route
    app.get("/api/avita", (req,res)=> {
        res.send("avita");

    });

    app.get("/api/mahasiswa", async(req,res) =>{
        res.send(await client.query("SELECT * FROM mahasiswa"));
    })

    app.listen(3000, () => {
        console.log("Berhasil Jalan ");
    });
