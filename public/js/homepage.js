// if (typeof window === 'object') {
//     // Check if document is finally loaded
//        document.addEventListener("DOMContentLoaded", function () {
//            alert('Finished loading')
//          });
//       }

const promptElement = document.getElementById('prompts');
const choicesElement = document.getElementById('choices');


function startGame () {
    showPromptNode(1)
}

function showPromptNode(promptNodeIndex) {
    if (!promptElement) {
        return;
    }
    const promptNode = promptNodes.find(promptNode => promptNode.id === promptNodeIndex);
    promptElement.innerText = promptNode.prompt;
    
    console.log(promptNode)
    while (choicesElement.firstChild) {
        choicesElement.removeChild(choicesElement.firstChild)
    }

    promptNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerHTML = option.content;
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

    {
        id: 4,
        prompt: 'prompt 4',
        options: [
            {
                content: 'option A4',
                destination: 8
            },
            
            {
                content: 'option B4',
                destination: 9
            }

        ]
    },

    {
        id: 5,
        prompt: 'prompt 5',
        options: [
            {
                content: 'option A5',
                destination: 10
            },
            
            {
                content: 'option B5',
                destination: 11
            }

        ]
    },

    {
        id: 6,
        prompt: 'prompt 6',
        options: [
            {
                content: 'option A6',
                destination: 12
            },
            
            {
                content: 'option B6',
                destination: 13
            }

        ]
    },

    {
        id: 7,
        prompt: 'prompt 7',
        options: [
            {
                content: 'option A7',
                destination: 14
            },
            
            {
                content: 'option B4',
                destination: 15
            }

        ]
    },

    {
        id: 8,
        prompt: 'prompt 8',
        options: []
    },

    {
        id: 9,
        prompt: 'prompt 9',
        options: []
    },

    {
        id: 10,
        prompt: 'prompt 10',
        options: []
    },

    {
        id: 11,
        prompt: 'prompt 11',
        options: []
    },

    {
        id: 12,
        prompt: 'prompt 12',
        options: []
    },

    {
        id: 13,
        prompt: 'prompt 13',
        options: []
    },

    {
        id: 14,
        prompt: 'prompt 14',
        options: []
    },

    {
        id: 15,
        prompt: 'prompt 15',
        options: []
    },

]

startGame();