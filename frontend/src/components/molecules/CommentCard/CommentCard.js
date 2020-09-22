import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../../context/app';
import DropdownComment from '../DropdownComment/DropdownComment';
import TextExpand from '../../atoms/TextExpand/TextExpand';
import * as sc from './CommentCard.style';

const CommentCard = props => {
  const { currentUser } = useContext(AppContext);

  return (
    <sc.Container className={props.className}>
      <sc.Row>
        <sc.Group>
          <sc.Author>{props.authorName}</sc.Author>

          <sc.Timestamp>{props.timestamp}</sc.Timestamp>

          <sc.CreatedAt>{props.createdAt}</sc.CreatedAt>
        </sc.Group>

        {currentUser.role === 'TEACHER' && (
          <DropdownComment
            commentId={props.commentId}
            handleDeleteComment={props.handleDeleteComment}
            promoteAnswer={props.promoteAnswer}
          />
        )}
      </sc.Row>

      <TextExpand>{props.body}</TextExpand>
    </sc.Container>
  );
};

CommentCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string.isRequired
};

export default React.memo(CommentCard);
