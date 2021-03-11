const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button');

  botaoDeleta.innerText = 'Deletar';
  botaoDeleta.addEventListener('click', deletarTarefa);

  return botaoDeleta;
}

const deletarTarefa = (e) => {
  const botaoDeleta = e.target;
  
  const tarefaCompleta = botaoDeleta.parentElement;

  tarefaCompleta.remove();
  
  return botaoDeleta;
}

export default BotaoDeleta;