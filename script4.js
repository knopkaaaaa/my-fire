function check()
{
var sur = document.getElementById('sur').value;
if(sur.slice(-2)=="ич"||sur.slice(-2)=="на")
document.getElementById('res').innerHTML +=" Нормально" ;
else
document.getElementById('res').innerHTML +=" Неверно" ;

}
