const btn = document.querySelectorAll(".button");
btn.forEach((item)=>{
    item.addEventListener("click",function(e){
        if(e.target.id === 'gray'){
            document.body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            document.body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            document.body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            document.body.style.backgroundColor = e.target.id;
        }
    })
})