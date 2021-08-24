/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  user stats   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////PLAYER STATS ARRAYS//////////////////////////////////////////////
var playerStats = [0, 'playerName', 'playerKeyCode',      0 ,0 ,0 ,     0 ,0 ,0 ,0 ,0 ,0,     0, 0, 0, 0,   1234];
var playerActiveStats = [0,0,0,    0,0,0,    0,0,0];
equippedWpnArray = 'none';
var playerMoves = ['move0','move1','move2','move3'];
//save stats












////////////////////////////////CLASS STAT ARRAYS//////////////////////////////////////////////


var fechterClassArray = [7,9,2,  0,4,2,0,3,0,   1001, 'Sword Song'];
var turmClassArray = [9,9,0,  3,0,4,2,0,0,   1002, 'T.U.R.M.'];
var zweilichtClassArray = [5,9,4,  0,0,0,4,2,3,   1001, 'Piercing Eyes'];











////////////////////////////////SAVE / LOAD / CLEAR//////////////////////////////////////////////
function saveVar(){
  //player stats
  localStorage.playerLevelValue = playerStats[0];
  localStorage.playerName  = playerStats[1];
  localStorage.playerKeyCode = playerStats[2];

  localStorage.healthStatValue = playerStats[3];
  localStorage.staminaStatValue = playerStats[4];
  localStorage.rotStatValue = playerStats[5];

  localStorage.strengthStatValue = playerStats[6];
  localStorage.dexterityStatValue = playerStats[7];
  localStorage.perceptionStatValue = playerStats[8];

  localStorage.vigorStatValue = playerStats[9];
  localStorage.agilityStatValue = playerStats[10];
  localStorage.luckStatValue = playerStats[11];

  localStorage.playerClass = playerStats[12];
  localStorage.playerProgress = playerStats[13];
  localStorage.playerExp = playerStats[14];
  localStorage.playerSpores = playerStats[15];

  localStorage.playerEquippedWpn = playerStats[16];


//moves
  localStorage.playerMove0 = playerMoves[0];
  localStorage.playerMove1 = playerMoves[1];
  localStorage.playerMove2 = playerMoves[2];
  localStorage.playerMove3 = playerMoves[3];

}

function clearVar(){
    //player stats
    localStorage.playerLevelValue = 1;
    localStorage.playerName = 'playerName';
    localStorage.playerKeyCode = 'playerKeyCode';


    localStorage.healthStatValue = 0;
    localStorage.staminaStatValue = 0;
    localStorage.rotStatValue = 0;

    localStorage.strengthStatValue = 0;
    localStorage.dexterityStatValue = 0;
    localStorage.perceptionStatValue = 0;

    localStorage.vigorStatValue = 0;
    localStorage.agilityStatValue = 0;
    localStorage.luckStatValue = 0;

    localStorage.playerClass = 0;
    localStorage.playerProgress = 0;
    localStorage.playerExp = 0;
    localStorage.playerSpores = 0;

    localStorage.playerEquippedWpn = 1234;

}


function loadVar() {
  //document.getElementById('playerLevelInput').value = 'LvL: ' + localStorage.playerLevelValue;
  //document.getElementById('playerNameInput').value = localStorage.playerName;
  //document.getElementById('playerKeyCodeValue').value = localStorage.playerKeyCode;
  playerStats[0] = localStorage.playerLevelValue;
  playerStats[1] = localStorage.playerName;
  playerStats[2] = localStorage.playerKeyCode;

  playerStats[3] = localStorage.healthStatValue;
  playerStats[4] = localStorage.staminaStatValue;
  playerStats[5] = localStorage.rotStatValue;

  playerStats[6] = localStorage.strengthStatValue;
  playerStats[7] = localStorage.dexterityStatValue;
  playerStats[8] = localStorage.perceptionStatValue;

  playerStats[9] = localStorage.vigorStatValue;
  playerStats[10] = localStorage.agilityStatValue;
  playerStats[11] = localStorage.luckStatValue;

  playerStats[12] = localStorage.playerClass;
  playerStats[13] = localStorage.playerProgress;
  playerStats[14] = localStorage.playerExp;
  playerStats[15] = localStorage.playerSpores;

  playerStats[16] = localStorage.playerEquippedWpn;

  playerMoves[0] = localStorage.playerMove0;
  playerMoves[1] = localStorage.playerMove1;
  playerMoves[2] = localStorage.playerMove2;
  playerMoves[3] = localStorage.playerMove3;

  for(i = 0; i < playerActiveStats.length; i++){
    if(playerActiveStats[i] <= 0){playerActiveStats[i] = 0;}
  }

  playerStatDefine();
  setEquippedWpnStats();
}



