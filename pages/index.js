import { useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Heatmap from '../components/Heatmap';
import Streetsmap from '../Streetsmap';
import { fetcher, dataHandler } from '../fetcher';
import css from '../styles/Home.module.css';

const DOMAIN = process.env.DOMAIN;
const data = fetcher(`${DOMAIN}/api/deathLs`);

const initViewPort = {
  longitude: 120.8576,
  latitude: 23.2077,
  zoom: 8,
};

export default function Home() {
  const [geojson, setGeojson] = useState({});
  const [toogle, setToogle] = useState(true);

  useEffect(() => {
    data
      .then((res) => dataHandler(res))
      .then((res) => setGeojson(res))
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <>
      <label className={css.switch}>
        <input type="checkbox" />
        <span className={css.slider} onClick={() => setToogle(!toogle)}></span>
      </label>

      {Object.keys(geojson).length !== 0 && toogle ? (
        <Streetsmap geojson={geojson} initViewPort={initViewPort} />
      ) : (
        <Heatmap geojson={geojson} initViewPort={initViewPort} />
      )}
    </>
  );
}
