
const base_nav_bar = document.getElementById('Replace').innerHTML


function li_1_open(){
    document.getElementById('Replace').innerHTML = '\
<li onclick="base_nav()" class="noselect"><a href="#">Home</a>\
    <img src="../../tri.svg" alt="" class="nav_icon" style="transform: rotate(90deg);">\
</li>\
\
\
<li onclick="li_2()" class="noselect"><a href="../../home/Info">Kerzenmeile Informationen</a>\
</li>\
\
\
<li onclick="li_3()" class="noselect"><a href="../../home/Oeffnungszeiten">Öffnungszeiten</a>\
</li>\
\
\
<li onclick="li_3()" class="noselect"><a href="../../home/Datenschutz">Datenschutz</a>\
</li>\
\
\
<li onclick="li_3()" class="noselect"><a href="../../home/AGB">AGB</a>\
</li>\
\
\
<li onclick="li_3()" class="noselect"><a href="../../home/Ueber_mich">Über mich</a>\
</li>\
'
}

function li_2_open(){
    document.getElementById('Replace').innerHTML = '\
<li onclick="base_nav()" class="noselect"><a href="#">Kerzen</a>\
    <img src="../../tri.svg" alt="" class="nav_icon" style="transform: rotate(90deg);">\
</li>\
\
\
<li onclick="li_3()" class="noselect"><a href="../../Kerzen/Taufkerzen">Taufkerzen</a>\
</li>\
\
\
<li onclick="li_3()" class="noselect"><a href="../../Kerzen/Hochzeitskerzen">Hochzeitskerzen</a>\
</li>\
\
\
<li onclick="li_3()" class="noselect"><a href="../../Kerzen/Trauerkerzen">Trauerkerzen</a>\
</li>\
\
\
<li onclick="li_3()" class="noselect"><a href="../../Kerzen/Feierkerzen">Kerzen für feierliche Anlässe</a>\
</li>\
'


}


function li_3(){
    console.log("you clicked li_3")


}
function base_nav(){
    document.getElementById('Replace').innerHTML = base_nav_bar
}