////////////////////////////////PLAYER FILL STAT SHEET//////////////////////////////////////////////


function setPlayerStats() {
  $('#playerLevelValue').val( playerStats[0]);
  $('#playerDesc > figcaption > p').text( playerStats[1]);

  $('#healthStatValue').val( playerStats[3]);
  $('#staminaStatValue').val( playerStats[4]);
  $('#rotStatValue').val( playerStats[5]);

  $('#strengthStatValue').val( playerStats[6]);
  $('#dexterityStatValue').val( playerStats[7]);
  $('#perceptionStatValue').val( playerStats[8]);

  $('#vigorStatValue').val( playerStats[9]);
  $('#agilityStatValue').val( playerStats[10]);
  $('#luckStatValue').val( playerStats[11]);

  $('#sporeStatValue').val( playerStats[15]);
  playerStatDefine();
  setPlayerMoves();
}
//active statistics
function playerStatDefine() {


  playerActiveStats[0] = (playerStats[3] * 3.2);//health
  playerActiveStats[1] = (playerStats[4] * 3.2);//stamina
  playerActiveStats[2] = (playerStats[5] * 1);//rot

  playerActiveStats[3] = (((playerStats[6] * 1.5) + (playerStats[7] * 1.2)) + (playerActiveStats[2] / 100));//attack
  playerActiveStats[4] = ((playerStats[9] * 0.5) + (playerStats[11] * 0.3) + (playerActiveStats[2] / 100));//critical %
  playerActiveStats[5] = ((playerStats[7] * 1.2) + (playerStats[9] * 2) + (playerStats[11] * 0.3) - (playerActiveStats[2] / 100));//accuracy



  playerActiveStats[6] = (playerStats[8] * 1.3) - (playerActiveStats[2] / 100);//defence
  playerActiveStats[7] = ((playerStats[10] * 1.5) + (playerStats[11] * 0.3));//dodge
  playerActiveStats[8] = ((playerStats[10] * 1.2) + (playerActiveStats[2] / 100));//speed




  setEquippedWpnStats();


  $("#hpStatValue").val(parseInt(playerActiveStats[0]));
  $("#spStatValue").val(parseInt(playerActiveStats[1]));
  $("#rpStatValue").val(parseInt(playerActiveStats[2]));

  $("#attStatValue").val(parseInt(playerActiveStats[3]));
  $("#crtStatValue").val(parseInt(playerActiveStats[4]));
  $("#accStatValue").val(parseInt(playerActiveStats[5]));

  $("#defStatValue").val(parseInt(playerActiveStats[6]));
  $("#ddgStatValue").val(parseInt(playerActiveStats[7]));
  $("#spdStatValue").val(parseInt(playerActiveStats[8]));
}


function setPlayerMoves(){
  $('#move0').text(playerMoves[0]);
  $('#move1').text(playerMoves[1]);
  $('#move2').text(playerMoves[2]);
  $('#move3').text(playerMoves[3]);
}

function setEquippedWpnStats(){
  if( playerStats[16] == 1001){
    equippedWpnArray = twinHygrocybeArray;
  }

  if( playerStats[16] == 1002){
    equippedWpnArray = ostoyaeArmArray;
  }

  playerActiveStats[3] = playerActiveStats[3] + equippedWpnArray[4];
  playerActiveStats[4] = playerActiveStats[4] + equippedWpnArray[5];
  playerActiveStats[5] = playerActiveStats[5] + equippedWpnArray[6];

  playerActiveStats[6] = playerActiveStats[6] + equippedWpnArray[7];
  playerActiveStats[7] = playerActiveStats[7] + equippedWpnArray[8];
  playerActiveStats[8] = playerActiveStats[8] + equippedWpnArray[9];

  playerMoves[1] = equippedWpnArray[11];
  playerMoves[2] = equippedWpnArray[12];
  playerMoves[3] = equippedWpnArray[13];

  $('#move2').text(playerMoves[2]);
  $('#move3').text(playerMoves[3]);
  $('#move1').text(playerMoves[1]);

}




//duel.html
function setPlayerTurnStats() {
  $('#staminaBar').val( parseInt(playerActiveStats[1]));

  $('#moveAttVal').val( parseInt(playerActiveStats[3]));
  $('#moveCrtVal').val( parseInt(playerActiveStats[4]));
  $('#moveAccVal').val( parseInt(playerActiveStats[5]));

  $('#moveDefVal').val( parseInt(playerActiveStats[6]));
  $('#moveDdgVal').val( parseInt(playerActiveStats[7]));
  $('#moveSpdVal').val( parseInt(playerActiveStats[8]));
}


