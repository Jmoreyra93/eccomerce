class ProductoController extends ProductoModel {

    constructor() {
        super()
        this.guardarProducto = this.guardarProducto.bind(this)
    }

    async obtenerProductos() {
        this.productos = await productoService.obtenerProductosService()
        return this.productos
    }

    async guardarProducto(producto) {
        let productoGuardado = await productoService.guardarProductoService(producto)
        console.log(productoGuardado)

        this.productos.push(productoGuardado)

        renderTablaAlta(null, this.productos)
        
        setTimeout(function(){
            let botonAgregar = document.getElementById('contenedorMensaje')
            let mensajeAgregar = document.getElementById('producto-agregado-borrado-actualizado')
        
            botonAgregar.style.visibility = 'visible'
            mensajeAgregar.innerHTML = `<p> Se guardó :<br> <strong>${productoGuardado.nombre}</strong> satifactoriamente</p>` 
            setTimeout(function(){
                botonAgregar.style.visibility = 'hidden'
            }, 2000);
        }, 1000);

    }

    async actualizarProducto(id) {
        console.log('Producto actualizado', id)

        let producto = formularioAlta.leerProductoIngresado()
        formularioAlta.limpiarFormulario()

        let productoActualizado = await productoService.actualizarProductoService(id,producto)
        console.log(productoActualizado)

        let index = this.productos.findIndex(producto => producto.id == productoActualizado.id)
        this.productos.splice(index,1,productoActualizado)

        renderTablaAlta(null, this.productos)

        setTimeout(function(){
            let botonAgregar = document.getElementById('contenedorMensaje')
            let mensajeAgregar = document.getElementById('producto-agregado-borrado-actualizado')
        
            botonAgregar.style.visibility = 'visible'
            mensajeAgregar.innerHTML = `<p> Se actualizó :<br> <strong>${productoActualizado.nombre}</strong> satifactoriamente</p>` 
            setTimeout(function(){
                botonAgregar.style.visibility = 'hidden'
            }, 2000);
        }, 1000);

        


    }

    async borrarProducto(id) {
        console.log('borrarProducto', id)

        let productoBorrado = await productoService.borrarProductoService(id)
        
        let index = this.productos.findIndex(producto => producto.id == productoBorrado.id)
        this.productos.splice(index,1)

        renderTablaAlta(null, this.productos)

        

        setTimeout(function(){
            let botonAgregar = document.getElementById('contenedorMensaje')
            let mensajeAgregar = document.getElementById('producto-agregado-borrado-actualizado')
        
            botonAgregar.style.visibility = 'visible'
            mensajeAgregar.innerHTML = `<p> Se borró :<br> <strong>${productoBorrado.nombre}</strong> satifactoriamente</p>` 
            setTimeout(function(){
                botonAgregar.style.visibility = 'hidden'
            }, 2000);
        }, 1000);

    }
}

const productoController = new ProductoController()