function visible(e){
    console.log(e.target.style.display)
    // var x = e.target.style.display;
    // if(x=="none")
    //     x="block";
    // else
    //     x="none";
        e.target.style.display = "block";
}
function invisible(e){
    e.target.style.display = "none";
}