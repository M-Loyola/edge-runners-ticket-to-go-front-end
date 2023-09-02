import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import { ErrorPage } from './pages/ErrorPage';
import { Home } from './pages/Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [ //TODO: Remove comments once pages are setup
      {
        index: true, 
        element: <Home />
      },
      // {
      //   path:  "/done", 
      //   element: <DoneList />
      // },
      // {
      //   path:  "/done/:id", 
      //   element: <TodoItemDetail />
      // },
      // {
      //   path: "/help",
      //   element: <HelpPage />
      // }
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