//this is the temporary stat display to see changes made to stats before confirming them
function displayPlayerMoveStats() {
  updateMoveHpVal = parseInt(playerActiveStats[0] + selectedMoveVariable[0]);
  updateMoveSpVal = parseInt(playerActiveStats[1] + selectedMoveVariable[1]);
  updateMoveRpVal = parseInt(playerActiveStats[2] + selectedMoveVariable[2]);

  updateMoveAttVal = parseInt(playerActiveStats[3] + selectedMoveVariable[3]);
  updateMoveCrtVal = parseInt(playerActiveStats[4] + selectedMoveVariable[4]);
  updateMoveAccVal = parseInt(playerActiveStats[5] + selectedMoveVariable[5]);

  updateMoveDefVal = parseInt(playerActiveStats[6] + selectedMoveVariable[6]);
  updateMoveDdgVal = parseInt(playerActiveStats[7] + selectedMoveVariable[7]);
  updateMoveSpdVal = parseInt(playerActiveStats[8] + selectedMoveVariable[8]);

  $('#staminaBar').val( parseInt(updateMoveSpVal));

  $('#moveAttVal').val( parseInt(updateMoveAttVal));
  $('#moveAccVal').val( parseInt(updateMoveAccVal));
  $('#moveCrtVal').val( parseInt(updateMoveCrtVal));

  $('#moveDefVal').val( parseInt(updateMoveDefVal));
  $('#moveDdgVal').val( parseInt(updateMoveDdgVal));
  $('#moveSpdVal').val( parseInt(updateMoveSpdVal));
}


function setPlayerMoveStats() {
  playerActiveStats[0] = updateMoveHpVal;//health
  playerActiveStats[1] = updateMoveSpVal;//stamina
  playerActiveStats[2] = updateMoveRpVal;//rot

  playerActiveStats[3] = updateMoveAttVal;//attack
  playerActiveStats[4] = updateMoveCrtVal;//critical %
  playerActiveStats[5] = updateMoveAccVal;//accuracy

  playerActiveStats[6] = updateMoveDefVal;//defence
  playerActiveStats[7] = updateMoveDdgVal;//dodge
  playerActiveStats[8] = updateMoveSpdVal;//speed


}




function loadUserClass() {

if (playerStats[12] == 0) {
  $('#playerClassDisplay > img').attr('src', 'img/terminal/classes/fechterClass.png');
  $('#classNameDisplay').text('Fechter');
  fechterClassDesc();

}else if (playerStats[12] == 1) {
  $('#playerClassDisplay > img').attr('src', 'img/terminal/classes/turmClass.png');
  $('#classNameDisplay').text('Turm');
  turmClassDesc();

}else if (playerStats[12] == 2) {
  $('#playerClassDisplay > img').attr('src', 'img/classes/terminal/zweilichtClass.png');
  $('#classNameDisplay').text('Zweilicht');
  zweilichtClassDesc();
}
}



////////////////////////////////STAT SHEET POINT ALLOCATION BUTTONS//////////////////////////////////////////////
function plusHealth() {
  playerStats[0]++;
  playerStats[3]++;
  $("#healthStatValue").val(playerStats[3]);
  sporePointAllocation();
  playerStatDefine();
}
function plusStamina() {
  playerStats[0]++;
  playerStats[4]++;
  $("#staminaStatValue").val(playerStats[4]);
  sporePointAllocation();
  playerStatDefine();
}
function plusRot() {
  playerStats[0]++;
  playerStats[5]++;
  $("#rotStatValue").val(playerStats[5]);
  sporePointAllocation();
  playerStatDefine();
}



function plusStrength() {
  playerStats[0]++;
  playerStats[6]++;
  $("#strengthStatValue").val(playerStats[6]);
  sporePointAllocation();
  playerStatDefine();
}
function plusDexterity() {
  playerStats[0]++;
  playerStats[7]++;
  $("#dexterityStatValue").val(playerStats[7]);
  sporePointAllocation();
  playerStatDefine();
}
function plusPerception() {
  playerStats[0]++;
  playerStats[8]++;
  $("#perceptionStatValue").val(playerStats[8]);
  sporePointAllocation();
  playerStatDefine();
}
function plusVigor() {
  playerStats[0]++;
  playerStats[9]++;
  $("#perceptionStatValue").val(playerStats[9]);
  sporePointAllocation();
  playerStatDefine();
}
function plusAgility() {
  playerStats[0]++;
  playerStats[10]++;
  $("#agilityStatValue").val(playerStats[10]);
  sporePointAllocation();
  playerStatDefine();
}
function plusLuck() {
  playerStats[0]++;
  playerStats[11]++;
  $("#luckStatValue").val(playerStats[11]);
  sporePointAllocation();
  playerStatDefine();
}













