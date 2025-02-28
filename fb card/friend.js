let text = document.getElementsByClassName("friend_unfriend")[0];
let friend = document.getElementsByClassName("add")[0];
let remove = document.getElementsByClassName("remove")[0];
let check = 0;

friend.addEventListener("click", function(){
    if(check == 0){
        text.innerHTML= " HI friends";
        friend.innerText="friends";
            console.log("we are now friends")
            check=1;
    }
    else{
        text.innerHTML= " BYE friends";
        friend.innerText="Add Friend";
            console.log("we are not friends")
            check=0;
    }
 
})