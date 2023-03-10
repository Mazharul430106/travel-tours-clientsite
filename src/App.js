
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>
        <Main></Main>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
