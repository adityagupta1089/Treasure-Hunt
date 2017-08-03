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

        var locname = document.createElement("input");
        locname.type = "text";
        locname.id = "location" + i;
        locname.placeholder = "Location " + i;

        locdivname.appendChild(locname);

        var locdivclue = document.createElement("div");
        locdivclue.className = "locdivclue";

        var locclue = document.createElement("input");
        locclue.type = "text";
        locclue.id = "location-clue" + i;
        locclue.placeholder = "Clue";

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
    $('.form2').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
    $('.map').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
    var groups = $("#students").val() / $("#studentpergroup").val();
    var container = document.getElementById("map-container");
    var totallocations = $("#locations").val();
    var locations = {};
    var order = [];
    for (i = 1; i <= totallocations; i++) {
        var loc = $("#location" + i).val();
        if (loc == "")
            loc = "Location " + i;
        var locclue = $("#location-clue" + i).val();
        if (locclue == "")
            locclue = "Clue for Location " + i;
        locations[loc] = locclue;
        order.push(loc);
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i = 1; i <= groups; i++) {
        order = shuffle(order);
        var cluesdiv = document.createElement("div");
        cluesdiv.className = "cluesdiv";
        var title_ = document.createElement("h1");
        title_.appendChild(document.createTextNode("Group " + i));
        cluesdiv.appendChild(title_);
        for (j = 0; j < totallocations; j++) {
            var cluediv = document.createElement("div");
            cluediv.className = "cluediv";
            var title = document.createElement("h2");
            title.appendChild(document.createTextNode("Group " + i + ", Clue " + (j + 1)));
            cluediv.appendChild(title);
            var subtitle = document.createElement("h3");
            subtitle.appendChild(document.createTextNode("(You are at " + order[j] + ")"));
            cluediv.appendChild(subtitle);
            var cluetitle = document.createElement("h3");
            if (j != totallocations - 1) {
                cluetitle.appendChild(document.createTextNode("Clue for Next location:"));
                cluediv.appendChild(cluetitle);
                cluediv.appendChild(document.createTextNode(locations[order[j + 1]]));
            } else {
                cluetitle.appendChild(document.createTextNode("You Win!"));
                cluediv.appendChild(cluetitle);
            }
            cluesdiv.appendChild(cluediv);
        }
        container.appendChild(cluesdiv);
    }
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function ungenerateMap() {
    $('.form2').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
    $('.map').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
}