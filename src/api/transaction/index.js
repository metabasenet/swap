import request from '@/utils/request'
const API = {
    TRANSACION_PAGE_URL:'/transaction/page',
    TRANSACION_DETAIL_URL:'/transaction/getByHash'
  }
  export const getTransactionPage = (page, pageSize, timeout = 10000) => { 
    const url = `${API.TRANSACION_PAGE_URL}?page=${page}&pageSize=${pageSize}`;
    const config = {
      timeout: timeout 
    };
    return request.get(url, config);
  };
export const getTransactionDetail = (hash) => {
  const url = `${API.TRANSACION_DETAIL_URL}?hash=${hash}`;
  return request.get(url);
};