document.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById("card-template");
    const contenedor = document.getElementById("contenedor");

    const productos = [
        { 
            titulo: "Laptop", 
            desc: "16GB RAM, SSD 512GB, Intel i7",
            precio: "$3,499.00",
            img: "https://www.lacuracao.pe/media/catalog/product/1/5/15-fb2002la_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        },
        { 
            titulo: "Mouse", 
            desc: "Inalámbrico, recargable, ergonómico",
            precio: "$89.00",
            img: "https://http2.mlstatic.com/D_NQ_NP_911938-MLU70030968005_062023-O.webp"
        },
        { 
            titulo: "Teclado Mecánico", 
            desc: "Retroiluminado RGB, switches azules",
            precio: "$249.00",
            img: "https://m.media-amazon.com/images/I/61WoPgUa6QL.jpg"
        },
        { 
            titulo: "Monitor", 
            desc: "27'' Full HD, 144Hz, sin bordes",
            precio: "$1,099.00",
            img: "https://lavictoria.ec/wp-content/uploads/2024/04/MONITOR-GAMER-CURVED-30PULGADAS-BHR5116GL-XIAOMI-2-600x600.jpg"
        },
        { 
            titulo: "Auriculares", 
            desc: "Bluetooth, cancelación de ruido, micrófono",
            precio: "$179.00",
            img: "https://www.alkosto.com/medias/097855157157-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMjkxMHxpbWFnZS93ZWJwfGFESmlMMmcwTmk4eE5EUTNOREExTnpFNE56TTFPQzh3T1RjNE5UVXhOVGN4TlRkZk1EQXhYemMxTUZkNE56VXdTQXw1ZWZmMzY0ZWVhMWY2MDVhMTJlYjlkNGNiOGFkMGJiNzU2MjQzZGZhZjkzNTJiZDA0MWY1ZWQyYWVkMWJlYzhk"
        }
    ];

    productos.forEach(producto => {
        const clon = template.content.cloneNode(true);
        // Crear imagen y agregarla al principio de la tarjeta
        const img = document.createElement("img");
        img.src = producto.img;
        img.alt = producto.titulo;
        img.style.width = "120px";
        img.style.height = "120px";
        img.style.marginBottom = "16px";
        img.style.alignSelf = "center";
        clon.querySelector(".card").prepend(img);

        clon.querySelector(".title").textContent = producto.titulo;
        clon.querySelector(".desc").textContent = producto.desc;

        // Crear y agregar el precio
        const precio = document.createElement("p");
        precio.className = "precio";
        precio.textContent = producto.precio;
        precio.style.margin = "12px 0 0 0";
        precio.style.fontWeight = "bold";
        precio.style.color = "#185a9d";
        precio.style.fontSize = "1.1em";
        precio.style.textAlign = "center";
        clon.querySelector(".card").appendChild(precio);

        // Sección de compra
        const compraDiv = document.createElement("div");
        compraDiv.className = "compra-section";
        compraDiv.style.display = "flex";
        compraDiv.style.flexDirection = "column";
        compraDiv.style.alignItems = "center";
        compraDiv.style.marginTop = "14px";

        // Input cantidad
        const label = document.createElement("label");
        label.textContent = "Cantidad:";
        label.style.marginBottom = "4px";
        label.style.fontSize = "0.98em";
        label.style.color = "#185a9d";
        label.setAttribute("for", `cantidad-${producto.titulo.replace(/\s/g, '')}`);

        const input = document.createElement("input");
        input.type = "number";
        input.min = "1";
        input.value = "1";
        input.id = `cantidad-${producto.titulo.replace(/\s/g, '')}`;
        input.style.width = "60px";
        input.style.padding = "4px";
        input.style.borderRadius = "6px";
        input.style.border = "1px solid #43cea2";
        input.style.marginBottom = "8px";
        input.style.textAlign = "center";

        // Botón comprar
        const btn = document.createElement("button");
        btn.textContent = "Comprar";
        btn.className = "comprar-btn";
        btn.style.background = "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.borderRadius = "8px";
        btn.style.padding = "8px 22px";
        btn.style.fontWeight = "600";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "1em";
        btn.style.transition = "background 0.2s";
        btn.onmouseover = () => btn.style.background = "linear-gradient(90deg, #185a9d 0%, #43cea2 100%)";
        btn.onmouseout = () => btn.style.background = "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)";

        btn.onclick = () => {
            alert(`¡Gracias por tu compra!\n\nProducto: ${producto.titulo}\nCantidad: ${input.value}\nTotal: ${producto.precio}`);
        };

        compraDiv.appendChild(label);
        compraDiv.appendChild(input);
        compraDiv.appendChild(btn);

        clon.querySelector(".card").appendChild(compraDiv);

        contenedor.appendChild(clon);
    });
});
