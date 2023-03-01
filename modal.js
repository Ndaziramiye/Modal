const modal=document.getElementById("modal");
const cross=document.getElementById("cross");
const button=document.getElementById("button");

button.addEventListener("click",function1);
cross.addEventListener("click",function2);
modal.addEventListener("click",function3);

function function1(){
modal.style.display="block";
button.style.display="none";
 document.getElementById("container").style.opacity="0.7"
}
function function2(){
    modal.style.display="none";
    button.style.display="block";
    document.getElementById("container").style.opacity="1";
    
    }
    function function3(event){
        if(event.target===modal){ 
            modal.style.display="none";
            button.style.display="block";
            document.getElementById("container").style.opacity="1";
           
         }
    }
    


