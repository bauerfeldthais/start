let qualCafe = ['Expresso', 'Carioca', 'Cappucino', 'Café com Leite', 'Chocolate Quente'] //Strings
let quantChoc = [0,10,20,30] // arrays
let quantCafé = [0,10,20,30]
let quantLeite = [0,10,20,30]
let quantÁgua = [10,20,30]
let intensCafé = ['Fraco', 'Médio', 'Forte'] //Strings = palavras
let doceCafé = [true, false]  //Boolean

function produzirExpresso (
    quantCaféEscolhido, 
    quantÁguaEscolhido, 
    doceCaféEscolhido,
    intensidadeCaféEscolhida){
        
    let caféPronto = nada

    colocar novoCopo(); 
    colocar quantCaféEscolhido de solúvel com intensidade igual a intensidadeCaféEscolhida
    // colocar quantLeiteEscolhido de leite em pó
    // colocar quantChocEscolhido de chocolate em pó
    colocar quantÁguaEscolhido de água quente
    // if ( doceCaféEscolhido === 'Sim' ) {
    //     colocar açúcar
    // } else {
    //     não colocar açúcar
    // }

    // if ( doceCaféEscolhido === true ) {
    //     colocar açúcar
    // } else {
    //     não colocar açúcar
    // }

    // if ( doceCaféEscolhido ) {
    //     colocar açúcar
    // } else {
    //     não colocar açúcar
    // }

    if ( doceCaféEscolhido ) {
        colocar açúcar
    } 


    let colher = nova colher
    colocar colher

    return caféPronto
} 

function produzirCappucino(    
    quantCaféEscolhido, 
    quantLeiteEscolhido, 
    quantChocEscolhido, 
    quantÁguaEscolhido, 
    doceCaféEscolhido,
    intensidadeCaféEscolhida
){

}
function produzirCaféComLeite(
    quantCaféEscolhido, 
    quantLeiteEscolhido, 
    quantÁguaEscolhido, 
    doceCaféEscolhido,
    intensidadeCaféEscolhida){}
function produzirChocolateQuente(
    quantLeiteEscolhido, 
    quantChocEscolhido, 
    quantÁguaEscolhido, 
    doceCaféEscolhido,
    intensidadeCaféEscolhida
){}

function produzir(
    qualCaféEscolhido, 
    quantCaféEscolhido, 
    quantLeiteEscolhido, 
    quantChocEscolhido, 
    quantÁguaEscolhido, 
    doceCaféEscolhido,
    intensidadeCaféEscolhida){
        let cafe = nada

        // switch case
        if(qualCaféEscolhido === 'Expresso'){ //true se qualCaféEscolhido for igual a Expresso
            cafe = produzirExpresso(quantCaféEscolhido, quantÁguaEscolhido, doceCaféEscolhido, intensidadeCaféEscolhida)
        } else if(qualCaféEscolhido === 'Carioca'){
            let intensidadeCarioca = 'Fraco'
            cafe = produzirExpresso(quantCaféEscolhido,  quantÁguaEscolhido,  doceCaféEscolhido, intensidadeCarioca)
        } else  if (qualCaféEscolhido === 'Cappucino') {
            let intensidadeCappucino = 'Médio'
            cafe = produzirCappucino(
                quantCaféEscolhido, 
                quantLeiteEscolhido, 
                quantChocEscolhido, 
                quantÁguaEscolhido, 
                doceCaféEscolhido,
                intensidadeCaféEscolhida)
        } else if (qualCaféEscolhido === 'Café com Leite') {
            cafe = produzirCaféComLeite(quantCaféEscolhido, 
                quantLeiteEscolhido, 
                quantÁguaEscolhido, 
                doceCaféEscolhido,
                intensidadeCaféEscolhida)
        } else if (qualCaféEscolhido === 'Chocolate Quente') {
            cafe = produzirChocolateQuente(quantLeiteEscolhido, 
                quantChocEscolhido, 
                quantÁguaEscolhido, 
                doceCaféEscolhido,
                intensidadeCaféEscolhida)
        } else {
            imprimir na tela 'Perdeu otário'
        }

        return cafe
    }

// Escolhas do usuário
// let qlCafé      = 'Expresso';
let qlCafé      = definir qual café baseado em qualCafé
// let qtCafé      = 20;
let qtCafé      = definir quantidade do café baseado em quantCafé
// let qtLeite     = 0;
let qtLeite     = definir quantidade do leite baseado em quantLeite
// let qtChocolate = 0;
let qtChocolate = definir quantidade do café baseado em quantChoc
// let qtÁgua      = 10
let qtÁgua      = definir quantidade do café baseado em quantÁgua
// let dcCafé      = 'Não';   
let dcCafé      = definir quantidade do café baseado em doceCafé
// let intsCafé    = 'Forte';
let intsCafé    = definir intensidade do café baseado em intensCafé

let cafe = produzir(qlCafé, qtCafé, qtLeite, qtChocolate, qtÁgua, dcCafé, intsCafé)

entregarCafé(cafe)
