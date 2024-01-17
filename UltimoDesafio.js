class Heroi{
   
	constructor(name,idade,tipo_=["guerreiro",'mago','monje','ninja'],randomElement){
    this.name= name
    this.idade=idade
    this.tipo_=
    randomElement = tipo_[Math.floor(Math.random() * tipo_.length)]
    }
         
    teste(){
        if (this.tipo_=="guerreiro"){
            console.log (`O ${this.tipo_} atacou usando espada`)
    
        } else if (this.tipo_=="mago"){
            console.log (`O ${this.tipo_} atacou usando magia`)
        }
        else if (this.tipo_=="monje"){
            console.log (`O ${this.tipo_} atacou usando arteMarcial`)
        }
        else if (this.tipo_=="ninja"){
            console.log ("O "+ this.tipo_ + " atacou usando kunai")
            
           
        }
    }
    
   
};    
        
           
i=0
for  (i; (i<=4); i++) { 
let h=  new Heroi ("Jão",31,)
console.log (h)
h.teste()

}



	//console.log (`O ${this.tipo_} atacou usando ${this.ataque}`)

  

    //for (let i in this.ataque_2){
        //let [ataques]=this.ataque_2[i]

// ideias pra fazer antes de concluir, tentar fazer ele aparecer o ataque e e defesa. 
//tentar usar os de repetição e condição nesse código
