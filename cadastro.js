var  cadastrodepecas = ["ab 1", "peça 2", "peça 3", "peça 4", "peça 5", "peça 6", "peça 7", "peça 8", "peça 9", "peça 10", "peça 11"];
console.log("quantidade de peças");

if (cadastrodepecas.length > 10){
    console.log("capacidade insuficiente");
} else { 
console.log("capacidade suficiente!");
}

console.log("quantidade de caracteres");

for (contador = 0; contador < cadastrodepecas.length;contador++){


var pecaatual = cadastrodepecas[contador];

if (pecaatual.length < 3){
    console.log(pecaatual + ": a peça possui nome inferior a 3 caracteres e não pode ser cadastrada!")
} else{
    console.log(pecaatual + ": a peça pode ser cadastrada ")
}

}
console.log("peso da peça");

var pesodapecaemgramas = 300;

if (pesodapecaemgramas >= 100){
    console.log("peso suficiente");
}else {
    console.log("valor insuficiente!")
}