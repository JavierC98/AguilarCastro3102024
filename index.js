const express = require('express');
const app = express();
const puerto = 3000;

app.get('/usuario',function(req, res){
    res.json({
        primernombre: "Javier",
        segundonombre: "Alejandro",
        primerapellido: "Aguilar",
        segundoapellido: "Castro",
        fechanacimiento: "1998-05-12",
        estadofamiliar: "Soltero",
        residencia: "Colonia x, Calle P, casa 17",
        profesion: "Licenciatura en Sistemas Informaticos",
        estatura: "1.76",
        peso: "150 lb",
        colorpiel: "trigueño",
        colorojos: "cafe",
        colorcabello: "negro",
        ultimosempleos: [{
            empresa: "Truly Nolen S.A de C.V",
            dependencia: "Departamento de informatica",
            direccion: "San Salvador Calle A, Pasaje, B",
            cargo: "Programador junior PHP",
            desde: "2023-04-11",
            hasta: "2024-06-11",
        },{
            empresa: "Presidente de la republica",
            dependencia: "Secretario Privado",
            direccion: "Calle A, pasaje B, San Salvador",
            cargo: "Desarrollador de sistemas",
            desde: "2011-01-01",
            hasta: "2011-12-31"
        }]
    });
});

app.get('/genero', function(req,res){
    res.json([
        {id: 1,
        genero: "Masculino"
        },{
            id: 2,
            genero: "Femenino"
        }
    ]);
});

app.get('/tipo_documento',function(req,res){
    res.json([{
        id:1,
        tipo_documento: "DUI"
    },{
        id:2,
        tipo_documento: "NIT"
    },{
        id:3,
        tipo_documento: "ISSS"
    },{
        id:4,
        tipo_documento: "PASAPORTE"
    }]);
});

app.get('/departamento',function(req,res){
    res.json([{
        id:1,
        departamento: "Ahuachapan"
    },{
        id:2,
        departamento: "Santa Ana"
    },{
        id:3,
        departamento: "Sonsonate"
    },{
        id:4,
        departamento: "La Libertad"
    },{
        id:5,
        departamento: "San Salvador"
    },{
        id:6,
        departamento: "Chalatenango"
    },{
        id:7,
        departamento: "Cuscatlan"
    },{
        id:8,
        departamento: "Cabañas"
    },{
        id:9,
        departamento: "La Paz"
    },{
        id:10,
        departamento: "San Vicente"
    },{
        id:11,
        departamento: "Usulutan"
    },{
        id:12,
        departamento: "San Miguel"
    },{
        id:13,
        departamento: "Morazan"
    },{
        id:14,
        departamento: "La Union"
    }]);
});



app.get('/municipios',function(req,res){
    res.json([
        {
            id: 1,
            municipio: "Ahuachapan Centro"
        },{
            id: 2,
            municipio: "Ahuachapan Norte"
        },{
            id: 3,
            municipio: "Santa Ana Norte"
        },{
            id: 4,
            municipio: "Santa Ana Sur"
        },{
            id: 5,
            municipio: "Sonsonate Sur"
        },{
            id: 6,
            municipio: "Sonsonate Oeste"
        },{
            id: 7,
            municipio: "La Libertad Sur"
        },{
            id: 8,
            municipio: "La Libertad Costa"
        },{
            id: 9,
            municipio: "San Salvador Centro"
        },{
            id: 10,
            municipio: "San Salvador Sur"
        },{
            id: 11,
            municipio: "Chalatenango Sur"
        },{
            id: 12,
            municipio: "Chalatenango Centro"
        },{
            id: 13,
            municipio: "Cuscatlan Sur"
        },{
            id: 14,
            municipio: "Cuscatlan Norte"
        },{
            id: 15,
            municipio: "Cabañas Este"
        },{
            id: 16,
            municipio: "Cabañas Oeste"
        },{
            id: 17,
            municipio: "La Paz Oeste"
        },{
            id: 18,
            municipio: "La Paz Centro"
        },{
            id: 19,
            municipio: "San Vicente Sur"
        },{
            id: 20,
            municipio: "San vicente Norte"
        },{
            id: 21,
            municipio: "Usulutan Norte"
        },{
            id: 22,
            municipio: "Usulutan Este"
        },{
            id: 23,
            municipio: "San Miguel Norte"
        },{
            id: 24,
            municipio: "San Miguel Oeste"
        },{
            id: 25,
            municipio: "Morazan Norte"
        },{
            id: 26,
            municipio: "Morazan Sur"
        },{
            id: 27,
            municipio: "La Union Norte"
        },{
            id: 28,
            municipio: "La Union Sur"
        },
    ]);
});

app.get('/sumar',function(req,res){
    let resultado = parseFloat(req.query.campo1) + parseFloat(req.query.campo2);

    res.json({
        igual_a: resultado
    });
});

app.listen(puerto,function(req,res){
    console.log("Servidor en ejecucion en el puerto "+puerto);
});