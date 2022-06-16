async function renderPlantillaListado(listado) {

    let plantillaHbs = await fetch('plantillas/inicio.hbs').then(r => r.text())
    var template = Handlebars.compile(plantillaHbs);
    // execute the compiled template and print the output to the console
    //let html = template({ productos: productos, validos: !algunCampoNoValido() })
    let html = template({ listado })
    document.getElementsByClassName('cards-container')[0].innerHTML = html  


}

function agregarCarrito(e,id,ref) {
    e.preventDefault()

    let producto = productoController.productos.find( producto => producto.id == id )
    carritoController.agregarAlCarrito(producto)    
    console.log(`Se agregó a carrito el producto ${producto.nombre}`)


    let botonAgregar = document.getElementById('contenedorMensaje')
    
    botonAgregar.style.visibility = 'visible'
    document.getElementById('mensaje-producto-agregado').innerHTML = `<p> Se agregó a carrito el producto: <strong>${producto.nombre}</strong></p>`
    setTimeout(function(){
        botonAgregar.style.visibility = 'hidden'
    }, 2000);

    // document.querySelector('.section-cards__header p').innerHTML = `Se agregó a carrito`
}




async function initInicio() {
    console.warn('initInicio()')
    
    var productos = await productoController.obtenerProductos()
    await renderPlantillaListado(productos)

    document.querySelector('.section-cards__header p').innerHTML = `Se encontraron ${productos.length} productos`
    
}



function scrollEfect() {
    window.addEventListener('scroll', function(){
        var header = document.querySelector('header')
        var searhBar = document.querySelector('.search-bar')
        header.classList.toggle('scrollfix',window.scrollY>0)
        searhBar.classList.toggle('scroll-fix',window.scrollY>0)
    })
}
function ventanaSuscripcion() {
    var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
        overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    
    btnAbrirPopup.addEventListener('click', function(){
        overlay.classList.add('active');
        popup.classList.add('active');
    });
    
    btnCerrarPopup.addEventListener('click', function(e){
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });
}

// function ventanaSuscripcion() {
//     var overlay = document.getElementById('overlayAyuda')
//     var imgAyuda = document.getElementById('imgAyuda')
    
    
//     imgAyuda.addEventListener('click', function(){
//         overlay.classList.add('active');
//     });
// }



