import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const MortgageAmount = ({amount, setAmount, message, messageNumber}) => {
  return (
    <>
    <p>Mortgage Amount</p>
    <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className='fw-bold'>
          €
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </InputGroup>
                {!amount && <p className='text-danger'>{message}</p>}
          {isNaN(amount) && <p className='text-danger'>{messageNumber}</p>}
    </>
  )
}

export default MortgageAmount;