/////////////////////////////////////  CITIZEN REGISTRATION   /////////////////////////////////////




function newPlayerInputReader() {
  var playerName = document.getElementById('userNameInput').value;
  var playerKeyCode = document.getElementById('userIncKeyInput').value;
  playerStats[1] = playerName;
  playerStats[2] = playerKeyCode;



 if (playerStats[1] == 'playerName' || playerStats[2] == 'playerKeyCode') {
  alert('Invalid Registration');

}else if ( playerName == '' || playerKeyCode == '') {
  alert('empty');
  playerStats[1] = "playerName";
  playerStats[2] = "playerKeyCode";
}else {
  factionSelectionLoad();
}

}


function loadPlayerInputReader(){
  var playerName = document.getElementById('userNameInput').value;
  var playerKeyCode = document.getElementById('userIncKeyInput').value;



  if (playerStats[1] == playerName && playerStats[2] == playerKeyCode ){
    location.assign('bunker.html');
  }else{
    alert('incorrect name or code');
  }
}













////////////////////////////////SET CLASS STATS//////////////////////////////////////////////

  function defineClassStats(){
    playerStats[3] = userClassArray[0];
    playerStats[4] = userClassArray[1];
    playerStats[5] = userClassArray[2];

    playerStats[6] = userClassArray[3];
    playerStats[7] = userClassArray[4];
    playerStats[8] = userClassArray[5];
    playerStats[9] = userClassArray[6];
    playerStats[10] = userClassArray[7];
    playerStats[11] = userClassArray[8];


    playerStats[16] = userClassArray[9];




    $('#healthStatValue').val( playerStats[3]);
    $('#staminaStatValue').val( playerStats[4]);
    $('#rotStatValue').val( playerStats[5]);

    $('#strengthStatValue').val( playerStats[6]);
    $('#dexterityStatValue').val( playerStats[7]);
    $('#perceptionStatValue').val( playerStats[8]);

    $('#vigorStatValue').val( playerStats[9]);
    $('#agilityStatValue').val( playerStats[10]);
    $('#luckStatValue').val( playerStats[11]);




    playerMoves[0] = userClassArray[10];
    $('#move0').text(playerMoves[0]);


    playerStatDefine();
    setEquippedWpnStats();
  }




  //class stats

  function setFechterStats() {
    userClassArray = fechterClassArray;
    defineClassStats();
    $('#playerDesc > figcaption > p').text('Fechter');
    zweilichtClassDesc();
  }

  function setTurmStats() {
    userClassArray = turmClassArray;
    defineClassStats();
    //defineMoves();
    $('#playerDesc > figcaption > p').text('Turm');
    turmClassDesc();
  }

  function setZweilichtStats() {
    userClassArray = zweilichtClassArray;
    defineClassStats();
    //defineMoves();
    $('#playerDesc > figcaption > p').text('Zweilicht');
    fechterClassDesc();
  }







////////////////////////////////CLASS DESCRIPTIONS//////////////////////////////////////////////
function fechterClassDesc(){
  //$('#classNameDisplay').text('Fechter');
  $('#classDesc > h1').text('Fechter');
  $('#classDesc > p').text('Practitioner of the ancient Sword Art known as the Schwertertanz, he is a master duelist and a reviered martial artist. He wears micro-alloy composit-mail with lightweight ceramic plating in order to preserve mobility. He carries two twin techno-blade rapiers called the Mother and the Father.');
}

function turmClassDesc(){
  //$('#classNameDisplay').text('Turm');
  $('#classDesc > h1').text('Turm');
  $('#classDesc > p').text('A giant amongst men; by the mear sight of this behemoth he strikes fear into his enemies. His thick riveted steel plated armour is fully mechanized and powered by a Lithium Spore-Core allowing him to use it in combat effectively.');
}

