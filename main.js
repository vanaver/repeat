let buttons = Array.from(document.getElementsByClassName("clickable"));
//console.log(buttons)
const hidden = Array.from(document.getElementsByClassName('hideIn'));
//console.log(hidden)

const showText = (element) => {
    if (element.style.display == "block") {
        console.log(1)
        return element.style.display = 'none';
    } else {
        console.log(2)
        return element.style.display = 'block';
    }
}
// Ya IVAn



const hidden2 = Array.from(document.getElementsByClassName('cuka'))
const lol = document.getElementById('fuckTanya')

for (let i = 0; i <= hidden2.length -1; i++) {
    lol.addEventListener('mouseover', () => showText(hidden2[i]))
    lol.addEventListener('mouseout', () => showText(hidden2[i]))
}