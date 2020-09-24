import React from 'react';
import { useParams } from 'react-router-dom';
// import ResetPass from '../components/molecules/ResetPass/ResetPass';
// import ResetPassRequest from '../components/molecules/ResetPassRequest/ResetPassRequest';

// const ResetPasswordPage = () => {
//   const { resetToken } = useParams();

//   return (
//     <>
//       {resetToken ? (
//         <ResetPass resetToken={resetToken} />
//       ) : (
//         <ResetPassRequest />
//       )}
//     </>
//   );
// };

const ResetPasswordPage = () => {
  const { resetToken } = useParams();

  return (
    <div>
      <p>ResetPasswordPage</p>

      <p>{resetToken}</p>
    </div>
  );
};

export default ResetPasswordPage;
