import React, { useReducer, useState } from "react";

function CalcReducer() {
    
    const reducer = (state,action) =>{
        switch(action){
            case 'Add':
                return eval(state)
        }}

    const [value, setValue] = useState('')
    const [result, dispatch] = useReducer(reducer,value)

    const DisplayResult = newValue =>{
        setValue( value + newValue)
    }

    const CreateDigits = () => {
        const digits = []
        for(let i =1;i<10;i++) {
            digits.push(
                <button 
                onClick={ () => {DisplayResult(i)} } 
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
                    { result ? <span>({result})</span> : '' }
                    { value ? value : 0 } 
                </div>

                <div className="operators">
                    <button onClick={() => setValue('') } > C </button>
                    <button onClick={ () => DisplayResult('+') } > + </button>
                    <button onClick={ '' } > - </button>
                    <button onClick={ '' } > * </button>
                    <button onClick={ '' } > / </button>
                </div>

                <div className="digits">
                    { CreateDigits() }
                    <button onClick={ () => DisplayResult(0) } > 0 </button>
                    <button onClick={ () => {DisplayResult('.')} }> . </button>
                    <button onClick={ () => dispatch('Add') }> = </button>
                </div>
            </div>
        </div>
    )
}

export default CalcReducer