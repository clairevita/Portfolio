console.log("Welcome to my portfolio! Thanks for taking a look at a console. If you'd like to get in touch with me, head to the Contact page.");

let suit = "♘"

var suitChanger = setInterval(changeSuit, 7000);
function changeSuit() {

    if (suit == "♘") {
        $("#suit").text("Claire ♙ Vita");
        suit = "♙";
        ;
    } else if (suit == "♙") {
        $("#suit").text("Claire ♗ Vita");
        suit = "♗";
    } else if (suit == "♗") {
        $("#suit").text("Claire ♖ Vita");
        suit = "♖";
    } else if (suit == "♖") {
        $("#suit").text("Claire ♔ Vita ");
        suit = "♔";
    } else if (suit == "♔") {
        $("#suit").text("Claire ♘ Vita");
        suit = "♘";
    }
}

const portfolios = [
    portfolio0 = {
        title: "\".Sombra\", 2017",
        description: ["Unity Game Engine", "C#", "Javascript"],
        links: ["https://vimeo.com/315569123"],
        semantic: ["Video Demo"]
    },
    portfolio1 = {
        title: "\"Funding Founding\", 2019",
        description: ["HTML", "CSS", "FFMPEG"],
        links: ["https://pre.vc"],
        semantic: ["Pre.vc"]
    },
    portfolio2 = {
        title: "\"VRweld\", 2020",
        description: ["HTML", "CSS", "PHP", "MySQL", "WordPress", "Unity Game Engine"],
        links: ["http://vrweld.com/demo"],
        semantic: ["vrweld.com"]
    },
    portfolio3 = {
        title: "\"UMEWE\", 2020",
        description: ["HTML", "CSS", "JavaScript", "Google Maps API", "Zomato API", "Geocoding API"],
        links: ["https://oxfordblucher.github.io/Restaurant-Roulette", "https://github.com/oxfordblucher/Restaurant-Roulette"],
        semantic: ["Deployed Site", "Github Repository"]

    },
    // portfolio4 = {
    //     title: "\"Work Day Scheduler\", 2020",
    //     description: ["HTML", "CSS", "JavaScript"],
    //     links: ["https://clairevita.github.io/Scheduler", "https://github.com/clairevita/Scheduler"],
    //     semantic: ["Deployed Site", "Github Repository"]

    // },
    portfolio4 = {
        title: "\"What's My Weather?\", 2020",
        description: ["HTML", "CSS", "JavaScript"],
        links: ["https://clairevita.github.io/WeatherApp", "https://github.com/clairevita/WeatherApp"],
        semantic: ["Deployed Site", "Github Repository"]
    },
    portfolio5 = {
        title: "\"CSC-Visualizer\", 2020",
        description: ["HTML", "CSS", "JavaScript", "Passport", "Node.js", "Sequelize", "MySQL", "Express.js"],
        links: ["https://scorecard-visualizer.herokuapp.com/", "https://github.com/J35RL4R/college-score-card-visualizer"],
        semantic: ["Deployed Site", "Github Repository"]
    }
]

for (i = 0; i < 6; i++) {
    $("#portfolioimg" + i).attr("val", i);
    $("#portfolioimg" + i).click(function () {
        $('.modal').modal('show')
        let index = this.id.slice(12, 13);
        console.log(portfolios[index]);
        $(".modal-title").text(portfolios[index].title);
        $("#portImage").attr("src", "images\\" + index + ".png");
        portfolios[index].description.forEach(function (tech) {
            $("#portfolioDescription").append("<li>" + tech + "</li>");
        });

        for (i = 0; i < portfolios[index].links.length; i++) {
            $("#portfolioLinks").append("<li> <a target=\"_blank\" href=" + portfolios[index].links[i] + ">" + portfolios[index].semantic[i] + "</a></li>");
        }
    });
}

$(".modal").on("hidden.bs.modal", function () {
    $("#portfolioDescription").empty();
    $("#portfolioLinks").empty();
})

















