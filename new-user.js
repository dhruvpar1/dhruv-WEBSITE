
var div1,div2,div3,div4,div6,div5;
var btt1,btt2,btt3;
var character1 =document.getElementById('character1');
function f1(){

 document.getElementById('main-container').style.display = 'none';

var x = document.createElement("IMG");
  x.setAttribute("src", "character.png");
   x.setAttribute("id", "character1");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
  setTimeout(hii, 4000)

}


const hii = function(){
  div1 = document.createElement("div");

div1.innerHTML = "Hii I Am John And I will Guide You with this websites";
div1.id="div1"

document.getElementById("main").appendChild(div1);
  var b = document.body;


    var x = document.createElement("button");
  var t = document.createTextNode("button 2");

  x.id = 'bt2';
  x.appendChild(t);
  b.appendChild(x);

   btt1 = document.getElementById('bt1');  
  btt1.style.display='none';

   btt2 = document.getElementById('bt2');
  btt2.addEventListener('click', function() {
     div2 = document.createElement("div");

div2.innerHTML = "Once You select your mood you will be redirected to that page";
div2.id="div1"

document.getElementById("main").appendChild(div2);

button3();
});


};

function button3(){
  var b1 = document.body;
  var btt2 = document.getElementById('bt2');
  btt2.style.display='none';


var x1 = document.createElement("button");
  var t1 = document.createTextNode("button 3");

  x1.id = 'bt3';
  x1.appendChild(t1);
  b1.appendChild(x1);

   btt3= document.getElementById('bt3');
  btt3.addEventListener('click', function() {
    div4 = document.createElement("div");

div4.innerHTML = "Let me show you With example Here I selecting Relax";
div4.id="div4"

document.getElementById("main").appendChild(div4);
btt3.style.display='none'

setTimeout(down, 3000)

});

}
function down(){
  var smt= document.getElementById('smooth');

smt.click();
div1.style.display='none'
div2.style.display='none'
btt2.style.display='none'
document.getElementById('character1').style.display = 'none';
document.getElementById("main").style.display = 'none';

div4.style.display='none'
var x = document.createElement("IMG");
  x.setAttribute("src", "character.png");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  x.id='character2';
  document.body.appendChild(x);
  setTimeout(wait, 4000)
  setTimeout(wait_over, 8000)

 
}
function wait(){
   div6 = document.createElement("div");

div6.innerHTML = "Here is your video";
div6.id="div6"

document.getElementById("new-window").appendChild(div6);

}
function wait_over(){
  div6.style.display='none'

document.getElementById("character2").style.display='none'
document.getElementById("div6").style.display='none'
}