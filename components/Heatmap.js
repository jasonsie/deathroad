import React, { useState } from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl';
import { heatmapLayer } from './heatmapStyle';
import { geojson } from '../fakeData';

const MAP_TOKEN = process.env.MAP_TOKEN;

const Heatmap = ({ geojson, initViewPort }) => {
  const [viewport, setViewport] = useState(initViewPort);

  return (
    <Map
      mapStyle="mapbox://styles/mapbox/dark-v11"
      style={{ height: '100vh', width: '100vw' }}
      initialViewState={viewport}
      pitch={45}
      minZoom={8}
      maxZoom={15}
      mapboxAccessToken={MAP_TOKEN}
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...heatmapLayer} />
      </Source>
    </Map>
  );
};

export default Heatmap;
