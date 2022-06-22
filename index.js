function refresh() {
    var rimg1 = Math.floor(Math.random()*6)+1;
    var rimg2 = Math.floor(Math.random()*6)+1;
    
    document.querySelector(".img1").setAttribute("src", "images/dice" + rimg1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + rimg2 + ".png");

    if(rimg1>rimg2) {
        
        document.querySelector("h1").innerHTML = "🚩Player1 Wins";
    }
    else if(rimg1<rimg2) {
        
        document.querySelector("h1").innerHTML = "Player2 Wins 🚩";
    }
    else if(rimg1===rimg2) {
       
        document.querySelector("h1").innerHTML = "🎌Draw🎌";
    }
}

