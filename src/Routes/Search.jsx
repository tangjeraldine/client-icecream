import { Form } from "react-router-dom";

function Search() {
  return (
    <div>
      <Form action='.' method='get'>
        <fieldset>
          <legend>Search For A Flavour:</legend>
          <label>
            Name: <input name='name' />
          </label>
          <button>Search</button>
        </fieldset>
      </Form>
    </div>
  );
}

export default Search;
