var total_tela= window.document.getElementById('valor_total')
var total =0;
var valor_atual=total
//Valor dos jogos
var preco_jogos=[109.90,119.90,19.99,75.49,149.99,82.45]

//funçao que adiciona o valor do produto ao valor final 
function adicionar(){
  total=0
  for(var i=1;i<=6;i++){
  var valor_q= $(`#jogo_${i}`).val();
  valor_q=Number(valor_q)
  total=total+(valor_q*preco_jogos[i-1])
  if(valor_q==0){
    document.getElementById(`jogo_${i}`).value=""
    }
  }
  total_tela.innerText=`R$ ${total.toFixed(2)}`
}

//funçao comprar 
function comprar(){
  total=0
  for(var i=1;i<=6;i++){
    document.getElementById(`jogo_${i}`).value=""
  }
  total_tela.innerText=`R$ ${total.toFixed(2)}`
  window.alert(`Compras realizadas com sucesso`)
}

//funçao que sincroniza o vetor com o valor dos jogos com a pagina de compra
for(var i=1;i<=6;i++){
 $(`#preco_j${i}`).text(preco_jogos[i-1].toFixed(2))
}