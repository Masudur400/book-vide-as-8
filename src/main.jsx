import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ListBooks from './components/ListBooks/ListBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import Books from './components/Books/Books.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
      },
      {
        path:"/listBooks",
        element:<ListBooks></ListBooks>
      },
      {
        path:"/pagesToRead",
        element:<PagesToRead></PagesToRead>
      },
       {
        path:"/book/:id",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('fakeData.json'),
       }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
