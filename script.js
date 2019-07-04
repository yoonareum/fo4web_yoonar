// 뽑기왕 랜덤 아이템 데이터 배열
var getResult= new Array();
getResult[0] = "▶플래티넘◀\n[TC 업데이트] 200명 지명 상자(8강)";
getResult[1] = "▶플래티넘◀\n TC 85+ 강화 선수팩 (5강)";
getResult[2] = "▶플래티넘◀\n BP카드 100,000,000";
getResult[3] = "▶플래티넘◀\nMan City ICON 선수팩";
getResult[4] = "▷골드◁\n [TC 업데이트] OVR 88+ 강화 선수팩 (5강)";
getResult[5] = "▷골드◁\n TC, GR 다이아 강화 선수팩 (5강)";
getResult[6] = "▷골드◁\n BP카드 50,000,000";
getResult[7] = "▷골드◁\n MC ICON, TC 포함 OVR 93+ 선수팩";
getResult[8] = "▷실버◁\n[TC 업데이트] OVR 80+ 강화 선수팩 (5강)";
getResult[9] = "▷실버◁\nTC 클래스 OVR 88+ 선수팩";
getResult[10] = "▷실버◁\nBP카드 10,000,000";
getResult[11] = "▷실버◁\nMC ICON, TC 포함 OVR 88+ 선수팩";
getResult[12] = "▷브론즈◁\n[TC 업데이트] OVR 80+ 강화 선수팩 (2~5강)";
getResult[13] = "▷브론즈◁\nTC 클래스 OVR 83+ 선수팩";
getResult[14] = "▷브론즈◁\nBP카드 5,000,000";
getResult[15] = "▷브론즈◁\nMC ICON, TC 포함 OVR 80+ 선수팩";

// 슈팅왕 랜덤 결과 배열
var getImg= new Array();
getImg[0] = "goal_left.gif";
getImg[1] = "goal_right.gif";
getImg[2] = "goal_fail.gif";

// 뽑기왕 버튼 이벤트
function moveMachine(){
  var mimg = document.getElementById('machine');
  machine.src="machine.gif";
  getItem_message();
}

// 뽑기 후 결과 얼럿
function getItem_message() {
  setTimeout(function() {
  	alert(randomItem(getResult)+"에 당첨되셨습니다.");

}, 1800);

}

// 슈팅왕 랜덤으로 결과 선택
function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}

// 기존 이미지에 결과 이미지로 변경함
function shootStart(){
  var img = document.getElementById('shootImg');
  img.src=randomItem(getImg);
}
