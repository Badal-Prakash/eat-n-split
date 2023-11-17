import Button from "./components/Button";
function FormSpliteBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>Bill Value</label>
      <input type="text"></input>
      <Button>Select</Button>

      <label>Your Expance</label>
      <input type="text"></input>
      <Button>Select</Button>
      <label>X Expance</label>
      <input type="text" disabled></input>
      <Button>Select</Button>
      <label>Who is paying bill</label>
      <select>
        <option value='you'>You</option>
        <option value='friend'>X</option>
      </select>
    </form>
  );
}
export default FormSpliteBill;
