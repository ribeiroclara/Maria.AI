const ladybug = document.getElementById('ladybug');
if (ladybug) {
    ladybug.addEventListener('click', () => {
        console.log("A joaninha foi clicada!");
    });
}

const answerForm = document.querySelector(".answer-generator-form");
if (answerForm) {
    answerForm.addEventListener("submit", generateAnswer);
} else {
    console.error("Formulário com a classe 'answer-generator-form' não foi encontrado.");
}

function generateAnswer(event) {
    event.preventDefault(); 

    const answerElement = document.querySelector(".answer");
    if (answerElement) {
        new Typewriter(answerElement, {
            strings: "Your answer will be typed here...",
            autoStart: true,
            delay: 1,
            cursor: "",
        });
    } else {
        console.error("Elemento com a classe 'answer' não foi encontrado.");
    }
}
const typewriterElement = document.getElementById('typewriter-text');

const typewriter = new Typewriter(typewriterElement, {
    loop: false, 
    delay: 1,  
    cursor: "", 
});

typewriter
    .typeString("Hello I'm Maria!") 
    .pauseFor(2000)
    .start();