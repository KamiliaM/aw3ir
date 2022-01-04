window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" )//inspecter console on aura l'affichage de DOM ready
     
     // Y mettre le code Javascript pour valider tous les champs du formulaire
 };
 function calcNbChar(name) {
    document.querySelector(`#${name} + span`).textContent = document.querySelector(`#${name}`).value.length;
  }
  document.querySelector("table tbody").innerHTML =
  document.querySelector("table tbody").innerHTML +
  "<tr><td>" +
  nom +
  "</td><td>" +
  prenom +
  "</td><td>";
// CODE à compléter pour insérer les autres données
    function validateEmail(mail) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(mail).toLowerCase());
        }
         
    function validation()
    {
        var name = document.getElementById("name").value;   
        var prenom = document.getElementById("prenom").value; 
        var datenaissance = document.getElementById("datenaissance").value;
        var adresse = document.getElementById("adresse").value;            
        var mail = document.getElementById("mail").value;  
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        var myModal1 = new bootstrap.Modal(document.getElementById('myModal1'));
        let dateNow = Date.now()
    
        document.getElementById("error").style.display = 'none' ;                                
        document.getElementById("resultat").style.display = 'none';                                 
    
         
        //nom
        if (name=="")                                  
        { 
            
            myModal.show();
            //document.getElementById("error").innerHTML="La saisie du nom est obligatoire"; 
            //document.getElementById("error").style.display = 'block';                                
            // myForm["name"].focus(); // Focus
         
           
            return false; 
            
        }else
         if(name.length<5)
        {
            document.getElementById("error").innerHTML="les champs nom doivent avoir 5 caractères mininum";
            document.getElementById("error").style.display = 'block';
            return false; 
        }
          
        //prenom
        if ( prenom== "")                                  
        { 
            myModal.show();
            // document.getElementById("error").innerHTML="La saisie du prenom est obligatoire";    
            // document.getElementById("error").style.display = 'block' ;                          
            //myForm["prenom"].focus(); // Focus
                   
            
           
            return false; 
        } else
            if(prenom.length<5)
        {
            document.getElementById("error").innerHTML="les champs prenom doivent avoir 5 caractères mininum";
            document.getElementById("error").style.display = 'block';
            return false; 
        }
        //date de  naissance
        if ( datenaissance== "")                                  
        { 
            myModal.show();
            //document.getElementById("error").innerHTML="La saisie de la date de naissance est obligatoire";  
           // document.getElementById("error").style.display = 'block' ;                              
           // myForm["datenaissance"].focus(); // Focus
                     
            return false;

        }
        //verifier si la date est dans le futur
        let dateNaissance = new Date(datenaissance); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
        let dateNaissanceTimestamp = dateNaissance.getTime();
        let nowTimestamp = Date.now()
        if(dateNaissanceTimestamp>nowTimestamp)
        {
            document.getElementById("error").innerHTML="Erreur la date est dans le futur";  
            document.getElementById("error").style.display = 'block' ;
            return false; 
        }
    
        //adresse
        if ( adresse== "")                                  
        { 
            myModal.show();
            //document.getElementById("error").innerHTML="La saisie de l'adresse est obligatoire";   
            //document.getElementById("error").style.display = 'block';                           
            //myForm["adresse"].focus(); // Focus
        
           
            return false; 
        } else
            if(adresse.length<5)
        {
            document.getElementById("error").innerHTML="les champs addresse doivent avoir 5 caractères mininum";
            document.getElementById("error").style.display = 'block';
            return false; 
        }
    
    
    
        //adresse mail
        if ( mail== "")                                  
        { 
            myModal.show();
            document.getElementById("error").innerHTML="La saisie du mail est obligatoire";  
            document.getElementById("error").style.display = 'block' ;                             
            myForm["dmail"].focus(); // Focus
            
           
            return false; 
        } else
            if(mail.length<5)
        {
            document.getElementById("error").innerHTML="les champs mail doivent avoir 5 caractères mininum";
            document.getElementById("error").style.display = 'block';                                 
    
            return false; 
        }else if(!validateEmail(mail))
        {

            document.getElementById("error").innerHTML="Synthaxe du mail est incorrecte";
            document.getElementById("error").style.display = 'block';                                 
    
            return false; 
        }
       
     
      document.getElementById("resultat").innerHTML="Bienvenue"+" "+name+" "+prenom+" Vos Informations sont Validées" ; 
      document.getElementById("resultat").style.display = 'block' ;    
      document.querySelector(".modal-title1").textContent ="Bienvenue"+" "+ prenom;
      document.querySelector(".adress").textContent =" "+ adresse;

      document.querySelector(".modal-body .date").textContent = dateNaissance.toLocaleDateString();
      document.querySelector(".modal-body img").src = ' https://maps.googleapis.com/maps/api/staticmap?markers='+adresse+'&zoom=7&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg ';
  
   
      //document.querySelector(".modal-title .prenom").textContent ="Bienvenue"+"  "+prenom+" Vos Informations sont Validées" ; 

      myModal1.show();
     return true;
    

    
    
  
};
