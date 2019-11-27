var bill = document.getElementById('bill');
var tip = document.getElementById('tip');
var persons = document.getElementById('persons');
var split = document.getElementById('split');
var tipTotal = document.getElementById('tip_total');
var priceTotal = document.getElementById('price_total');
var tipPerson = document.getElementById('tip_person');
var pricePerson = document.getElementById('price_person');

function onSplitClick() {
    var elems = document.getElementsByClassName('concealable');
    if(elems){
        for(var i=0; i < elems.length; i++)
            elems[i].classList.toggle('hidden');
    }
}

function clearClick() {
    if(bill) {
        bill.value = 0;
    }
    
    if(tip) {
        tip.value = 15;
    }
    
    if(persons) {
        persons.value = 2;
    }
}

function calculateClick() {
    if(!bill || !tip)
        return;
    
    var billNum = + bill.value;
    var tipNum = + tip.value;
    var totalTip = (billNum * tipNum) / 100;
    var totalBill = billNum + totalTip;
    
    tipTotal.innerHTML = '$' + totalTip.toFixed(2);
    priceTotal.innerHTML = '$' + totalBill.toFixed(2);
    
    if(split.checked) {
        var personsCount = + persons.value;
        if(personsCount > 0) {
            var personTip = totalTip / personsCount;
            var personBill = totalBill / personsCount;
            tipPerson.innerHTML = '$' + personTip.toFixed(2);
            pricePerson.innerHTML = '$' + personBill.toFixed(2);
        }
    }
    
}