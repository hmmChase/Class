// https://axios-http.com/docs/interceptors

import instance from './baseApi';

// Create refresh toggle to prevent infinite loop when user is unauthenticated
let refreshed = false;

instance.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  res => res,

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  async error => {
    // If unauthenticated and access token has not been refreshed
    if (error.response.status === 401 && !refreshed) {
      // Toggle refreshed
      refreshed = true;

      // Refresh access token
      const response = await instance.post('/user/refresh', {});

      // If access token successfully refreshed
      // Update Authorization header with new access token
      if (response.status === 200) {
        // Redo the previous request that failed due to unauthenticated,
        // with the updated Bearer Token
        return instance(error.config);
      }
    }

    // Toggle refreshed
    refreshed = false;

    return error;
  }
);
