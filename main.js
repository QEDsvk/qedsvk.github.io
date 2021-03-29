 var MenuItems = document.getElementById("MenuItems");
var Mailer = document.getElementById("contact-form");
var Thanks = document.getElementById("thanks");


var name_input = document.getElementById("name");
var email_input = document.getElementById("email");
var message_input = document.getElementById("message");
var form = document.getElementById("my-form");
var Scroll = document.getElementById("scroll");

MenuItems.style.maxHeight = "0px";
Mailer.style.display = "none";
Thanks.style.display = "none";
function control(){
    if (screen.width>800){
        MenuItems.style.maxHeight = "0px";
        
    }
    if (screen.width>600 && screen.height>750){
        Mailer.style.display = "none";
        Thanks.style.display = "none";
    }
}
function kill(){
    MenuItems.style.maxHeight = "0px";
}
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "300px";
    }
    else
    {
        MenuItems.style.maxHeight = "0px";
    }
}
function send_mail(){
        if (Mailer.style.display == "none"){
            Mailer.style.display = "block";   
            Scroll.style.overflow = "hidden";
            Scroll.style.height = "100%";
            Scroll.style.width = widthOfbody;
        }
}
function kill_mail(){
    if (Mailer.style.display == "block"){
        Mailer.style.display = "none";
    }
    if (Thanks.style.display == "block"){
        Thanks.style.display = "none";
    }
    Scroll.style.overflow = "auto";
    Scroll.style.height = "100%";
    name_input.value = "";
    email_input.value = "";
    message_input.value = "";
    name_input.style.borderColor = "black";
    email_input.style.borderColor = "black";
    message_input.style.borderColor = "black";
}
function submition_thanks(){
    Mailer.style.display = "none";
    Thanks.style.display = "block";
    document.getElementById("thanks-h1").innerHTML = "Thank you for the submition, we are obviously replying in 24 hours.";

}

function submition_error(){
    submition_thanks();
    document.getElementById("thanks-h1").innerHTML = "Ooops... Something went wrong, come and try again later.";
}


async function handleSubmit(event) {
event.preventDefault();
var data = new FormData(event.target);

fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
}).then(response => {

    if(name_input.value == ""){
        name_input.style.borderColor = "red";
    }else{
        name_input.style.borderColor = "black";
    }    
    if(email_input.value == ""){
        email_input.style.borderColor = "red";
    } else{
        email_input.style.borderColor = "black";
    }
    if(message_input.value == ""){
        message_input.style.borderColor = "red";
    }else{
        message_input.style.borderColor = "black";
    }
    if(name_input.value != "" && email_input.value != "" && message_input.value != ""){
        submition_thanks();
        form.reset()
    }
    
}).catch(error => {
    submition_error();
});
}
form.addEventListener("submit", handleSubmit)

