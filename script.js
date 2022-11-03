let cube = document.querySelector('.cube'), //поле
    cubeWidth = cube.clientWidth;

setInterval(function() {
    cube.style.setProperty("--height", document.querySelector('.cube').clientWidth + 1 + 'px');
    winParent.style.width = `${window.outerWidth}px`;
    winText.style.left = `${(winParent.clientWidth) / 2 - winText.clientWidth / 2}px`;
    winText.style.setProperty('transform', 'translateX(0%)');
}, 500)
cube.style.setProperty("--height", cubeWidth + 1 + 'px')

let span = document.querySelectorAll('span');


let winParent = document.querySelector('.win-parent');
let winText = document.querySelector('.win'),
    winBG = document.querySelector('.bg');
    
winText.style.left = `${(winParent.clientWidth) / 2 - winText.clientWidth / 2}px`;

let queue = 0
function click(queue) {
    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener('mouseover', overs)
        span[i].addEventListener('mouseout', outs)
        span[i].addEventListener('mousedown', deleted)
    }
    
    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener('mouseover', overs)
    }
    
    function outs(span) {
        this.style.background = 'gray';
    }
    
    function overs(span) {
        this.style.background = '#f8ecec'
    }
    
    let queueColor = document.querySelector('.queue');
    queueColor.style.setProperty('--queueColor', 'cornflowerblue');
    queueColor.innerHTML = "X";


    function deleted(span) {
        var audio = new Audio('sound.mp3');
        audio.play();
        function play() {
            var audio = new Audio('sound.mp3');
            audio.play();
        }
        
        //who's turn
        if (queue == 0) {
            this.style.background = "crimson";
            this.removeEventListener('mousedown', deleted)
            this.innerHTML = "O";

            queueColor.style.setProperty('--queueColor', 'cornflowerblue');
            queueColor.innerHTML = "X";
        
            this.removeEventListener('mouseover', overs);
            this.removeEventListener('mouseout', outs);
            queue = 1;
        } else {
            this.style.background = "cornflowerblue";
            this.removeEventListener('mousedown', deleted)
            this.innerHTML = "X";

            queueColor.style.setProperty('--queueColor', 'crimson');
            queueColor.innerHTML = "O";
        
            this.removeEventListener('mouseover', overs);
            this.removeEventListener('mouseout', outs);
            queue = 0;
        };
        let spans = document.querySelectorAll('span')
        
        function nulling() {
            let i = 0
            while (i < 9) {
                spans[i].style.background = "gray"
                spans[i].innerHTML = "";
                spans[i].addEventListener('click', deleted);
                spans[i].addEventListener('mouseover', overs);
                spans[i].addEventListener('mouseout', outs);
                
                i++
            }
            
            var audio = new Audio('win.mp3');
            audio.play();
            function play() {
            var audio = new Audio('win.mp3');
            audio.play();
            }
        }//end of nulling function
        
        winBG.addEventListener('click', function() {
            this.style.display = "none";
            winParent.style.zIndex = -10;
        })
        
        winText.addEventListener('click', function() {
            winParent.style.zIndex = -10;
            winBG.style.display = "none";
        })
        
    function winO() {
        winText.innerHTML = "Команда О победила";
        winParent.style.zIndex = 10;
        winBG.style.display = "block";

        winText.style.setProperty('--winColor', 'linear-gradient(25deg, crimson, #b5a4a4)');
    }

    function winX() {
        winText.innerHTML = "Команда X  победила ";
        winParent.style.zIndex = 10;
        winBG.style.display = "block";

        winText.style.setProperty('--winColor', 'linear-gradient(70deg, cornflowerblue, #b5a4a4)');
    }
    
    function draw() {
        winText.innerHTML = "Ничья";
        winParent.style.zIndex = 10;
        winBG.style.display = "block";

        winText.style.setProperty('--winColor', 'linear-gradient(25deg, #ffa700, #b5a4a4)');
    }


            
        //Проверка победы ноликов
        
        
        if (spans[0].style.background === 'crimson') {
            if (spans[1].style.background === 'crimson') {
                if (spans[2].style.background === 'crimson') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[3].style.background === 'crimson') {
            if (spans[4].style.background === 'crimson') {
                if (spans[5].style.background === 'crimson') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[6].style.background === 'crimson') {
            if (spans[7].style.background === 'crimson') {
                if (spans[8].style.background === 'crimson') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[0].style.background === 'crimson') {
            if (spans[3].style.background === 'crimson') {
                if (spans[6].style.background === 'crimson') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[1].style.background === 'crimson') {
            if (spans[4].style.background === 'crimson') {
                if (spans[7].style.background === 'crimson') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[2].style.background === 'crimson') {
            if (spans[5].style.background === 'crimson') {
                if (spans[8].style.background === 'crimson') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[6].style.background === 'crimson') {
            if (spans[4].style.background === 'crimson') {
                if (spans[2].style.background === 'crimson') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[0].style.background === 'crimson') {
            if (spans[4].style.background === 'crimson') {
                if (spans[8].style.background === 'crimson') {
                    nulling()
                    winO()
                }
            }
        }//end
        
        //Проверка победы крестиков
        
        if (spans[0].style.background === 'cornflowerblue') {
            if (spans[1].style.background === 'cornflowerblue') {
                if (spans[2].style.background === 'cornflowerblue') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[3].style.background === 'cornflowerblue') {
            if (spans[4].style.background === 'cornflowerblue') {
                if (spans[5].style.background === 'cornflowerblue') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[6].style.background === 'cornflowerblue') {
            if (spans[7].style.background === 'cornflowerblue') {
                if (spans[8].style.background === 'cornflowerblue') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[0].style.background === 'cornflowerblue') {
            if (spans[3].style.background === 'cornflowerblue') {
                if (spans[6].style.background === 'cornflowerblue') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[1].style.background === 'cornflowerblue') {
            if (spans[4].style.background === 'cornflowerblue') {
                if (spans[7].style.background === 'cornflowerblue') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[2].style.background === 'cornflowerblue') {
            if (spans[5].style.background === 'cornflowerblue') {
                if (spans[8].style.background === 'cornflowerblue') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[6].style.background === 'cornflowerblue') {
            if (spans[4].style.background === 'cornflowerblue') {
                if (spans[2].style.background === 'cornflowerblue') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[0].style.background === 'cornflowerblue') {
            if (spans[4].style.background === 'cornflowerblue') {
                if (spans[8].style.background === 'cornflowerblue') {
                    nulling()
                    winX()
                }
            }
        }//end
        
        //проверка ничьи
        if ((spans[0].style.background === 'cornflowerblue') || (spans[0].style.background === 'crimson')) {
            if ((spans[1].style.background === 'cornflowerblue') || (spans[1].style.background === 'crimson')) {
                if ((spans[2].style.background === 'cornflowerblue') || (spans[2].style.background === 'crimson')) {
                    if ((spans[3].style.background === 'cornflowerblue') || (spans[3].style.background === 'crimson')) {
                        if ((spans[4].style.background === 'cornflowerblue') || (spans[4].style.background === 'crimson')) {
                            if ((spans[5].style.background === 'cornflowerblue') || (spans[5].style.background === 'crimson')) {
                                if ((spans[6].style.background === 'cornflowerblue') || (spans[6].style.background === 'crimson')) {
                                    if ((spans[7].style.background === 'cornflowerblue') || (spans[7].style.background === 'crimson')) {
                                        if ((spans[8].style.background === 'cornflowerblue') || (spans[8].style.background === 'crimson'))
                                            {
                                                nulling()
                                                draw()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }//end of draw check
    }
}


click()