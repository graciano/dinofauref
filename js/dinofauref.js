/**
 * Created by matheuf grafiano on 01/06/15.
 * Efe algoritmo pega palafra por palafra e fubftitui of fonemaf do array FONEMAS por F.
 */
//Os fonemas estão em ordem de prioridade
FONEMAS = {
    'xce' : 'fe',
    'xci' : 'fi',
    'ch' : 'f',
    'ss' : 'f',
    'ce' : 'fe',
    'ci' : 'fi',
    've' : 'fe',
    'ge ' : 'fe',
    'gi' : 'fi',
    's' : 'f',
    'v': 'f',
    'z' : 'f',
    'j' : 'f',
    'ç'  : 'f'
};

/**
 * @param palavra
 * @returns palafra
 */
traduzPalavra = function(palavra){
    var palafra = palavra;
    for (var fonema in FONEMAS) {
        if (FONEMAS.hasOwnProperty(fonema)) {
            palafra = palafra.replace(new RegExp(fonema, 'gi'),FONEMAS[fonema]);
        }
    }
    return palafra;
};

traduzTexto = function(texto){
    var traduzido = "";
    var palavras = texto.split(' ');
    for(var i=0; i<palavras.length; i++){
        var palavra = palavras[i];
        traduzido = traduzido+traduzPalavra(palavra)+" ";
    }
    return traduzido.trim();
};