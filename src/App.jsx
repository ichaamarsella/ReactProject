import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Home from './components/Home/Home'
import OrderHistory from './components/OrderHistory/OrderHistory'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    //ini yg dipakai utk nantinya halaman apa saja yg akan di render
    children: [
      {
        path:'/',
        element: <Home/>,
      },
      {
        path:'/order-history',
        element: <OrderHistory/>,
      }
    ]
  },
])


function App() {
  //routerProvider digunakan untuk mengatur routing ganti halaman
  return <RouterProvider router={router} />
}

export default App
