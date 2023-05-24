console.log(this === global)
console.log(this === module)

console.log(this === exports)         //sao a mesma module.exports
console.log(this === module.exports) //coisa exports // sera privativo 
 
function logThis() {
console.log('dentro de uma funçao')
console.log(this === exports)
console.log(this === module.exports)
console.log(this === global) //sera global publico visivel fora do modolu

}

logThis()