'use strict';

// todo: decide between the following three approaches

export default function getAccounts(client, params) {
  return client.$send({
    params,
    method: 'get',
    path: '/accounts'
  });
}

export default function getAccounts(client) {
  return function(params) {
    return client.$send({
      params,
      method: 'get',
      path: '/accounts'
    });
  };
}

export default class GetAccounts extends Request {
  $send(params) {
    return this.client.$send({
      params,
      method: 'get',
      path: '/accounts'
    });
  }
}
