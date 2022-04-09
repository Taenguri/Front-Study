//랜덤 번호 지정
// 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 번호입력에따라 up,down 판단
// reset 누르면 게임 리셋
// 5번의 기회


let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area");
let history = []


playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus",function(){
    userInput.value="";
})


function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}

function play(){

    let userValue = userInput.value;


    if(userValue < 1 || userValue > 100){
        resultArea.textContent="1과 100사이 숫자를 입력해주세요."
        return;
    }


    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다."
        return;
    }
    chances--;
    chanceArea.textContent=`남은 찬스:${chances}번`;
    console.log("chances : " ,chances);


    if(userValue < computerNum){
        resultArea.textContent = "Up!!!!"
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!!!!"
    }else{
        resultArea.textContent = "맞췄습니다.!!!!"
        gameOver=true
    }


    history.push(userValue)


    if(chances < 1){
        gameOver=true
    }

    if(gameOver == true){
        playButton.disabled=true;
    }

}

function reset(){

    userInput.value=""  
    pickRandomNum()
    resultArea.textContent="결과값이 여기 나옵니다.";

}

pickRandomNum();