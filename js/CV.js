let meni = document.querySelector(".menu");
let buttons = document.querySelector(".menu-items");
let open = false;

function menu(){
    if(!open){
        console.log("Its open now");
        meni.setAttribute("style","display:visible;");
        buttons.setAttribute("style","display:visible;");
        open=true;
    }
    else{
        console.log("Its closed now");
        meni.setAttribute("style","display:none;");
        buttons.setAttribute("style","display:nene;");
        open=false;
    }    
}