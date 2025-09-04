const heartCount = document.getElementById('heart-count');
const heartBtn=document.querySelectorAll('.fa-heart');
heartBtn.forEach(btn=>{
    btn.addEventListener('click',function(){
        let current=parseInt(heartCount.innerText);
        heartCount.innerText=current+1;
    })
})

// call button click eventListener


const callbtns=document.querySelectorAll('.fa-phone');
const coins=document.getElementById('coins');
callbtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        let curretncoin=parseInt(coins.innerText)
        if (curretncoin<20) {
              alert("Not enough coins");
              return;
        }
        let remcoin=curretncoin-20;
        coins.innerText=remcoin;

    })
    
})