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
import Search from "./Routes/Search";

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

const OneIceCreamLoader = async () => {};

const addNewAction = async ({ request }) => {
  try {
    const form = Object.fromEntries(await request.formData());
    const res = await fetch("http://localhost:3000/route/newicecream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    return redirect("/");
  } catch (error) {
    console.log("error", error);
  }
};

const editAction = async () => {
  console.log("edited");
};

const deleteAction = async () => {
  console.log("deleted");
};

const searchAction = async ({ request }) => {
  // try {
  const search = await request.formData();
  console.log(search.get("name"));
  // const res = await fetch();
  // } catch (error) {
  //   console.log("error", error);
  // }
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
        // action: editAction,
        // deleteAction,
        element: <List />,
      },
      {
        path: "add",
        loader: AllIceCreamLoader,
        action: addNewAction,
        element: <AddIceCream />,
      },
    ],
  },
  {
    path: "search",
    loader: OneIceCreamLoader,
    action: searchAction,
    element: <Search />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
