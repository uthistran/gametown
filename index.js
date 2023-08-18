

function intialize() {
    changeDynamicValues();
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


window.onload = (event) => {
    intialize();
};