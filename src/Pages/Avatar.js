import React from "react";

const Avatar = () => {
  const src = "https://i.stack.imgur.com/lAwxR.png";
  const alt = "Avatar Image";

  return <img src={src} alt={alt} className="avatar-image" />;
};

export default Avatar;
