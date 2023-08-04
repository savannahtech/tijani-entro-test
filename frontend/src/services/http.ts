import axios from 'axios';

const BASE_URL = 'https://rgpmnyrmq3.us-east-1.awsapprunner.com/api/v1';

export let baseUrl = process.env.REACT_APP_BASE_URL || BASE_URL;
if (process.env.REACT_APP_NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8080/api/v1';
}

export const httpPost = async (url: string, postBody: any) => {
  try {
    const res = await axios.post(`${baseUrl}/${url}`, postBody, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    console.log(res);
    return { status: true, data: res.data };
  } catch (error: any) {
    return {
      status: false,
      message: error?.response?.data
        ? `${error?.response?.data?.message}`
        : 'An error occured, try again!',
    };
  }
};

export const httpGet = async (url: string) => {
  // if (!navigator.onLine) {
  //   return NotificationManager.error(
  //     'Please check your internet',
  //     'Opps!',
  //     3000
  //   );
  // }
  try {
    const res = await axios.get(`${baseUrl}/${url}`, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    console.log(res);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const httpPut = async (url: string, postBody: any) => {
  try {
    const res = await axios.put(`${baseUrl}/${url}`, postBody, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    console.log(res);
    return res.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const httpDelete = async (url: string) => {
  try {
    const res = await axios.delete(`${baseUrl}/${url}`, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    return res;
  } catch (error: any) {
    return error.response.data;
  }
};
