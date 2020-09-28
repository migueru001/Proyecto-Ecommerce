$(document).ready(function(){
    //Para Colocar Boton Carrito de Compra flotante JQUERY Inicio
    const Altura = $('#Barra-flotante').offset().top;
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > Altura){
            $('#Barra-flotante').addClass('Barra-flotante');
            $('#Indicador').hide();
        }
        else {
            $('#Barra-flotante').removeClass('Barra-flotante');
            $('#Indicador').show();
        }
    });
    //Para Colocar Boton Carrito de Compra flotante JQUERY Fin

    //Para reproducir Audio en la web Inicio
    const AudioPS4 = document.createElement("audio");
    AudioPS4.src = "/audio/ps4-intro-theme-song.mp3";
    AudioPS4.preload = true;
    AudioPS4.volume = 0.4;
    //AudioPS4.play();
    AudioPS4.loop = true;
    //Para reproducir Audio en la web Fin

    //Para Mostrar u Ocultar Carrito de Compra JQUERY Inicio
    $("#botonCarrito").click(function(){ 
        $("#MostrarOcultarCarrito").show();
        $("#botonCarrito").hide(); 
    });
    
    $("#botonCerrar").click(function(){ 
        $("#MostrarOcultarCarrito").hide();
        $("#botonCarrito").show(); 
    });
    //Para Mostrar u Ocultar Carrito de Compra JQUERY Fin

    //Para Mostrar u Ocultar botones de Audio JQUERY Inicio
    $("#botonPause").click(function(){ 
    $("#botonPause").removeClass('d-flex');
    $("#botonPause").addClass('d-none');
    $('#botonPlay').removeClass('d-none');
    $('#botonPlay').addClass('d-flex');
    AudioPS4.pause();
    });

    $("#botonPlay").click(function(){ 

    $('#botonPlay').removeClass('d-flex');
    $('#botonPlay').addClass('d-none');
    $("#botonPause").removeClass('d-none');
    $("#botonPause").addClass('d-flex');
    AudioPS4.play();
    });
    //Para Mostrar u Ocultar botones de Audio JQUERY Fin
});

//Archivo JSON Inicio

