// Métodos básicos
console.log("Mensagem normal");
console.info("Informação");
console.warn("Aviso");
console.error("Erro");

// Tabelas
console.table([
  { id: 1, tarefa: "Estudar JS" },
  { id: 2, tarefa: "Praticar código" }
]);

// Agrupamento
console.group("Grupo de logs");
console.log("Log 1");
console.log("Log 2");
console.groupEnd();

// Medição de tempo
console.time("Timer");
// ...algum processamento...
console.timeEnd("Timer");
        

// VARIÁVEIS
// Com var (escopo de função)
var antigo = "Forma antiga de declarar variáveis";

// Com let (escopo de bloco, pode ser reatribuída)
let userName = "Maria";
userName = "João"; // permitido

// Com const (escopo de bloco, não pode ser reatribuída)
const API_URL = "https://api.example.com";
// API_URL = "..."; // Erro


let texto = "Olá";
console.log(texto, + '-->' + typeof texto);             
// String: sequência de caracteres.

let numero = 42;     
console.log(numero, + '-->' + typeof numero);             
// Number: valores numéricos.

let isCompleted = false; 
console.log(isCompleted,+ '-->' + typeof isCompleted);         
// Boolean: verdadeiro ou falso.

let semValor;
console.log(semValor,+ '-->' + typeof semValor);          
// Undefined: variável declarada sem valor.

let nulo = null;
console.log(nulo,+ '-->' + typeof nulo); 
// Null: ausência intencional de valor.               
// (typeof null retorna "object", comportamento histórico do JS)

let uniqueId = Symbol("id");
console.log(uniqueId,+ '-->' + typeof uniqueId); 
// Symbol: cria um identificador único.

let bigNumero = 999999999999999999999999n; 
console.log(bigNumero,+ '-->' + typeof bigNumero);
// BigInt: para inteiros muito grandes.


//OBJETOS
let task = { // atributo 'task'
  id: 1, //propriedade 1
  title: "Aprender JavaScript", //propriedade 2
  completed: false, //propriedade 3
  assignee: { //propriedade 4
    name: "João", // propriedade 1 da propriedade 4
    email: "joao@example.com" //propriedade 2 da prop...4
  },
  toggleComplete() { //ignora isso por enquanto
    this.completed = !this.completed;
  }
};



//ARRAYS (listas)
let tasks = [
  { id: 1, title: "Tarefa 1", completed: false },
  { id: 2, title: "Tarefa 2", completed: true }
];



//DATAS

let hoje = new Date();
let dataFutura = new Date("03-26-2025"); //vai retornar horario 00:00:00 pq ainda nao aconteceu né genio
console.log(hoje)
console.log(dataFutura)


// EXPRESSOES REGULARES (ignora isso ou faz um curso a parte pra entender[É IMPORTANTE!!!!!!!!])
let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
console.log(pattern.test("+55(11)92299-0899")); // true
console.log(pattern.test("+55(11)2299-0899"));  // true


//CONVERSÃO DE TIPOS
// num 'numero' para string 'texto'
String(42); // "42"
42 + "";  // "42"

//string 'texto' para num 'numero'
Number("42"); // 42
parseInt("42.9");  // 42
parseFloat("42.9"); // 42.9

//pra boleano 'True e False'
Boolean("texto"); // true
Boolean("");       // false

//OPERADORES (+, -, *, /, %, **)
let a = 10;
let b = 3;
console.log(a + b); // 13 --> adição
console.log(a - b); // 7 --> subtração
console.log(a * b); // 30 --> multiplicação
console.log(a / b); // 3.333... --> divisão
console.log(a % b); // 1 --> resto da divisão
console.log(a ** b); // 1000 --> potência

//incremento ou decremento (++, --)
let contador = 0;
console.log(++contador); // 1 (pré-incremento)
console.log(contador++); // 1 (pós-incremento, agora contador = 2)
let contador2 = 0;
console.log(--contador2); // -1 (pré-incremento)
console.log(contador2--); // -1 (pós-incremento, agora contador = -2)
//Pré-incremento (++x): incrementa antes de retornar o valor. Pós-incremento (x++): retorna o valor antigo e depois incrementa. O mesmo vale para decremento (--).

//atribuição (=, +=, -=, *=, /=, %=, **=)
let x = 10; 
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 2; // x = 0
x **= 3; // x = 0 (0 elevado a 3)

//comparação (==, ===, !=, !==, >, <, >=, <=)
console.log(10 == "10");   // true (compara valor somente)
console.log(10 === "10");  // false (compara valor e tipo)
console.log(5 != "5");     // false (valor é igual)
console.log(5 !== "5");    // true (valor igual, mas tipo diferente)

//lógicos (&&, ||, !)

console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)

// && (AND): retorna true apenas se ambas as condições forem true.
// || (OR): retorna true se pelo menos uma das condições for true.
// ! (NOT): inverte o valor booleano.


//ternário
let idade = 18;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status)
//se a idade for maior ou igual a 18 retorna 'maior de idade, se não ele retorna 'menor de idade'


//a partir daqui o professor não falou, sinceramente nem eu sei a utilidade disso aqui fora o spread ali, dito isso boa sorte entendendo :)


//Coalescência Nula (??)
let valor = null;
let resultado = valor ?? "Valor padrão"; // "Valor padrão"

//Encadeamento Opcional (?.)
let usuario = { nome: "Ana" };
console.log(usuario?.endereco?.rua); // undefined
//Permite acessar propriedades aninhadas sem causar erros se algum nível for null ou undefined.

//operador spread(...)
let arr1 = [1,2];
let arr2 = [3,4];
let combinado = [...arr1, ...arr2]; // [1,2,3,4]
//útil para clonar ou mesclar dados.

//tem exercícios pra praticar tudo isso no site dele, façam. é importante
//https://www.curso-webdev.com/?page=introducaojs-variaveis-operadores vai la no final q c acha