function zweilichtClassDesc(){
  //$('#classNameDisplay').text('Zweilicht');
  $('#classDesc > h1').text('Zweilicht');
  $('#classDesc > p').text('Known as the knight of the night, the Zweilicht comes from an order of skilled killers. Originating from the Sporous Forest, this organized groupe of assassins has a long history of murduring on the behalf of others. Rather than sprinting into battle, the Zweilicht preferes to strike from the shadows.');
}







////////////////////////////////STAT DESCRIPTIONS//////////////////////////////////////////////

function displayInitialStatDesc() {
  $("#statDesc > figure > img").attr("src", "img/icons/stats/hpStat.png");
  $("#statDesc > .statDescription > h1").text("Health");
  $("#statDesc > .statDescription > p").text("Health governs the user's  Health-Points (HP). One Health level is equivalent to 5 HP. If the user's HP is reduced to 0, the user dies and returns back to the bunker.");

  $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('HP :');
  $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+5');
  $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
  $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');


  $("#statDesc > .fungusDescription > h2").text("Amanita Muscaria");
  $("#statDesc > .fungusDescription > p").text("The amanita muscaria, commonly referred to as fly amanita, is a particulary common yet dangerous toadstool found in temperate regions. It reproduces by releasing it's basidiospore into the atmosphere that get transported through air currents.");
}

  $("#statWindow1").mouseover(function(){
    displayInitialStatDesc();
  });



  $("#statWindow2").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/spStat.png");
    $("#statDesc > .statDescription > h1").text("Stamina");
    $("#statDesc > .statDescription > p").text("Stamina governs the user's Stamina-Points (SP). One Stamina level is equivalent to 5 SP. Each attack costs you some SP. If the user's SP is reduced to 0, the user can no longer perform in combat until SP is restored.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('SP :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Amanita phalloides");
    $("#statDesc > .fungusDescription > p").text("The amanita phalloides, colloquially called death cap, is, like its cousin the amanita muscaria, a poisonous basidiomycota fungus belonging to the amanita genus. It one of the most lethal of all known mushrooms, which is aided by its resemblance to edible mushrooms. It's convex cap is generally green, but white variats have been found as well. Its white and scaly stem connects its cap to its swollen, sac-like base. ");
  });

  $("#statWindow3").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/rpStat.png");
    $("#statDesc > .statDescription > h1").text("Rot");
    $("#statDesc > .statDescription > p").text("Rot governs the user's Rot-Points (RP). For each Rot level, the user recieves 1% increase to offencive skills aswell as 1% decrease to defenive skills. Some spore based attacks cost RP instead of SP to perform. If the user's RP reaches 200, they die and return to the bunker.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ATT | CRT | SPD :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+0.5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'inline');


    $('#statDesc > table > tbody > tr:nth-child(2) > td:nth-child(1)').text('DEF | DDG | ACC :');
    $('#statDesc > table > tbody > tr:nth-child(2) > td:nth-child(2)').text('-0.5');
    $('#statDesc > table > tbody > tr:nth-child(2) > td:nth-child(2)').css('color' , '#EA5C9D');

    $("#statDesc > .fungusDescription > h2").text("Cortinarius violaceus");
    $("#statDesc > .fungusDescription > p").text("The amanita muscaria, commonly referred to as fly amanita, is a particulary common yet dangerous toadstool found in temperate regions. The basidiomycosis enduced by ingestion of this higher fungus. ");
  });












  $("#statWindow4").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/attStat.png");
    $("#statDesc > .statDescription > h1").text("Strength");
    $("#statDesc > .statDescription > p").text("Strength governs the user's Attack-Damage (ATT). This trait is coveted by those who weild large melee weapons and wearing heavy mechanized armour.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ATT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Hygrocybe miniata");
    $("#statDesc > .fungusDescription > p").text("The hygroctbe miniata, commonly known as vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow5").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/dexStat.png");
    $("#statDesc > .statDescription > h1").text("Dexterity");
    $("#statDesc > .statDescription > p").text("Dexterity governs the user's Attack-Damage (ATT) & Accuracy (ACC).");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('CRT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Mycena Chlorophos");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow6").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/accStat.png");
    $("#statDesc > .statDescription > h1").text("Perception");
    $("#statDesc > .statDescription > p").text("This is still an empty stat");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ACC | CRT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2 | + 0.5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Entoloma Hochstetteri");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });


  $("#statWindow7").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/defStat.png");
    $("#statDesc > .statDescription > h1").text("Vigor");
    $("#statDesc > .statDescription > p").text("Perception governs the user's Accuracy (ACC) & Critical (CRT).");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('DEF :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Omphalotus Illudens");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow8").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/ddgStat.png");
    $("#statDesc > .statDescription > h1").text("Agility");
    $("#statDesc > .statDescription > p").text("Agility governs the user's Speed (SPD). In combat, the player with the highest SPD level recieves the FIRST-STRIKE bonus, which grants the first turn with +1 to ATT, CRT & ACC for that turn.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('DDG | SPD :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+2 | +1.5');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Mycena Pura");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });

  $("#statWindow9").mouseover(function(){
    $("#statDesc > figure > img").attr("src", "img/icons/stats/spdStat.png");
    $("#statDesc > .statDescription > h1").text("Luck");
    $("#statDesc > .statDescription > p").text("Luck governs your Accuracy (ACC) & Dodge (DDG). In addition, each point in Luck grants you 1% chance to recieveing the FIRST-STRIKE bonus against enemies with higher speed than you.");

    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(1)').text('ACC | DDG | CRT :');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').text('+0.3 | +0.3 | +0.3');
    $('#statDesc > table > tbody > tr:nth-child(1) > td:nth-child(2)').css('color' , '#2BB673');
    $('#statDesc > table > tbody > tr:nth-child(2)').css('display' , 'none');

    $("#statDesc > .fungusDescription > h2").text("Tricholomopsis Decora");
    $("#statDesc > .fungusDescription > p").text("The mycena chlorophos, also called vermilion waxcap, is easily recognizable do to its bright red or orange colour and has a cosmopolitain distripution, meaning it is found in most of the worlds habitats.");
  });












  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////  character creation   /////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////










  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////  Weapons   /////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////






