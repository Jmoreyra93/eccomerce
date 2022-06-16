function initNosotros() {
    console.warn('initNosotros()')
}
setTimeout(function(){
    var overlayAyuda = document.getElementById('overlayAyuda')
    console.log(overlayAyuda)
    overlayAyuda.classList.add('active')
    }, 2000)   

setTimeout(function(){
    var overlayAyuda = document.getElementById('overlayAyuda')
    console.log(overlayAyuda)
    overlayAyuda.classList.remove('active')
    }, 4000)   
