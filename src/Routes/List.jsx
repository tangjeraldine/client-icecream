import { Form, useLoaderData, useNavigate } from "react-router-dom";

function List() {
  const icecreams = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h4>The list of ice creams available are as follows:</h4>
      <ul>
        {icecreams.map((each, index) => (
          <div>
            <li key={index}>{each.name}</li>
            <Form method='put'>
              <button>Edit</button>
            </Form>
            <Form method='delete'>
              <button>Delete</button>
            </Form>
          </div>
        ))}
      </ul>
      <button
        onClick={() => {
          navigate("/add");
        }}>
        Add An Ice Cream
      </button>
    </div>
  );
}

export default List;
