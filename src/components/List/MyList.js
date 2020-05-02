import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import MyListItem from "./MyListItem";
import Modal from "./Modal";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function MyList() {
  const initialState=[
    {title:'first element',
      isHidden:true,
      id:0
    },{title:'second element',
      isHidden:true,
      id:1
    },{title:'third element',
      isHidden:true,
      id:2
    },
    {title:'fourth element',
      isHidden:true,
      id:3
    }
  ]
  const [list,listHandle]=useState(initialState);
  const handleDelete=(e)=>{
    const item=tempList.find(item=>e===item.id);
    const index=tempList.indexOf(item);
    tempList[index].isHidden=false;
    listHandle(tempList)
    changeModal({modalOpen:false})
  };
  const [modalState,changeModal]=useState(
    {
      modalOpen:false,
      id:0
    });
  const handleModal=(id=0)=>{
    changeModal({modalOpen:!modalState.modalOpen,id:id})
  }
  let tempList=list.filter(item=>item.isHidden);
  const classes = useStyles();
  return (
    <>
<Grid item xs={12} md={6}>
  <div className={classes.demo}>
      {
        tempList.map(item=> {return <MyListItem item={item} handleModal={handleModal} />}
        )
      }
  </div>
</Grid>
      <Modal modalState={modalState} handleDelete={handleDelete} handleModal={handleModal}/>
    </>
)}