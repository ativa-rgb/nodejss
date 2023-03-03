import express from "express";

const app = express();


//middleware => function menangani riquest sebelum ke route

app.use((req, res, next) => {
    console.log(req.url);
    next();
});
//route
    app.get("/", (req,res)=> {
        res.send("avita");
    });

    app.listen(3000, () => {
        console.log("Berhasil Jalan ");
    });
