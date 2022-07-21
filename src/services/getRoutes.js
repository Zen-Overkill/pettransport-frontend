import axios from 'axios';

export function getRoutes(props) {
  const url = 'https://petlmkstore.tk/api/route/location-searching';
  const startLocation = props.startLocation;
  const endLocation = props.endLocation;
  return axios
    .get(url, {
      params: {
        StartLocation: startLocation,
        EndLocation: endLocation,
        PageIndex: 1,
        PageSize: 10,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
