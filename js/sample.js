// // function getElement() {
// //   // const element = document.getElementsByTagName("h1");
// //   // element[0].innerText = "変更しました"
// //   // console.log(element);
// //   // const element = document.getElementsByTagName("p");
// //   // console.log(element[0].innerText)
// //   // console.log(element[0].innerHTML)
// //   // const element = document.getElementsByTagName("div");
// //   // console.log(element[0].children);
// //   const element = document.getElementById("title");
// //   element.innerText = "idで取得した要素を変更しました"

// // };

// // window.onload = getElement;

// // function addElement() {
  
// //   // const element = document.createElement("p");
// //   // // element.innerText = "JavaScriptはスクリプト言語です";
// //   // const text = document.createTextNode("JavaScriptはスクリプト言語です");
// //   // element.appendChild(text);
// //   // const parentElement = document.getElementsByTagName("div")[0];
// //   // const target = document.getElementsByTagName("p")[0];
// //   // parentElement.insertBefore(element, target);
// //   // parentElement.appendChild(element);
// //   // console.log(element);

// //   const parentElement = document.getElementsByTagName("div")[0];
// //   const target = document.getElementsByTagName("h1")[0];
// //   parentElement.removeChild(target);
// // };

// // window.onload = addElement;

// function addLink() {
//   const element = document.createElement("a");
//   element.setAttribute("href", "https://diveintocode.jp/");
//   element.innerText = "DIVE INTO CODE";
//   const parentElement = document.getElementsByTagName("div")[0];
//   parentElement.appendChild(element);
// };

// // function showLink() {
// //   const link = document.getElementsByTagName("a")[0];
// //   const url = link.getAttribute("href");
// //   console.log(url);
// // }

// function removeLink() {
//   const link = document.getElementsByTagName("a")[0];
//   link.removeAttribute("href");
// }

// window.onload = function () {
//   addLink();
//   removeLink();
// }

// function operateCSS() {
//   const element = document.getElementsByTagName("h1")[0];
//   element.style.color = "red";
// };

// window.onload = operateCSS;

// function clickBtn() {
//   const button = document.getElementById("btn");
//   button.addEventListener("click", function () {
//     alert("クリックされました");
//   });
// };

// window.onload = clickBtn;

// const parent = $("#parent");
// console.log(parent);

// $("#btn").click(function () {
//   alert("クリックされました")
// });

$(function () {
  // $("div").append("<p>jQueryについて</p>");
  $("#btn").on("click", function () {
    $("p").toggle("500", "linear")
  });
});