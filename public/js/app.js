function table(){
var tableNumber = prompt("For Table","Enter any Table Number");
var num;

for(num=1 ; num<=10 ; num++)
{
    document.write(tableNumber +"X" + num + "=" + tableNumber*num + "<br>");

}
    document.write("<br><a href='index.html'><button>Go Back</button></a>");

};




                /* Task-2*/

function rightAngle()
{
    document.write("<h2>Task-2</h2><br/>");
    for(var i=1;i<=8; i++)
    {       
        for(var j=0;j<i; j++)
        {
            document.write("*");
        }  
    document.write("<br/>");
}
    document.write("<br><a href='index.html'><button>Go Back</button></a>");
};





                 /* Task-3*/
function diamond()
{
    document.write("<h2>Task-3</h2><br/>");

    for(var i=1;i<=6; i++)
    {
        for(var j=i;j < 15; j++)
        {
            document.write("&nbsp&nbsp");
        }
        for( var k=1;k <=(2*i-1) ; k++)
        {
        document.write("*");
        }
    document.write("</br>");

    }

    for(var i=6;i >=1; i--)
    {
        for(var j=i;j < 15; j++)
        {
        document.write("&nbsp&nbsp");
        }
        for(var k=1;k <=(2*i-1) ; k++)
        {
        document.write("*");
        }
        document.write("</br>");
    }
document.write("<br><a href='index.html'><button>Go Back</button></a>");
};

// for (var i=1 ; i<=5 ; i++)
// {
//     for(var j=i ; j<=1 ; j++);
//     {
//         document.write("^");
//     }
//     for(var k = 1 ; k<=(2*i-1) ; k++)
//     {
//         document.write("*")
//     }
//     document.write("<br>");
// }


// for (var i=5 ; i>=1 ; i--)
// {
//     for(var j=i ; j<=1 ; j++);
//     {
//         document.write("^");
//     }
//     for(var k = 1 ; k<=(2*i-1) ; k++)
//     {
//         document.write("*")
//     }
//     document.write("<br>");
// }

