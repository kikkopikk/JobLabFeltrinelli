var countGusti=1;
var totPrice=0;
function aggGusto(color,price, t){

    if (countGusti<=3){
        document.querySelector('#pallina'+countGusti).style.backgroundColor=color;
        document.querySelector('#scelta'+countGusti+ ' .gustoScelto').innerText=t.id
        document.querySelector('#scelta'+countGusti+ ' .prezzoGustoScelto').innerText=price
        totPrice+=price;
        countGusti++;
    }else{
        const nodeList = document.querySelectorAll(".pallina");
        for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "white";
        }
        countGusti=1;
        totPrice=0;
    }
    console.log('totPrice',totPrice)
    document.querySelector('#scontrino').innerText=totPrice
}
function buy(){
    alert(totPrice)
}
