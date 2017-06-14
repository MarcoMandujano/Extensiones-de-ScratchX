/* Extension demonstrating a blocking command block */
/* Sayamindu Dasgupta <sayamindu@media.mit.edu>, May 2014 */

new (function() {
    var ext = this;
    var datos;
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
	
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Functions for block with type 'w' will get a callback function as the 
    // final argument. This should be called to indicate that the block can
    // stop waiting.
    ext.wait_random = function(callback) {
        wait = Math.random();
        console.log('Waiting for ' + wait + ' seconds');
        window.setTimeout(function() {
            callback();
        }, wait*1000);
    };
	
    ext.acciones = function(){
        console.log(datos)
    }
	
    ext.moverDerecha = function(cantidad){
	datos = "Se movio a la derecha " + distancia + " pasos";
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['w', 'Esperar por un tiempo', 'wait_random'],
	    ['', 'Mover Derecha %n pasos', 'moverDerecha'],
	    ['R', 'Mostrar estado', 'acciones']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Random wait extension', descriptor, ext);
})();
