import { httpClient } from './httpClient';
import { todosApi } from './todosApi';

export function apiFactory(http) {
  return {
    todos: todosApi(http)
  };
}

const http = httpClient('https://api.spacexdata.com/v3');
export const api = apiFactory(http);
