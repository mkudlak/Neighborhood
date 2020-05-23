var i, tabcontent, tablinks, tablist;
tabcontent = document.getElementsByClassName("tabcontent");
tablinks = document.getElementsByClassName("tablinks");
tablist = document.querySelector(".tablinks");



function openAttraction(evt, Atraction) {
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(Atraction).style.display = "flex";
    evt.currentTarget.className += " active";

    for (i = 0; i < tablinks.length; i++) {
        if (!tablinks[i].classList.contains('active')) {
            tablinks[i].style.display = "none";
        }
    }

    var active = document.querySelector(".active");

    active.addEventListener('click', function () {
        for (i = 0; i < tablinks.length; i++) {
            if (!tablinks[i].classList.contains('active')) {
                tablinks[i].style.display = "block";
            }
        }

        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    })
}