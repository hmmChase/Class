import React from 'react';
// import { useParams } from 'react-router-dom';
import ResetPass from '../components/molecules/ResetPass/ResetPass';
import ResetPassRequest from '../components/molecules/ResetPassRequest/ResetPassRequest';
import getParameterByName from '../utils/getParameterByName';
const ResetPasswordPage = () => {
  const resetToken = getParameterByName('resetToken');

  return (
    <>
      {resetToken ? (
        <ResetPass resetToken={resetToken} />
      ) : (
        <ResetPassRequest />
      )}
    </>
  );
};

// const ResetPasswordPage = () => {
//   const { resetToken } = useParams();

//   return (
//     <div>
//       <p>ResetPasswordPage</p>

//       <p>{resetToken}</p>
//     </div>
//   );
// };

export default ResetPasswordPage;
