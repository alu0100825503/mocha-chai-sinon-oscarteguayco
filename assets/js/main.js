(function(exports) {
  "use strict";
  function main() {
      var valor     = document.getElementById('convert').value,
          elemento  = document.getElementById('converted');
      valor = valor.toLowerCase();
      elemento.innerHTML = Medida.convertir(valor);
      return false;
  }
  exports.main = main;
})(this);
