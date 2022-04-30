import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from 'react';

function MenuMotorbike(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = (event) => {
      setAnchorEl(null);
    };

    return(
    
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
          >

        <MenuItem onClick={handleClose}>M1, Image </MenuItem>
        <MenuItem onClick={handleClose}>M2, Image </MenuItem>
        <MenuItem onClick={handleClose}>M3, Image </MenuItem>
      </Menu>

    )
}   
export default MenuMotorbike