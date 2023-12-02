const express = require('express');
const axios = require('axios');

const app = express();
const port = 19006; // Escolha uma porta disponível para o servidor

app.use(express.json());

app.get('/places-autocomplete', async (req, res) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
