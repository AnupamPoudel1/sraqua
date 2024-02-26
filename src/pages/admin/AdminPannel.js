import React from 'react';
import AddProducts from '../../components/adminComponents/AddProducts';
// import AdminAside from '../../components/adminComponents/AdminAside';

const AdminPannel = () => {
    return (
        <section className='w-full h-min flex flex-col items-center overflow-x-hidden bg-gray-50'>
            <div className='w-full max-w-7xl h-min flex justify-center items-center text-white'>
                <div className='w-full h-auto flex flex-col items-center justify-center'>
                    <AddProducts />
                </div>
            </div>
        </section>
    )
}

export default AdminPannel
