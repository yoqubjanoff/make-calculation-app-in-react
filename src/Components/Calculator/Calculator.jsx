import React, { useState } from 'react'
import '../../App.css';


const Calculator = () => {

    //! bu yerda esa state larni elon qilmoqdamiz
    const [result, setResult] = useState(0)
    const [isRoot, setRoot] = useState(true)


    //! bu functionda selectdan kelayotgan ildiz chiqarish functionini ishga tushirmoqdamiz bor bo'lsa keyingi input chiqaramiz agar bo'lmasa ekrandan o'chiramiz
    const handleChange = (evt) => {
        if (evt.target.value === "root") {
            setRoot(false)
        } else {
            setRoot(true)
        }
    }

    const calc = (evt) => {
        evt.preventDefault();

        //!bu arrayni destrution qiladi 
        const [firstNumber, operator, secondNumber] = evt.target.elements;

        //! bu xolatda Number type ga o'giryapmiz
        const first = Number(firstNumber.value.trim());
        const second = Number(secondNumber.value.trim());

        //! bu xolatda esa xar bir operatorning value larini qatiy tekshiryapmiz

        if (operator.value === "+") {
            setResult(first + second)
        }
        if (operator.value === "-") {
            setResult(first - second)
        }
        if (operator.value === "/") {
            setResult(first / second)
        }
        if (operator.value === "*") {
            setResult(first * second)
        }
        if (operator.value === "root") {
            setResult(Math.sqrt(first))
        }
    }
    return (
        <>
            <div className="container">
                <div className="col-4 offset-4 wrapper ">
                    <div className="card p">
                        <div className="card-header">
                            <h1 className='text-center'>Calcultion</h1>
                        </div>
                        <div className="crad-body p-4">
                            <form className='' onSubmit={(evt) => calc(evt)}>
                                <input type="text" className='form-control my-4' name='firstNumber' />
                                <select onChange={(evt) => handleChange(evt)} name="operator" className='form-control text-center my-4'> select oparation
                                    <option value="+" >plus + </option>
                                    <option value="-" >minus - </option>
                                    <option value="*" >increase *</option>
                                    <option value="/" >dividing / </option>
                                    <option value="root" >ildiz </option>
                                </select>
                                
                                {isRoot && (
                                    <input type="text" className='form-control my-4' name='secondNumber' />
                                )}
                                <div className="d-grid">
                                    <button className='btn btn-success mb-4'>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <h3>Result:{result} </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator