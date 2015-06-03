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

var isLowerCase = function(s){
    return s.toLowerCase() === s;
};

/**
 * @param palavra
 * @returns palafra
 */
traduzPalavra = function(palavra){
    var palafra = palavra;
    for (var fonema in FONEMAS) {
        if (FONEMAS.hasOwnProperty(fonema)) {
            palafra = palafra.replace(new RegExp(fonema, 'gi'),function(match){
                var replaceString = "";
                var replafe = FONEMAS[match.toLowerCase()];
                var lastLowerCase = true;
                for(var i=0; i<match.length && i<replafe.length; i++){
                    var letra = match[i];
                    if(lastLowerCase = isLowerCase(letra))
                        replaceString = replaceString + replafe[i];
                    else
                        replaceString = replaceString + replafe[i].toUpperCase();
                }
                if(match.length < replafe.length){
                    for(i=match.length; i<replafe.length; i++){
                        if(lastLowerCase)
                            replaceString = replaceString + replafe[i];
                        else
                            replaceString = replaceString + replafe[i].toUpperCase();
                    }
                }
                return replaceString;
            });
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