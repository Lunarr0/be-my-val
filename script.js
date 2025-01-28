
document.querySelector(".response-btn-container").style.display = "none";

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".env").classList.toggle("open");
  this.textContent = this.textContent.includes("Open")
    ? "Close Letter"
    : "Open Letter";

    document.querySelector(".response-btn-container").style.display = "block";
});

yesBtn = document.querySelector(".yes-btn");
noBtn = document.querySelector(".no-btn");





noOptionList = [
  "No",
  "Is that your final answer?",
  "think again",
  "last chance",
  "Really?",
];

let lastIndex = -1;
let yesBtnEnlarged = 1;


noBtn.addEventListener("click", function () {
    let noBtnRandomOption;
    do {
        noBtnRandomOption = Math.floor(Math.random() * noOptionList.length);
    } while (noBtnRandomOption === lastIndex);
    lastIndex = noBtnRandomOption;
  this.textContent = noOptionList[noBtnRandomOption];
 
  yesBtnEnlarged += 1;
    yesBtn.style.transform = `scale(${yesBtnEnlarged})`;
});

yesBtn.addEventListener("click", function () {
    yesBtnEnlarged = 1;
    yesBtn.style.transform = `scale(${yesBtnEnlarged})`;
    noBtn.textContent = "No";
    
    // Add class to show bears
    document.body.classList.add('show-bears');
    
    // Hide the buttons and envelope
    document.querySelector('.response-btn-container').style.display = 'none';
    document.querySelector('.env').style.display = 'none';
    document.querySelector('.btn').style.display = 'none';
});

