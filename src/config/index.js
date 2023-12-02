

import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const index = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Pesquisar"
      onPress={(data, details = null) => {
        console.log(data);
      }}
      query={{
        key: 'googleApi": "AIzaSyBR5WNGamOi5la3mxAFIRhHgFYqZauOqcI',
        language: 'pt',
      }}
      requestUrl={{
        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
        useOnPlatform: 'web',
      }}
    />
  );
};

export default index;