export default class Monitor{
    constructor(targetElement){
        this.targetElement = document.querySelector(targetElement);
    }

    insertAtDom(stocks){
        console.log(stocks[0].price);
        let html = "";
        for (let i = 0; i < stocks.length; i++){
            html += `
            <span class="monitored-stock">
                <span>${stocks[i].cod}</span>
                <span>${stocks[i].price}</span>
            </span>
            `
        }
        this.targetElement.innerHTML = html;
    }
    
    async getPrices(stocks){

        for (let i = 0; i < stocks.length; i++){
            const response = await fetch(`https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${stocks[i].cod}/1`);
            const stockDataFromApi = await response.json();
            stocks[i].price = stockDataFromApi[0].vl_medio.toFixed(2);    
        }

        // stocks.forEach(async (stock) => {
        //         const response = await fetch(`https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${stock['cod']}/1`);
        //         const stockDataFromApi = await response.json();
        //         stock.price = stockDataFromApi[0].vl_medio.toFixed(2);    
        // });

        return stocks;
    }

    async getStocks(){
        const response = await fetch('/app/function/get_monitor.php');
        const stocks = await response.json();
        return stocks;
    }
    
    async init(){
        let stocks = await this.getStocks();
        stocks = await this.getPrices(stocks);
        this.insertAtDom(stocks);
    }
}