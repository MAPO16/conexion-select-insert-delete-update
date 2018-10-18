//sumar con los numerfunction suma (){
const prompts = require('prompts');

async function suma (){


let  questions = [
   { 
   	 type: 'number',
   	 name: 'numero1',
   	 message: 'DAME UN NUMERO'   
   	},
   {
   	 type: 'number',
   	 name: 'numero2',
   	 message: 'DAME OTRO NUMERO'
   },
   {
   	 type: 'number',
   	 name: 'numero3',
   	 message: 'DAME EL ULTIMO VALOR'
   }
];

let response = await prompts(questions);
let a = response.numero1;
let b = response.numero2;
let c = response.numero3;
let solucion1 = (-b+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
let solucion2 = (-b-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);

console.log(solucion1);
console.log(solucion2);
}
suma();