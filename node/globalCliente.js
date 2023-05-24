require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // nao consegue mudar quando define o // Object.freeze()  // no global
console.log(MinhaApp.nome)