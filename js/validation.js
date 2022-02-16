// window.onload = function () {
//   const forms = document.forms;
//   forms[0].name.value = "お名前を入力してください。";
// };

// function confirmSubmit() {
//   const forms = document.forms;
//   forms[0].onsubmit = function () {
//     const name = forms[0].name.value;
//     if (!(confirm(`${name}さん、本当に送信しますか？`))) {
//       alert("キャンセルされました");
//       return false;
//     }
//   };

// };

// window.onload = confirmSubmit;

// function emailValidation() {

//   const form = document.getElementById("form");
//   // forms.onsubmit = function () {
//   //   if (form.email.value !== form.email_confirm.value) {
//   //     const element = document.createElement("p");
//   //     const message = document.createTextNode("Eメールが一致しません");
//   //     form.appendChild(element);
//   //     element.appendChild(message);
//   //     element.classList.add("alert");
//   //     return false;
//   //   }
//   // };
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     if (form.email.value !== form.email_confirm.value) {
//       const element = document.createElement("p");
//       const message = document.createTextNode("Eメールが一致しません");
//       form.appendChild(element);
//       element.appendChild(message);
//       element.classList.add("alert");
//       setTimeout(function () {
//         form.removeChild(element);
//       }, 3000);
//     } else {
//       form.submit();
//     }
//   });

// };

function emailValidation() {
  const form = document.getElementById('form');
  const emailConfirm = document.getElementById('email_confirm');
  const element = document.createElement('p');
  const message = document.createTextNode("Eメールが一致しません");
  const emailError = document.getElementById('email_message');
  element.appendChild(message);
  element.setAttribute('id', 'alert');
  element.classList.add("alert_color");

  emailConfirm.addEventListener('input', e => {
    if (form.email.value !== form.email_confirm.value) {
      if (!document.getElementById('alert')) {
        // emailError.parentNode.insertBefore(element, emailError);
        emailError.parentNode.insertBefore(element, emailError);
        emailConfirm.classList.add("alert_bg");
      }
    } else {
      emailConfirm.classList.remove("alert_bg");
      element.parentNode.removeChild(element);
    }
  });


  window.onload = emailValidation;
  // form.addEventListener('submit', e => {
  //   e.preventDefault();
  //   if(form.email.value !== form.email_confirm.value) {
  //     const element = document.createElement('p')
  //     const message = document.createTextNode("Eメールが一致しません")
  //     form.appendChild(element);
  //     element.appendChild(message);
  //     element.classList.add("alert");
  //     setTimeout(() => {
  //       form.removeChild(element)
  //     }, 3000)
  //   } else {
  //     form.submit();
  //   }
  // });
}

window.onload = emailValidation;
