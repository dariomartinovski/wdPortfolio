let sec1 = document.querySelector("#section1");
let c1 = document.querySelector(".c1");

sec1.addEventListener("mousemove", e=>{
    c1.setAttribute("style","top: "+(e.pageY-5)+"px; left: "+(e.pageX-80)+"px;")
})

function sendmail(){
    let subject = document.getElementById("subject").value;
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    window.open('mailto:dario.martinovski@hotmail.com?subject=' + subject + ' - '+name+' &body='+message);
}