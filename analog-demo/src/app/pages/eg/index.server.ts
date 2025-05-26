import { PageServerLoad } from '@analogjs/router';

export const load = async ({
                             params, // params/queryParams from the request
                             req, // H3 Request
                             res, // H3 Response handler
                             fetch, // internal fetch for direct API calls,
                             event, // full request event
                           }: PageServerLoad) => {

  const date = new Date();
  return {
    loaded: true,
    time: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
  };
};
