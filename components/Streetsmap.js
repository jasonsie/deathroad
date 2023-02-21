import React, { useEffect, useState } from 'react';
import Map, { Marker, Source, Layer, Popup } from 'react-map-gl';

const MAP_TOKEN = process.env.MAP_TOKEN;

const Streetsmap = ({ geojson, initViewPort }) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState(initViewPort);
  const iconSize = 8;
  // const [iconSize, setIconSize] = useState(120 / viewport.zoom);

  return (
    <Map
      mapStyle="mapbox://styles/mapbox/streets-v11"
      style={{ height: '100vh', width: '100vw' }}
      initialViewState={viewport}
      onMove={(evt) => {
        setViewport(evt.viewState);
        // setIconSize(evt.viewState.zoom);
      }}
      pitch={45}
      minZoom={8}
      maxZoom={15}
      mapboxAccessToken={MAP_TOKEN}
    >
      {/* {geojson.features.map((i, idx) => (
        <Marker
          key={idx}
          longitude={i.geometry.coordinates[0]}
          latitude={i.geometry.coordinates[1]}
          offsetLeft={iconSize}
          offsetTop={iconSize}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo({
              longitude: i.geometry.coordinates[0],
              latitude: i.geometry.coordinates[1],
              name: i.name,
            });
          }}
          closeOnClick={true}
        >
          <div
            style={{
              width: iconSize,
              height: iconSize,
              backgroundColor: 'black',
              opacity: 0.2,
              cursor: 'pointer',
              borderRadius: '50%',
            }}
          ></div>
        </Marker>
      ))} */}
      <Source type="geojson" data={geojson}>
        <Layer
          id="point"
          type="circle"
          paint={{
            'circle-radius': 5,
            'circle-color': 'black',
            'circle-opacity': 0.2,
          }}
        />
      </Source>

      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
        >
          <div>{popupInfo.name}</div>
        </Popup>
      )}
    </Map>
  );
};

export default Streetsmap;
