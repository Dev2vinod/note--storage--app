

  
   var home_container =document.querySelector(".home_container")
   var storeResult =document.querySelector("#storeResult")
  var email =document.getElementById("email");
  var password =document.getElementById("password");
  var login_container =document.getElementById("login_container");
  var showEmail =document.getElementById("showEmail");
  var userName =document.getElementById("userName");
  var showname =document.getElementById("showname");
  var textarea =document.getElementById("textarea");



   

 function login(){
    

    if(!email.value||!password.value){
        return alert("enter passwod or email")
    }




    localStorage.setItem("email",email.value)

    showname.innerHTML =`Welcome to My App ${userName.value}!`||"Welcome to you"
   

 checkUserLogin()


    email.value ='';
    password.value= '';
    userName.value ='';
    

 }

 

 function checkUserLogin(){

     let email =localStorage.getItem("email");

     showEmail.innerHTML =email;
     console.log(email,'email hu me')



     if(email){
               home_container.style.display ="block";
               login_container.style.display ="none";
               displayUserNotes()

     }else{
               home_container.style.display ="none";
            login_container.style.display ="block"
     }

     

 }


 checkUserLogin()

 function logout(){
    localStorage.removeItem("email")
    checkUserLogin()
    // localStorage.clear()
 }


 function AddNote(){
   
   var email =localStorage.getItem("email");
   var note =textarea.value;

  

   var obj ={
      email:email,
      note:note
   }
   saveValueToLocalStorage(obj)
 }

  function   saveValueToLocalStorage(obj){
   var notes =localStorage.getItem("notes")
   console.log("notes of your ",notes)
   if(notes){
      notes =JSON.parse(notes)  
      notes.push(obj)
      localStorage.setItem("notes",JSON.stringify(notes))
      console.log("notes  hai ",notes)

   }else{
      notes =[obj]
      localStorage.setItem("notes",JSON.stringify(notes))
   }

   displayUserNotes()
  }

    function displayUserNotes(){
      var notes =localStorage.getItem("notes")
   var email =localStorage.getItem("email");


      if(notes){
         notes =JSON.parse(notes);
         console.log(notes);
         storeResult.innerHTML =''
         notes.forEach((data,i) => {

            if(data.email==email){

               
            let element =`<p class="p-3 bg-purple-400  mx-12 my-3 rounded-lg shadow-lg hover:bg-slate-100 font-sans font-medium flex flex-col"> 
            <span>${data.email}</span>
            ${data.note}</p>

            
            
            `

            storeResult.innerHTML +=element;
            textarea.value =''
            }

         });
      }
    }
 

     displayUserNotes()