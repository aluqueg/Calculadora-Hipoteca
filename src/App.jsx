import { Col, Container, Row } from 'react-bootstrap';
import './App.css'
import MortgageAmount from './Components/MortgageAmount';
import MortgageTerm from './Components/MortgageTerm';
import InterestRate from './Components/InterestRate';
import Repayment from './Components/Repaymen';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [repaymentType, setRepaymentType] = useState('repayment');
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (!amount || !term || !interestRate) {
      setMessage("Campo requerido");
      return;
    }else{
      setMessage(""); 
    }
    const principal = Number(amount);
    const n = Number(term) * 12; // años a meses
    const r = Number(interestRate) / 100 / 12; // porcentaje a decimal y mensual

    let cuota;
    if (repaymentType === 'repayment') {
      cuota = r === 0 ? principal / n : principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    } else {
      cuota = principal / n; // Interés solo
    }

    setResult(cuota);
    console.log("Resultado de la cuota:", cuota);
    
  }

  const handleClear = () => {
    setAmount("");
    setTerm("");
    setInterestRate("");
    setRepaymentType('repayment');
    setMessage("");
    setResult(null);
  }

  return (
    <>
      <Container fluid className='fondo vh-100 d-flex justify-content-center align-items-center'>
      <Row className='w-50 g-0 align-items-stretch d-flex'>        

        <Col md={6}>
        <div className='izq d-flex flex-column justify-content-start bg-white p-4 h-100'>
          <div className='d-flex justify-content-between align-items-center w-100 mb-4'>
            <h3>Mortgage Calculator</h3>
            <p className='text-danger mb-0' role='button' onClick={handleClear}>Clear all</p>
          </div>

          <div className='w-100'>
            <MortgageAmount amount={amount} setAmount={setAmount}/>
          </div>

          {!amount && <p className='text-danger'>{message}</p>}

          <div className='d-flex gap-3'>
            <div className='w-50'>
              <MortgageTerm term={term} setTerm={setTerm} message={message}/>
            </div>
            <div className='w-50'>
              <InterestRate interestRate={interestRate} setInterestRate={setInterestRate} message={message}/>
            </div>
          </div>

          <div className='w-100 mb-4'>
            <p>Mortgage Type</p>
            <div>
              <Repayment repaymentType={repaymentType} setRepaymentType={setRepaymentType}/>
            </div>
          </div>

          <div className='d-flex justify-content-start'>
            <button className='btn rounded-5 calculate fw-bold px-3 py-2' onClick={handleCalculate}>
              <img src='./assets/images/icon-calculator.svg' className='px-2'></img>Calculate Repayments</button>
          </div>

          
        </div>
        </Col>

        <Col md={6}>        
        

          {result !== null ?(
            <div className='der text-white p-4 h-100 d-flex flex-column justify-content-center'>
            <h3>Your results</h3>
            <p>
              Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.
            </p>
            <div className='result-box p-4 mt-4'>
            <p className='mb-2'>Monthly payment</p>
            <p className='fw-bold' style={{ fontSize: '2.5rem', color: '#dadb31' }}>{result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} €
            </p>
            <hr style={{ borderColor: '#dadb31', opacity: 0.5 }} />
            <p className='mb-1'>Total you'll repay over the term</p>
            <p className='fw-bold' style={{ fontSize: '1.5rem', color: '#fff' }}>
          {(result * Number(term) * 12).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} €
        </p>
            </div>
            </div>
            ):(
            <div className='der text-white p-4 d-flex flex-column justify-content-center align-items-center h-100'>
            <img src="./assets/images/illustration-empty.svg" alt="" />
          <p className='fw-bold'>
            Results shown here
          </p>
          <p className='text-center'>
            Complete the form and click "calculate repayments" to see what your monthly repayments would be.
          </p>
          </div>
            )}
        
        </Col>
      
      </Row>
      </Container>
    </>
  )
}

export default App
