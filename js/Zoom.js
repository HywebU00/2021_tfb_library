var curfontsize=12;
var curlineheight=18;

function getCookieVal (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1){
    endstr = document.cookie.length;}
  return document.cookie.substring(offset, endstr);
}

function getFontSize(name) {

  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  //alert(" document.cookie==>>>"+document.cookie);
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg){
	  var size=getCookieVal (j);
	  setFont(size);
	  return size;
     }
	  i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break; 
  }
  return null;
  
}

function setFont (size) {
	curfontsize = size;
	document.getElementById('aaa').style.fontSize=size+'pt';
}


function fontZoomA(){
  if(curfontsize>8){
    document.getElementById('aaa').style.fontSize=(--curfontsize)+'pt';
    document.getElementById('aaa').style.lineHeight=(--curlineheight)+'pt';
	setFontsize (true,curfontsize);
  }
}
function fontZoomB(){
  if(curfontsize<64){

    document.getElementById('aaa').style.fontSize=(++curfontsize)+'pt';
    document.getElementById('aaa').style.lineHeight=(++curlineheight)+'pt';
	setFontsize (true,curfontsize);
  }
}
function setFontsize (fontsize,size) {
  //document.cookie = (fontsize) ? "fontsize="+size : "";
  createCookie("fontsize", size, 365);
  //alert(" document.cookie==>>>"+document.cookie);
}
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

