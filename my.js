//Elemek kigyűjtése

let buttonH1 = document.getElementById('buttonH1');
let buttonH2 = document.getElementById('buttonH2');
let buttonH3 = document.getElementById('buttonH3');
let buttonH4 = document.getElementById('buttonH4');
let buttonH5 = document.getElementById('buttonH5');
let buttonH6 = document.getElementById('buttonH6');
let buttonP = document.getElementById('buttonP');
let buttonStrong = document.getElementById('buttonStrong');
let input = document.getElementById('input');
let output = document.getElementById('output');
let image = document.getElementById('image');
let link = document.getElementById('link');
let kiemeles = document.getElementById('kiemeles');
let sup = document.getElementById('Sup');
let sub = document.getElementById('Sub');
let igazitasBalra = document.getElementById('igazitasBalra')
let igazitasJobbra = document.getElementById('igazitasJobbra')
let igazitasKozepre = document.getElementById('igazitasKozepre')
let igazitasSorkizart = document.getElementById('igazitasSorkizart')
let athuzas = document.getElementById('athuzas')
let ol = document.getElementById('szamozott')
let ul = document.getElementById('szamozozatlan')



RenderOutput();

//Események és eseménykezelők
buttonH1.addEventListener('click', OnClickH1);
buttonH2.addEventListener('click', OnClickH2);
buttonH3.addEventListener('click', OnClickH3);
buttonH4.addEventListener('click', OnClickH4);
buttonH5.addEventListener('click', OnClickH5);
buttonH6.addEventListener('click', OnClickH6);
buttonP.addEventListener('click', OnClickP);
buttonStrong.addEventListener('click', OnClickStrong);
red.addEventListener('click', OnClickRed);
input.addEventListener('keyup', RenderOutput);
image.addEventListener('click', OnClickImage);
link.addEventListener('click', OnClickLink);
kiemeles.addEventListener('click', OnClickKiemeles);
sup.addEventListener('click', OnClickSup);
sub.addEventListener('click', OnClickSub);
igazitasBalra.addEventListener('click', OnClickBalra)
igazitasJobbra.addEventListener('click', OnClickJobbra)
igazitasKozepre.addEventListener('click', OnClickKozepre)
igazitasSorkizart.addEventListener('click', OnClickSorkizart)
buttonItalic.addEventListener('click', OnClickItalic);
athuzas.addEventListener('click',OnClickAthuzas);
szamozott.addEventListener('click', OnClickOL);
szamozatlan.addEventListener('click', OnClickUL);



function GetWrappedSelection(text, start, end, statTag, endTag) {
    let left = text.slice(0, start);
    let middle = text.slice(start, end);
    let right = text.slice(end);
    let newText = `${left}${statTag}${middle}${endTag}${right}`;
    return newText;
}

function OnClickH1() {
    Changer(
        "<h1>", 
        "</h1>"
        );
}

function OnClickH2() {
    Changer(
        "<h2>", 
        "</h2>"
        );
}

function OnClickH3() {
    Changer(
        "<h3>", 
        "</h3>"
        );
}

function OnClickH4() {
    Changer(
        "<h4>", 
        "</h4>"
        );
}

function OnClickH5() {
    Changer(
        "<h5>", 
        "</h5>"
        );
}

function OnClickH6() {
    Changer(
        "<h6>", 
        "</h6>"
        );
}

function OnClickImage() {
    Changer(
        "<img src='' alt=''>", 
        ""
        );
}

function OnClickLink(){
    Changer(
        "<a href=''>", 
        "</a>"
        );
}

function OnClickKiemeles() {
    let statTag = "<span style='background-color: green;>";
    let endTag = "</span>";
    Changer(statTag, endTag);
}

function OnClickSup() {
    let statTag = "<sup>";
    let endTag = "</sup>";
    Changer(statTag, endTag);
}

function OnClickSub() {
    let statTag = "<sub>";
    let endTag = "</sub>";
    Changer(statTag, endTag);
}

function OnClickBalra() {
    Changer("<div style='text-align: left;'>","</div>");
}


function OnClickJobbra() {
    Changer("<div style='text-align: right;'>","</div>");
}


function OnClickKozepre() {
    Changer("<div style='text-align: center;'>","</div>");
}


function OnClickSorkizart() {
    Changer("<div style='text-align: justify;'>","</div>");
}

function OnClickItalic() {
    let statTag = "<italic>";
    let endTag = "</italic>";
    Changer(statTag, endTag);
}


function OnClickAthuzas() {
    let statTag = "<span style='text-decoration: line-through;'>";
    let endTag = "</span>";
    Changer(statTag, endTag);
}

function  OnClickOL() {
    Replacer("<ol>", "</ol>",'p','li');
}

function  OnClickUL() {
    Replacer("<ul>", "</ul>",'p','li');
}



function OnClickP() {
    let statTag = "<p>";
    let endTag = "</p>";
    Changer(statTag, endTag);
}

function OnClickStrong() {
    let statTag = "<strong>";
    let endTag = "</strong>";
    Changer(statTag, endTag);
}

function OnClickRed() {
    let statTag = "<span style='color: red; font-weight: bold'>";
    let endTag = "</span>";
    Changer(statTag, endTag);
}

function Changer(statTag, endTag) {
    let text = input.value;
    let start = input.selectionStart;
    let end = input.selectionEnd;
    input.value = GetWrappedSelection(text, start, end, statTag, endTag);
    RenderOutput();
}

function Replacer(statTag, endTag, oldTag,newTag){
    let text = input.value;
    let start = input.selectionStart;
    let end = input.selectionEnd;
    let left = text.slice(0, start);
    let middle = text.slice(start, end);
    let right = text.slice(end);


    middle = GetWrappedSelection(text, start, end, statTag, endTag);
   middle = middle.replaceAll('<'+oldTag+'>','<' +newTag + '>');
   middle = middle.replaceAll('</'+oldTag+'>','</' +newTag + '>');


    input.value = `${left}${middle}${right}`;
    RenderOutput();
}

function RenderOutput() {
    let html = input.value;
    output.innerHTML = html;
}