import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import { ReserveConfirmPageOne } from './components/ReserveConfirmPageOne';
import { ReserveConfirmPageTwo } from './components/ReserveConfirmPageTwo';
import { ErrorPage } from './pages/ErrorPage';
import { Home } from './pages/Home';
import ReservationPage from './pages/ReservationPage';
import ViewReservationPage from './pages/ViewReservationPage';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: "/view-reservation",
        index: true,
        element: < ViewReservationPage/>
      },
      {
        path: "/reservation",
        index: true,
        element: < ReservationPage/>
      },
      {
        path: "/confirmationpage1",
        index: true,
        element: < ReserveConfirmPageOne/>
      },
      {
        path: "/confirmationpage2",
        index: true,
        element: < ReserveConfirmPageTwo/>
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
