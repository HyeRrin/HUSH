import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getData, getLikeData } from '../store/slices';

function useFetch(url: string, title: string) {
  const dispatch = useDispatch();
  const requestHeaders: HeadersInit = new Headers();
  const accessToken = localStorage.getItem('accessToken');
  requestHeaders.set('authorization', accessToken || 'Token not found');

  useEffect(() => {
    fetch(url, {
      headers: requestHeaders,
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => {
        alert(error);
      })
      .then(data => {
        if (title === 'cart') dispatch(getData(data));
        if (title === 'like') dispatch(getLikeData(data));
      });
  }, []);
}

export default useFetch;
