function convert() {
    let from = document.getElementById("from").value;
    // let to = document.cform.to.value; //INR
    let to = document.getElementById("to").value;
    // let amount = parseInt(document.cform.amount.value) ; //amount
    let amount = parseInt(document.getElementById("amount").value);

    console.log(to);
    console.log(amount);

    // fetch('https://v6.exchangerate-api.com/v6/80c317044a6e0a40a46593f5/latest/USD')
    fetch('https://v6.exchangerate-api.com/v6/80c317044a6e0a40a46593f5/latest/' + from)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);
            let rates = data.conversion_rates;

            // console.log(rates);
            // let convRate = rates.INR;
            let convRate = rates[to];
            let result = convRate * amount;
            // console.log(result);
            document.getElementById("result").innerHTML = "Converted amount in " + to + " is " + result;
        })
}