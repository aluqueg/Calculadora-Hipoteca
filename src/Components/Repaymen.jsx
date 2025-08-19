import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Repayment = ({repaymentType, setRepaymentType}) => {  
  return (
    <>
        <InputGroup className="mb-3 w-100">
        <InputGroup.Radio         
        name="check"
        value="repayment"
        checked={repaymentType === 'repayment'}
        onChange={(e) => setRepaymentType(e.target.value)} 
        aria-label="Repayment" />
        <InputGroup.Text id="basic-addon3" className='flex-grow-1 fw-bold'>
          Repayment
        </InputGroup.Text>
      </InputGroup>
        <InputGroup className="mb-3 w-100">
        <InputGroup.Radio
        name="check"
        value="interestOnly"
        checked={repaymentType === 'interestOnly'}
        onChange={(e) => setRepaymentType(e.target.value)}
        aria-label="Checkbox for following text input" />
        <InputGroup.Text id="basic-addon3" className='flex-grow-1 fw-bold'>
          Interest Only
        </InputGroup.Text>
      </InputGroup>
    </>
  )
}

export default Repayment;