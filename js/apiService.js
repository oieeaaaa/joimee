import Router from 'next/router';
import qs from 'qs';
import fetch from 'isomorphic-unfetch';


function qsUrl(url) {
  const { params, route } = url;
  const qsParams = qs.stringify(params, { allowDots: true });

  return `${route}?${qsParams}`;
}

async function apiService(url, callback, options = {}) {
  const BASE_URL = process.env.NODE_ENV === 'development'
    ? process.env.DEV_BACKEND_URL
    : process.env.PROD_BACKEND_URL;
  const apiRoute = typeof url === 'object' ? qsUrl(url) : url;
  const defaults = {
    header: {
      'content-type': 'application/json',
    },
  };

  try {
    let res = await fetch(BASE_URL + apiRoute, {
      ...defaults,
      ...options,
    });
    res = await res.json();

    callback(res);
  } catch (err) {
    if (err.statusCode >= 400) {
      Router.push('/oops');
      console.error(err.message); // eslint-disable-line
    }
  }
}

export default apiService;
