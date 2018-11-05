import React from 'react';

import { Drawer, List, ListItem } from '@material-ui/core';


const SideDrawer = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem
          button
          onClick={() => console.log('click')}
        >
          Event starts in
        </ListItem>
        <ListItem
          button
          onClick={() => console.log('click')}
        >
          Venue NFO
        </ListItem>
        <ListItem
          button
          onClick={() => console.log('click')}
        >
          Highlights
        </ListItem>
        <ListItem
          button
          onClick={() => console.log('click')}
        >
          Pricing
        </ListItem>
        <ListItem
          button
          onClick={() => console.log('click')}
        >
          Location
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer;