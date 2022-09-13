var randomno1 = (Math.floor(Math.random()*6))+1;

var randomno2 = (Math.floor(Math.random()*6))+1;

      

    /*
      if(randomno1 === 0)
      {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
      }
      else if(randomno1 === 1)
      {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
      }
      else if(randomno1 === 2)
      {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
      }
      else if(randomno1 === 3)
      {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
      }
      else if(randomno1 === 4)
      {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
      }
      else
      {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
      }

      if(randomno2 === 0)
      {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
      }
      else if(randomno2 === 1)
      {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
      }
      else if(randomno2 === 2)
      {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
      }
      else if(randomno2 === 3)
      {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
      }
      else if(randomno2 === 4)
      {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
      }
      else
      {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
      }

      */




      var randomimg1 = "images/dice"+randomno1+".png";
      var randomimg2 = "images/dice"+randomno2+".png";

      document.querySelector(".img1").setAttribute("src", randomimg1);
      document.querySelector(".img2").setAttribute("src", randomimg2);

      if(randomno1 > randomno2)
      {
        document.querySelector("h1").textContent = "Player1 Won!";
      }
      else if(randomno1 < randomno2) 
      {
        document.querySelector("h1").textContent = "Player2 won!";
      }
      else{
        document.querySelector("h1").textContent = "Draw!";
      }

