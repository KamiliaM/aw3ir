function validation()                                    
{ 
    var nom = document.querySelector("#nom").value;  
    var prenom = document.querySelector("#prenom").value;  
    var date = document.querySelector("#date").value;  
    var adress = document.querySelector("#adress").value;  
    var email = document.querySelector("#email").value;  
var T=true;

    if (nom== "")                                  
    { 
  document.getElementById("error").innerHTML="saisie est obligatoir";
  myForm['nom'].focus();
  alert("mettez votre nom");
  T=false;
  return false;
    }else if(document.getElementById("nom").value.length<2){
        document.getElementById("error").innerHTML="la taille est tres courte";
 
    }




    if (prenom== "")                                  
    { 
  document.getElementById("error").innerHTML="saisie du prenom est obligatoir";
  myForm['prenom'].focus();
  alert("mettez votre prenom");
  T=false;
  return false;
    }

    
    if (date== "")                                  
    { 
  document.getElementById("error").innerHTML="saisie  de la date est obligatoir";
  myForm['date'].focus();
  alert("mettez votre nom");
  T=false;
  return false;
    }

    if (adress== "")                                  
    { 
  document.getElementById("error").innerHTML="saisie de l'adress est obligatoir";
  myForm['adress'].focus();
  alert("mettez votre nom");
  T=false;
  return false;
    }

    if (email== "")                                  
    { 
  document.getElementById("error").innerHTML="saisie de l'email est obligatoir";
  myForm['email'].focus();
  alert("mettez votre nom");
  T=false;
  return false;
    }


  
     document.getElementById("resultat").innerHTML="bienvenue";
     return true;



}

/*
function validation() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("nom").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }

*/

/*


function validation(){
let form=document.getElementById('form');
form.addEventListener('submit',function(e)
{
let input = document.getElementById('nom');
let myRgex = /^[a-zA-Z-\s]*$/;
if(myInput.value.trim() == ""){//trim retir les espaces initiaux et finaux
    let  myError=document.getElementById('error');
    myError.innerHTML= "le cvhamps username est requi ";
    myError.style.color='red';

    e.preventDefault();
}else if(myRgex.test(myInput.value)==false){


    let  myError=document.getElementById('error');
    myError.innerHTML= "le nom doit comporter des lettre - uniquement ";
    myError.style.color='red';

}


});
}*/