//Cargar Elementos de JQUERY Inicio
$(function () {

        //Variables Productos Ecommerce y buscador Inicio
        const BuscadorInput =  document.getElementById('BuscadorImput');
        const BotonBuscar = document.getElementById('basic-text1');
        const ProductosContenedor = document.querySelector('.ProductosContenedor');
        //Variables Productos Ecommerce y buscador Fin

        //SELECTORES CON JQUERY INICIO------------------------------------------------------------------------------------

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

        //Para reproducir Audio en la web Inicio
        const AudioPS4 = document.createElement("audio");
        AudioPS4.src = "/audio/ps4-intro-theme-song.mp3";
        AudioPS4.preload = true;
        AudioPS4.volume = 0.4;
        AudioPS4.loop = true;
        //Para reproducir Audio en la web Fin

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

        //SELECTORES CON JQUERY FIN------------------------------------------------------------------------------------

        //Carga del JSON local con AJAX Inicio
        $.ajax({
        url: 'JSON/data.json',
        success: function (data, status, jqXHR) {
        console.log(data)
        console.time('ajax')
        swal( `¡La carga de objetos del JSON local fue cargada correctamente!, el estatus de la carga es: ${status}`);

        //haciendo el Objeto de los Articulos utilizando los datos del JSON local inicio

        class Producto {
            constructor(name, price, imgPath, stock = 36){
                this.name = name;
                this.price = price;
                this.imgPath = imgPath;
                this.stock = stock;
            }
        }

        let Productos = data.map( Object => {
            return new Producto( Object.name, Object.price, Object.imgPath);
        });
        
        Productos.forEach( Producto => {
            ProductosContenedor.innerHTML += CrearProducto(Producto);
        });

        //haciendo el Objeto de los Articulos utilizando los datos del JSON local fin

        //Evento para el buscador del ecommerce al Escribir el nombre del articulo Inicio

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
                
                setTimeout( () => {
                
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
                
                setTimeout( () => {

                    ProductosContenedor.innerHTML = '';
                    Productos.forEach( Producto => {
                    ProductosContenedor.innerHTML += CrearProducto(Producto);
                    });

                }, 500);

            }
                    
        });
        
        //Evento para el buscador del ecommerce al Escribir el nombre del articulo Fin


        //Evento para el buscador del ecommerce al dar click en el boton buscar o presionar enter inicio

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
    
            setTimeout( () => {

                let ProductosRenderizados = Productos.filter( producto => {
                    return producto.name.toLowerCase().includes(BuscadorValor.toLowerCase())
                });
                ProductosContenedor.innerHTML = '';
                ProductosRenderizados.forEach(producto => {ProductosContenedor.innerHTML += CrearProducto(producto)});

            }, 1000);
        });

        //Evento para el buscador del ecommerce al dar click en el boton buscar o presionar enter Fin

        console.timeEnd('ajax')
        },
        error: function (jqXHR, status, error) {
        console.log("Error")
        console.log(jqXHR)
        console.log(`Error -> Status: ${status} - Error: ${error}`)
        }

        });
        //Carga del JSON local con AJAX Fin

        //Funcion para crear Articulos en el HTML Inicio
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
        //Funcion para crear Articulos en el HTML Fin

    });
//Cargar Elementos de JQUERY Fin

//Variables Globales Carrito Inicio
const BotonAgregarAlCarrito = document.getElementsByClassName('Agregar-al-Carrito');
const ArticuloCarritoCotenedor = document.querySelector('#Articulo-carrito-contenedor');
const BorrarArticulosCarrito = document.querySelector('.Vaciar');
const BontonDeCompraCarrito = document.querySelector('.ComprarBoton');
let Contador = document.getElementById('Indicador');
const spinner = document.querySelector('#CajaAnimacionMostrarOcultar');
let totalCarrito = 0;
//Variables Globales Carrito Fin

//Todo el Proceso Para Agregar Agregar Articulos al Carrito de Compra  y otras cosas Inicio

