function calculation()
{
var P = parseInt(document.getElementById('P').value)
if(P>25)
{
	P=25;
	document.getElementById('P').value=25;
}
else if(P<=0)
{
	P=1;
	document.getElementById('P').value=1;
}
var vklad=1000.0;
var res=0.0;
	var months=0;
while(res<=1100)
{
	months++;
	res=vklad*Math.pow(1+(P/100),months)
}		
document.getElementById('month').innerHTML = months+" месяцев";
document.getElementById('totalRes').innerHTML = res;
}
