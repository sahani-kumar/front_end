let main = document.querySelector(".containor");
let csr = document.querySelector(".cursor");
   main.addEventListener("mousemove", function(val){
 
    csr.style.left = val.clientX+"px";
    csr.style.top = val.clientY+"px";
})
