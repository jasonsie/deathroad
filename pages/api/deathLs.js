import axios from 'axios';

export default async function handler(req, res) {
  const type = 'mammals';
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace with the domain of your client

  // Your API logic
  await axios
    .get(`https://roadkill.tw/lzs/get_distmap_data_biogroup/${type}`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      res.status(error.status).json(error);
    });
}
