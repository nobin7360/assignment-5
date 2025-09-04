const heartCount=document.getElementById('heart-count');
const heartBtn=document.querySelectorAll('.fa-heart');
for(const btn of heartBtn){
    btn.addEventListener('click',function(){
        let current=parseInt(heartCount.innerText);
        heartCount.innerText=current+1;
    })
}


const callbtns=document.querySelectorAll('.call-btn');
const coins=document.getElementById('coins');
const historyData=document.getElementById('history-data');

function addHistory(serviceName,serviceNum) {
    let entry=document.createElement('div');
    entry.style.margin="5px 0";
    entry.innerHTML=`${serviceName} - ${serviceNum}`;
    historyData.appendChild(entry);
}

for(const btn of callbtns){
    btn.addEventListener('click', () => {
        let currentcoin=parseInt(coins.innerText);

        if (currentcoin < 20) {
            alert("Not enough coins.");
            return;
        }

        coins.innerText=currentcoin - 20;

        let serviceName=btn.getAttribute("data-name");


        let serviceNum=btn.getAttribute("data-number");

        alert(`Calling ${serviceName} (${serviceNum})`);
        addHistory(serviceName, serviceNum);
    });
}


document.getElementById('clear-btn').addEventListener('click',()=>{
    historyData.innerHTML="";
})