import Link from "next/link";
import React, { useState } from "react";
const MultilevelSideNav = ({ data, sideNavState, sideNavHandler }) => {
  const [currentMenus, setCurrentMenus] = useState(data);
  const [previousStack, setPreviousStack] = useState([]);
  const renderMenuItems = (data) => {
    return data.map((item, index) =>
      item?.children && item?.children.length ? (
        <Link
          key={index}
          onClick={(e) => {
            previousStack.push(data);
            setPreviousStack(previousStack);
            setCurrentMenus(item.children);
          }}
          href={"#"}
        >
          {item.name} &gt;{" "}
        </Link>
      ) : (
        <Link key={index} href={item.url}>
          {item.name}
        </Link>
      )
    );
  };
  return (
    data && (
      <div
        style={{ width: sideNavState ? "250px" : "0" }}
        className="multilevelSideNav"
      >
        <button className="closebtn" onClick={(e) => sideNavHandler(false)}>
          &times;
        </button>
        {previousStack.length ? (
          <Link
            href={"#"}
            onClick={(e) => {
              const prevState = previousStack.pop();
              setPreviousStack(previousStack);
              setCurrentMenus(prevState);
            }}
          >
            &lt; Back
          </Link>
        ) : null}
        {renderMenuItems(currentMenus)}
      </div>
    )
  );
};
export default MultilevelSideNav;
