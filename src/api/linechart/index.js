import request from '@/utils/request'
import { Log } from 'ethers';
const API = {
    SWAP_GETPRICE_URL:'/swap/getPrice',
    // 127.0.0.1:9003/swap/getPrice?tokenAddress1=0x4493432a154201d0068095b9742b802834564cc0&tokenAddress2=0x3056ed8057da4efb828321e308fa400eb7acaf7d&type=1&page=1&pageSize=1000
  }
export const getLinePrice = (token1,token2,time,page,pageSize) => {
  const url = `${API.SWAP_GETPRICE_URL}?tokenAddress1=${token1}&tokenAddress2=${token2}&type=${time}&page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};