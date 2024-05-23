import request from '@/utils/request'
import { Log } from 'ethers';
const API = {
    SWAP_GETPRICE_URL:'/swap/getPrice',
    SWAP_GETPRICEFLOW_URL:'/swap/getPriceFlow',
  }
export const getLinePrice = (token1,token2,time,page,pageSize) => {
  const url = `${API.SWAP_GETPRICE_URL}?tokenAddress1=${token1}&tokenAddress2=${token2}&type=${time}&page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getLinePriceFlow= (token1,token2,page,pageSize) => {
  const url = `${API.SWAP_GETPRICEFLOW_URL}?tokenAddress1=${token1}&tokenAddress2=${token2}&page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};