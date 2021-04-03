import { RequestHandler } from '@code/request';

const jsonHandler: RequestHandler = async function (params) {
  const { fetchResponse } = params;

  if (fetchResponse.ok === true && /application\/json/.test(fetchResponse.headers.get('content-type'))) {
    params.result = await fetchResponse.json();
  }

  return params;
};

export default jsonHandler;
