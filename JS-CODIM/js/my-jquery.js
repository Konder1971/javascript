$("div").addClass("div-class");

$("#general").after($("h1"));
$("#general").hide();

$(function() {
  $("h1").css("color", "red");
});

$("body > *").css({ color: "green", "font-size": "24px" });

$("a[href]").addClass("link");

$(document).ready(function() {
  // $(document).ready()Метод позволяет выполнить функцию , когда документ полностью загружен.
  $(".hide-p").click(function() {
    $("p").hide();
    $("img").show();
  });
});

$(document).ready(function() {
  // $(document).ready()Метод позволяет выполнить функцию , когда документ полностью загружен.
  $("p").on({
    mouseenter: function() {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function() {
      $(this).css("background-color", "lightblue");
    },
    click: function() {
      $(this).hide();
    }
  });
});

$(document).ready(function() {
  $("p").css({ cursor: "pointer" });
  $("p").click(function() {
    $(this).hide();
  });
});

// переключатель класса active
$(function() {
  $("ul li").click(function() {
    $("ul li").removeClass("active");
    $(this).toggleClass("active");
  });
});

$("img").css({ float: "left" });
$("img").show(show);
