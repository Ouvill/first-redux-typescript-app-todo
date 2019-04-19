import React from "react";

interface LinkProps {
  active: Boolean;
  children: React.ReactChild;
  onClick: Function;
}

const Link = (props: LinkProps) => {
  if (props.active) {
    return <span>{props.children}</span>;
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault();
        props.onClick();
      }}
    >
      {props.children}
    </a>
  );
};

export default Link;
