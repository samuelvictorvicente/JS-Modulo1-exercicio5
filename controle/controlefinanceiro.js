let dinheiro;
let opcao;
let add;
let remover;


dinheiro=parseFloat(prompt("Qual é a quantidade de dinheiro disponivel: "));

do{
    
    opcao=prompt("A quantidade de dinheiro disponivel é: " + dinheiro +
    "\nDigite a opção:\n1) Adicionar dinheiro\n2) Remover dinheiro\n3) Sair");

    if(opcao==1){
        add=parseFloat(prompt("Qual valor sera adicionado? "));
        dinheiro+=add;

    } else if(opcao==2){ 

        remover=parseFloat(prompt("Qual valor sera retirado? "));
        dinheiro-=remover;
    }

    
}while(opcao<3)
  
    alert("Programa finalizado!");


