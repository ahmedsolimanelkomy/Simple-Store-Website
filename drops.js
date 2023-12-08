
//search bar
function dropDown() {
    document.getElementById('myDropDown').classList.toggle("show");
}

window.addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropDown = dropdowns[i];
            if (openDropDown.classList.contains('show')) {
                openDropDown.classList.remove('show')
            }
        }
    }
})


function helpDropDown() {
    document.getElementById('helpdropdown').classList.toggle("showmore")
}


window.addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target.matches('.droplink')) {
        var dropdown2 = document.getElementsByClassName('dropdown');
        var i;
        for (i = 0; i < dropdown2.length; i++) {
            var openlink = dropdown2[i];
            if (openlink.classList.contains('showmore')) {
                openlink.classList.remove('showmore')
            }
        }
    }
})

