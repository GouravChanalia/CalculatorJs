const buttons = document.querySelectorAll( "button" )
const box = document.getElementById( 'output' )
const historyBox = document.getElementById( 'history' )
// const historyBtn = document.getElementById( 'clrHistory' )

let input = ''
let operator = ''
let history = ''

const isOperator = value => value==='+'?true:value==='-'?true:value==='*'?true:value==='/'?true:false

const display = ({innerHTML:value}) => {

    if( isOperator(value) )
    {
        operator = value
    }
    
    input += value
    box.value = input

}

const equalTo = () => {

    if( input.includes('=') )
    {

        history = history.concat( `${input}<br>` )
        historyBox.innerHTML = history
        return

    }

    let [operand1, operand2] = input.split( operator )
    operand1 = Number( operand1 )
    operand2 = Number( operand2 )

    switch( operator ){

        case '+':
            input = input.concat( ' = ', operand1+operand2 )
            break
        case '-':
            input = input.concat( ' = ', operand1-operand2 )
            break
        case '*':
            input = input.concat( ' = ', operand1*operand2 )
            break
        case '/':
            input = input.concat( ' = ', operand1/operand2 )
            break
        default:
            input = 'NaN'

    }

    box.value = input

    history = history.concat( `${input}<br>` )

    historyBox.innerHTML = history

}

for( let i=0; i<buttons.length; i++ ){

    if( buttons[i].innerHTML === '=' ){

        buttons[i].addEventListener( 'click', equalTo )
        continue

    }
    if( buttons[i].innerHTML === 'Clear History' ){

        buttons[i].addEventListener( 'click', () => {

            history = ''
            historyBox.innerHTML = ''
        
        } )

        continue

    }
    if( buttons[i].innerHTML === 'AC' ){

        buttons[i].addEventListener( 'click', () => {

            input = ''
            box.value = input    
        
        } )

        continue

    }

    buttons[i].addEventListener( 'click', () => display( buttons[i] ) )

}



