const configs = (x) => {
    return {
        PORT: 4100,
        message(){
            console.log("Server rodando com express - Porta: 4100")
        }
    }
}

module.exports = configs;