(function(exports) {
    "use strict";

    function Medida(valor, tipo) {
        var regexp = XRegExp('(?<numero> [+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?\\s*) # valor \n' +
													   '(?<tipo> \\w)                        # tipo de entrada   \n', 'x');
   
        if (!tipo) {  
            console.log(valor);
            var match = XRegExp.exec(valor, regexp);  
            console.log(match);
            var _valor = parseFloat(match.numero);
            var _tipo = match.tipo;
            
        } else {
            var _valor = valor;
            var _tipo = tipo;
        }
        
        this.getValor = function() { return _valor; };
        this.getTipo = function() { return _tipo; };
    };
    
    Medida.match = function(valor) {
      var regexp = XRegExp('(?<numero> [+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?[ ]*) # valor \n' + 
											'(?<tipo> [fck])          # tipo de entrada   \n' + 
											'(?<to> \\s*(?:to)?\\s*)  # to opcional \n' +
											'(?<destino> [fck])       # tipo destino', 'x');
											
	    var match = XRegExp.exec(valor, regexp);
      return match;
    };
    
    Medida.convertir = function(valor) {
      var measures = Medida.measures;
    
      var match = Medida.match(valor);
      if (match) {
        var numero = match.numero,
            tipo   = match.tipo,
            destino = match.destino;
            console.log("numero: " + numero);
            console.log("tipo: " + tipo);
            console.log("destino: " + destino);
        
          var source = new measures[tipo](numero);                              // new Fahrenheit(32)
          var target = "to" + measures[destino].name;                           // "toCelsius"
          return source[target]().toFixed(2) + " " + measures[destino].name;    // "0 Celsius"
      }
      else
        return "Introduzca una temperatura válida: 330e-1 F to C"; 
    };
    
    exports.Medida = Medida;
})(this);