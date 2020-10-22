    console.log("Welcome to my portfolio! Thanks for taking a look at a console. If you'd like to get in touch with me, head to the Contact page.");

   let suit = "♘"

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
 
        const portfolios = [
             portfolio0 = {
                title: "\".Sombra\", 2017"
            },
             portfolio1 = {
                title: "\"Funding Founding\", 2019"
            },
             portfolio2 = {
                title: "\"VRweld\", 2020"
            },
             portfolio3 = {
                title: "\"UMEWE\", 2020"
            },
             portfolio4 = {
                title: "\"Work Day Scheduler\", 2020"
            },
             portfolio5 = {
                title: "\"What's My Weather?\", 2020"
            }
        ]

    
        for (i=0; i<6; i++){
            $("#portfolioimg"+i).attr("val", i);
            $("#portfolioimg"+i).click(function(){
                $('.modal').modal('show')
                let index = this.id.slice(12, 13);
                console.log(portfolios[index]);
                $(".modal-title").text(portfolios[index].title);
                $("#portImage").attr("src", "images\\"+index+".png");
            });
        }



            
        
    



        


 


    
