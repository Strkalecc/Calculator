var contEx3 = 0;
var arrayEx3 = []; //array para guardar os 5 números digitados

function adicionarEx3(){ //função para adicionar os 5 números na div "input-ex3"
    var input = document.getElementById('input-ex3');
    var input = Number(input.value);

    arrayEx3.push(input);
    console.log(arrayEx3);
    contEx3++;
    var div = document.getElementById('div1-ex3');

    div.innerHTML += `- Número adicionado: ${input} <br>`

    if (contEx3 === 5){
        alert('Você adicionou 5 números!');
        var button = document.getElementById('button-ex3');
        button.parentNode.removeChild(button);

        var maiorNumero = Math.max.apply(null, arrayEx3); //Guarda o maior número dentro da array em uma variável
        div.innerHTML += `<br> <b>O maior número dos cinco digitados é : ${maiorNumero}</b>`;
    }
}