function wpnDepotLoadWares(){
  $('#wpnDisplay1 > figcaption > .wpnQuicklvl').val( twinHygrocybeArray[3]  );
  $('#wpnDisplay1 > img').attr('src', 'img/bunkerRooms/weaponDepotItems/' + twinHygrocybeArray[1]);
  $('#wpnDisplay1 > img').css('width', twinHygrocybeArray[2] + 'px');
  $('#wpnDisplay1 > figcaption > p').text(twinHygrocybeArray[0]);

  $('#wpnDisplay2 > figcaption > .wpnQuicklvl').val( ostoyaeArmArray[3]  );
  $('#wpnDisplay2 > img').attr('src', 'img/bunkerRooms/weaponDepotItems/' + ostoyaeArmArray[1]);
  $('#wpnDisplay2 > img').css('width', ostoyaeArmArray[2] + 'px');
  $('#wpnDisplay2 > figcaption > p').text(ostoyaeArmArray[0]);

  $('#wpnDisplay3 > figcaption > .wpnQuicklvl').val( westEnokiStalfArray[3]  );
  $('#wpnDisplay3 > img').attr('src', 'img/bunkerRooms/weaponDepotItems/' + westEnokiStalfArray[1]);
  $('#wpnDisplay3 > img').css('width', westEnokiStalfArray[2] + 'px');
  $('#wpnDisplay3 > figcaption > p').text(westEnokiStalfArray[0]);


  $('#wpnDisplay1').click(function () {
    wpnSelectArray = twinHygrocybeArray;
    wpnSelectDesc = twinHygrocybeDesc;
    setWpnStats();
  });

  $('#wpnDisplay2').click(function () {
    wpnSelectArray = ostoyaeArmArray;
    wpnSelectDesc = ostoyaeArmDesc;
    setWpnStats();
  });

  $('#wpnDisplay3').click(function () {
    wpnSelectArray = westEnokiStalfArray;
    wpnSelectDesc = westEnokiStalfDesc;
    setWpnStats();
  });

}

function setWpnStats() {
  $('#interactionPause').css('display', 'block')
  $('#wpnStatWindow').css('display', 'flex');
  $('#wpnStatWindow > span > h1').text(wpnSelectArray[0]);
  $('#wpnStatImg').attr('src','img/bunkerRooms/weaponDepotItems/' + wpnSelectArray[1]);
  $('#wpnDesc').text( wpnSelectDesc);

  $('#wpnStatLvl').val(wpnSelectArray[3]);
  $('#wpnStatAtt').val(wpnSelectArray[4]);
  $('#wpnStatCrt').val(wpnSelectArray[5]);
  $('#wpnStatAcc').val(wpnSelectArray[6]);
  $('#wpnStatDef').val(wpnSelectArray[7]);
  $('#wpnStatDdg').val(wpnSelectArray[8]);
  $('#wpnStatSpd').val(wpnSelectArray[9]);


  wpnDepotStatBtn();
}
