class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=BHE93ZoOwyoQwkxs1j2XqRALVH5i0YTHSUuZnzHE&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();
        const exchangeResult = amount * result.data[secondCurrency];

        return exchangeResult;
    }
}