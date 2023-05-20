const moduloA =  require('../../moduloA');
console.log(moduloA.ateLogo);

const saudacao = require('saudacao');
console.log(saudacao.ola);

const http = require('http')
http.createServer((req, res) => {
    res.write(`
    
    
    Thais 
         Te 
           Amo 
                sz`)
res.end()
}).listen(8080)