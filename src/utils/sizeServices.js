import axiosClient from './axiosClient';

const getSize = async () => {
   const res = await axiosClient.get('/size');
   return res.data;
};

const getOneSize = async (id) => {
   const res = await axiosClient.get(`/size/${id}`);
   return res.data;
};

export { getSize, getOneSize }; 