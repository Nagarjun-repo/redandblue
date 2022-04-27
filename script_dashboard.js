function manage_popup(id){
    let obj = document.getElementById(id);

    if(obj.style.display == "flex"){
        //close the pop up if open
        obj.style.display = "none";
    }

    else{
        //opne the pop up if open
        obj.style.display = "flex";
    }
}