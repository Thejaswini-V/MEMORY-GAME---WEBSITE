const CardsArray=[
    {
        name:'facebook',
        icon: '<i class="fa fa-facebook-square"></i>'
    },
    {
        name:'amazon',
        icon: '<i class="fa fa-amazon"></i>'
    },
    {
        name:'apple',
        icon: '<i class="fa fa-apple"></i>'
    },
    {
        name:'chrome',
        icon: '<i class="fa fa-chrome"></i>'
    },
    {
        name:'github',
        icon:'<i class="fa fa-github-square"></i>'
    },
    {
        name:'linkedin',
        icon : '<i class="fa fa-linkedin-square"></i>'
    },
    {
        name:'facebook',
        icon: '<i class="fa fa-facebook-square"></i>'
    },
    {
        name:'amazon',
        icon: '<i class="fa fa-amazon"></i>'
    },
    {
        name:'apple',
        icon: '<i class="fa fa-apple"></i>'
    },
    {
        name:'chrome',
        icon: '<i class="fa fa-chrome"></i>'
    },
    {
        name:'github',
        icon:'<i class="fa fa-github-square"></i>'
    },
    {
        name:'linkedin',
        icon : '<i class="fa fa-linkedin-square"></i>'
    }
    
    
]
let flippedcard=[];
shufflecards();
const gameboard=document.getElementById("gameboard");
displaycards();
let matched=0;
function shufflecards(){
    for (i=CardsArray.length-1;i>=0;i--){
        const randindex=Math.floor(Math.random()*(i+1));
        [CardsArray[randindex],CardsArray[i]]=[CardsArray[i],CardsArray[randindex]];
    }
}
function displaycards(){
    const gameboard=document.getElementById("gameboard");
    CardsArray.forEach((curr,index,array)=>{
        const card=document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');
        gameboard.append(card);
        card.addEventListener('click',flipcard)
    })
}
function flipcard(){
    if (flippedcard.length<2 && this.classList.contains('active')){
        let cardid=this.getAttribute('id');
        flippedcard.push(this);
        this.classList.remove('cardback');
        this.innerHTML = CardsArray[cardid].icon;
    }
    if(flippedcard.length==2){
        setTimeout(checkmatch,250);
    }
}
function checkmatch(){
    const card1=flippedcard[0].getAttribute('id');
    const card2=flippedcard[1].getAttribute('id');
    if (CardsArray[card1].name== CardsArray[card2].name){
        flippedcard[0].style.border='none';
        flippedcard[1].style.border='none';
        flippedcard[0].style.backgroundColor="salmon";
        flippedcard[1].style.backgroundColor="salmon";
        flippedcard[0].innerHTML='';
        flippedcard[1].innerHTML='';
        flippedcard[0].classList.remove('active');
        flippedcard[1].classList.remove('active');      
        matched++;
        gameover();
        
    }
    else{
        flippedcard[0].innerHTML='';
        flippedcard[0].classList.add('cardback'); 
        flippedcard[1].innerHTML='';
        flippedcard[1].classList.add('cardback');
    }
    flippedcard=[];
}
function gameover(){
    if (matched == CardsArray.length/2){
        
        console.log((CardsArray.length)/2);
        while (gameboard.firstChild){
            gameboard.removeChild(gameboard.firstChild);
        }
        gameboard.innerHTML="YOU WON";
        gameboard.classList.remove('game');
        gameboard.classList.add('won');
    }
    else{
        flipcard();
    }
}
