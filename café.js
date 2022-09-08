let qualCafe = ['Expresso', 'Carioca', 'Cappucino', 'Café com Leite', 'Chocolate Quente'] //Strings
let quantChoc = [0,10,20] // arrays
let quantCafé = [0,10,20,30]
let quantLeite = [0,10,20,30]
let quantÁgua = [10,20,30]
let intensCafé = ['Fraco', 'Médio', 'Forte'] //Strings = palavras
let doceCafé = [true, false]  //Boolean
let existirCopo = [true, false]
let existirColher = [true, false]


function novoCopo (){
    
    confirmar a existência de copos
    if (existirCopo) {
        colocar novo copo
    }
    return copoNovo
}

function novaColher (){
    
    confirmar a existência de colheres
    if (existirColher) {
        colocar nova colher
    }
    return colherNova
}

function colocarIngredientes (){

    switch (caféEscolhido){
        case 'Expresso':
        colocar 0g de leite em pó
        colocar 0g de chocolate em pó
        colocar 20ml de água quente
        break;
        case 'Carioca':
        colocar 0g de leite em pó
        colocar 0g de chocolate em pó
        colocar 10ml de água quente
        break;
        case 'Cappucino':
        colocar 20g de leite em pó
        colocar 10g de chocolate em pó
        colocar 30ml de água quente
        break;
        case 'Café com Leite':
        colocar 10g de leite em pó
        colocar 0g de chocolate em pó
        colocar 30ml de água quente
        break;
        case 'Chocolate Quente':
        colocar 30g de leite em pó
        colocar 20g de chocolate em pó
        colocar 30ml de água quente
        break;
        default:
        'Não há café'
    }
    return misenplace
}

function caféFraco (quantCafé){

    escolha do usuário
    if (Fraco){
        quantCafé === 10
    }
    return intensFraco
}

function caféMédio (quantCafé){

    escolha do usuário
    if (Médio){
        quantCafé === 20
    }
    return intensMédio
}

function caféForte (quantCafé){

    escolha do usuário
    if (Forte){
        quantCafé === 30
    }
    return intensForte
}

function produzirExpresso(){

    let café = nada //ainda não sei usar isso aqui, não to entendendo pq diabos eles está com igual a nada

    novoCopo()
    if (intensCafé === 'Fraco'){
        caféFraco()
    } else if (intensCafé === 'Médio'){
        caféMédio()
    } else if (intensCafé === "Forte"){
        caféForte()
    }
    colocarIngredientes()
    if (doceCafé) {
        colocar açúcar
    }
    novaColher()
    return café
}

function outrosCafés(){

    let café = nada

    novoCopo()
    colocarIngredientes()
    novaColher()
    return café
}




function produzir (){

    let café = nada

    switch (caféEscolhido){
        case 'Expresso':
            produzirExpresso()
            break;
        case 'Carioca':
            outrosCafés()
            break;
        case 'Cappucino':
            outrosCafés()
            break;
        case 'Café com Leite':
            outrosCafés()
            break;
        case 'Chocolate Quente':
            outrosCafés()
            break;
        default:
            'Acabou o café princesa'
    }
    return café
}

produzir(café)