    console.log("Welcome to my portfolio! Thanks for taking a look at a console. If you'd like to get in touch with me, head to the Contact page.");
// $("#suit").hover(changeSuit(), 20);
   let suit = "♘"
    // function changeSuit(){
        var suitChanger = setInterval(changeSuit ,10000);
        function changeSuit() {
            
            if(suit == "♘"){
                $("#suit").text("Claire ♙ Vita");
                suit = "♙";
                ;
            } else if (suit == "♙"){
                $("#suit").text("Claire ♗ Vita");
                suit = "♗";
            } else if (suit == "♗"){
                $("#suit").text("Claire ♖ Vita");
                suit = "♖";
            } else if (suit == "♖"){
                $("#suit").text("Claire ♔ Vita ");
                suit = "♔";
            } else if (suit == "♔"){
                $("#suit").text("Claire ♘ Vita");
                suit = "♘";
            }
        }

            
        
    



        


 


    
