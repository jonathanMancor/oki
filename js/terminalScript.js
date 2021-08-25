const palette =
{
  pinkHex: '#ee2d7b',
  pinkRgb : '238,45,123,',

  green: '#53d39b',

  yellow: '#fbb041'
}













var terminalMenuBtnOpenStat = [0,0,];


var imgUrl = '#';


function accessTerminal() {


  //alert(terminalPage);
  terminalState = true;
  //terminalPage = 'pq';
  loadVar();
  setPlayerStats();
  playerStatDefine();
  loadUserClass();
  displayInitialStatDesc();
  toggleStatAllocationBtn();
  setTerminalPage();
}
function toggleStatAllocationBtn() {
  if(playerStats[14] == 0){
    $('#statDisplay > tbody > tr > td > button').css('display','none');
  }else {
      $('#statDisplay > tbody > tr > td > button').css('display','block');
  }}


function setTerminalPage() {
  resetTerminalMenu();



  if(terminalPage == 'pq' && terminalState == true){
    $('#playerStatMenu').css('display', 'flex');
    $('#playerRepository').css('display', 'none');
    setCoreBtn(3,1,'Repository','repo',2,3,0,'0','0');
  }

  if(terminalPage == 'repo' && terminalState == true){
    $('#playerRepository').css('display', 'flex');
    $('#playerStatMenu').css('display', 'none');
    setCoreBtn(3,1,'Statistics','pq',2,3,0,'0','0');
  }





  if(terminalPage == 'terminalMenu' && terminalState == true){
    $('#terminalMenu').css('display', 'flex');
    $('.terminalMenuCol > #tmBtnCntr').css('display','flex');

    $('#actionMenu :is(button:nth-child(1))').css('display', 'inline');
    $('#actionMenu > button:nth-child(1)').text('Exit');



    $('#tmCol-privateQuarters > span:nth-child(2) > button:nth-child(1)').click(function () {
      terminalPage = 'pq';
      setTerminalPage();
    });

    $('#tmCol-commandCenter > span:nth-child(2) > button:nth-child(1)').click(function () {
      terminalPage = 'cc';
      setTerminalPage();
    });
    $('#tmCol-courtyard > span:nth-child(2) > button:nth-child(1)').click(function () {
      terminalPage = 'cy';
      setTerminalPage();
    });




    $('#tmCol-privateQuarters > span:nth-child(2) > button:nth-child(2)').click(function () {
      currentRoom = 'pq';
      closeTerminal();
    });
    $('#tmCol-commandCenter > span:nth-child(2) > button:nth-child(2)').click(function () {
      currentRoom = 'cc';

      closeTerminal();
    });
    $('#tmCol-courtyard > span:nth-child(2) > button:nth-child(2)').click(function () {
      currentRoom = 'cy';
      closeTerminal();
    });
    setCoreBtn(1,0,'-','#',0,1,0,'0','0');
}




if(terminalPage == 'cc' && terminalState == true){
  imgUrl = 'img/terminal/bunkerRooms/generalsTable.png'
  $('#terminalFrame').css('background-image', 'url(' + imgUrl + ')');
  setCoreBtn(3,1,'Missions','wm',2,3,0,'0','0');
}




if(terminalPage == 'cy' && terminalState == true){
  $('#bunkerCourtyard').css('display', 'flex');
  currentRoom = 'bf';
  setCoreBtn(3,0,'0','bf',2,3,1,'Provisions','Battlefield');

}



}





function closeTerminal(){
  resetTerminalMenu();
  terminalPage = 'initial';
  terminalState = false;
  imgUrl = '#';
  $('#actionMenu :is(button:nth-child(-n+6))').off('click');
  $('#terminalFrame').css('background-image', 'url(' + imgUrl + ')');
  $('#terminalMenu').css('display', 'none');
  $('#playerStatMenu').css('display', 'none');
  $('#playerRepository').css('display', 'none');
  $('#bunkerCourtyard').css('display', 'none');
  $('#actionMenu :is(button:nth-child(-n+6))').css('display', 'none');
  $('#camera').css('display','flex');
  if( currentRoom == 'pq'){
    roomDisplace = [-6,-2.5];
  }else if( currentRoom == 'cc'){
    roomDisplace = [-10,-2.5];
  }
  orientCameraLayers();
}









function setCoreBtn(totalBtn,btn1,btn1Txt,tPage,menu,exit,travel,travelName,destination){
  $('#actionMenu :is(button:nth-child(-n+' + totalBtn + '))').css('display', 'inline');

  $('#actionMenu > button:nth-child(' + btn1 +')').text(btn1Txt);
  $('#actionMenu > button:nth-child(' + btn1 + ')').click(function () {
    terminalPage = tPage;
    setTerminalPage();
  });

  $('#actionMenu > button:nth-child(' + menu +')').text('Terminal Menu');
  $('#actionMenu > button:nth-child(' + exit + ')').text('Close');
  $('#actionMenu > button:nth-child(' + menu + ')').css('color',palette.green);
  $('#actionMenu > button:nth-child(' + exit +')').css('color', palette.pinkHex);

  $('#actionMenu > button:nth-child(' + travel +')').text(travelName);
  $('#actionMenu > button:nth-child(' + travel +')').css('color', palette.yellow);

  $('#actionMenu > button:nth-child(' + menu + ')').click(function () {
    terminalPage = 'terminalMenu';
    setTerminalPage();
  });
  $('#actionMenu > button:nth-child(' + exit +')').click(function () {
    closeTerminal();
  });
  $('#actionMenu > button:nth-child(' + travel +')').click(function () {
    location.assign("oki" + destination +".html");
  });

}









function resetTerminalMenu(){
  for (var i = 0; i < 7; i++) {
    $('#actionMenu > button:nth-child(' + i +')').css('color','white');
    $('#camera').css('display','none');
    $('#playerStatMenu').css('display', 'none');
    $('#playerRepository').css('display', 'none');
    $('#terminalMenu').css('display', 'none');
    $('#bunkerCourtyard').css('display', 'none');
    imgUrl = '#';
    $('#terminalFrame').css('background-image', 'url(' + imgUrl + ')');

    $('#actionMenu :is(button:nth-child(-n+6))').css('display', 'none');
    $('#actionMenu :is(button:nth-child(-n+4))').off('click');
  }
}
