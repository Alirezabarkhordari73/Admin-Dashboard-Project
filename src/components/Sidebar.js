import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FcBrokenLink } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";

import { links } from "../data/data";
import { useStateContext } from "../context/ContextProvider";
import ToolTip from "../components/ToolTip/ToolTip";

const Sidebar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [linkName, setLinkName] = useState("");
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
      console.log(activeMenu);
    }
  };

  const handleMouseEnter = (name) => {
    setIsHovering(true);
    setLinkName(name);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setLinkName("");
  };

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black m-2 transition-all";
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2";

  console.log(activeLink);

  return (
    <div className="ml-3 h-screen overflow-auto md:overflow-hidden">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center relative">
            <Link
              onClick={handleCloseSideBar}
              className="flex items-center gap-2 text-xl font-extrabold ml-3 mt-4 tracking-tight text-slate-900 dark:text-white">
              <FcBrokenLink />
              <span>A-DashBoard</span>
            </Link>
            <ToolTip
              title={"Close"}
              placement={"left"}
              backgroundcolor={currentColor}>
              <button className="text-2xl rounded-full mt-4 block mr-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-secondary-dark-bg">
                <MdOutlineCancel
                  onClick={() => setActiveMenu((prevstate) => !prevstate)}
                />
              </button>
            </ToolTip>
          </div>

          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 uppercase m-3 mt-4">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={() => handleMouseLeave(link.name)}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            backgroundColor:
                              isHovering === true && linkName === link.name
                                ? ""
                                : "",
                            color: `${currentColor}`,
                          }
                        : {
                            backgroundColor:
                              isHovering === true && linkName === link.name
                                ? `${currentColor}`
                                : "",
                          }
                    }
                    className={normalLink}>
                    <p>{link.icon}</p>
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
