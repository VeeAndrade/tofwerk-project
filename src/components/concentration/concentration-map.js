import React from "react";
import GoogleMapReact from 'google-map-react';

export const ConcentrationMap = (props) => {

  const getAllMarkers = () => {
    return props.mapData.map(mark => {
      return <Marker lat={mark.latitude} lng={mark.longitude}></Marker>
    })
  }

  return (
    <div style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ /* GOOGLE API KEY */}}
        defaultCenter={{lat: 40.73, lng: -73.93}}
        defaultZoom={1}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        {getAllMarkers()}
      </GoogleMapReact>
    </div>
  )
}

const Marker = props => {
  return <div style={{width: '50px', height: "50px"}}><p>🔴</p></div>
}