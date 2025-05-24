document.querySelectorAll('.cartao').forEach(cartao => {
  cartao.addEventListener('click', () => {
    cartao.classList.toggle('ativo');
  });
});
