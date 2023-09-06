import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import { ErrorPage } from './pages/ErrorPage';
import { Home } from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { Cinemas } from './pages/Cinemas';
import ReservationPage from './pages/ReservationPage';

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
        path: "/cinemas",
        index: true,
        element: < Cinemas/>
      },
      {
        path: "/reservation",
        index: true,
        element: < ReservationPage/>
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
