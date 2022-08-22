import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';


function App() {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  // const activeMenu = true;
  return (
    // <div className='dark'>
    <div className={currentMode === 'Dark' ? 'dark' : 'light'}>
      <BrowserRouter>

        {/* Toàn bộ cấu trúc giao diện web từ đây */}
        <div className='flex relative '> {/* dark:bg-main-dark-bg --> class này ko cần thiết */}

          {/* Khu vực Sidebar bên trái*/}
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'> <Sidebar /> </div>
          ) : (<div className='w-0 dark:bg-secondary-dark-bg'><Sidebar /></div>)}

          {/* Khu vực Main Content bên phải, cạnh Sidebar  */}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>

            {/* Khu vực Navbar trên cùng */}
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'><Navbar /></div>

            {/* Khu vực thay đổi giao diện theo Route  */}
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />
                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />
                {/* Apps */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/color-picker' element={<ColorPicker />} />
                {/* Charts */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
              </Routes>
            </div>
          </div>

          {/*Nút Setting góc dưới để chọn Theme Setting*/}
          <div className='fixed right-4 bottom-4 z-48' >
            <TooltipComponent content="Setting" position="Top" >
              <button
                type='button'
                className='text-3xl p-3 hover:bg-light-gray text-white'
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* Khu vực Hiển thị Setting Theme Sáng Tối  */}
          {themeSettings && <ThemeSettings />}

        </div>
      </BrowserRouter >
    </div >
  );
}

export default App; 
