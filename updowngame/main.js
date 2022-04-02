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



playButton.addEventListener("click", play)

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
}

function play(){

    let userValue = userInput.value;
    if(userValue < computerNum){
        resultArea.textContent = "Up!!!!"
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!!!!"
    }else{
        resultArea.textContent = "맞췄습니다.!!!!"
    }

}

pickRandomNum();