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
 