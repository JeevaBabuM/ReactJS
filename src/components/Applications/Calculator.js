import React from "react";

function Calculator() {
    const CreateDigits = () => {
        const digits = []
        for (let i =1;i<10;i++) {
            digits.push(
                <button key={i}> {i} </button>)
        }
        return digits
    }
    return (
        <div className="calc">
            <div>
                <div className="result">
                    <span>(0)</span>0
                </div>
                <div className="operators">
                    <button> C </button>
                    <button> + </button>
                    <button> - </button>
                    <button> * </button>
                    <button> / </button>
                    <button> % </button>
                </div>

                <div className="digits">
                    {CreateDigits()}
                    <button> 0 </button>
                    <button> . </button>
                    <button> = </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator