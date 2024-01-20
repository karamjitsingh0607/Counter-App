let counter=document.getElementById('counter');
let buttons=document.getElementsByClassName('button');
let myInterval;
let counterValue=0;

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        incrementAndDecrement(i);
    })

    buttons[i].addEventListener('mousedown',()=>{
        myInterval=setInterval(()=>{
            incrementAndDecrement(i);
        },250);
    })
    buttons[i].addEventListener('mouseup',clean);
    buttons[i].addEventListener('mouseleave',clean);

}

function incrementAndDecrement(i){
    if(i==0){
        counterValue-=1;
    }else{
        counterValue+=1;
    }
    counter.innerHTML=counterValue;
}

function clean(){
    clearInterval(myInterval);
}