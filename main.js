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

showText(hidden[0])
