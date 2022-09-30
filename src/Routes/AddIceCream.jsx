import { Form } from "react-router-dom";

function AddIceCream() {
  return (
    <div>
      <Form action='.' method='post'>
        <fieldset>
          <legend>Add An Ice Cream:</legend>
          <label>
            Name: <input name='name' />
          </label>
          <label>
            Pints: <input type='number' name='pints' />
          </label>
          <label>
            Contains Nuts?:
            {/* <input type='boolean' name='has_nuts' /> */}
            <select name='has_nuts'>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </label>
          <button>Add!</button>
        </fieldset>
      </Form>
    </div>
  );
}

export default AddIceCream;
