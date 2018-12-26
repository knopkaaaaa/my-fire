function $()
{ var elements = new Array();
    for (var i = 0; i < arguments.length; i++)
    { var element = arguments[i];
        if (typeof element == 'string')
        element = document.getElementById(element);
        if (arguments.length == 1)
            return element;
        elements.push(element);
    }
    return elements; }


$("b").onclick=function(event){
    if($("combo").selectedIndex==0)
    {
        $("img").src="ch.png"
        $("link").innerText="Черви"
    }
    else if($("combo").selectedIndex==1)
    {
        $("img").src="b.jpeg"
        $("link").innerText="Бубна"
    }
    else if($("combo").selectedIndex==2)
    {
        $("img").src="p.png"
        $("link").innerText="Пика"
    }
    else if($("combo").selectedIndex==3)
    {
        $("img").src="tr.png"
        $("link").innerText="Трефа"
    }
};
$("img").onmouseover=function (event) { $("texta").value="Привет мир!!!" };
$("img").onmouseout=function (event) {$("texta").value="" };