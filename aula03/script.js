function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Lucas")); // Saída: Olá, Lucas!


// Exemplo: Função Declarada (Sofre Hoisting)

// A função "saudar" é declarada e sofre hoisting.
function saudar(nome) {
  // Retorna uma mensagem personalizada
  return `Olá, ${nome}! Bem-vindo ao TaskMaster.`;
}

const mensagem = saudar("Maria");
console.log(mensagem); // Saída: Olá, Maria! Bem-vindo ao TaskMaster.


// Exemplo: Expressão de Função (Não Sofre Hoisting)

// Vai gerar erro: Cannot access 'despedir' before initialization
console.log(despedir("João"));

const despedir = function(nome) {
  // Retorna mensagem de despedida
  return `Até logo, ${nome}! Volte sempre ao TaskMaster.`;
};

// Exemplo: Hoisting em Funções Declaradas

// A função "somarDeclarada" pode ser chamada antes de sua definição
console.log(somarDeclarada(5, 3)); // Saída: 8

function somarDeclarada(a, b) {
  return a + b;
}

// Exemplo: Variáveis com var vs. let

// Variável declarada com var é hoisted e inicializada com undefined
console.log(xVar); // Saída: undefined
var xVar = 10;

// Variável declarada com let é hoisted, mas não inicializada (zona morta)
console.log(xLet); // Erro: Cannot access 'xLet' before initialization
let xLet = 20;

// Exemplo: Parâmetros e Valores Padrão

// Função que exibe detalhes de uma tarefa
function exibirTarefa(id, titulo, prioridade) {
  console.log(`Tarefa #${id}: ${titulo} (Prioridade: ${prioridade})`);
}
exibirTarefa(1, "Estudar JavaScript", "alta");

// Função com valores padrão para parâmetros não informados
function criarTarefa(titulo, descricao = "Sem descrição", 
                     prioridade = "média", concluida = false) {
  return {
    id: Date.now(), // Gera um ID único com base no timestamp
    titulo,
    descricao,
    prioridade,
    concluida,
    criada: new Date()
  };
}

const tarefa = criarTarefa("Estudar funções");
console.log(tarefa);

// Exemplo: Retorno Múltiplo Usando Loop

// Função que calcula estatísticas básicas de um array de números
function calcularEstatisticas(numeros) {
  let soma = 0;
  let min = numeros[0];
  let max = numeros[0];
  
  // Itera pelo array para acumular a soma e atualizar os valores de min e max
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    if (numeros[i] < min) {
      min = numeros[i];
    }
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  
  const media = soma / numeros.length;
  
  // Retorna os resultados em um objeto
  return { soma, media, min, max };
}

const resultados = calcularEstatisticas([5, 10, 15, 20, 25]);
console.log(resultados);

// Exemplo: Função para Formatar Data

// Função para formatar uma data no formato "DD/MM/AAAA"
function formatarData(data, formato = 'curto') {
  // Converte para objeto Date, se necessário
  if (!(data instanceof Date)) {
    data = new Date(data);
  }
  // Verifica se a data é válida
  if (isNaN(data.getTime())) {
    return "Data inválida";
  }
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  
  if (formato === 'curto') {
    return `${dia}/${mes}/${ano}`;
  }
  // Outros formatos podem ser implementados aqui...
  return `${dia}/${mes}/${ano}`;
}
console.log("Data formatada:", formatarData(new Date()));,

// Exemplo: Arrow Function para Subtração

// Arrow function que retorna a subtração de dois números
const subtrair = (a, b) => a - b;
console.log("Subtração:", subtrair(20, 5));

// Exemplo: Uso de Arrow Function em um Array

// Utilizando arrow function para dobrar os elementos de um array
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);
console.log("Números dobrados:", dobrados);

// Exemplo: Diferença de Contexto com "this"

// Demonstração de "this" em função tradicional vs. arrow function
const contador = {
  valor: 0,
  incrementarTradicional: function() {
    setTimeout(function() {
      // Neste caso, "this" não se refere ao objeto "contador"
      console.log("Valor (tradicional):", this.valor);
    }, 100);
  },
  incrementarArrow: function() {
    setTimeout(() => {
      // A arrow function preserva o contexto do objeto "contador"
      this.valor++;
      console.log("Valor (arrow):", this.valor);
    }, 100);
  }
};
contador.incrementarTradicional();
contador.incrementarArrow();

// Exemplo: Função Auto-invocada (IIFE)

// IIFE: Função definida e executada imediatamente
(function() {
  // Variáveis aqui são locais e não poluem o escopo global
  const a = 1;
  const b = 2;
  console.log("Resultado da IIFE (a + b):", a + b);
})();