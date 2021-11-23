function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validation() {
  var nom = document.querySelector("#nom").value;
  var prenom = document.querySelector("#prenom").value;
  var date = document.querySelector("#date").value;
  var adress = document.querySelector("#adress").value;
  var email = document.querySelector("#email").value;


document.getElementById("error").style.display='none';
document.getElementById("resultat").style.display='none';


  if (nom == "") {
    document.getElementById("error").innerHTML = "saisie est obligatoir";
    document.getElementById("error").style.display='block';

    myForm['nom'].focus();
    alert("mettez votre nom");
    return false;
  } else if (document.getElementById("nom").value.length < 2) {
    document.getElementById("error").innerHTML = "la taille est tres courte";
    document.getElementById("error").style.display='block';


  }




  if (prenom == "") {
    document.getElementById("error").innerHTML = "saisie du prenom est obligatoir";
    document.getElementById("error").style.display='block';

    myForm['prenom'].focus();
    alert("mettez votre prenom");
    return false;
  }


  if (date == "") {
    document.getElementById("error").innerHTML = "saisie  de la date est obligatoir";
    document.getElementById("error").style.display='block';

    myForm['date'].focus();
    alert("mettez votre nom");
    return false;
  }

  if (adress == "") {
    document.getElementById("error").innerHTML = "saisie de l'adress est obligatoir";
    document.getElementById("error").style.display='block';

    myForm['adress'].focus();
    alert("mettez votre nom");
    return false;
  }

if(email == ""||email.length<5)
  {
      document.getElementById("error").innerHTML="les champs mail doivent avoir 5 caractères mininum";
      document.getElementById("error").style.display = 'block';                                 

      return false; 
  }else if(!validateEmail(email))
  {

      document.getElementById("error").innerHTML="Synthaxe du mail est incorrecte";
      document.getElementById("error").style.display = 'block';                                 

      return false; 
  }
 



  document.getElementById("resultat").innerHTML = "bienvenue";
  document.getElementById("resultat").style.display='block';

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