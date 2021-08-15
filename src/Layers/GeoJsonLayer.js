import React from 'react'
import GeoJSON from "ol/format/GeoJSON";
import { get } from "ol/proj";

import { VectorLayer } from ".";
import { vector } from "../Source";
import { FeatureStyles } from "../Features";

function GeoJsonLayer({ geoSource }) {
    return (
        <VectorLayer
            source={vector({
                features: new GeoJSON().readFeatures(geoSource, {
                    featureProjection: get("EPSG:3857"),
                }),
            })}
            style={FeatureStyles.MultiPolygon}
        />
    )
}

export default GeoJsonLayer