// Uma factory retorna um novo objeto - nao muda o objeto 
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}