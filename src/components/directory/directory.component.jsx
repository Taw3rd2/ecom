import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = () => {
  const sections = [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3
    },
    {
      title: "womans",
      imageUrl: "https://i.ibb.co/GCCdy8t/womans.png",
      id: 4,
      size: "large"
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      size: "large"
    }
  ];
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
