import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import List from '@material-ui/core/List';
import Modal from "./Modal";

const MyListItem =(props)=>{
  const deleteItem=()=>{
    props.handleModal(props.item.id)
  }
  return(

     <List>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.item.title}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon   onClick={deleteItem}/>
        </IconButton>
      </ListItemSecondaryAction>
      </List>
  )

}
export default MyListItem;