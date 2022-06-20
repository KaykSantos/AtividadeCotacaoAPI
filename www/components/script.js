window.onload = ()=>{
    const cotacao = document.querySelector('#cotacao');
    cotacao.addEventListener('click', ()=>{
        const opcoes = {
            rethod: 'GET',
            mode: 'cors',
            cache: 'default'
        }
        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`, opcoes)
        .then(
            response => { response.json()
                .then(data => {
                    document.querySelector('#compra').textContent = data.USDBRL.bid;
                    document.querySelector('#venda').textContent = data.USDBRL.ask;
                    document.querySelector('#variacao').textContent = data.USDBRL.varBid;
                    document.querySelector('#maxima').textContent = data.USDBRL.high;
                    document.querySelector('#minima').textContent = data.USDBRL.low;
                })
            }
        )
    })
}