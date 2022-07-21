import axios from 'axios';
import { useState } from 'react';

export function getPetByOwner(props) {
  const url = 'https://petlmkstore.tk/api/pet/pet-from-owner';
  const ownerId = props.userId;
  return axios
    .get(url + '/' + ownerId)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
