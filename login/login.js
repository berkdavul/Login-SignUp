// -------------SUBMIT VALIDATION FUNCTION------------//
document.getElementById("loginform").addEventListener("submit", function (e) {
  checkPassword();
  checkMail();

  console.log(errorIndex);

  if (errorIndex != 0) {
    e.preventDefault();
  }
});

var errorIndex = 0;

// -------------PASSWORD VALIDATION FUNCTION------------//

function checkPassword() {
  let p = $("#password").val();
  {
    if (p == "") {
      document.getElementById("error_parola").innerHTML =
        "*Bu Alan Boş Bırakılamaz";
      document.getElementById("password").style.border = "2px solid red";
      errorIndex++;
    } else if (p.length < 3) {
      document.getElementById("error_parola").innerHTML =
        "*Şifreniz en az 3 Karakter İçermeli ";
      document.getElementById("password").style.border = "2px solid red";
      errorIndex++;
    } else {
      document.getElementById("error_parola").innerHTML = "";
      document.getElementById("password").style.border = "none";
      errorIndex = 0;
    }
  }
}
// -------------E-MAIL VALIDATION FUNCTION------------//

function checkMail() {
  var em = $("#email").val();

  if (em == "") {
    document.getElementById("error_mail").innerHTML =
      "* Bu Alan Boş Bırakılamaz";
    document.getElementById("email").style.border = "2px solid red";
    errorIndex++;
  } else if (em != "") {
    function isEmail(email) {
      var pattern =
        /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
      return pattern.test(email);
    }

    let newpattern = isEmail(em);

    if (newpattern == true) {
      document.getElementById("error_mail").innerHTML = "";
      document.getElementById("email").style.border = "none";
    } else {
      document.getElementById("error_mail").innerHTML =
        "* Lütfen Geçerli Bir Mail Adresi Giriniz";
      document.getElementById("email").style.border = "2px solid red";
      errorIndex++;
    }
  }
}

// -------------PASSWORD TOGGLE------------//

function toggle_password() {
  let p = document.getElementById("password");
  if (p.type === "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
}
