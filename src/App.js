import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  TooltipCircle,
  LayerGroup,
  CircleMarker,
  Pane,
  LayersControl,
  Tooltip,
  Popup,
  Polygon,
  Circle,
  Rectangle,
  Marker,
  useMap,
  useMapEvent
} from "react-leaflet";
import { useEventHandlers } from '@react-leaflet/core'
import L from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";

import "leaflet/dist/leaflet.css";
import "./App.css";



export default function App() {
  function MapPlaceholder() {
    return (
      <p>
        Map of Londonsmndfndsfnsdkfnsdkds fdsf sdfsd fdsf sdf sfs fdsf sdfds fdsfsd fdsf dsfdsf dsfdsf lfdsmnklfdsmnlkfd.{' '}
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    )
  }
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      placeholder={<MapPlaceholder />}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
