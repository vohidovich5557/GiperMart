import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {UserLayout} from "./layout/user-layout";
import { Home } from './pages/home';
import { homeRoutes } from './routes/home-routes';


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<UserLayout />}>
        {homeRoutes.map(({component, id, path}) => (
          <Route 
           path={path}
           element={component}
           key={id}
           index={path ? false : true}

          />
        ))}
      </Route>
     </Routes>
    </>
  )
}

export default App
