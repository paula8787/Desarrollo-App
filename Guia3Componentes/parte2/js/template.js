document.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById("card-template");
    const contenedor = document.getElementById("contenedor");

    const productos = [
        { 
            titulo: "Laptop", 
            desc: "16GB RAM, SSD 512GB, Intel i7",
            img: "https://www.lacuracao.pe/media/catalog/product/1/5/15-fb2002la_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        },
        { 
            titulo: "Mouse", 
            desc: "Inalámbrico, recargable, ergonómico",
            img: "https://http2.mlstatic.com/D_NQ_NP_911938-MLU70030968005_062023-O.webp"
        },
        { 
            titulo: "Teclado Mecánico", 
            desc: "Retroiluminado RGB, switches azules",
            img: "https://m.media-amazon.com/images/I/61WoPgUa6QL.jpg"
        },
        { 
            titulo: "Monitor", 
            desc: "27'' Full HD, 144Hz, sin bordes",
            img: "https://lavictoria.ec/wp-content/uploads/2024/04/MONITOR-GAMER-CURVED-30PULGADAS-BHR5116GL-XIAOMI-2-600x600.jpg"
        },
        { 
            titulo: "Auriculares", 
            desc: "Bluetooth, cancelación de ruido, micrófono",
            img: "https://www.alkosto.com/medias/097855157157-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMjkxMHxpbWFnZS93ZWJwfGFESmlMMmcwTmk4eE5EUTNOREExTnpFNE56TTFPQzh3T1RjNE5UVXhOVGN4TlRkZk1EQXhYemMxTUZkNE56VXdTQXw1ZWZmMzY0ZWVhMWY2MDVhMTJlYjlkNGNiOGFkMGJiNzU2MjQzZGZhZjkzNTJiZDA0MWY1ZWQyYWVkMWJlYzhk"
        }
    ];

    productos.forEach(producto => {
        const clon = template.content.cloneNode(true);
        // Crear imagen y agregarla al principio de la tarjeta
        const img = document.createElement("img");
        img.src = producto.img;
        img.alt = producto.titulo;
        img.style.width = "64px";
        img.style.height = "64px";
        img.style.marginBottom = "16px";
        img.style.alignSelf = "center";
        clon.querySelector(".card").prepend(img);

        clon.querySelector(".title").textContent = producto.titulo;
        clon.querySelector(".desc").textContent = producto.desc;
        contenedor.appendChild(clon);
    });
});
