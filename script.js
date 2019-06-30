var getResult= new Array();
getResult[0] = "[TC 업데이트] 200명 지명 상자(8강)";
getResult[1] = "TC 85+ 강화 선수팩 (5강)";
getResult[2] = "BP카드 100,000,000";
getResult[3] = "[TC 업데이트] OVR 88+ 강화 선수팩 (5강)";
getResult[4] = "TC, GR 다이아 강화 선수팩 (5강)";
getResult[5] = "BP카드 50,000,000";
getResult[6] = "MC ICON, TC 포함 OVR 93+ 선수팩";
getResult[7] = "[TC 업데이트] OVR 80+ 강화 선수팩 (5강)";
getResult[8] = "TC 클래스 OVR 88+ 선수팩";
getResult[9] = "BP카드 10,000,000";
getResult[10] = "MC ICON, TC 포함 OVR 88+ 선수팩";
getResult[11] = "[TC 업데이트] OVR 80+ 강화 선수팩 (2~5강)";
getResult[12] = "TC 클래스 OVR 83+ 선수팩";
getResult[13] = "BP카드 5,000,000";
getResult[14] = "MC ICON, TC 포함 OVR 80+ 선수팩";
getResult[15] = "Man City ICON 선수팩";
getResult[16] = "Man City ICON 선수팩";
getResult[17] = "Man City ICON 선수팩";
getResult[18] = "Man City ICON 선수팩";

var getImg= new Array();
getImg[0] = "goal_left.gif";
getImg[1] = "goal_right.gif";
getImg[2] = "goal_fail.gif";

function moveMachine(){
  var imgObj = document.getElementById('machine');

  imgObj.style.position= 'relative';

  imgObj.style.left = '0px';
  imgObj.style.animationPlayState="running";
  getItem_message();
}

function getItem_message() {
  setTimeout(function() {
  	alert("["+randomItem(getResult)+"] 에 당첨되셨습니다.");
}, 1800);
}

function randomItem(a) {
  return a[Math.floor(Math.random() * a.length)];
}


function shootStart(){
  var img = document.getElementById('shootImg');
  img.src=randomItem(getImg);
}