document.addEventListener( 'DOMContentLoaded' , LeerLocalStorage );//Evento Para mantener articulos en el Carrito al refrescar la pagina
BorrarArticulosCarrito.addEventListener('click', CarritoVacio );//Evento Para vaciar Carrito
BontonDeCompraCarrito.addEventListener('click', CompraCarrito );//Evento para realizar Compras de los articulos del carrito

// Primera funcion que se dipara al hacer el evento 'click' en el boton "Añadir al carrito" inicio
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
// Primera funcion que se dipara al hacer el evento 'click' en el boton "Añadir al carrito" Fin


// Segunda funcion contenida en la primera que se dipara al hacer el evento 'click' en el boton "Añadir al carrito" Inicio

function AgregarArticuloAlCarrito (TituloArticulo, PrecioArticulo, ImagenArticulo) {

    const TitulosDeElementos = ArticuloCarritoCotenedor.querySelectorAll('#Titulo');
    for( let i = 0; i < TitulosDeElementos.length; i++ ) {
        if ( TitulosDeElementos[i].innerText === TituloArticulo) {
            let CantidadArticulos = TitulosDeElementos[i].parentElement.parentElement.parentElement.parentElement.querySelector('#Cantidad');
            CantidadArticulos.value++;
            swal('¡Atención!', `Se aumento correctamente la cantidad del producto ${TituloArticulo}`);
            ActualizacionDelTotalCarritoDeCompra();
            return;
            
        }

    }

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
                <button class="btn btn-outline-danger btn-sm" id="BotonBorrar" onclick="RemoverArticuloDelCarrito(event)" type="button"><strong>X</strong></button>
            </div>
        </div>
    </div>`;

    FilaCarritoDeCompra.innerHTML = CarritoDeCompraContenido;
    ArticuloCarritoCotenedor.append(FilaCarritoDeCompra);
    //FilaCarritoDeCompra.querySelector('#BotonBorrar').addEventListener('click', RemoverArticuloDelCarrito);
    FilaCarritoDeCompra.querySelector('#Cantidad').addEventListener('change', CambioDeCantidadDeArticulos );
    ActualizacionDelTotalCarritoDeCompra();
    AgregarArticulosLS(FilaCarritoDeCompra);

}

// Segunda funcion contenida en la primera que se dipara al hacer el evento 'click' en el boton "Añadir al carrito" Fin


//Función que actualiza la cantidad de Articulos y el Total del precio de la compra Inicio
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
//Función que actualiza la cantidad de Articulos y el Total del precio de la compra Fin

//Función que Remueve los articulos del carrito Inicio
function RemoverArticuloDelCarrito(event) {

    const BotonClickeado = event.target;
    let CantidadElemento = document.getElementById('Cantidad');
    let ValorCantidadElemento = Number(CantidadElemento.value);
    let ContadorTemporal = Contador.innerHTML - ValorCantidadElemento;
    Contador.innerHTML = ContadorTemporal;
    BotonClickeado.closest('#Articulo-Carrito-compras').remove();
    ActualizacionDelTotalCarritoDeCompra();
    RemoverArticulosLS();

}
//Función que Remueve los articulos del carrito Fin

//Función para actualizar la cantida de articulos en el carrito Inicio
function CambioDeCantidadDeArticulos(event) {
    const CantidadInput = event.target;
    if ( CantidadInput.value <= 0 ) {
        CantidadInput.value = 1;
    }
    ActualizacionDelTotalCarritoDeCompra();
}
//Función para actualizar la cantida de articulos en el carrito Fin

//Función para vaciar el carrito Inicio
function CarritoVacio() {

    let totalCarrito = Number ( document.querySelector('#TotalCarritoDeCompras').textContent.replace('$', '').trim() );

    if (totalCarrito === 0 ) {

        swal('¡Atención!', `No hay ningún artículo para vaciar`);

    } else if (totalCarrito !== 0 ) {

        ArticuloCarritoCotenedor.innerHTML = '';
        Contador.innerHTML = '0';
        ActualizacionDelTotalCarritoDeCompra();
        RemoverArticulosLS();

    }

}
//Función para vaciar el carrito Fin

//Función para comprar Articulos inicio

function CompraCarrito() {

    let totalCarrito = Number ( document.querySelector('#TotalCarritoDeCompras').textContent.replace('$', '').trim() );

    if (totalCarrito === 0 ) {

        swal('¡Atención!', `Aún no agregaste ningún artículo`);

     } else if (totalCarrito !== 0 ) {

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
        Contador.innerHTML = '0';
        ActualizacionDelTotalCarritoDeCompra();
        RemoverArticulosLS();
        swal('¡Gracias por su compra!', `Pronto recibirá su pedido`);

        }, 5000);

    }
        
}
//Función para comprar Articulos Fin

//Local Storage Al momento de Agregar elemento al carrito Inicio
function AgregarArticulosLS(Articulo) {

    name = Articulo.querySelector('#Titulo').textContent;
    price = Articulo.querySelector('#Precio').textContent; 
    imgPath = Articulo.querySelector('#Imagen').src;

    function PasarLS (name, price, imgPath) {

        this.name = name;
        this.price = price;
        this.imgPath = imgPath;
        
    }

    MiArticulo = new PasarLS (name, price, imgPath);
    
    LS = MiArticulo;


    if ( localStorage.getItem('ArchivoLS') === null ) {

        LSArray = [];
        LSArray.push(LS);
        localStorage.setItem('ArchivoLS',  JSON.stringify(LSArray) );
        

    } else {

        LSArray = JSON.parse( localStorage.getItem('ArchivoLS') );
        LSArray.push(LS);
        localStorage.setItem('ArchivoLS', JSON.stringify(LSArray));
        
    }

}
//Local Storage Al momento de Agregar elemento al carrito Fin

//Local Storage Al momento de remover elemento del carrito Inicio
function RemoverArticulosLS() {

    localStorage.clear();

}
//Local Storage Al momento deremover elemento del carrito Fin

//Función para leer el Local storage y mantener los articulos del carrito Inicio
function LeerLocalStorage() {

    if( localStorage.getItem('ArchivoLS') === null ) {

        LSArray = [];

    } else {

        LSArray = JSON.parse( localStorage.getItem('ArchivoLS') );

        class Producto {
            constructor(name, price, imgPath, stock = 36){
                this.name = name;
                this.price = price;
                this.imgPath = imgPath;
                this.stock = stock;
            }
        }
    
        let Productos = LSArray.map( Object => {
            return new Producto( Object.name, Object.price, Object.imgPath );
        });

        const FilaCarritoDeCompra = document.createElement('div');
        ArticuloCarritoCotenedor.append(FilaCarritoDeCompra);
    
        Productos.forEach( Producto => {
            FilaCarritoDeCompra.innerHTML += CrearProductoLocal(Producto);
        });
    
        function CrearProductoLocal(Producto) {
    
            return `<div class="row" id="Articulo-Carrito-compras">
                        <div class="col-6">
                            <div class="shopping-cart-item d-flex flex-row align-items-center h-100 border-bottom pb-2 pt-3">
                                <div class="col-5 h-100 d-flex justify-content-start align-items-center">
                                <h6 class="shopping-cart-item-title shoppingCartItemTitle  TituloCarrito mb-0" id="Titulo">${Producto.name}</h6>
                                </div>
                                <div class="col-7"><img src="${Producto.imgPath}" id="Imagen" class="shopping-cart-image img-fluid"></div>  
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                                <p class="item-price mb-0" id="Precio">${Producto.price}</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                                <input class="shopping-cart-quantity-input" id="Cantidad" type="number"
                                    value="1" style="width: 80%; margin-right: 10px;">
                                <button class="btn btn-outline-danger btn-sm" id="BotonBorrar" onclick="RemoverArticuloDelCarrito(event)" type="button"><strong>X</strong></button>
                            </div>
                        </div>
                    </div>`;
        
        }  
        
        FilaCarritoDeCompra.querySelector('#Cantidad').addEventListener('change', CambioDeCantidadDeArticulos );
        ActualizacionDelTotalCarritoDeCompra();
        Contador.innerHTML = Number( LSArray.length );

    }

}
//Función para leer el Local storage y mantener los articulos del carrito Fin

//Todo el Proceso Para Agregar Agregar Articulos al Carrito de Compra  y otras cosas Inicio Fin

