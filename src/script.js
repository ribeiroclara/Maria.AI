const ladybug = document.getElementById('ladybug');
if (ladybug) {
    ladybug.addEventListener('click', () => {
        console.log("A joaninha foi clicada!");
    });
}

const answerForm = document.querySelector(".answer-generator-form");
if (answerForm) {
    // Adicionando um ouvinte de evento para o formulário
    answerForm.addEventListener("submit", generateAnswer);
}

function generateAnswer(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const promptInput = document.querySelector("input[name='prompt']");
    const prompt = promptInput.value;

    const apiKey = "dfa1at2b904732fc58131co4458af1ff";
    const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&key=${apiKey}`;

    // Envia a requisição para a API
    axios.get(apiURL)
        .then(displayAnswer)
        .catch((error) => console.error("Erro na API:", error));
}

function displayAnswer(response) {
    const answerElement = document.querySelector(".answer");
    if (answerElement) {
        new Typewriter(answerElement, {
            strings: response.data.answer,
            autoStart: true,
            delay: 10,
            cursor: "",
        });
    } 
}

const typewriterElement = document.getElementById('typewriter-text');
if (typewriterElement) {
    const typewriter = new Typewriter(typewriterElement, {
        loop: false,
        delay: 10,
        cursor: "",
    });

    typewriter
        .typeString("Hello I'm Maria!")
        .pauseFor(2000)
        .start();
}
