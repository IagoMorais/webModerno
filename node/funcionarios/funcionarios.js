const url = ''
const axios = require('axios')

const chinesa = f => f.pais === 'China' 
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}
 
const russo = f => f.pais === 'Russia'
const mulher = f => f.genero === 'F'
const salario = (func2, funcAtual2) => {
    return func2.salario < funcAtual2.salario ? func2 : funcAtual2
}

axios.get(url).then(response => {
    const funcionarios = response.data
   // console.log(funcionarios)

    const func = funcionarios
        .filter(chinesa)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
    
    const func2 = funcionarios
        .filter(russo)
        .filter(mulher)
        .reduce(salario)
        console.log(func2)

})