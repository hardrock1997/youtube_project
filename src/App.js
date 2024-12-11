import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import SideBarContextProvider from './context/SideBarContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"watch",
      element:<WatchPage/>,
    }
  ],
}])


function App() {
  return (
    <div className="App">
      <SideBarContextProvider>
        <Header/>
        <RouterProvider router={appRouter}/>
      </SideBarContextProvider>
    </div>
  );
}

export default App;
