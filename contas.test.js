const contas = require('./contas');

test("Soma 2 + 5 esperado 7 como resultado",()=> {
 expect(contas.soma(2,5)).toBe(7) //expect é a função de soma
}) 

test("subtracao 2 - 5 esperado 3 como resultado",()=> {
    expect(contas.subtracao(5,2)).toBe(3) //expect é a função de soma
   })


   test("multiplicacao 2 x 5 esperado 10 como resultado",()=> {
    expect(contas.multiplicacao(2,5)).toBe(10) //expect é a função de soma
   })

   test("divisao 10 / 2 esperado 5 como resultado",()=> {
    expect(contas.divisao(10,2)).toBe(5) //expect é a função de soma
   })