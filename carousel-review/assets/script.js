const profiles = [
    Dream = {
        img : "assets/images/DSC_0326.JPG",
        title : "Dream",
        desc : "Hello, my name is Dream, I'm a fullstack web developer, programmer, data analyst in this company. I'm grateful to be here."
    },

    Gakure = {
        img: "assets/images/DSC_0327.JPG",
        title: "Gakure",
        desc : "Hello My name is Gakure, I'm a gamer, game developer,  3D Artist. I'm really excited joining this company."
    },

    dreamerdream = {
        img: "assets/images/DSC_0328.JPG",
        title : "dreamerdream",
        desc : "What's up everyone, My name is dreamerdream, I'm the CEO of this company. I lead all the company projects."
    }
]


let txt = "";

const carouselItem = document.querySelector("#carousel-item")
const carouselImg = document.querySelector("#carousel-img");
const carouselTitle = document.querySelector("#carousel-name");
const carouselDesc = document.querySelector("#carousel-desc");

for(let x in profiles){
    if(profiles.hasOwnProperty(x)){
        // console.log(x);
        console.log(profiles[x].img);
        carouselImg.setAttribute("src", profiles[x].img);
        carouselTitle.innerHTML = profiles[x].title;
        carouselDesc.innerHTML = profiles[x].desc;
    }
}

// for(let x in profiles){
//     if(profiles.hasOwnProperty(x)){
//         // console.log(x);
//         console.log(profiles[x].img);
//         carouselImg.setAttribute("src", profiles[x].img);
//         carouselTitle.createElement('h2').innerHTML = profiles[x].title;
//         carouselDesc.createElement('p').innerHTML = profiles[x].desc;

//         carouselItem.appendChild(carouselTitle);
//         carouselItem.appendChild(carouselDesc);
//     }
// }

// for(let x in profiles.Dream){
//     let res = "";
//     res += profiles.Dream[x];
//     console.log(res);
// }

// console.log(profiles[0].title);



const arrows = document.querySelectorAll(".arrow");




// For Each to run the arrow
arrows.forEach(function(arw){
    arw.addEventListener('click', (e)=>{
        const way = e.currentTarget.classList;
        if(way.contains("left")){
            for(let x in profiles){
                // if(profiles.hasOwnProperty(x)){
                //     console.log("switch");
                //     console.log(profiles[x].img);
                //     carouselImg.setAttribute("src", profiles[x].img);
                //     carouselTitle.innerText = profiles[x].title;
                //     carouselDesc.innerText = profiles[x].desc;
                // }
            }
        } else{
            document.querySelector(".carousel-item").style.backgroundColor = "green";
        }
    });
});

