
const submit = document.getElementById("submit");

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    
    const texto = document.getElementById("texto").value;
    const rotacoes = document.getElementById("rotacoes").value;
    const div = document.getElementById("textoCriptografado");

    const paragrafo = document.createElement("p");

    const mensagem = criptografaMensagem(parseInt(rotacoes), texto);

    paragrafo.innerHTML = mensagem;

    div.appendChild(paragrafo);

})


function criptografaMensagem(rotacoes, texto){
    
    var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' , 'k', 'l', 'm' , 'n', 'o', 'p', 'q', 'r', 's' , 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var textoSeparado = texto.toLowerCase().split("");
    var tamanhoTexto = textoSeparado.length;
    var fraseCriptografada = [];
    var aux = 0;

    for(var i = 0; i < tamanhoTexto; i ++){
        if(temNoArray(textoSeparado[i], alfabeto)){
            console.log("index da letra " + encontraIndex(textoSeparado[i], alfabeto));
            if(encontraIndex(textoSeparado[i], alfabeto) >= (alfabeto.length - rotacoes)){
                aux = (alfabeto.length - 1) - encontraIndex(textoSeparado[i], alfabeto);
                fraseCriptografada += alfabeto[rotacoes - aux - 1];
                aux = 0;
            }else{
                fraseCriptografada += alfabeto[encontraIndex(textoSeparado[i], alfabeto) + rotacoes];
            }
        }else{
            fraseCriptografada += textoSeparado[i];
        }
    }

    return fraseCriptografada;
}

function temNoArray(letra, array){
    for(var i = 0; i <= array.length; i++){
        if(letra == array[i]){
            return 1;
        }
    }

    return 0;
}

function encontraIndex(letra, array){
    for(var i = 0; i <= array.length; i++){
        if(letra == array[i]){
            return i;
        }
    }
}