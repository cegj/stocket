export default class Monitor{
    constructor(targetElement){
        this.targetElement = document.querySelector(targetElement);
    }
    
    getPrices(stocks){
        stocks.forEach(async (stock) => {
                const response = await fetch(`https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${stock['cod']}/1`);
                const stockDataFromApi = await response.json();
                stock['price'] = stockDataFromApi[0].vl_medio.toFixed(2);    
        });
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
        console.log(stocks)
    }
}