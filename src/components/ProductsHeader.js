import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductsHeader = () => {
    return (
        <div className="w-full px-5 flex justify-center items-center flex-wrap gap-4 mt-10 ">
            <div>
                <NavLink to="/shop/" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    All
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/internal filter" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Internal Filter
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/spounge-filter" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Spoung Filter
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/fish food" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Fish Food
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/hanging back filter" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Hanging Back Filter
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/top filter" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Top Filter
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/cleaning tools" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Cleaning Tools
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/decoration item" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Decoration Item
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/filteration media" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Filteration Media
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/heater" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Heater
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/light" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Light
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/thermometer" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Thermometer
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/wave maker" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Wave Maker
                </NavLink>
            </div>
            <div>
                <NavLink to="/shop/air pump" className={({ isActive }) => `border bg-whtie w-max px-3 rounded-sm border-blue-950 text-lg hover:bg-blue-950 hover:text-blue-400 cursor-pointer ${isActive ? "text-white bg-blue-950" : "text-blue-950 bg-white"}`}>
                    Air Pump
                </NavLink>
            </div>
        </div>
    )
}

export default ProductsHeader
