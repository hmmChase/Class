import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/app';
import * as sc from './CommentCard.style';

const CommentCard = props => {
  const { currentUser } = useContext(AppContext);

  return (
    <sc.Container className={props.className}>
      <sc.Flex>
        <sc.Author>{props.authorName}</sc.Author>

        <sc.Timestamp>{props.timestamp}</sc.Timestamp>

        <sc.CreatedAt>{props.createdAt}</sc.CreatedAt>

        {currentUser.role === 'TEACHER' && <sc.DotDotDot>...</sc.DotDotDot>}
      </sc.Flex>

      <sc.Body>{props.body}</sc.Body>
    </sc.Container>
  );
};

CommentCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string.isRequired
};

export default React.memo(CommentCard);
