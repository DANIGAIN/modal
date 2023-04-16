// ------------------------ varibale ------------------ //

const popup = document.querySelector('.modal');

const close = document.querySelector('.close');


const button = document.querySelector('.button');



//------------------------- funtion  ------------------//


let modalCall = function(event)
{
    button.classList.add('hidden')
   popup.classList.add('show');
   
}

let closeBtn = function()
{
    popup.classList.remove('show');
    button.classList.remove('hidden');
    
 }
let outpop = function(event)
{

   if(!event.target.closest('.modal') &&  event.target != button)
   {
      popup.classList.remove('show');
      button.classList.remove('hidden');
       
   }
  
    
}

//------------------------- EventListener     ---- //
let eventListener = function()
{
    button.addEventListener('click', modalCall);
    close.addEventListener('click',closeBtn);
    document.addEventListener('click',outpop);
}
eventListener();









