import express from "express";
import {prodRouter} from "./src/routers/productos.js";
import handlebars from "express-handlebars";

//Defino el servidor
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Defino las rutas
app.use('/productos/:engine', (req,res,next) =>{
    const engine = req.params.engine;

    switch (engine) {
        case "ejs":
            app.set("view engine", "ejs")
            next();
            break;
        
        case "pug":
            app.set("view engine", "pug")
            next();
        break;

        case "hbs":
            app.engine("hbs",
                handlebars.engine({
                    extname: ".hbs",
                    defaultLayout: "index.hbs",
                    layoutsDir: "./src/views/hbs/layouts",
                    partialsDir: "./src/views/hbs/partials"
                })
            )
            app.set("view engine", "hbs")
            next();
            break;
    }
})

app.use(express.static('./public'));
app.use('/productos', prodRouter);

app.set("views", "./src/views")

//Inicio el servidor:
const PORT = process.env.PORT || 8080
const server = app.listen( PORT, ()=>{
    console.log(`Server UP on PORT:${server.address().port}`);
})
