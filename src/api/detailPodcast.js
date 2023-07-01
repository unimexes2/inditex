import axios from 'axios';
export async function detailPodcast(id) {
  let apiUrl =
    process.env.REACT_APP_API_URL_SECOND_PART_1 +
    id +
    process.env.REACT_APP_API_URL_SECOND_PART_2;
  const requestUrl =
    process.env.REACT_APP_API_CORS_HELPER + encodeURIComponent(apiUrl);

  let apiError = '';

  const result = await axios({
    method: 'get',
    url: requestUrl,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      Accept: '*/*',
    },
  }).catch(error => {
    console.log(error, 'Data  podcast fetch error');
    apiError = 'error';
  });
  //API ERROR HANDLING
  if (!result || !result.data || apiError === 'error') {
    console.log('throw error');
    return 'error';
  }
  return result.data;
}
