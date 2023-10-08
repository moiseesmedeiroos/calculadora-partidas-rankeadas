
// Declaração de variável
let rank = getWinsLosses(1000,50)

// Função
function getWinsLosses(wins,losses){
    saldo = wins - losses
    return saldo
}

// Condicionais

if (rank <= 10 ){
    console.log(`O Herói tem de saldo de ${rank} está no nível Ferro`)
}
else if (rank > 10 && rank <= 20) {
    console.log(`O Herói tem de saldo de ${rank} está no nível Bronze`)
}
else if (rank > 20 && rank <= 50) {
    console.log(`O Herói tem de saldo de ${rank} está no nível Prata`)
}
else if (rank > 50 && rank <= 80) {
    console.log(`O Herói tem de saldo de ${rank} está no nível Ouro`)
}
else if (rank > 80 && rank <= 90) {
    console.log(`O Herói tem de saldo de ${rank} está no nível Diamante`)
}
else if (rank > 90 && rank <= 100) {
    console.log(`O Herói tem de saldo de ${rank} está no nível Lendário`)
}
else {
    console.log(`O Herói tem de saldo de ${rank} está no nível Imortal`)
}