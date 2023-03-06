const subtitle = document.getElementsByClassName("card-subtitle")[0];
const createWord =(text, index) => {
    const word  = document.create("span");

    word.innerHTML - `${text}`;

    word.classList.add("card-subtitle-word");

    word.style.transitionDelay = `${index * 40} ms`;

    return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text,index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("This is a random subtitle");