import React, { useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Cart, Chat, UserProfile, Notification } from "../components";
import { useStateContext } from "../context/ContextProvider";
import ToolTip from "../components/ToolTip/ToolTip";
import Avatar1 from "../data/Image/Avatar1.jpg";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    screenSize,
    currentColor,
    setScreenSize,
  } = useStateContext();

  const NavButton = ({ icon, name, customFunc, color, dotColor }) => (
    <ToolTip title={name} placement={"bottom"} backgroundcolor={currentColor}>
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3">
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </ToolTip>
  );

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= 1000) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative items-center profile">
      <NavButton
        name="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex gap-3">
        <NavButton
          name="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          name="Chat"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          name="Notification"
          customFunc={() => handleClick("notification")}
          dotColor="#f8a5c2"
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <div
          className="flex items-center gap-2 cursor-pointer p-1 dark:hover:bg-secondary-dark-bg hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("userProfile")}>
          <img
            className="rounded-full w-8 h-8"
            src={Avatar1}
            alt="user-profile"
          />
          <p>
            <span className="text-gray-400 text-14">Hi,</span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">
              Michael
            </span>
          </p>
          <NavButton
            name="userProfile"
            customFunc={() => handleClick("userProfile")}
            color={currentColor}
            dotColor="#e66767"
            icon={<MdKeyboardArrowDown />}
          />
        </div>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
