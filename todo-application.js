function addtodo(){
    var item=document.getElementById("todo-item");
    console.log(item.value)
    if(item.value==""){
        alert("Task Box Is Empty!")
    }
    else{
        var li=document.createElement("li");
    console.log(li);
    li.setAttribute("class","list-group-item")
    var value=document.createTextNode(item.value);
    li.appendChild(value);
    item.value="";



    // var btn=document.createElement("button");
    // var btntext=document.createTextNode("Delete");
    // btn.appendChild(btntext);
    // btn.setAttribute("onclick","removeitem(this)");
    // li.appendChild(btn);

       
    
    // var editbtn=document.createElement("button");
    // var editbtntext=document.createTextNode("Edit");
    // editbtn.appendChild(editbtntext);
    // editbtn.setAttribute("onclick","edititem(this)");
    // li.appendChild(editbtn);

    var image2=document.createElement("img");
    image2.setAttribute("src","delete.jpg");
    image2.setAttribute("id","delete-logo");
    image2.setAttribute("onclick","removeitem(this)")
    li.appendChild(image2);


    var image=document.createElement("img");
    image.setAttribute("src","edit.jpg");
    image.setAttribute("id","edit-logo");
    image.setAttribute("onclick","edititem(this)")
    li.appendChild(image);

    



    var line=document.getElementById("list");
    line.appendChild(li);
    }
    
}


function removeitem(touseef){
    touseef.parentNode.remove();
    console.log(touseef.parentNode)
}


function edititem(touseef){
    var val=prompt("Enter New Todo task");
    touseef.parentNode.firstChild.nodeValue=val;
    console.log(touseef.parentNode.firstChild);
}

function deleteall(){
        var choice=confirm("Re-confirm You wanna delete all tasks!");
        console.log(choice);
    if(choice===true){
        var page=document.getElementById("list");
        page.remove();
    }
    
}