import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const InterestRate = ({interestRate, setInterestRate, message}) => {
  return (
            <>
    <p>Interest Rate</p>
    <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={interestRate}
          onChange={e => setInterestRate(e.target.value)}
        />
        <InputGroup.Text id="inputGroup-sizing-default">
          %
        </InputGroup.Text>
      </InputGroup>
        {!interestRate && <p className='text-danger'>{message}</p>}
    </>
  )
}

export default InterestRate;