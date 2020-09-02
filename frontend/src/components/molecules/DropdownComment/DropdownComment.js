import React from 'react';
// import PropTypes from 'prop-types';
import useDropdown from '../../../utils/useDropdown';
import CommentDelete from '../CommentDelete/CommentDelete';
import CommentPromote from '../CommentPromote/CommentPromote';
import * as sc from './DropdownComment.style';

const DropdownComment = props => {
  const [isDropdownOpen, setDropdownDisplay] = useDropdown();

  return (
    <sc.Dropdown className={props.className} onClick={setDropdownDisplay}>
      <sc.Button isDropdownOpen={isDropdownOpen}>...</sc.Button>

      {isDropdownOpen && (
        <sc.Body>
          <sc.Ul>
            <sc.Li>
              <CommentPromote />
            </sc.Li>

            <sc.Li>
              <CommentDelete />
            </sc.Li>
          </sc.Ul>
        </sc.Body>
      )}
    </sc.Dropdown>
  );
};

// DropdownComment.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownComment);
