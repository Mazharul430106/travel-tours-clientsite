
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
    </div>
  );
}

export default App;
