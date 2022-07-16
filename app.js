const colors = ["green", "rgba(180, 17, 200, 0.5)", "red", "rgba(133,122,200)", "pink", "#f15025"];
const btn = document.getElementById('btn');

const color = document.querySelector('.color')
const navLink = document.querySelector('.nav-link')
const bgColorText = document.querySelector('.bgcolor-text');


btn.addEventListener('click', function(){
    const randomNumber = getRanNum();
    console.log(randomNumber)
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
    // document.style.bgColorText=backgroundColor[randomNumber];
    color.style.color = colors[randomNumber];
    navLink.style.color = colors[randomNumber];
    bgColorText.style.color = colors[randomNumber];
}) 
const getRanNum = () => {
    return Math.floor(Math.random()*colors.length); 
}