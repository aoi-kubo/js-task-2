// $(function () {
//   $("#drop_menu_btn").on("click", function () {
//     $("")
//   });
// });

$(function() {
  const btn = $("#drop_menu_btn");
  const menu = $("#drop_menu");
  btn.click(function () {
    menu.toggle("500", "swing");
  });
});
