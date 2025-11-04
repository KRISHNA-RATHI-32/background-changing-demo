const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")
buttons.forEach(function(button){
    console.log(button); 
    button.addEventListener('click',function(e){
       console.log(e)//it returns the whole element like <div class="button" id="grey"></div>like pointer events which gives more info about the event
        console.log(e.target)//it returns the specific element that is clicked like <div class="button" id="grey"></div>
        //differece between e and e.target is e is the event object and e.target is the element that triggered the event.
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
        }
        else if (e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id
        }

    })
})
    