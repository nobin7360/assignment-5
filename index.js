const heartCount=document.getElementById('heart-count');
const heartBtn=document.querySelectorAll('.fa-heart');
for(const btn of heartBtn){
    btn.addEventListener('click',function(){
        let current=parseInt(heartCount.innerText);
        heartCount.innerText=current+1;
    })
}


const callbtns=document.querySelectorAll('.call-btn');

const copybtn=document.querySelectorAll('.copy-btn');

const coins=document.getElementById('coins');
const historyData=document.getElementById('history-data');

function addHistory(serviceName,serviceNum) {

    let entry=document.createElement('div');
    entry.style.margin="5px 0";

    let time=new Date().toLocaleTimeString();


    entry.innerHTML=`${serviceName}-${serviceNum}(Called at: ${time})`;
    
    historyData.appendChild(entry);
}

for(const btn of callbtns){
    btn.addEventListener('click',()=>{
        let currentcoin=parseInt(coins.innerText);

        if(currentcoin<20){
            alert("Not enough coins.");
            return;
        }

        coins.innerText=currentcoin-20;

        let serviceName=btn.getAttribute("data-name");

        let serviceNum=btn.getAttribute("data-number");

        alert(`Calling ${serviceName}(${serviceNum})`);
        addHistory(serviceName,serviceNum);
    });
}




for(const y of copybtn){
    y.addEventListener('click',()=>{
        let card=y.parentElement;
        let callBtn=card.querySelector('.call-btn');
        let numberText=callBtn.getAttribute('data-number');

        navigator.clipboard.writeText(numberText).then(()=>{

            let copyNumber=document.getElementById('copy-count');

            let currentCopy=parseInt(copyNumber.innerText);



            copyNumber.innerText=currentCopy+1;
            alert(`Copied:${numberText}`);
        });
    });
}


document.getElementById('clear-btn').addEventListener('click',()=>{
    historyData.innerHTML="";
})

