import React, { useState } from "react";
import './Calculator.css'

function Calculator() {
    const [val,setVal] = useState('')
    const [result, setResult] =  useState('')

    const symbols = ['+','-','*','/','.']

    const PrintResult = value =>{
        if(symbols.includes(value) && val === ''){
            return
        }
        
        if(symbols.includes(value) && symbols.includes(val.slice(-1))){
            setVal(val.slice(0,-1) + value)
        } else{
            setVal(val + value)
        }

        if(!symbols.includes(value)){
            setResult(eval(val+value).toString())
        }
    }

    const FinalValue = () => {
        setVal(eval(val).toString())   
    }
    const CreateDigits = () => {
        const digits = []
        for(let i =1;i<10;i++) {
            digits.push(
                <button 
                onClick={ () => PrintResult(i.toString())} 
                key={i}> 
                {i} 
                </button>)
        }
        return digits
    }
    return (
        <div className="calc">
            <div>
                <div className="result">
                {result ? <span>({result})</span> : '' }
                {val || 0}
                </div>
                <div className="operators">
                    <button onClick={ () => setVal('')} > C </button>
                    <button onClick={ () => PrintResult('+')} > + </button>
                    <button onClick={ () => PrintResult('-')} > - </button>
                    <button onClick={ () => PrintResult('*')} > * </button>
                    <button onClick={ () => PrintResult('/')} > / </button>
                </div>

                <div className="digits">
                    { CreateDigits() }
                    <button onClick={ () => PrintResult('0')} > 0 </button>
                    <button onClick={ () => PrintResult('.')}> . </button>
                    <button onClick={ () => FinalValue()}> = </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator