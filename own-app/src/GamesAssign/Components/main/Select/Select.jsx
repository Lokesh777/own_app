import Form from 'react-bootstrap/Form';

function SelectTag() {
  return (
    <Form.Select 
    style={{
    width:"10.5rem",
    background:" #202636",
    height:"1.8rem",border:"none",
    color:"#fff",fontSize:"12px",
}}
    >
      <option>Sort by:  Initial Liquidity </option>
      <option value="1">Final Liquidity</option>
      <option value="2">Medium Liquidity</option>
      <option value="3">Low Liquidity</option>
    </Form.Select>
  );
}

export default SelectTag;