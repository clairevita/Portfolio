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
                title: "\".Sombra\", 2017",
                description: ["Unity Game Engine", "C#", "Javascript"]
            },
             portfolio1 = {
                title: "\"Funding Founding\", 2019",
                description: ["HTML", "CSS", "FFMPEG"]
            },
             portfolio2 = {
                title: "\"VRweld\", 2020",
                description: ["HTML", "CSS", "PHP", "MySQL", "WordPress", "Unity Game Engine"]
            },
             portfolio3 = {
                title: "\"UMEWE\", 2020",
                description: ["HTML", "CSS", "JavaScript", "Google Maps API", "Zomato API", "Geocoding API"]
            },
             portfolio4 = {
                title: "\"Work Day Scheduler\", 2020",
                description: ["HTML", "CSS", "JavaScript"]
            },
             portfolio5 = {
                title: "\"What's My Weather?\", 2020",
                description: ["HTML", "CSS", "JavaScript"]
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
                portfolios[index].description.forEach(function(tech){
                    $("#portfolioDescription").append("<li>" + tech + "</li>");
                })
            });
        }

        $(".modal").on("hidden.bs.modal", function(){
            $("#portfolioDescription").empty();
        })



            
        
    



        


 


    
