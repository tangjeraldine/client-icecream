import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import AddIceCream from "./Routes/AddIceCream";
import List from "./Routes/List";
import Main from "./Routes/Main";

const AllIceCreamLoader = async () => {
  try {
    const res = await fetch("http://localhost:3000/route/allicecream");
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const addNewAction = async ({ request }) => {
  const { name, pints, has_nuts } = await request.formData();
  // console.log(form.get("name"));
  const res = await fetch("http://localhost:3000/route/newicecream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(name, pints, has_nuts),
  });
  const data = await res.json();
  console.log(data);
  // return redirect("http://localhost:5173/list");
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <p>This is the main page of Ice Creams</p> },
      {
        path: "list",
        loader: AllIceCreamLoader,
        element: <List />,
      },
    ],
  },
  {
    path: "/add",
    loader: AllIceCreamLoader,
    action: addNewAction,
    element: <AddIceCream />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
