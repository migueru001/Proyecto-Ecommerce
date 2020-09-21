var DataBaseJSON = `[
    {"name":"PS4 Pro 2 TB", "price":"$499.99", "imgPath":"images/ps4pro2tb.png"},
    {"name":"PS4 Pro 1 TB", "price":"$399.99", "imgPath":"images/ps4_pro1tb.png"},
    {"name":"PS4 PS4 Slim 2 TB", "price":"$349.99", "imgPath":"images/ps4_slim2tb.png"},
    {"name":"PS4 PS4 Slim 1 TB", "price":"$319.99", "imgPath":"images/ps4_slim1tb.png"},
    {"name":"Ps4 Classic 2 TB", "price":"$249.99", "imgPath":"images/Ps4Classic2tb.png"},
    {"name":"Ps4 Classic 1 TB", "price":"$299.99", "imgPath":"images/ps4pro2tb.png"},
    {"name":"Dualshock Black", "price":"$69.99", "imgPath":"images/Dualshock-black.png"},
    {"name":"Dualshock Red", "price":"$69.99", "imgPath":"images/Dualshock-red.png"},
    {"name":"Dualshock Blue", "price":"$69.99", "imgPath":"images/Dualshock-blue.png"},
    {"name":"Dualshock pink", "price":"$69.99", "imgPath":"images/dualshock-pink.png"},
    {"name":"Dualshock yellow", "price":"$69.99", "imgPath":"images/dualshock-yellow.png"},
    {"name":"Dualshock Orange", "price":"$69.99", "imgPath":"images/dualshock-orange.png"},
    {"name":"Dualshock Patter", "price":"$69.99", "imgPath":"images/dualshock-patter.png"},
    {"name":"Dualshock Special", "price":"$99.99", "imgPath":"images/dualshock-special.png"},
    {"name":"VR Headset", "price":"$499.99", "imgPath":"images/VR-Headset.png"},
    {"name":"PS4 BackPack", "price":"$499.99", "imgPath":"images/PS4-BackPack.png"},
    {"name":"PSOne BackPack", "price":"$499.99", "imgPath":"images/PS-One-BackPack.png"},
    {"name":"PSPlus BackPack", "price":"$499.99", "imgPath":"images/PS-Plus-BackPack.png"},
    {"name":"PlayFever BackPack", "price":"$499.99", "imgPath":"images/Play-Fever-BackPack.png"},
    {"name":"Fall Guys", "price":"$39.99", "imgPath":"images/Fall-Guys.png"},
    {"name":"Resident Evil 2", "price":"$39.99", "imgPath":"images/Resident-Evil-2.png"},
    {"name":"Resident Evil 3", "price":"$69.99", "imgPath":"images/Resident-Evil-3.png"},
    {"name":"Uncharted 4", "price":"$29.99", "imgPath":"images/Uncharted-4.png"},
    {"name":"Uncharted Collection", "price":"$19.99", "imgPath":"images/Uncharted-Collection.png"},
    {"name":"Crash Bandicoot Trilogy", "price":"$29.99", "imgPath":"images/Crash-Bandicoot-Trilogy.png"},
    {"name":"Crash Bandicoot 4", "price":"$49.99", "imgPath":"images/Crash-Bandicoot-4.png"},
    {"name":"Crash Team Racing", "price":"$29.99", "imgPath":"images/Crash-Team-Racing.png"},
    {"name":"The last of us", "price":"$19.99", "imgPath":"images/The-last-of-us.png"},
    {"name":"The last of us 2", "price":"$59.99", "imgPath":"images/The-last-of-us-2.png"},
    {"name":"God of war", "price":"$49.99", "imgPath":"images/God-of-war.png"},
    {"name":"Horizont Zero Dawn", "price":"$19.99", "imgPath":"images/Horizont-Zero-Dawn.png"},
    {"name":"Spiderman", "price":"$39.99", "imgPath":"images/Spiderman.png"},
    {"name":"FIFA 2020", "price":"$19.99", "imgPath":"images/FIFA-2020.png"},
    {"name":"Mortal Combat 11", "price":"$49.99", "imgPath":"images/Mortal-Combat-11.png"},
    {"name":"Tomb Raider", "price":"$24.99", "imgPath":"images/Tomb-Raider.png"},
    {"name":"Metal Gear V", "price":"$19.99", "imgPath":"images/Metal-Gear-V.png"}
]`;


class Producto {
    constructor(name, price, imgPath){
        this.name = name;
        this.price = price;
        this.imgPath = imgPath;
    }
}

window.onload = () => {
    let ObjetoDeJSON = JSON.parse(DataBaseJSON);
    let Productos = ObjetoDeJSON.map( Object => {
        return new Producto( Object.name, Object.price, Object.imgPath);
    });
    const ProductosContenedor = document.querySelector('.ProductosContenedor');
    Productos.forEach( Producto => {
        ProductosContenedor.innerHTML += CrearProducto(Producto);
    });
};

function CrearProducto (Producto) {

        return `<div class="col-md-4 pb-4">
                    <div class="card" id="Articulo">
                        <img class="card-img-top" id="Imagen" src="${Producto.imgPath}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title" id="Titulo">${Producto.name}</h5>
                        <h5 class="card-title" id="Precio" style="font-weight: 800;">${Producto.price}</h5>
                        <a href="#" class="btn btn-warning" id="Agregar-al-Carrito" style="font-weight:700">Añadir al Carrito</a>
                        </div>
                    </div>
                </div>`
}