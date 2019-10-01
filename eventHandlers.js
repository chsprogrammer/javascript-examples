function firstDivAction(){
    document.getElementById("firstDiv").appendChild(document.createElement("p"));
    document.getElementById("firstDiv").lastChild.innerHTML="You clicked me.";

}