var list = document.getElementById("list");
var icon = document.getElementById("menu");
var close = document.getElementById("close");
var ajax = new XMLHttpRequest();


var links =document.querySelectorAll(".b");

// console.log(links)
// console.log(typeof links)
// console.log(links.textcontent)
 var data =[];
var catogry = "health";
 getdata(catogry);

 for(var i =0; i<links.length ; i++)
 {
     links[i].addEventListener("click",function(e)

     {
       catogry = e.target.text;
       console.log(catogry)
       getdata(catogry);
     }
     )
     
 }
function  getdata(catogry) {

    var ajax = new XMLHttpRequest();
ajax.open("GET",""+ catogry+".json");
ajax.send();
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
             data = JSON.parse(ajax.response);
            //  console.log(data)
             displaydata();
        

        }
    }
}


// getdata();
// displaydata();

function displaydata()
{
    var temp =""
    for( var i=0 ;i<data.length;i++ )
    {
        temp+=`
        <div class="item">
        <img src="${data[i].urlToImage}">
        <h2>${data[i].author}</h2>
        <p>${data[i].content}</p>
    </div>
        
        
        `
    }
    document.getElementById("roww").innerHTML=temp;
}













icon.addEventListener("click",showlist)
function showlist() {
    list.style.top="-12px"
    
}
close.addEventListener("click",hidelist)
function hidelist() {
    list.style.top="-300px"
    
}







