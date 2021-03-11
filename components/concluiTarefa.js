const BotaoConlui = () => {
  const botaoConlui = document.createElement('button');

  botaoConlui.classList.add('check-button');
  botaoConlui.innerText = 'Concluir';

  botaoConlui.addEventListener('click', concluirTarefa);

  return botaoConlui;
}

const concluirTarefa = (e) => {
  const botaoConlui = e.target;

  const tarefaCompleta = botaoConlui.parentElement;

  tarefaCompleta.classList.toggle('done');
}

export default BotaoConlui;