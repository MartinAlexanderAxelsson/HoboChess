
const welcome = document.createElement('h1')
const name = document.createElement('h2')
const rules = document.createElement('h3')
welcome.textContent = 'Welcome to'
name.textContent = '💦AqUaTiC HoBoChEsS!💦' 
rules.textContent = '5 in a row will free Whale or Nemo!' 
document.querySelector('body').appendChild(welcome)
document.querySelector('body').appendChild(name)
document.querySelector('body').appendChild(rules)

  


const size = 25

function createBoard(){

const board = document.createElement('table')
document.querySelector('body').appendChild(board)
board.id = 'board'
let counter = 1
    
    for(let i = 0; i < size; i++)
    {
    const box = document.createElement('tr')
    board.appendChild(box)

            
    const row = document.createElement('button')
    row.className = 'cell'
    row.innerHTML += ''
    row.id = i * 601
    box.appendChild(row)

            for(let k = 1; k < size; k++){
            const cloneRow = row.cloneNode(true)
            box.appendChild(cloneRow)
            cloneRow.id = counter
            counter += 1
            }
    }
}
createBoard(size)


function playerNameInput(){
    
    const div = document.createElement('div')
    document.querySelector('body').appendChild(div)
    div.id = 'div'
    const playerXButton = document.createElement('button')
    const playerOButton = document.createElement('button')
    playerXButton.className = 'name1'
    playerOButton.className = 'name1'
    div.appendChild(playerXButton)
    div.appendChild(playerOButton)
    playerXButton.textContent = 'click to enter name of Whale 🐋'
    playerOButton.textContent = 'click to enter name of Nemo 🐠'

        playerXButton.addEventListener('click', function(){
        let playerXName = prompt('Player X enter name:')
        const nameButtonX = document.createElement('button')
        document.querySelector('div').appendChild(nameButtonX)
        nameButtonX.textContent = playerXName + ' is 🐋'
        nameButtonX.className = 'name1'
        playerXButton.replaceWith(nameButtonX) 
        nameButtonX.id = 'playerX'
        
        })
        
        playerOButton.addEventListener('click', function(){
        let playerOName = prompt('Player O enter name:')
        const nameButtonO = document.createElement('button')
        document.querySelector('div').appendChild(nameButtonO)
        nameButtonO.textContent = playerOName + ' is 🐠'
        nameButtonO.className = 'name1'
        playerOButton.replaceWith(nameButtonO)
        nameButtonO.id = 'playerO'
        
        })

        
        
}
playerNameInput()



function resetButton(){

    const resetButton = document.createElement('button')
    document.getElementById('div').appendChild(resetButton)
    resetButton.id = 'resetButton'
    resetButton.className = 'name1'
    resetButton.textContent = 'Click to reset board!'
    document.getElementById('resetButton').addEventListener('click', function (){ location.reload() })
}

resetButton()


let players = []
let markers = ['🐋', '🐠']
let turn = 0
players [0] = '🐠:s turn' // player x
players [1] = '🐋:s turn' // player o

let countMoves = 1

function play(){
    
    const p1 = document.createElement('p')
    document.querySelector('body').appendChild(p1)
    p1.className = 'playerNameToogle'
    const p2 = document.createElement('p')
    document.querySelector('body').appendChild(p2)
    p2.className = 'countStrokes'
    const p3 = document.createElement('p')
    document.querySelector('body').appendChild(p3)
    p3.className = 'start'
    p3.textContent = '🐋 starts!'

    document.getElementById('board').addEventListener('click', function ears(event){
        
        p3.textContent = ''
        event.clientX
        event.clientY
    
        
        if(event.target.innerHTML == ''){
            event.target.innerHTML = markers[turn]
            p2.textContent = 'Total moves: ' + countMoves++
            changeXorO()
            

        }
        
        function changeXorO(){
            
            p1.textContent = players[turn]
            if(turn === 0){
            turn = 1  
            arrX.push(event.target.innerHTML)
            xCount += 1
            
            
            }
        
            else{
            turn = 0
            arrO.push(event.target.innerHTML)
            oCount += 1
            if(oCount >= 5){checkWin()}
            
            }
        }
    })

}
play()


let arrX = []
let arrO = []

// let xCount = 0
// let oCount = 0




// let xSel = []
// let oSel = []
// win.push(xSel)
// win.push(oSel)
// let win = [[]]

