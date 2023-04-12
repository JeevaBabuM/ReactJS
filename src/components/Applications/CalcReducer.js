import React, { useReducer, useState } from "react";

function CalcReducer() {
    
    const reducer = (state,action) =>{
        switch(action){
            case 'Add':
                return eval(value)
            case 'Sub':
                alert('dispatch subtract')
                return eval(value)
            case 'Clear':
                return ''
            default:
                return value
        }
    }

    const FindOperator = () => {
        if(value.includes('+')){
            alert('add')
            return dispatch('Add')
        } else if (value.includes('-')) {
            alert('Sub')
            return dispatch('Sub')
        }
    }
    const [value, setValue] = useState('')
    const [result, dispatch] = useReducer(reducer,value)

    const DisplayResult = newValue =>{
        if(value.includes('+','-') && (newValue === '+' || newValue === '-' )){
            return
        } 
        setValue( value + newValue)
    }

    const ClearValues = () => {
        setValue('')
        dispatch('Clear')
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
                    <button onClick={() => ClearValues() } > C </button>
                    <button onClick={ () => DisplayResult('+') } > + </button>
                    <button onClick={ () => DisplayResult('-') } > - </button>
                    <button onClick={ '' } > * </button>
                    <button onClick={ '' } > / </button>
                </div>

                <div className="digits">
                    { CreateDigits() }
                    <button onClick={ () => DisplayResult(0) } > 0 </button>
                    <button onClick={ () => {DisplayResult('.')} }> . </button>
                    <button onClick={ () => FindOperator() }> = </button>
                </div>
            </div>
        </div>
    )
}

export default CalcReducer