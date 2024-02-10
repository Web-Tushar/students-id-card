let Name_input = document.querySelector("#Name");
let email_input = document.querySelector("#email");

let phnnumner_input = document.querySelector("#phnnumner");
let Address_input = document.querySelector("#Address");

let submitbtn = document.querySelector(".submit");
let reset = document.querySelector(".reset");

let reg_card_box = document.querySelector(".reg_card_box");

let outputbox = document.querySelector(".outputbox");
let name_output = document.querySelector(".name_output");
let email_output = document.querySelector(".email_output");
let phnnumner_output = document.querySelector(".phnnumner_output");
let Address_output = document.querySelector(".Address_output");

let name_err = document.querySelector(".name_err");
let email_err = document.querySelector(".email_err");
let number_err = document.querySelector(".number_err");
let Address_err = document.querySelector(".Address_err");


submitbtn.addEventListener("click",function(){
     if(Name_input.value == ""){
          name_err.innerHTML = "please enter your name";
          Name_input.style.border = "2px dashed red";

     }else if(email_input.value == ""){
          email_err.innerHTML = "please enter your name";
          email_input.style.border = "2px dashed red";

     }else if(phnnumner_input.value == ""){
          phnnumner_input.innerHTML = "please enter your name";
          phnnumner_input.style.border = "2px dashed red";

     }else if(Address_input.value == ""){
          Address_input.innerHTML = "please enter your name";
          Address_input.style.border = "2px dashed red";

     }else{
          name_output.innerHTML = "Name : " + Name_input.value;
          name_err.innerHTML = "";
          Name_input.style.border = "";

          email_output.innerHTML = "Email : " + email_input.value;
          email_err.innerHTML = "";
          email_input.style.border = "";

          phnnumner_output.innerHTML = "Number : " + phnnumner_input.value;
          number_err.innerHTML = "";
          phnnumner_input.style.border = "";

          Address_output.innerHTML = "Address : " + Address_input.value;
          Address_err.innerHTML = "";
          Address_input.style.border = "";
          reg_card_box.style.display = "block";

     }
})

reset.addEventListener("click",function(){
     Name_input.value = "";
     email_input.value = "";
     phnnumner_input.value = "";
     Address_input.value = "";
     reg_card_box.style.display = "none";
     name_err.innerHTML = "";
     Name_input.style.border = "";
     

})
