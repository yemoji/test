import React, {Component} from 'react';
import styled from "styled-components";

class Modal extends Component {
  render() {

    if (!this.props.modalState.modalOpen) {
      return null;
    } else {
      return (
        <ModalContainer>
                <h5>Are You Sure to Delete the item?</h5>
                  <button onClick={() => this.props.handleDelete(this.props.modalState.id)}>
                    Sure
                  </button>
                  <button cart onClick={() => this.props.handleModal(this.props.modalState.id)}>
                    Of Course Not
                  </button>
        </ModalContainer>
      )
    }
  }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
background:var(--mainWhite);
}


`

export default Modal;