import { useEffect, useState } from "react";

const menu = [
  {
    name: "Profile",
    icon: "account_circle",
  },
  {
    name: "Settings",
    icon: "settings",
    menu: [
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
    ],
  },
  {
    name: "Settings",
    icon: "settings",
    menu: [
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
    ],
  },
  {
    name: "Settings",
    icon: "settings",
    menu: [
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
    ],
  },
  {
    name: "Settings",
    icon: "settings",
    menu: [
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
    ],
  },
  {
    name: "Settings",
    icon: "settings",
    menu: [
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
    ],
  },
  {
    name: "Settings",
    icon: "settings",
    menu: [
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
    ],
  },
  {
    name: "Settings",
    icon: "settings",
    menu: [
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
    ],
  },
  {
    name: "Settings",
    icon: "settings",
    menu: [
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
    ],
  },
  {
    name: "Settings",
    icon: "settings",
    menu: [
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
    ],
  },
  {
    name: "Settings",
    icon: "settings",
    menu: [
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
      {
        name: "Appearacne",
        icon: "dark_mode",
      },
    ],
  },
];
export default function Home() {
  const [isOpen, setOpen] = useState();
  const [menuHeight, setMenuHeight] = useState();
  const [activeMenu, setActiveMenu] = useState();
  const toggleMenuOpen = ({ menu, name }) => {
    if (!menu) return;
    setActiveMenu(name);
    setOpen(!isOpen);
  };
  useEffect(() => {
    const menuElement = document.getElementById(
      isOpen ? "submenu" : "mainmenu"
    );
    setMenuHeight(screen);
  }, [isOpen]);
  return (
    <Menu
      menuHeight={menuHeight}
      isOpen={isOpen}
      activeMenu={activeMenu}
      toggleMenuOpen={toggleMenuOpen}
    />
  );
}

const MenuButton = ({ menuItem, onClick, isCloseButton }) => (
  <button className="menu-button" onClick={onClick}>
    <span
      className="menu-button-icon material-icons"
      style={{
        background: isCloseButton && "transparent",
        fontSize: isCloseButton && "1.5rem",
      }}
    >
      {menuItem.icon}
    </span>
    <span className="menu-button-text">{menuItem.name}</span>
    {menuItem.menu && !isCloseButton && (
      <span className="material-icons">chevron_right</span>
    )}
  </button>
);
const Menu = ({ menuHeight, isOpen, activeMenu, toggleMenuOpen }) => (
  <div className="wrapper" style={{ height: `${menuHeight}` }}>
    <div className={`menu-main ${isOpen ? "open" : ""}`} id="mainmenu">
      {menu.map((menuItem) => (
        <>
          <MenuButton
            menuItem={menuItem}
            onClick={() => toggleMenuOpen(menuItem)}
          />
          {menuItem.menu && activeMenu === menuItem.name && (
            <div className="menu-sub" id="submenu">
              <>
                <MenuButton
                  isCloseButton
                  menuItem={{ ...menuItem, icon: "arrow_back" }}
                  onClick={() => toggleMenuOpen(menuItem)}
                />
                {menuItem.menu.map((subMenuItem, index) => (
                  <MenuButton key={index} menuItem={subMenuItem} />
                ))}
              </>
            </div>
          )}
        </>
      ))}
    </div>
  </div>
);
