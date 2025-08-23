import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const MortgageTerm = ({term, setTerm, message, messageNumber}) => {
  return (
        <>
    <p>Mortgage Term</p>
    <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <InputGroup.Text id="inputGroup-sizing-default">
          Years
        </InputGroup.Text>
      </InputGroup>
        {!term && <p className='text-danger'>{message}</p>}
        {isNaN(term) && <p className='text-danger'>{messageNumber}</p>}
    </>
  )
}

export default MortgageTerm;