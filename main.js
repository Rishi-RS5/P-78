var images=["donald.jpg","dor.jpg","mickey.jpg","Tom-and-Jerry.jpg"];
            var names=["Donald Duck","Doraemon","Mickey Mouse","Tom And Jerry"];
                document.getElementById("tony").src=images[0];
                document.getElementById("q").innerHTML=names[0];
              var  i = 0;
function Next() {
i++;
    if(i >=4)
{
    i = 0
}
var updatedImage = images[i];
var updatedName = names[i];
                document.getElementById("tony").src=updatedImage;
                document.getElementById("q").innerHTML=updatedName;
                
}