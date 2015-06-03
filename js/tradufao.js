(function(){
    var textareaPt = document.getElementById('texto-pt');
    var textareaDin = document.getElementById('texto-din');
    var botaoTraduzir =  document.getElementById('btt-traduzir');
    var action = function () {
        var textoPt = textareaPt.value;
        textareaDin.value = traduzTexto(textoPt);
    };
    textareaPt.addEventListener('change', function(ev){ action(); });
    textareaPt.addEventListener('keyup', function(ev){
       if(ev.keyCode == 32 || ev.keyCode == 13 || ev.keyCode == 190) action();
    });
    botaoTraduzir.addEventListener('click', function(ev){ action(); });
})();
