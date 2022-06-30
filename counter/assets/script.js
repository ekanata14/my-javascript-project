let count = 0;

const displayCount = document.querySelector("#count");
const btns = document.querySelectorAll(".button");
// const inputIncreaser = parseInt(document.querySelector("#inputIncreaser"));


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count = count - parseInt(document.querySelector("#inputIncreaser").value);
        } else if(styles.contains("increase")){
            count = count + parseInt(document.querySelector("#inputIncreaser").value);
        } else{
            count = 0;
        }

        if(count > 0){
            displayCount.style.color = "green";
        } else if(count < 0){
            displayCount.style.color = "red";
        } else{
            displayCount.style.color = "blue";
        }

        displayCount.textContent = count;
    })
})











// const increaseButton = document.querySelector("#increase");
// const decreaseButton = document.querySelector("#decrease");
// const resetButton = document.querySelector("#reset");
// const displayNumber = document.querySelector("#display")

// increaseButton.addEventListener('click', function(){
//     displayNumber.innerText++;
//     // displayNumber.style.color = "green";
// });

// decreaseButton.addEventListener('click', function(){
//     displayNumber.innerText--;
//     // displayNumber.style.color = "red";
// });

// resetButton.addEventListener('click', function(){
//     displayNumber.innerText = 0;
//     // displayNumber.style.color = "blue";
// });

// if(displayNumber.innertText < "0"){
//     displayNumber.style.color = "red";
// } else if(displayNumber.textContent > "0"){
//     displayNumber.style.innerText = "green";
// }

