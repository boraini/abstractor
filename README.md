# Abstractor.js
Basic web sub-window engine to navigate through the site without leaving the loader page.
```javascript
addEventListener("load", begin);
//Abstract <body> and load contents of test.txt.
function begin() {
  var abs = new Abstractor();
  abs.location.href = "test.txt";
};
//Abstract <div id="container"> and load contents of test.txt.
function begin1() {
  var container = document.getElementById("container") //or document.querySelector("#container")
  var abs = new Abstractor();
  abs.location.href = "test.txt";
};
/*HTML
<body>
  <div id="container">
    <nav class="non-abstract"> <a/> <a/> ... </nav>
  </div>
</body>
*/
//Abstract <div id="container"> and load contents of test.txt. Abstractor never removes .non-abstract, allowing things like this navbar.
begin1;
```
