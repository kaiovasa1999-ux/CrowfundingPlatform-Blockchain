import React from 'react';
import { Route,Routes } from 'react-router-dom';    
import {CampaignDetails,CreateCampaign,Profile, Home} from './pages'

const App = () => {
  return (
   //tailind utils classes
   <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
   <div className="sm:flex hidden mr-10 relative">
        SideBar
   </div>
   <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        NavBar
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
   </div>
</div>
  );
}

export default App;
