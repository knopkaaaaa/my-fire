
var l=10;
var t;
function f()
{
	document.getElementById("bl").style.marginLeft=10+"px";
}
function start()
{

	t=setInterval(function(){l+=5;document.getElementById("bl").style.marginLeft=l+"px";},100);
}
function stop()
{
	clearInterval(t);
}
