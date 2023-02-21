import axios from 'axios';

const fetcher = async (url) => {
  return await axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(`err in fetcher`, err));
};

// Each should be the structure below :
//{ type: 'Feature', geometry: { type: 'Point', coordinates: [120.4376, 23.7577] }, name: '' }
const dataHandler = async (lists) => {
  let featuresArr = [];
  lists.forEach((item, idx) => {
    // limiting the loading data less than 5000
    if (idx >= 6000) return { type: 'FeatureCollection', features: featuresArr };
    featuresArr.push({
      type: 'Feature',
      name: item.title,
      geometry: {
        type: 'Point',
        coordinates: [Number(item.lng), Number(item.lat)],
      },
    });
  });

  return { type: 'FeatureCollection', features: featuresArr };
};

export { fetcher, dataHandler };
