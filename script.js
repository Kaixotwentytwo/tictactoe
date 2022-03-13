let cube = document.querySelector('.cube'), //поле
    cubeWidth = cube.clientWidth;

cube.style.setProperty("--height", cubeWidth + 1 + 'px')

let plank = cubeWidth / 3 - 9 + 'px';//одна клета поля

let drop = document.createElement('span');


let i = 0;
while (i<9) {
    cube.appendChild(drop);
    
    let span = document.getElementsByTagName('span');
    span[i].style.setProperty("--spanw", plank)
    span[i].style.setProperty("--spanh", plank)

    i++
}

let span = document.querySelectorAll('span');


let winParent = document.querySelector('.win-parent'),
    width = window.innerWidth + 'px';
winParent.style.setProperty('--wdt', width)
let winText = document.querySelector('.win'),
    winBG = document.querySelector('.bg');
    
let queue = 0
function click(queue) {
    span[0].addEventListener('mouseover', overs)
    span[1].addEventListener('mouseover', overs)
    span[3].addEventListener('mouseover', overs)
    span[2].addEventListener('mouseover', overs)
    span[4].addEventListener('mouseover', overs)
    span[5].addEventListener('mouseover', overs)
    span[6].addEventListener('mouseover', overs)
    span[7].addEventListener('mouseover', overs)
    span[8].addEventListener('mouseover', overs)
    
    function overs(span) {
        this.style.background = 'white'
    }
    
        span[0].addEventListener('mouseout', outs)
        span[1].addEventListener('mouseout', outs)
        span[2].addEventListener('mouseout', outs)
        span[3].addEventListener('mouseout', outs)
        span[4].addEventListener('mouseout', outs)
        span[5].addEventListener('mouseout', outs)
        span[6].addEventListener('mouseout', outs)
        span[7].addEventListener('mouseout', outs)
        span[8].addEventListener('mouseout', outs)

    
    function outs(span) {
        this.style.background = 'gray'
    }
    
    span[0].addEventListener('click', deleted)
    span[1].addEventListener('click', deleted)
    span[2].addEventListener('click', deleted)
    span[3].addEventListener('click', deleted)
    span[4].addEventListener('click', deleted)
    span[5].addEventListener('click', deleted)
    span[6].addEventListener('click', deleted)
    span[7].addEventListener('click', deleted)
    span[8].addEventListener('click', deleted)
    
    let queueColor = document.querySelector('.queue');
    queueColor.style.setProperty('--queueColor', 'cyan');
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
            this.style.background = "purple";
            this.removeEventListener('click', deleted)
            this.innerHTML = "O";

            queueColor.style.setProperty('--queueColor', 'cyan');
            queueColor.innerHTML = "X";
        
            this.removeEventListener('mouseover', overs);
            this.removeEventListener('mouseout', outs);
            queue = 1;
        } else {
            this.style.background = "cyan";
            this.removeEventListener('click', deleted)
            this.innerHTML = "X";

            queueColor.style.setProperty('--queueColor', 'purple');
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
            winParent.style.display = "none";
            winText.style.display = "none";})
        
        winText.addEventListener('click', function() {
            this.style.display = "none";
            winParent.style.display = "none";
            winBG.style.display = "none";})
        
            function winO() {
        winText.innerHTML = "Команда О победила";
        winText.style.display = "block";
        winParent.style.display = "block";
        winBG.style.display = "block";

        winText.style.setProperty('--winColor', 'linear-gradient(25deg, purple, #b5a4a4)');
    }

    function winX() {
        winText.innerHTML = "Команда X  победила ";
        winText.style.display = "block";
        winParent.style.display = "block";
        winBG.style.display = "block";

        winText.style.setProperty('--winColor', 'linear-gradient(25deg, cyan, #b5a4a4)');
    }
    
    function draw() {
        winText.innerHTML = "Ничья";
        winText.style.display = "block";
        winParent.style.display = "block";
        winBG.style.display = "block";

        winText.style.setProperty('--winColor', 'linear-gradient(25deg, #63ff00, #b5a4a4)');
    }


            
        //Проверка победы ноликов
        
        
        if (spans[0].style.background === 'purple') {
            if (spans[1].style.background === 'purple') {
                if (spans[2].style.background === 'purple') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[3].style.background === 'purple') {
            if (spans[4].style.background === 'purple') {
                if (spans[5].style.background === 'purple') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[6].style.background === 'purple') {
            if (spans[7].style.background === 'purple') {
                if (spans[8].style.background === 'purple') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[0].style.background === 'purple') {
            if (spans[3].style.background === 'purple') {
                if (spans[6].style.background === 'purple') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[1].style.background === 'purple') {
            if (spans[4].style.background === 'purple') {
                if (spans[7].style.background === 'purple') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[2].style.background === 'purple') {
            if (spans[5].style.background === 'purple') {
                if (spans[8].style.background === 'purple') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[6].style.background === 'purple') {
            if (spans[4].style.background === 'purple') {
                if (spans[2].style.background === 'purple') {
                    nulling()
                    winO()
                }
            }
        }
        if (spans[0].style.background === 'purple') {
            if (spans[4].style.background === 'purple') {
                if (spans[8].style.background === 'purple') {
                    nulling()
                    winO()
                }
            }
        }//end
        
        //Проверка победы крестиков
        
        if (spans[0].style.background === 'cyan') {
            if (spans[1].style.background === 'cyan') {
                if (spans[2].style.background === 'cyan') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[3].style.background === 'cyan') {
            if (spans[4].style.background === 'cyan') {
                if (spans[5].style.background === 'cyan') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[6].style.background === 'cyan') {
            if (spans[7].style.background === 'cyan') {
                if (spans[8].style.background === 'cyan') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[0].style.background === 'cyan') {
            if (spans[3].style.background === 'cyan') {
                if (spans[6].style.background === 'cyan') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[1].style.background === 'cyan') {
            if (spans[4].style.background === 'cyan') {
                if (spans[7].style.background === 'cyan') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[2].style.background === 'cyan') {
            if (spans[5].style.background === 'cyan') {
                if (spans[8].style.background === 'cyan') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[6].style.background === 'cyan') {
            if (spans[4].style.background === 'cyan') {
                if (spans[2].style.background === 'cyan') {
                    nulling()
                    winX()
                }
            }
        }
        if (spans[0].style.background === 'cyan') {
            if (spans[4].style.background === 'cyan') {
                if (spans[8].style.background === 'cyan') {
                    nulling()
                    winX()
                }
            }
        }//end
        
        //проверка ничьи
        if ((spans[0].style.background === 'cyan') || (spans[0].style.background === 'purple')) {
            if ((spans[1].style.background === 'cyan') || (spans[1].style.background === 'purple')) {
                if ((spans[2].style.background === 'cyan') || (spans[2].style.background === 'purple')) {
                    if ((spans[3].style.background === 'cyan') || (spans[3].style.background === 'purple')) {
                        if ((spans[4].style.background === 'cyan') || (spans[4].style.background === 'purple')) {
                            if ((spans[5].style.background === 'cyan') || (spans[5].style.background === 'purple')) {
                                if ((spans[6].style.background === 'cyan') || (spans[6].style.background === 'purple')) {
                                    if ((spans[7].style.background === 'cyan') || (spans[7].style.background === 'purple')) {
                                        if ((spans[8].style.background === 'cyan') || (spans[8].style.background === 'purple'))
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