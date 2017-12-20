/function valida_login(){
  //Validamos un campo o área de texto, por ejemplo el campo usuario

  if (document.form.username.value=='Lucile' && document.form.password.value=='123'){
         document.form.submit("index.html");
        /*location="index.html"*/
      }
      else{
           alert("Por favor ingrese, nombre de usuario y contraseña correctos.");
      }
}
