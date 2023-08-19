import React from 'react';
import Greeting from './Greeting';

const router = createBrowserRouter([
  {
    path: '/', element: <Greeting />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
