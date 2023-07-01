import axios from 'axios';

export async function FetchList() {
  const uriApi = process.env.REACT_APP_API_URL_FIRST_PART;
  let apiError = '';
  const result = await axios({
    method: 'get',
    url: uriApi,
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: '*/*',
    },
  }).catch(error => {
    console.log(error, 'Data fetch error');
    apiError = 'error';
  });

  //Error handling
  if (!result || apiError === 'error') {
    console.log('throw error');
    return 'error';
  }

  return result;
}
