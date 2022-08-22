import { initSheet } from '@syncfusion/ej2/spreadsheet';
import React, { createContext, useContext, useState } from 'react'
const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState('#03C9D7')
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)

  const setMode = (e) => {
    setCurrentMode(e.target.value)
    localStorage.setItem('themeMode', e.target.value)
    setThemeSettings(false)
  }

  const setColor = (color) => {
    setCurrentColor(color)
    localStorage.setItem('colorMode', color)
    setThemeSettings(false)
  }

  const handleClick = (clicked) => {
    // const temp = initialState[clicked] ? false : true;
    // console.log(initialState[clicked], temp)
    setIsClicked({ ...initialState, [clicked]: !initialState[clicked] });
  }

  const removeClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: false });
  }

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, removeClick, screenSize, setScreenSize, currentColor, currentMode, themeSettings, setThemeSettings, setMode, setColor }} >
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext);