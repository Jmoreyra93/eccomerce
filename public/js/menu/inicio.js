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

    let producto = productoController.productos.find( producto => producto._id == id )
    carritoController.agregarAlCarrito(producto)    
    console.log(`Se agregó a carrito el producto ${producto.nombre}`)



    document.getElementById('mensaje-producto-agregado').style.display = 'flex'
    document.getElementById('mensaje-producto-agregado').innerHTML = `Se agregó a carrito el producto: ${producto.nombre}`
    setTimeout(function(){
        document.getElementById('mensaje-producto-agregado').style.display = 'none'
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
    })
}
