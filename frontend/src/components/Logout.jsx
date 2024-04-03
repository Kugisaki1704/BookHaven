import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogout = ()=>{
        logOut().then(()=>{
            alert("Logged Out Successfully!");
            navigate(from,{replace:true})
        })
    }

  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-blue-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Logout;