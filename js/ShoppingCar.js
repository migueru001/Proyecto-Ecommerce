//Para mostrar o Ocutar Carrito de Compra Inicio

function MostrarCarrito() {
    document.getElementById('MostrarOcultarCarrito').style.display="block";
    document.getElementById('botonCarrito').style.display="none";
}

function OcultarCarrito() {
    document.getElementById('MostrarOcultarCarrito').style.display="none";
    document.getElementById('botonCarrito').style.display="block";
}
//Para mostrar o Ocutar Carrito de Compra Fin

//Para Colocar Boton Carrito de Compra flotante JQUERY Inicio

$(document).ready(function(){
    const Altura = $('#botonCarrito').offset().top;
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > Altura){
            $('#botonCarrito').addClass('botonCarrito');
        }
        else {
            $('#botonCarrito').removeClass('botonCarrito');
        }
    });
});

//Para Colocar Boton Carrito de Compra flotante JQUERY Fin


//Para Agregar Agregar Articulos al Carrito de Compra

const BotonesAgregarAlCarrito = document.querySelectorAll('#Agregar-al-Carrito');

BotonesAgregarAlCarrito.forEach((BotonAgregarAlCarrito) => {
    BotonAgregarAlCarrito.addEventListener('click', BotonAgregarAlCarritoClickeado);
});

const BorrarArticulosCarrito = document.querySelector('.Vaciar');
BorrarArticulosCarrito.addEventListener('click', CarritoVacio );


const ArticuloCarritoCotenedor = document.querySelector('#Articulo-carrito-contenedor');



function BotonAgregarAlCarritoClickeado(event) {
    const boton = event.target;
    const Articulo = boton.closest('#Articulo');
    const TituloArticulo = Articulo.querySelector('#Titulo').textContent;
    const PrecioArticulo = Articulo.querySelector('#Precio').textContent;
    const ImagenArticulo = Articulo.querySelector('#Imagen').src;

    AgregarArticuloAlCarrito(TituloArticulo, PrecioArticulo, ImagenArticulo);
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
    BotonClickeado.closest('#Articulo-Carrito-compras').remove();
    ActualizacionDelTotalCarritoDeCompra();
}

function CambioDeCantidadDeArticulos(event) {
    const CantidadInput = event.target;
    if ( CantidadInput.value <= 0 ) {
        CantidadInput.value = 1;
    }
    ActualizacionDelTotalCarritoDeCompra();
}

function CarritoVacio() {
    ArticuloCarritoCotenedor.innerHTML = '';
    ActualizacionDelTotalCarritoDeCompra();
}

