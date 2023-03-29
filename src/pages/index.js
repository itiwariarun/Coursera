import { use, useState } from "react";
import MultilevelSideNav from "@/component/MultilevelSidenav";
const menuData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Menu 1",
    children: [
      {
        name: "Menu 1.1",
        url: "/page/menu-1-1",
      },
    ],
  },
  {
    name: "Menu 2",
    url: "/page/menu-2",
  },
  {
    name: "Menu 3",
    children: [
      {
        name: "Menu 3.1",
        url: "/page/menu-3-1",
      },
      {
        name: "Menu 3.2",
        url: "/page/menu-3-2",
      },
      {
        name: "Menu 3.3",
        children: [
          {
            name: "Menu 3.3.1",
            url: "/page/menu-3-3-1",
          },
        ],
      },
    ],
  },
  {
    name: "Menu 4",
    children: [
      {
        name: "Menu 4.1",
        url: "/page/menu-4-1",
      },
      {
        name: "Menu 4.2",
        url: "/page/menu-4-2",
      },
      {
        name: "Menu 4.3",
        children: [
          {
            name: "Menu 4.3.1",
            url: "/page/menu-4-3-1",
          },
          {
            name: "Menu 4.3.2",
            url: "/page/menu-4-3-2",
          },
          {
            name: "Menu 4.3.3",
            children: [
              {
                name: "Menu 4.3.3.1",
                children: [
                  {
                    name: "Menu 4.3.3.1.1",
                    url: "/page/menu-4-3-3-1-1",
                  },
                ],
              },
              {
                name: "Menu 4.3.3.2",
                url: "/page/menu-4-3-3-2",
              },
            ],
          },
        ],
      },
    ],
  },
];
const Home = () => {
  const [sideNavState, setSideNavState] = useState(false);
  const sideNavHandler = () => {
    setSideNavState(!sideNavState);
  };
  return (
    <>
      <button onClick={sideNavHandler}>X</button>
      <MultilevelSideNav
        sideNavState={sideNavState}
        sideNavHandler={sideNavHandler}
        data={menuData}
      />
      <h1>This is my Home Page</h1>
    </>
  );
};
export default Home;
