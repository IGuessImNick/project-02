const { options } = require("../../models/User");

const promptElement = document.getElementById('prompts');
const choicesElement = document.getElementById('choices');

// let state = {}

function startGame () {
    // state = {};
    showPromptNode(1)
}

function showPromptNode(promptNodeIndex) {
    const promptNode = promptNodes.find(promptNode => promptNode.id = promptNodeIndex);
    promptElement.innerText = promptNode.text;
    while (choicesElement.firstChild) {
        choicesElement.removeChild(choicesElement.firstChild)
    }

    promptNode.options.forEach(option => {
        if (showChoice(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectChoice(option));
            choicesElement.appendChild(button)
        }
    }); 
}

function showOption(option) {
    return true;
}

function selectChoice (option) {
    const nextPromptId = option.destination;
    showPromptNode(nextPromptId)
}

const promptNodes = [
    {
        id: 1,
        prompt: 'prompt 1',
        options: [
            {
                content: 'option A1',
                destination: 2
            },
            
            {
                content: 'option B1',
                destination: 3
            }

        ]
    },

    {
        id: 2,
        prompt: 'prompt 2',
        options: [
            {
                content: 'option A2',
                destination: 4
            },
            
            {
                content: 'option B2',
                destination: 5
            }

        ]
    },

    {
        id: 3,
        prompt: 'prompt 3',
        options: [
            {
                content: 'option A3',
                destination: 6
            },
            
            {
                content: 'option B3',
                destination: 7
            }

        ]
    },

]

startGame();