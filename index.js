let liste = []

function addname(){
    let name = document.getElementById('navn').value;
    let antall = document.getElementById('antall').value;
    if(name == null || antall == null || name == '' || antall == ''){
        return;
    }
    for (let index = 0; index < antall; index++) {
        liste.push([name, antall]);
    }
    let text = document.getElementById('personer').innerHTML;
    text += `<p onclick="removename(this.id)" id="`+name+`">Navn: `+name+`, Antall: `+antall+`</p>`;
    document.getElementById('personer').innerHTML = text;
    document.getElementById('antall').value = '';
    document.getElementById('navn').value = '';
}


function removename(name){
    var element = document. getElementById(name);
    element.parentNode.removeChild(element);

    for (let index = liste.length -1; index >= 0; index--) {
        if(liste[index][0] == name){
            liste.splice(index, 1);
        }
    }
}


function startlotteri(){
    if(liste.length == 0 ){
        document.getElementById('vinnertekst').innerHTML = "Vinner: Ingen ble registert!"
    } else {
        let random = Math.floor(Math.random() * liste.length)
        winner = liste[random];
        name = winner[0];
        document.getElementById('vinnertekst').innerHTML = "Vinner: " + name;
    }
}