var DataBaseJSON = `[
    {"name":"PS4 Pro 2 TB", "price":"$499.99", "imgPath":"images/ps4pro2tb.png"},
    {"name":"PS4 Pro 1 TB", "price":"$399.99", "imgPath":"images/ps4_pro1tb.png"},
    {"name":"PS4 Slim 2 TB", "price":"$349.99", "imgPath":"images/ps4_slim2tb.png"},
    {"name":"PS4 Slim 1 TB", "price":"$319.99", "imgPath":"images/ps4_slim1tb.png"},
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


//Archivo JSON Fin

class Producto {
    constructor(name, price, imgPath, stock = 35){
        this.name = name;
        this.price = price;
        this.imgPath = imgPath;
        this.stock = stock;
    }
}

window.onload = () => {
    
    let ObjetoDeJSON = JSON.parse(DataBaseJSON);
    let Productos = ObjetoDeJSON.map( Object => {
        return new Producto( Object.name, Object.price, Object.imgPath);
    });
    const ProductosContenedor = document.querySelector('.ProductosContenedor');

    //const BuscadorArticulos = document.getElementById('BuscadorArticulos');
    const BuscadorInput =  document.getElementById('BuscadorImput');
    const BotonBuscar = document.getElementById('basic-text1');
    Productos.forEach( Producto => {
        ProductosContenedor.innerHTML += CrearProducto(Producto);
    });

    // BuscadorArticulos.addEventListener('submit', event => {
    //     event.preventDefault();
        
    //     let BuscadorValor = BuscadorInput.value;

    //     let ProductosRenderizados = Productos.filter( producto => {
    //         return producto.name.toLowerCase().includes(BuscadorValor.toLowerCase())
    //     });
    //     ProductosContenedor.innerHTML = '';
    //     ProductosRenderizados.forEach(producto => {ProductosContenedor.innerHTML += CrearProducto(producto)});  
    // });

    BuscadorInput.addEventListener('input', event => {
        event.preventDefault();
        let BuscadorValor = BuscadorInput.value;
        if(BuscadorValor.length > 3) {

            ProductosContenedor.innerHTML = '';

            //Creando Caragador Buscador Inicio
            let SpinnerBuscador = document.createElement('div');
            SpinnerBuscador.classList.add('col-12');
            let SpinnerBuscadorCont = 
            `<div class="col-12 d-flex justify-content-center align-items-center SpinnerBuscador">
              <div class="spinner"></div>
            </div>`;
            SpinnerBuscador.innerHTML = SpinnerBuscadorCont;
            ProductosContenedor.append(SpinnerBuscador);
            //Creando Caragador Buscador Fin

            setTimeout(() => {

                let ProductosRenderizados = Productos.filter( producto => {
                    return producto.name.toLowerCase().includes(BuscadorValor.toLowerCase())
                });
                ProductosContenedor.innerHTML = '';
                ProductosRenderizados.forEach(producto => {ProductosContenedor.innerHTML += CrearProducto(producto)}); 

            }, 500);
            
        } else {

            ProductosContenedor.innerHTML = '';
            //Creando Caragador Buscador Inicio
            let SpinnerBuscador = document.createElement('div');
            SpinnerBuscador.classList.add('col-12');
            let SpinnerBuscadorCont = 
            `<div class="col-12 d-flex justify-content-center align-items-center SpinnerBuscador">
                <div class="spinner"></div>
            </div>`;
            SpinnerBuscador.innerHTML = SpinnerBuscadorCont;
            ProductosContenedor.append(SpinnerBuscador);
            //Creando Caragador Buscador Fin

            setTimeout(() => {
                ProductosContenedor.innerHTML = '';
                Productos.forEach( Producto => {
                    ProductosContenedor.innerHTML += CrearProducto(Producto);
                });
            }, 500);
        }
        
    })


    BotonBuscar.addEventListener('click', event => {
        event.preventDefault();
        let BuscadorValor = BuscadorInput.value;

        ProductosContenedor.innerHTML = '';

        //Creando Caragador Buscador Inicio
        let SpinnerBuscador = document.createElement('div');
        SpinnerBuscador.classList.add('col-12');
        let SpinnerBuscadorCont = 
        `<div class="col-12 d-flex justify-content-center align-items-center SpinnerBuscador">
          <div class="spinner"></div>
        </div>`;
        SpinnerBuscador.innerHTML = SpinnerBuscadorCont;
        ProductosContenedor.append(SpinnerBuscador);
        //Creando Caragador Buscador Fin

        setTimeout(() => {
            let ProductosRenderizados = Productos.filter( producto => {
                return producto.name.toLowerCase().includes(BuscadorValor.toLowerCase())
            });
            ProductosContenedor.innerHTML = '';
            ProductosRenderizados.forEach(producto => {ProductosContenedor.innerHTML += CrearProducto(producto)});
        }, 1000);
    });
};



function CrearProducto(Producto) {

        return `<div class="col-md-4 pb-4">
                    <div class="card" id="Articulo">
                        <img class="card-img-top" id="Imagen" src="${Producto.imgPath}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title" id="Titulo">${Producto.name}</h5>
                        <h5 class="card-title" id="Precio" style="font-weight: 800;">${Producto.price}</h5>
                        <button type="button" class="btn btn-warning Agregar-al-Carrito" onclick="BotonAgregarAlCarritoClickeado(event)" style="font-weight:700">Añadir al Carrito</button>
                        </div>
                    </div>
                </div>`
}
//Variables Globales Inicio
const BotonAgregarAlCarrito = document.getElementsByClassName('Agregar-al-Carrito');
const ArticuloCarritoCotenedor = document.querySelector('#Articulo-carrito-contenedor');
const BorrarArticulosCarrito = document.querySelector('.Vaciar');
const BontonDeCompraCarrito = document.querySelector('.ComprarBoton');
let Contador = document.getElementById('Indicador');

const spinner = document.querySelector('#CajaAnimacionMostrarOcultar');
//Variables Globales Fin



    

//Funcion Para Agregar Agregar Articulos al Carrito de Compra Inicio

BorrarArticulosCarrito.addEventListener('click', CarritoVacio );
BontonDeCompraCarrito.addEventListener('click', CompraCarrito );




function BotonAgregarAlCarritoClickeado(event) {
    
    //Contador de Articulos Inicio
    let ValorContador = Contador.innerHTML;
    Contador.innerHTML = parseInt(ValorContador) + 1;
    //Contador de Articulos Fin

    //Agregar Articulos al Carrito Inicio
    const boton = event.target;
    const Articulo = boton.closest('#Articulo');
    const TituloArticulo = Articulo.querySelector('#Titulo').textContent;
    const PrecioArticulo = Articulo.querySelector('#Precio').textContent;
    const ImagenArticulo = Articulo.querySelector('#Imagen').src;
    AgregarArticuloAlCarrito(TituloArticulo, PrecioArticulo, ImagenArticulo);
    //Agregar Articulos al Carrito Fin
}

function AgregarArticuloAlCarrito (TituloArticulo, PrecioArticulo, ImagenArticulo) {

    const TitulosDeElementos = ArticuloCarritoCotenedor.querySelectorAll('#Titulo');
    for( let i = 0; i < TitulosDeElementos.length; i++ ){
        if ( TitulosDeElementos[i].innerText === TituloArticulo) {
            let CantidadArticulos = TitulosDeElementos[i].parentElement.parentElement.parentElement.parentElement.querySelector('#Cantidad');
            CantidadArticulos.value++;
            swal('¡Atención!', `Se aumento correctamente la cantidad del producto ${TituloArticulo}`);
            ActualizacionDelTotalCarritoDeCompra();
            return;
            
        }

    }
    ArticuloCarritoCotenedor.classList.add('CajaCarrito');
    const FilaCarritoDeCompra = document.createElement('div');
    const CarritoDeCompraContenido = 
    `<div class="row" id="Articulo-Carrito-compras">
        <div class="col-6">
            <div class="shopping-cart-item d-flex flex-row align-items-center h-100 border-bottom pb-2 pt-3">
                <div class="col-5 h-100 d-flex justify-content-start align-items-center">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle  TituloCarrito mb-0" id="Titulo">${TituloArticulo}</h6>
                </div>
                <div class="col-7"><img src=${ImagenArticulo} id="Imagen" class="shopping-cart-image img-fluid"></div>  
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0" id="Precio">${PrecioArticulo}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input" id="Cantidad" type="number"
                    value="1" style="width: 80%; margin-right: 10px;">
                <button class="btn btn-outline-danger btn-sm" id="BotonBorrar" type="button"><strong>X</strong></button>
            </div>
        </div>
    </div>`;
    FilaCarritoDeCompra.innerHTML = CarritoDeCompraContenido;
    ArticuloCarritoCotenedor.append(FilaCarritoDeCompra);
    FilaCarritoDeCompra.querySelector('#BotonBorrar').addEventListener('click', RemoverArticuloDelCarrito);
    FilaCarritoDeCompra.querySelector('#Cantidad').addEventListener('change', CambioDeCantidadDeArticulos );
    ActualizacionDelTotalCarritoDeCompra();


    AgregarArticulosLS(FilaCarritoDeCompra);
}

function ActualizacionDelTotalCarritoDeCompra() {
    let Total = 0;
    const TotalCarrito = document.querySelector('#TotalCarritoDeCompras');
    const ContenenidoDeArticulos = document.querySelectorAll('#Articulo-Carrito-compras');
    ContenenidoDeArticulos.forEach( (ArticuloCarroDeCompras) => {
        const PrecioElemento = ArticuloCarroDeCompras.querySelector('#Precio');
        const PrecioNumero = Number( PrecioElemento.textContent.replace('$', '') );
        const CantidadElemento = ArticuloCarroDeCompras.querySelector('#Cantidad');
        const ValorCantidadElemento = Number(CantidadElemento.value);
        Total = Total + PrecioNumero * ValorCantidadElemento;
    });
    TotalCarrito.innerHTML = `$${Total.toFixed(2)}`;
}


function RemoverArticuloDelCarrito(event){
    const BotonClickeado = event.target;
    let CantidadElemento = document.getElementById('Cantidad');
    let ValorCantidadElemento = Number(CantidadElemento.value);
    let ContadorTemporal = Contador.innerHTML - ValorCantidadElemento;
    Contador.innerHTML = ContadorTemporal;
    BotonClickeado.closest('#Articulo-Carrito-compras').remove();
    ActualizacionDelTotalCarritoDeCompra();
    RemoverArticulosLS();
}

function CambioDeCantidadDeArticulos(event) {
    const CantidadInput = event.target;
    if ( CantidadInput.value <= 0 ) {
        CantidadInput.value = 1;
    }
    ActualizacionDelTotalCarritoDeCompra();
}

function CarritoVacio() {
    ArticuloCarritoCotenedor.classList.remove('CajaCarrito');
    ArticuloCarritoCotenedor.innerHTML = '';
    Contador.innerHTML = '0';
    ActualizacionDelTotalCarritoDeCompra();
    RemoverArticulosLS();
}

function CompraCarrito() {
    
    ArticuloCarritoCotenedor.innerHTML = '';
    ArticuloCarritoCotenedor.style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: center;';
    let Spinner = document.createElement('div');
    let SpinnerContenido = `
        <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
        </div>`;

    Spinner.innerHTML = SpinnerContenido;
    ArticuloCarritoCotenedor.append(Spinner);
        setTimeout(() => {
            ArticuloCarritoCotenedor.innerHTML = '';
            ArticuloCarritoCotenedor.style.cssText = 'display: block; flex-direction: none; justify-content: none; align-items: none;';
            ArticuloCarritoCotenedor.classList.remove('CajaCarrito');
            Contador.innerHTML = '0';
            ActualizacionDelTotalCarritoDeCompra();
            swal('¡Gracias por su compra!', `Pronto recibirá su pedido`); 
        }, 5000);
        
}

function OcultarCarrito() {
    document.getElementById('MostrarOcultarCarrito').style.display="none";
    document.getElementById('botonCarrito').style.display="block";
}
//Funcion Para Agregar Agregar Articulos al Carrito de Compra Fin

//Local Storage Al momento de Agregar elemento al carrito Inicio
function AgregarArticulosLS(Articulo){
    name = Articulo.querySelector('#Titulo').textContent;
    price = Articulo.querySelector('#Imagen').src;
    imgPath = Articulo.querySelector('#Precio').textContent;

    function PasarLS (name, price, imgPath){

        this.name = name;
        this.price = price;
        this.imgPath = imgPath;

    }
    MiArticulo = new PasarLS (name, price, imgPath);
    localStorage.setItem('Articulos-Carrito', JSON.stringify(MiArticulo));
}
//Local Storage Al momento de Agregar elemento al carrito Fin

//Local Storage Al momento de remover elemento del carrito Inicio
function RemoverArticulosLS(){
    localStorage.clear();
}
//Local Storage Al momento deremover elemento del carrito Fin
