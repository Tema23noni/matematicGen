let easy = document.querySelector('#easy')
function easyy(){
    document.querySelector('.list').style.display = 'flex';
    document.querySelector('.var').style.display ='none'
        let mul = document.querySelector('#mul')
    let div = document.querySelector('#div')
    let sum = document.querySelector('#sum')
    let sub = document.querySelector('#sub')
    function multi(){
        let a = Math.floor(Math.random()*10)
        let b = Math.floor(Math.random()*10)
        let exe = document.querySelector('#lol')
        exe.textContent= `${a} * ${b} = `
        document.querySelector('#answ').style.display = 'flex'
        document.querySelector('.wru').style.display = 'flex'
        let check = document.querySelector("#check")
        function cheked(){
            let i = document.querySelector('#answ').value
            if(Number(i) == a * b){
                document.querySelector('#answz').style.background = 'green'
                document.querySelector('#answz').textContent = 'Верно'
                setTimeout(restart,1000)
            }else if(Number(i) != a * b){
                document.querySelector('#answz').style.background = 'red'
                document.querySelector('#answz').textContent = 'Неправильно'
                setTimeout(restart,1000)
            }
            function restart(){
                document.querySelector('#answ').value = ''
                document.querySelector('#answz').style.background = 'none'
                document.querySelector('#answz').textContent = ''
                multi()
            }
        }
        if(div.addEventListener('click', divo)){
            div.addEventListener('click')
        }
        check.addEventListener('click', cheked)
        

    }
    function divo(){
        let a = Math.floor(Math.random()*10)
        let b = Math.floor(Math.random()*10+1)
        let exe = document.querySelector('#lol')
        exe.textContent= `${a} / ${b} = `
        document.querySelector('#answ').style.display = 'flex'
        document.querySelector('.wru').style.display = 'flex'
        let check = document.querySelector("#check")
        function cheked(){
            let i = document.querySelector('#answ').value
            if(Number(i) == a / b){
                document.querySelector('#answz').style.background = 'green'
                document.querySelector('#answz').textContent = 'Верно'
                setTimeout(restart,1000)
            }else if(Number(i) != a / b){
                document.querySelector('#answz').style.background = 'red'
                document.querySelector('#answz').textContent = 'Неправильно'
                setTimeout(restart,1000)
            }
            function restart(){
                document.querySelector('#answ').value = ''
                document.querySelector('#answz').style.background = 'none'
                document.querySelector('#answz').textContent = ''
                divo()
            }
        }
        div.addEventListener('click', divo)
        check.addEventListener('click', cheked)
    }
    function sumo(){
        let a = Math.floor(Math.random()*10)
        let b = Math.floor(Math.random()*10)
        let exe = document.querySelector('#lol')
        exe.textContent= `${a} + ${b} = `
        document.querySelector('#answ').style.display = 'flex'
        document.querySelector('.wru').style.display = 'flex'
        let check = document.querySelector("#check")
        function cheked(){
            let i = document.querySelector('#answ').value
            if(Number(i) == a + b){
                document.querySelector('#answz').style.background = 'green'
                document.querySelector('#answz').textContent = 'Верно'
                setTimeout(restart,1000)
            }else if(Number(i) != a + b){
                document.querySelector('#answz').style.background = 'red'
                document.querySelector('#answz').textContent = 'Неправильно'
                setTimeout(restart,1000)
            }
            function restart(){
                document.querySelector('#answ').value = ''
                document.querySelector('#answz').style.background = 'none'
                document.querySelector('#answz').textContent = ''
                sumo()
            }
        }
        div.addEventListener('click', divo)
        check.addEventListener('click', cheked)
    }
    function subo(){
        let a = Math.floor(Math.random()*10)
        let b = Math.floor(Math.random()*10)
        let exe = document.querySelector('#lol')
        exe.textContent= `${a} - ${b} = `
        document.querySelector('#answ').style.display = 'flex'
        document.querySelector('.wru').style.display = 'flex'
        let check = document.querySelector("#check")
        function cheked(){
            let i = document.querySelector('#answ').value
            if(Number(i) == a - b){
                document.querySelector('#answz').style.background = 'green'
                document.querySelector('#answz').textContent = 'Верно'
                setTimeout(restart,1000)
            }else if(Number(i) != a - b){
                document.querySelector('#answz').style.background = 'red'
                document.querySelector('#answz').textContent = 'Неправильно'
                setTimeout(restart,1000)
            }
            function restart(){
                document.querySelector('#answ').value = ''
                document.querySelector('#answz').style.background = 'none'
                document.querySelector('#answz').textContent = ''
                subo()
            }
        }
        div.addEventListener('click', divo)
        check.addEventListener('click', cheked)
    }
    mul.addEventListener('click', multi)
    div.addEventListener('click', divo)
    sum.addEventListener('click', sumo)
    sub.addEventListener('click', subo)
}
easy.addEventListener('click', easyy)
let hard = document.querySelector('#hard')
function hardy(){
    document.querySelector('.list').style.display = 'flex';
    document.querySelector('.var').style.display ='none'
    let mul = document.querySelector('#mul')
    let div = document.querySelector('#div')
    let sum = document.querySelector('#sum')
    let sub = document.querySelector('#sub')
    function multi(){
        let a = Math.floor(Math.random()*1000)
        let b = Math.floor(Math.random()*1000)
        let exe = document.querySelector('#lol')
        exe.textContent= `${a} * ${b} = `
        document.querySelector('#answ').style.display = 'flex'
        document.querySelector('.wru').style.display = 'flex'
        let check = document.querySelector("#check")
        function cheked(){
            let i = document.querySelector('#answ').value
            if(Number(i) == a * b){
                document.querySelector('#answz').style.background = 'green'
                document.querySelector('#answz').textContent = 'Верно'
                setTimeout(restart,1000)
            }else if(Number(i) != a * b){
                document.querySelector('#answz').style.background = 'red'
                document.querySelector('#answz').textContent = 'Неправильно'
                setTimeout(restart,1000)
            }
            function restart(){
                document.querySelector('#answ').value = ''
                document.querySelector('#answz').style.background = 'none'
                document.querySelector('#answz').textContent = ''
                multi()
            }
        }
        if(div.addEventListener('click', divo)){
            div.addEventListener('click')
        }
        check.addEventListener('click', cheked)
        

    }
    function divo(){
        let a = Math.floor(Math.random()*1000)
        let b = Math.floor(Math.random()*100+1)
        let exe = document.querySelector('#lol')
        exe.textContent= `${a} / ${b} = `
        document.querySelector('#answ').style.display = 'flex'
        document.querySelector('.wru').style.display = 'flex'
        let check = document.querySelector("#check")
        function cheked(){
            let i = document.querySelector('#answ').value
            if(Number(i) == a / b){
                document.querySelector('#answz').style.background = 'green'
                document.querySelector('#answz').textContent = 'Верно'
                setTimeout(restart,1000)
            }else if(Number(i) != a / b){
                document.querySelector('#answz').style.background = 'red'
                document.querySelector('#answz').textContent = 'Неправильно'
                setTimeout(restart,1000)
            }
            function restart(){
                document.querySelector('#answ').value = ''
                document.querySelector('#answz').style.background = 'none'
                document.querySelector('#answz').textContent = ''
                divo()
            }
        }
        div.addEventListener('click', divo)
        check.addEventListener('click', cheked)
    }
    function sumo(){
        let a = Math.floor(Math.random()*1000)
        let b = Math.floor(Math.random()*1000)
        let exe = document.querySelector('#lol')
        exe.textContent= `${a} + ${b} = `
        document.querySelector('#answ').style.display = 'flex'
        document.querySelector('.wru').style.display = 'flex'
        let check = document.querySelector("#check")
        function cheked(){
            let i = document.querySelector('#answ').value
            if(Number(i) == a + b){
                document.querySelector('#answz').style.background = 'green'
                document.querySelector('#answz').textContent = 'Верно'
                setTimeout(restart,1000)
            }else if(Number(i) != a + b){
                document.querySelector('#answz').style.background = 'red'
                document.querySelector('#answz').textContent = 'Неправильно'
                setTimeout(restart,1000)
            }
            function restart(){
                document.querySelector('#answ').value = ''
                document.querySelector('#answz').style.background = 'none'
                document.querySelector('#answz').textContent = ''
                sumo()
            }
        }
        div.addEventListener('click', divo)
        check.addEventListener('click', cheked)
    }
    function subo(){
        let a = Math.floor(Math.random()*1009)
        let b = Math.floor(Math.random()*1000)
        let exe = document.querySelector('#lol')
        exe.textContent= `${a} - ${b} = `
        document.querySelector('#answ').style.display = 'flex'
        document.querySelector('.wru').style.display = 'flex'
        let check = document.querySelector("#check")
        function cheked(){
            let i = document.querySelector('#answ').value
            if(Number(i) == a - b){
                document.querySelector('#answz').style.background = 'green'
                document.querySelector('#answz').textContent = 'Верно'
                setTimeout(restart,1000)
            }else if(Number(i) != a - b){
                document.querySelector('#answz').style.background = 'red'
                document.querySelector('#answz').textContent = 'Неправильно'
                setTimeout(restart,1000)
            }
            function restart(){
                document.querySelector('#answ').value = ''
                document.querySelector('#answz').style.background = 'none'
                document.querySelector('#answz').textContent = ''
                subo()
            }
        }
        div.addEventListener('click', divo)
        check.addEventListener('click', cheked)
    }
    mul.addEventListener('click', multi)
    div.addEventListener('click', divo)
    sum.addEventListener('click', sumo)
    sub.addEventListener('click', subo)
}
hard.addEventListener('click', hardy)