import PropTypes from 'prop-types';
import {AiOutlineClose} from 'react-icons/ai';
import styled from 'styled-components';

import Portal from './Portal';

const ModalBox = styled.div`
  height: 250px;
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -125px;
  margin-left: -200px;
  border: 1px solid black;
  box-shadow: 5px 3px 5px gray;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseBtn = styled(AiOutlineClose)`
  position: absolute;
  left: 5px;
  top: 5px;
`;

const CommentInput = styled.textarea`
  height: 150px;
  width: 250px;
`;

const CommentSubmit = styled.button`
  height: 30px;
  width: 70px;
  margin-top: 10px;
`;

const EditComment = ({closeModal}) => {
    return (
        <Portal>
            <ModalBox>
                <CloseBtn onClick={() => closeModal('')}/>
                <CommentInput />
                <CommentSubmit>수정</CommentSubmit>
            </ModalBox>
        </Portal>
    );
}

EditComment.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default EditComment;
