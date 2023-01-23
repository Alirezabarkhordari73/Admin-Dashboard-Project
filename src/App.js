import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import { Navbar, Sidebar, ThemeSetting } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employee,
  Stacked,
  Pyramid,
  Customers,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import { useStateContext } from "./context/ContextProvider";
import ToolTip from "./components/ToolTip/ToolTip";
import "./App.css";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : "light"}>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="right-4 bottom-4 fixed setting">
            <ToolTip
              title={"Setting"}
              placement={"top"}
              backgroundcolor={currentColor}>
              <button
                onClick={() => setThemeSettings(true)}
                className="text-2xl cursor-pointer text-white p-2 rounded-full"
                style={{ background: currentColor }}>
                <FiSettings />
              </button>
            </ToolTip>
          </div>

          {activeMenu ? (
            <div className="w-72 setting fixed dark:bg-main-dark-bg z-50 bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-light-gray min-h-screen md:ml-72 w-full "
                : "bg-light-gray dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }>
            <div className="fixed bg-white lg:bg-transparent md:bg-transparent dark:bg-main-dark-bg navbar w-full drop-shadow-md top-0 left-0">
              <Navbar />
            </div>

            <div className="mt-20">
              {themeSettings && <ThemeSetting />}
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employee />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
