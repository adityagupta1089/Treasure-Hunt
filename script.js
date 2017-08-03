function generateFields() {
    var groups = $("#students").val() / $("#studentpergroup").val();
    var container = document.getElementById("location-container");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i = 1; i <= $("#locations").val(); i++) {
        var locdiv = document.createElement("div");
        locdiv.className = "locdiv";

        var locdivname = document.createElement("div");
        locdivname.className = "locdivname";
        locdivname.appendChild(document.createTextNode("Location #" + i));

        var locname = document.createElement("input");
        locname.type = "text";
        locname.name = "location" + i;

        locdivname.appendChild(locname);

        var locdivclue = document.createElement("div");
        locdivclue.className = "locdivclue";
        locdivclue.appendChild(document.createTextNode("Clue"));

        var locclue = document.createElement("input");
        locclue.type = "text";
        locclue.name = "location-clue" + i;

        locdivclue.appendChild(locclue);

        locdiv.appendChild(locdivname);
        locdiv.appendChild(locdivclue);

        container.appendChild(locdiv);
    }
    toggle();

}

var flag = true;

function toggle() {
    $('.form1').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
    $('.form2').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
    if (flag) {
        $('.input-page').animate({
            width: "1000px"
        }, "slow");
    } else {
        $('.input-page').animate({
            width: "360px"
        }, "slow");
    }
    flag = !flag;
}



function generateMap() {

}