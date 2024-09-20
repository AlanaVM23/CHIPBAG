function loginUsuario() {
  var email0 = window.document.getElementsByTagName('input')[0].value;
  var password0 = window.document.getElementsByTagName('input')[1].value;

  var savedAddress = JSON.parse(localStorage.getItem("savedAddress")) || [];

  var emailExists = false;
  var passwordExists = false;
  savedAddress.forEach(function(item) {
    if (item.email === email0 && item.password === password0) {
      emailExists = true;
      passwordExists = true;
      return;
    }
  });

  if (emailExists && passwordExists) {
    window.location.href = "../inicio/pg_inicial.html";
  } else{
    window.alert("Senha ou email inválidos.");
  }

  for (var i = 0; i < 2; i++) {
    window.document.getElementsByTagName('input')[i].value = '';
  }
}