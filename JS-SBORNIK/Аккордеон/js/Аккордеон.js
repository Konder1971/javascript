// https://habr.com/ru/post/465623/
// https://caniuse.com/#search=details
// https://jqueryui.com/accordion/
// https://accordion.js.org/
// https://www.jqueryscript.net/accordion/

var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
    var details = event.target.parentNode.children;
    for(i=0;i<details.length;i++) {
      if (details[i].tagName != "DETAILS" || 
         !details[i].hasAttribute('open') || 
         event.target == details[i]) {
         continue;
      }
      details[i].removeAttribute("open");
    }
}

