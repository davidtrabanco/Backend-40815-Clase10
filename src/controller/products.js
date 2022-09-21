import {contenedor} from "../controller/Contenedor.js";


export const controller = {};

controller.get = (req,res) =>{
    const products = contenedor.getAll();
    const prodFound = products.length > 0 ? true : false;
    
    res.render("productsList", 
        {
            productsList: products, 
            prodFound: prodFound,
        }
    )
}

controller.getByID = (req,res) =>{
    const products = [contenedor.getById( req.params.id )]
    const prodFound = products.length > 0 ? true : false;

    res.render("productsList", 
        {
            productsList: products, 
            prodFound: prodFound,
        }
    )
}

controller.post = (req,res) =>{
    const newId = contenedor.save( req.body );
    res.redirect( `/productos/ejs/${newId}`);
}


    