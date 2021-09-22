import React from "react";
import "../styles/css/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize={"large"} className='header_icon person_icon' />
      </IconButton>
      <img
        className={"header_tinder_logo"}
        src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png'
        alt='tinder_logo'></img>
      <IconButton>
        <ForumIcon fontSize={"large"} className='header_icon forum_icon' />
      </IconButton>
    </div>
  );
};

export default Header;
