import request from '@/utils/request'
const API = {
    SWAP_GETPAIRS_URL:'/swap/getPairs',
    SWAP_GETTOKENS_URL:'/swap/getTokens',
  }
export const getSwapPairs = (page,pageSize) => {
  const url = `${API.SWAP_GETPAIRS_URL}?page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getTokens = () => {
    const url = `${API.SWAP_GETTOKENS_URL}`;
    return request.get(url);
  };