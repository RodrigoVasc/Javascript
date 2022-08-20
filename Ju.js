const EXPLORADOR = "Liinc";
let bolsaDeItens = [];
let energia = 5;
let moedas = 0;
let recompensas = ["chave", "grama", "pedra","madeira", "Moeda", "Moeda","Moeda", "Moeda", "Moeda", "Moeda", "Moeda", "Moeda", "Moeda"];

console.log("TUTORIAL para iniciar a aventura comece com: CONSOLE.LOG( 'nome da função'())")
console.log("            ")
console.log("FUNÇÕES: explorar, taverna, batalha, abrir bau")
console.log("            ")

function taverna() {
console.log("O explorador, " + EXPLORADOR + " entrou na taverna!");
  
 if(energia < 5){
  while(energia < 5){
   energia++
    console.log("O explorador, " + EXPLORADOR + " está bebendo!");
    console.log("Energia: "+ energia +"/5")
  }
 if(energia === 5){
     console.log( "O explorador, " + EXPLORADOR + " está revitalizado!");
   }
 }
}

function pegarItem(item){
  
  if(item === "Moeda"){
  console.log("O explorador, " + EXPLORADOR + " ganhou uma moeda!");
    moedas+1
  }
  else{
console.log("O explorador, " + EXPLORADOR + " ganhou um item");
   bolsaDeItens.push(item);
  }
}

function batalha(){
console.log("O explorador, " + EXPLORADOR + " encontrou uma criatura misteriosa!");
  
  if(energia < 1){
   console.log("O explorador, " + EXPLORADOR + " fugiu para taverna");
    return false
  }
  
  else{
console.log("O explorador, " + EXPLORADOR + " derrotou o monstro!");
  energia--
  console.log("Energia: "+ energia +"/5")
  if(energia === 0){
console.log("O explorador, " + EXPLORADOR + " está cansado! então precisou fugir para a taverna!");
    return false
   }
    return true
  }
}

function explorar(){
 console.log("O explorador, "+ EXPLORADOR + " saiu em busca de uma nova aventura!");
    
  if(energia < 1){
   console.log("O explorador, " + EXPLORADOR + " está muito cansado, não poderá explorar nada agora!");
    taverna()
     return false
  }
  else if (batalha() === true) {
    roletarRecompensas()
     return true
     }
       else{
      taverna()
       return false
     }
   }

function abrirBau(){
console.log("forçando a tranca...")
 
if(bolsaDeItens.indexOf("chave")=== 0){
  console.log("Parabéns, você finalmente abriu o baú!");
   return true
 }
  else{ 
    console.log("Que pena, não foi dessa vez!")
    console.log("tente novamente depois de explorar mais!")
  return false
  }
}

let properties = {}
let actions = {}

const roletarRecompensas = function() {
  let random = Math.floor(Math.floor(Math.random() * recompensas.length));
  let loot  = recompensas[random];

  pegarItem(loot);
  recompensas.slice(random, 1);
}

if (typeof EXPLORADOR !== 'undefined')          {properties.EXPLORADOR = EXPLORADOR}
if (typeof bolsaDeItens !== 'undefined')        {properties.bolsaDeItens = bolsaDeItens}
if (typeof moedas !== 'undefined')              {properties.moedas = moedas}
if (typeof energia !== 'undefined')             {properties.energia = energia}
if (typeof recompensas !== 'undefined')         {properties.recompensas = recompensas}
if (typeof taverna !== 'undefined')             {actions.taverna = taverna}
if (typeof roletarRecompensas !== 'undefined')  {actions.roletarRecompensas = roletarRecompensas}
if (typeof pegarItem !== 'undefined')           {actions.pegarItem = pegarItem}
if (typeof batalha !== 'undefined')             {actions.batalha = batalha}
if (typeof explorar !== 'undefined')            {actions.explorar = explorar}
if (typeof abrirBau !== 'undefined')            {actions.abrirBau = abrirBau}

module.exports.properties = properties;
module.exports.actions = actions




