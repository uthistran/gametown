function intialize() {
    changeDynamicValues();
    AddBannerAds();
    AssignTournamentDate();
    EvaluateGameContainer();
}

function EvaluateGameContainer(){
    var el = document.getElementById('gameContainer');
    el.classList.add('hideElement');
}

function onGameClick(){
    var el = document.getElementById('gameContainer');
    el.classList.remove('hideElement');

    var el1 = document.getElementById('gameListContainer');
    el1.classList.add('hideElement');
}

function onGameCloseClick(){
    var el = document.getElementById('gameContainer');
    el.classList.add('hideElement');

    var el1 = document.getElementById('gameListContainer');
    el1.classList.remove('hideElement');
    if(ismaximized){
        var el1 = document.getElementById('gameCategoryMenu');
        el1.classList.remove('hideElement');
        el1 = document.getElementById('trmntLstHdr');
        el1.classList.remove('hideElementVisibility');
        el1 = document.getElementById('trnmtdtsHdr');
        el1.classList.remove('hideElementVisibility');

        el1 = document.getElementById('gameContainer');
        el1.classList.remove('gameHolderCls');
        el1.style.width = '';

        el1 = document.getElementById('gameImgHolder');
        el1.classList.remove('gameImgHolderCls');


        ismaximized = false;
    }
}
var ismaximized = false;
function onGameResizeClick() {
    if(ismaximized){
        var el1 = document.getElementById('gameCategoryMenu');
        el1.classList.remove('hideElement');
        el1 = document.getElementById('trmntLstHdr');
        el1.classList.remove('hideElementVisibility');
        el1 = document.getElementById('trnmtdtsHdr');
        el1.classList.remove('hideElementVisibility');

        el1 = document.getElementById('gameContainer');
        el1.classList.remove('gameHolderCls');
        el1.style.width = ''
        el1 = document.getElementById('gameImgHolder');
        el1.classList.remove('gameImgHolderCls');


        ismaximized = false;
    }
    else{
        var el1 = document.getElementById('gameCategoryMenu');
        el1.classList.add('hideElement');
        el1 = document.getElementById('trmntLstHdr');
        el1.classList.add('hideElementVisibility');
        el1 = document.getElementById('trnmtdtsHdr');
        el1.classList.add('hideElementVisibility');

        el1 = document.getElementById('gameContainer');
        el1.classList.add('gameHolderCls');
        //calculate width
        var w1 = document.getElementById('trnmtLstnHolder').offsetWidth;
        var w2 = document.getElementById('adsHolder').offsetWidth;
        var calcW = w1 - w2 - 50;
        el1.style.width = 'calc(100% - ' + calcW + 'px)';

        el1 = document.getElementById('gameImgHolder');
        el1.classList.add('gameImgHolderCls');

        ismaximized = true;
    }
}

var dynamicText = ["600 Free Jacks Daily = 60 Minutes of Play", "Join the One Eye Jack Club - Unlimited Play"];
var dynamicImg = ["assets/images/logo-trans.png", "assets/images/jack-trans.png"];
var counter = 1;
function changeDynamicValues() {
    setInterval(function () {

        var holder = document.getElementById("dynamicHolder");
        holder.classList.add('fadinAni')
        setTimeout(() => {
            var holder = document.getElementById("dynamicHolder");
            holder.classList.remove('fadinAni')
        }, 3000);

        setTimeout(() => {
            var element = document.getElementById("dynamicHeader");
            element.innerHTML = dynamicText[counter];

            var imgElement = document.getElementById("dynamicImg");
            imgElement.setAttribute('src', dynamicImg[counter]);
            if (counter == 1) {
                imgElement.classList.add('JackImgCls')
            }
            else {
                imgElement.classList.remove('JackImgCls')
            }

            counter++;
            if (counter >= dynamicText.length) {
                counter = 0;
            }
        }, 1500);
    }, 30000)
}

function AddBannerAds() {
    var adHolder = document.getElementById('adsHolder');
    for (var i = 0; i < 3; i++) {
        var img = document.createElement("img");
        img.src = "assets/images/bannerads.jpg";
        adHolder.appendChild(img);
    }
}

var eventRefObj = {
    'house': () => {
        var el = document.getElementById('houseEvent');
        el.classList.add('eventSelected');
        var el1 = document.getElementById('clubEvent');
        el1.classList.remove('eventSelected');
    },
    'club': () => {
        var el = document.getElementById('clubEvent');
        el.classList.add('eventSelected');
        var el1 = document.getElementById('houseEvent');
        el1.classList.remove('eventSelected');
    }
}

function onEventTitleClick(event) {
    eventRefObj[event]();
}

function AssignTournamentDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = month + "-" + day + "-" + year;

    document.getElementById("trmntDate").innerHTML = today;
}



window.onload = (event) => {
    intialize();
};