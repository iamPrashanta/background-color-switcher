document.addEventListener('DOMContentLoaded', () => {
    var userPrefColor = localStorage.getItem('pageColor');
    document.body.style.backgroundColor = userPrefColor;
})

//script for buttons
function color1() {
    var colorOneCode = "#f64c72";
    document.body.style.backgroundColor = colorOneCode;
    localStorage.setItem('pageColor', colorOneCode);
}
function color2() {
    var colorTwoCode = "#659dbd";
    document.body.style.backgroundColor = colorTwoCode;
    localStorage.setItem('pageColor', colorTwoCode);
}
function color3() {
    var colorThreeCode = "#daad86";
    document.body.style.backgroundColor = colorThreeCode;
    localStorage.setItem('pageColor', colorThreeCode);
}
function color4() {
    var colorFourCode = "#05386b";
    document.body.style.backgroundColor = colorFourCode;
    localStorage.setItem('pageColor', colorFourCode);
}
function color5() {
    var colorFiveCode = "#501b1d";
    document.body.style.backgroundColor = colorFiveCode;
    localStorage.setItem('pageColor', colorFiveCode);
}
function color6() {
    var colorSixCode = "#808080";
    document.body.style.backgroundColor = colorSixCode;
    localStorage.setItem('pageColor', colorSixCode);
}

//script for Dropdown
function changeColor() {
    var dropwn = document.getElementById("select");
    document.body.style.backgroundColor = dropwn.options[dropwn.selectedIndex].value;
}


// document.getElementById('themeSwitch').addEventListener('change', function (event) {
//     (event.target.checked) ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
// });
