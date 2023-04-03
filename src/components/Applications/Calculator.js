import React from "react";

function Calculator() {
    const CreateDigits = () => {
        const digits = []
        for (let i =0;i<10;i++) {
            digits.push(
                <button key={i}> {i} </button>)
        }
        return digits
    }
    return (
        <div className="calc">
            <div className="result">
                <span>(0)</span>
                <span>0</span>
            </div>
            <div className="operators">
                <button> DEL </button>
                <button> C </button>
                <button> + </button>
                <button> - </button>
                <button> * </button>
                <button> / </button>
                <button> = </button>
                <button> % </button>
            </div>

            <div className="digits">
                {CreateDigits()}
            </div>
        </div>
    )
}

export default Calculator