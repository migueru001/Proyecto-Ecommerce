//Objetos de articulos de pagina de ecommerce-------------------------------------------------------------------------------------------

//Primer Articulo

var PlayClassicModelo = new Object();
this.marca = "Sony";
this.modelo = "Classic";
this.anio = 2014;
this.precio = 200;
this.descripcion = "Primer Modelo de la Consola";

//Segundo Articulo

var PlaySlimModelo = new Object();
this.marca = "Sony";
this.modelo = "Slim";
this.anio = 2016;
this.precio = 300;
this.descripcion = "Segundo Modelo de la Consola más potente";

//Tercer Articulo

var PlayProModelo1tb = new Object();
this.marca = "Sony";
this.modelo = "Pro 1 tb";
this.anio = 2018;
this.precio = 350;
this.descripcion = "Último Modelo de la Consola versión 1 tb de almacenamiento";

//Cuarto Articulo

var PlayProModelo2tb = new Object();
this.marca = "Sony";
this.modelo = "Pro 2 tb";
this.anio = 2018;
this.precio = 400;
this.descripcion = "Último Modelo de la Consola versión 2 tb de almacenamiento";

//Quinto Articulo

var ControlClassicNegro = new Object();
this.marca = "Sony";
this.modelo = "Dualshock 4";
this.anio = 2018;
this.color = "negro";
this.precio = 50;
this.descripcion = "Último Modelo de Dualshock 4 versión clasica";

//Sexto Articulo

var ControlClassicAzul = new Object();
this.marca = "Sony";
this.modelo = "Dualshock 4";
this.anio = 2018;
this.color = "Azul";
this.precio = 55;
this.descripcion = "Último Modelo de Dualshock 4 versión a color";

//Septimo Articulo

var ControlClassicRojo = new Object();
this.marca = "Sony";
this.modelo = "Dualshock 4";
this.anio = 2018;
this.color = "Rojo";
this.precio = 55;
this.descripcion = "Último Modelo de Dualshock 4 versión a color";

//Octavo Articulo

var Promo01 = new Object();
this.marca = "Sony";
this.articulos = "Dualshock 4" + "Ps4 Classic";
this.precio = 500;
this.descripcion = "Ps4 classic con un control extra para multijugador";


//Noveno Articulo

var Promo02 = new Object();
this.marca = "Sony";
this.articulos = "Dualshock 4" + "Ps4 Classic";
this.precio = 550;
this.descripcion = "Ps4 Slim con un control extra para multijugador";


//Funcion de Muestra de Articulos-------------------------------------------------------------------------------------------------------

PlayClassicModelo.mostrarInfo = function() {
    var Info = this.marca + this.modelo + this.modelo + this.anio + this.precio + this.descripcion + '\n';
    alert(Info);
}

PlaySlimModelo.mostrarInfo = function() {
    var Info = this.marca + this.modelo + this.modelo + this.anio + this.precio + this.descripcion + '\n';
    alert(Info);
}

PlayProModelo1tb.mostrarInfo = function() {
    var Info = this.marca + this.modelo + this.modelo + this.anio + this.precio + this.descripcion + '\n';
    alert(Info);
}

PlayProModelo2tb.mostrarInfo = function() {
    var Info = this.marca + this.modelo + this.modelo + this.anio + this.precio + this.descripcion + '\n';
    alert(Info);
}

ControlClassicNegro.mostrarInfo = function() {
    var Info = this.marca + this.modelo + this.modelo + this.anio + this.color + this.precio + this.descripcion + '\n';
    alert(Info);
}

ControlClassicAzul.mostrarInfo = function() {
    var Info = this.marca + this.modelo + this.modelo + this.anio + this.color + this.precio + this.descripcion + '\n';
    alert(Info);
}

Promo01.mostrarInfo = function() {
    var Info = this.marca + this.articulos + this.precio + this.descripcion + '\n';
    alert(Info);
}

Promo02.mostrarInfo = function() {
    var Info = this.marca + this.articulos + this.precio + this.descripcion + '\n';
    alert(Info);
}

//Para ejecutar las funciones de mostrar Articulos-----------------------------------------------------------------------------------

//PlayClassicModelo.mostrarInfo();
//PlaySlimModelo.mostrarInfo();
//PlayProModelo1tb.mostrarInfo();
//PlayProModelo2tb.mostrarInfo();
//ControlClassicNegro.mostrarInfo();
//ControlClassicAzul.mostrarInfo();
//Promo01.mostrarInfo();
//Promo02.mostrarInfo();

//-----------------------------------------------------------------------------------------------------------------------------------

//Array Ejemplo Segun desafio Integrador Aunque de momento no tengo muy claro como los voy a incluir como tal------------------------------------------------------------------------------------------------------

VideoJuegos = ["Uncharted 01", "Uncharted 02", "Uncharted 03", "Uncharted 04","Resident Evil 01", "Resident Evil 02", "Resident Evil 03", "Resident Evil 04",];

var JuegosAccion = VideoJuegos.slice(0, 1, 2, 3);

console.info( "La categoria de juegos de accion es " + JuegosAccion);

var JuegosHorror = VideoJuegos.slice(4, 5, 6, 7, 8);

console.info( "La categoria de juegos de Horror es " + JuegosHorror);


//-----------------------------------------------------------------------------------------------------------------------------------

//Desafio del DOM Igual estoy viendo los after class grabados para poder armar el carrito....

function Mostrar() {
    document.getElementById('CarrucelCompleto').style.display="block";
}

function Ocultar() {
    document.getElementById('CarrucelCompleto').style.display="none";
}
