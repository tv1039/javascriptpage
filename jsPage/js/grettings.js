 const form = document.querySelector(".js-form"),
       input = form.querySelector("input"),
       greeting = document.querySelector(".js-greetings");

       const User_Ls = "currentUser",
             SHOWING_ON = "showing";

        function savaName(text){
                 localStorage.setItem(User_Ls, text);
        }

        function handleSubmit(event){
            event.preventDefault();
            
        const currentValue = input.value;
            paintGreetings(currentValue)
            savaName(currentValue)
        }

        function askForName(){
            form.classList.add(SHOWING_ON);
            form.addEventListener("submit", handleSubmit)
        }
        
        function paintGreetings(text){
           form.classList.remove(SHOWING_ON);
           greeting.classList.add(SHOWING_ON);
           greeting.innerText = `Hello ${text}`;
       }

        function loadName(){
           const currentUser = localStorage.getItem(User_Ls);
           if(currentUser === null){
            askForName();
           }else{
            paintGreetings(currentUser);
           }
       }

 function  init() {
    loadName();
 }
 init();