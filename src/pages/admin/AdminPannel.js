import React from 'react';
import AddProducts from '../../components/adminComponents/AddProducts';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';

const AdminPannel = () => {

    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }

    return (
        <section className='w-full h-min flex flex-col items-center overflow-x-hidden bg-gray-50'>
            <div className='relative w-full max-w-7xl h-min flex justify-center items-center text-white'>
                <div className="absolute right-10 top-10">
                    <button className='h-10 w-20 p-2 bg-black text-white' onClick={signOut}>
                        Logout
                    </button>
                </div>
                <div className='w-full h-auto flex flex-col items-center justify-center'>
                    <AddProducts />
                </div>
            </div>
        </section>
    )
}

export default AdminPannel
