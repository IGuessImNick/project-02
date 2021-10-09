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
        prompt: 'You awaken under a empty land full of mist under a 1000 foot tree, looking at the tree you notice a blue aura flowing from the top going to the bottom meeting with a menacing red aura at the roots. You then hear a compelling voice "My name is Rivendell". You notice the voice is actually the tree, it then says "I pulled you from your world to save me the newly corrupted life aura on me, you must help me and ill reward you greatly." ',
        options: [
            {
                content: 'I will help you any way I can, not for the reward but for the honor of morals.',
                destination: 2
            },
            
            {
                content: 'Whats stopping me from cutting you down for your resources that are only found here?',
                destination: 3
            }

        ]
    },

    {
        id: 2,
        prompt: '"To help me, I will lend you my omnipotent powers to try to heal the corruption off me".',
        options: [
            {
                content: 'accept the powers and proceed to heal',
                destination: 4
            },
            
            {
                content: 'decline the powers',
                destination: 5
            }

        ]
    },

    {
        id: 3,
        prompt: 'The choice is yours, I cannot stop you, listen to your heart whether its right or wrong',
        options: [
            {
                content: 'Pick up axe',
                destination: 6
            },
            
            {
                content: 'Refuse to pick up axe',
                destination: 7
            }

        ]
    },

    {
        id: 4,
        prompt: '"Now that I am ridden of this corrupt power, please bless me back with the powers so I can reward you and send you back to your home" ',
        options: [
            {
                content: 'You agree and flow the power back onto the tree',
                destination: 8
            },
            
            {
                content: 'You feel the power surging within you and refuse to give back the power, instead you silence the trees abilities to communicate',
                destination: 9
            }

        ]
    },

    {
        id: 5,
        prompt: '"If you refuse, I will perrish and the corrupted will take over not only me but the land and create a hell infested land"',
        options: [
            {
                content: 'Still refuse',
                destination: 10
            },
            
            {
                content: 'Accept the powers and heal the tree',
                destination: 11
            }

        ]
    },

    {
        id: 6,
        prompt: '"With that axe if you chop me down, neither I or the corrupted with live"',
        options: [
            {
                content: 'Chop down Rivendell',
                destination: 12
            },
            
            {
                content: 'Refuse to chop down Rivendell and instead inherit his powers and heal him',
                destination: 13
            }

        ]
    },

    {
        id: 7,
        prompt: 'Very well, I bless you with my powers, will you still help me?',
        options: [
            {
                content: 'Yes, you then heal Rivendell',
                destination: 14
            },
            
            {
                content: 'No, I didnt ask for any of this',
                destination: 15
            }

        ]
    },

    {
        id: 8,
        prompt: 'Thank you for getting rid of the corrupted, now for your reward, you get to keep the my powers and go home, or stay here and gain the ability to create a new world but only here',
        options: []
    },

    {
        id: 9,
        prompt: 'You now are stuck on the empty land with no way home, you then start to creat life and are considered a god with no one having the knowledge of what happened but yourself',
        options: []
    },

    {
        id: 10,
        prompt: 'Rivendell proceeds to light up red, with it comes spawning of demons and unspeakable creatures, the skys turn red, the land turns barren. You find yourself alone, on the run from the now new dangerous landscape',
        options: []
    },

    {
        id: 11,
        prompt: 'Thank you for getting rid of the corrupted, now for your reward, you get to keep the my powers and go home, or stay here and gain the ability to create a new world but only here',
        options: []
    },

    {
        id: 12,
        prompt: 'You bask in the fruit of glory of the newly aquired resources, glowing with beauty and greed. You then realize you are stuck in the misty empty land alone, nothing there but you and your treasures',
        options: []
    },

    {
        id: 13,
        prompt: 'Thank you for getting rid of the corrupted, now for your reward, you get to keep the my powers and go home, or stay here and gain the ability to create a new world but only here',
        options: []
    },

    {
        id: 14,
        prompt: 'Thank you for getting rid of the corrupted, now for your reward, you get to keep the my powers and go home, or stay here and gain the ability to create a new world but only here',
        options: []
    },

    {
        id: 15,
        prompt: 'Rivendell proceeds to light up red, with it comes spawning of demons and unspeakable creatures, the skys turn red, the land turns barren. You find yourself alone, on the run from the now new dangerous landscape',
        options: []
    },

]

startGame();