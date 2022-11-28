
    var randomWords = document.getElementById('randomWords')
    var typeAnswer = document.getElementById('typeAnswer')
    var scoreInc = document.getElementById('scoreInc')

    var words = ['Apple','Pineapple','Orange','Mango','Strawberry','Grapes','Banana','Coconut','Guava','Watermelon','Blueberry','Cherry','Raspberry']

    function random_item(words){ 
        return words[Math.floor(Math.random()*words.length,[0])];
    }
    
    // var x = random_item(words);
    // randomWords.textContent = x;

    
    let score = 0;
    function a(){
        var ans = document.getElementById('typeAnswer')
        // console.log(randomWords.innerHTML)
        if(ans.value == randomWords.innerHTML){
                var x = random_item(words);
                randomWords.textContent = x;
                ans.value = '';
                score++;
                score = (score < 10) ? '0' + score : score;
                scoreInc.innerHTML = score;
        }
    }
    

    let play = document.getElementById('play')

    play.addEventListener('click', ()=>{
        var x = random_item(words);
    randomWords.textContent = x;
    play.style.visibility = 'hidden'
    typeAnswer.focus()
    time()
    })

    // typeAnswer.addEventListener('input', time());

    var time;
    var timer = document.getElementById('timer')

    function time(){
        var sec = 20
        time = setInterval(()=>{
            sec--;
            sec = (sec<10) ? '0' + sec : sec
            timer.innerHTML = sec
            // console.log(sec)
            if(sec == '0-1' || sec == 0-1){
                clearInterval(time)
                timer.innerHTML = '00'
                typeAnswer.disabled = true
                alert(`Score: ${scoreInc.innerHTML} \nYou're Great Player`)
                window.top.location = window.top.location
                play.style.visibility = 'visible'
            }

        },1000)
    }