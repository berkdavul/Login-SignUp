// -------------SUBMIT VALIDATION FUNCTION------------//
let errorIndex = 0;
function toggle_password() {
  let p = document.getElementById("password");
  let p2 = document.getElementById("rePassword");
  if (p.type === "password") {
    p.type = "text";
    p2.type = "text";
  } else {
    p.type = "password";
    p2.type = "password";
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
      errorIndex = 0;
    } else {
      document.getElementById("error_mail").innerHTML =
        "* Lütfen Geçerli Bir Mail Adresi Giriniz";
      document.getElementById("email").style.border = "2px solid red";
    }
  }
}

/// -----------------EMPTY CHECK FUNCTION------------------/////

function checkPassword() {
  let p2 = $("#rePassword").val();
  let p = $("#password").val();

  if (p.length < 3) {
    document.getElementById("error_parola").innerHTML =
      "*Şifreniz en az 3 Karakter İçermeli ";
    document.getElementById("password").style.border = "2px solid red";
    errorIndex++;
  } else {
    document.getElementById("error_parola").innerHTML = "";
    document.getElementById("password").style.border = "none";
  }
}
function checkrePassword() {
  let p2 = $("#rePassword").val();
  let p = $("#password").val();
  if (p != p2) {
    document.getElementById("error_reParola").innerHTML =
      "*Şifreler Eşleşmiyor ";
    document.getElementById("rePassword").style.border = "2px solid red";
    errorIndex++;
  } else {
    document.getElementById("error_reParola").innerHTML = "";
    document.getElementById("rePassword").style.border = "none";
  }
}

function checkName() {
  var n = $("#name").val();

  if (n == "") {
    document.getElementById("error_fname").innerHTML =
      "* Bu Alan Boş Bırakılamaz";
    document.getElementById("name").style.border = "2px solid red";
    errorIndex++;
  } else if (n != "") {
    function isName(name) {
      let result = /^[a-zA-Z]+$/;
      return result.test(name);
    }

    let newResult = isName(n);
    if (newResult == true) {
      document.getElementById("error_fname").innerHTML = "";
      document.getElementById("name").style.border = "none";
    } else {
      document.getElementById("error_fname").innerHTML =
        "* Lütfen Geçerli Bir Karakter Giriniz";
      document.getElementById("name").style.border = "2px solid red";
    }
  }
}

function checkSname() {
  var sn = $("#surname").val();

  if (sn == "") {
    document.getElementById("error_fname").innerHTML =
      "* Bu Alan Boş Bırakılamaz";
    document.getElementById("surname").style.border = "2px solid red";
    errorIndex++;
  } else if (sn != "") {
    function isSname(surname) {
      let result = /^[a-zA-Z]+$/;
      return result.test(surname);
    }

    let newSresult = isSname(sn);
    if (newSresult == true) {
      document.getElementById("surname").style.border = "none";
    } else {
      document.getElementById("error_fname").innerHTML =
        "* Lütfen Geçerli Bir Karakter Giriniz";
      document.getElementById("surname").style.border = "2px solid red";
    }
  }
}

function termsPolicy() {
  let t = document.getElementById("terms_policy");
  if (t.checked == false) {
    errorIndex++;
    document.getElementById("error_terms").innerHTML =
      "*Lütfen Üyelik Sözleşmesini Kabul Edin";

    console.log(errorIndex);
  } else {
    document.getElementById("error_terms").innerHTML = "";
  }
}

document.getElementById("signupform").addEventListener("submit", function (e) {
  checkMail();
  checkPassword();
  checkrePassword();
  checkName();
  checkSname();
  termsPolicy();

  console.log(errorIndex);

  if (errorIndex != 0) {
    e.preventDefault();
  }
});
