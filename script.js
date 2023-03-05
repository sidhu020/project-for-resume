function run() 
{

  let htmlcode = document.getElementById("html-code").value;
  let csscode = document.getElementById("css-code").value;
  let jscode = document.getElementById("js-code").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML =
  htmlcode + "<style>" + csscode + "</style>";
  output.contentWindow.eval(jscode);
}



function js()
{
  var js = document.getElementById('js-code'),
button = document.getElementById('Save');

function generatePDF(){
  var doc = new jsPDF();

  doc.setFontSize(14);
  doc.text(20, 20, js.value);
  doc.save('js.pdf');
}
button.addEventListener('click',generatePDF);
}

function css()
{
  var css = document.getElementById('css-code'),
button = document.getElementById('Save');

function generatePDF(){
var doc = new jsPDF();

doc.setFontSize(14);
doc.text(20, 20, css.value);
doc.save('css.pdf');
}
button.addEventListener('click',generatePDF);
}

function html()
{
  var html = document.getElementById('html-code'),
button = document.getElementById('Save');

function generatePDF(){
var doc = new jsPDF();

doc.setFontSize(14);
doc.text(20, 20, html.value);
doc.save('html.pdf');
}
button.addEventListener('click',generatePDF);
}
