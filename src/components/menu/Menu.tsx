import {
  Menu as BPMenu,
  MenuItem as BPMenuItem,
  MenuDivider as BPMenuDivider,
} from '@blueprintjs/core';
import React from 'react';
import WeatherAPI from '../weather/WeatherAPI';
import './Menu.scss';

function Menu() {
  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <BPMenu>
      <BPMenuItem icon="new-text-box" onClick={handleClick} text="New text box" />
      <BPMenuDivider />
      <BPMenuItem text="Settings..." icon="cog" intent="primary">
        <BPMenuItem icon="tick" text="Save on edit" />
        <BPMenuItem icon="blank" text="Compile on edit" />
      </BPMenuItem>
    </BPMenu>
  );
}

export default Menu;
