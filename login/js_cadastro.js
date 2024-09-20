function cadastrarUsuario() {
    var newEmail = window.document.getElementsByTagName('input')[2].value;
    var newPassword = window.document.getElementsByTagName('input')[4].value;
    
    const user = {
      email: newEmail,
      password: newPassword
    }
  
    var savedAddress = JSON.parse(localStorage.getItem("savedAddress")) || [];
  
    var emailExists = false;
    if(newEmail === ''){
      window.alert("Digite seus dados.");
    } else{
    savedAddress.forEach(function(item) {
      if (item.email === newEmail) {
        emailExists = true;
        return;
      }
    });
  
    if (emailExists) {
      window.alert(newEmail + " já está em uso");
      return;
    }
  
    savedAddress.push(user);
    localStorage.setItem("savedAddress", JSON.stringify(savedAddress));
    window.alert("Cadastro Salvo! Faça o seu Login!");
    window.location.href = "login.html";
  }
    // Limpar campos de entrada
    for (var i = 0; i < 5; i++) {
      window.document.getElementsByTagName('input')[i].value = '';
    }
  }