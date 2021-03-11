(() => {
  const criarTarefa = (e) => {
    e.preventDefault();
    
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');  
    const valor = input.value;  

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;
    
    tarefa.innerHTML = conteudo;
    
    tarefa.appendChild(BotaoConlui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);

    input.value = '';
  }

  const novaTarefa = document.querySelector('[data-form-button]');
  novaTarefa.addEventListener('click', criarTarefa);

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
})();