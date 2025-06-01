document.addEventListener("DOMContentLoaded", function () {

const btnPagar = document.getElementById("payment-id");
const btnCarrinho = document.getElementById("add-to-cart-id");
  
btnPagar.addEventListener("click", function () {
alert("Pagamento feito com sucesso!");
});
  
btnCarrinho.addEventListener("click", function () {
alert("Adicionado ao carrinho com sucesso!");
});
});

  

  