document.getElementById("Calc").onclick=function (ev) {
    var MsInOneDay = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1=new Date(document.getElementById("date1").value)
    var date2=new Date(document.getElementById("date2").value)

    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)

    // Convert back to days and return
    document.getElementById("res").value= Math.round(difference_ms/MsInOneDay)
}
var activeDate1=false;
var activeDate2=false;
document.getElementById("date1").onclick=function (ev) {
    activeDate2=false;
    activeDate1=true;
}
document.getElementById("date2").onclick=function (ev) {
    activeDate1=false;
    activeDate2=true;
}
document.getElementById("1").onclick=function (ev) {
    if(activeDate1==true)
    {
        document.getElementById("date1").value+=document.getElementById("1").innerText;
    }
    else if(activeDate2==true)
    {
        document.getElementById("date2").value+=document.getElementById("1").innerText;
    }
}
document.getElementById("2").onclick=function  (ev) {
    if(activeDate1==true)
    {
        document.getElementById("date1").value+=document.getElementById("2").innerText;
    }
    else if(activeDate2==true)
    {
        document.getElementById("date2").value+=document.getElementById("2").innerText;
    }
}
document.getElementById("3").onclick=function (ev) {
    if(activeDate1==true)
    {
        document.getElementById("date1").value+=document.getElementById("3").innerText;
    }
    else if(activeDate2==true)
    {
        document.getElementById("date2").value+=document.getElementById("3").innerText;
    }
}
document.getElementById("4").onclick=function (ev) {
    if(activeDate1==true)
    {
        document.getElementById("date1").value+=document.getElementById("4").innerText;
    }
    else if(activeDate2==true)
    {
        document.getElementById("date2").value+=document.getElementById("4").innerText;
    }
}
document.getElementById("5").onclick=function (ev) {
    if(activeDate1==true)
    {
        document.getElementById("date1").value+=document.getElementById("5").innerText;
    }
    else if(activeDate2==true)
    {
        document.getElementById("date2").value+=document.getElementById("5").innerText;
    }
}
document.getElementById("6").onclick=function (ev) {
    if(activeDate1==true)
    {
        document.getElementById("date1").value+=document.getElementById("6").innerText;
    }
    else if(activeDate2==true)
    {
        document.getElementById("date2").value+=document.getElementById("6").innerText;
    }
}
document.getElementById("7").onclick=function (ev) {
    if(activeDate1==true)
    {
        document.getElementById("date1").value+=document.getElementById("7").innerText;
    }
    else if(activeDate2==true)
    {
        document.getElementById("date2").value+=document.getElementById("7").innerText;
    }
}
document.getElementById("8").onclick=function (ev) {
    if(activeDate1==true)
    {
        document.getElementById("date1").value+=document.getElementById("8").innerText;
    }
    else if(activeDate2==true)
    {
        document.getElementById("date2").value+=document.getElementById("8").innerText;
    }
}
document.getElementById("9").onclick=function (ev) {
    if(activeDate1==true)
    {
        document.getElementById("date1").value+=document.getElementById("9").innerText;
    }
    else if(activeDate2==true)
    {
        document.getElementById("date2").value+=document.getElementById("9").innerText;
    }
}
document.getElementById("0").onclick=function (ev) {
    if(activeDate1==true)
    {
        document.getElementById("date1").value+=document.getElementById("0").innerText;
    }
    else if(activeDate2==true)
    {
        document.getElementById("date2").value+=document.getElementById("0").innerText;
    }
}
document.getElementById("-").onclick=function (ev) {
    if(activeDate1==true)
    {
        document.getElementById("date1").value+=document.getElementById("-").innerText;
    }
    else if(activeDate2==true)
    {
        document.getElementById("date2").value+=document.getElementById("-").innerText;
    }
}