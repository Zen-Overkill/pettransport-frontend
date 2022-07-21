import axios from 'axios';
import { useState } from 'react';

export function getAllRoutes() {
  const url = 'https://petlmkstore.tk/api/route/all-paging';
  const StartLocation = 'HaNoi';
  return axios
    .get(url, {
      params: {
        PageIndex: 1,
        PageSize: 10,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
