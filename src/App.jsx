/* eslint-disable no-undef */
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import { useCallback, useState } from "react"

const containerStyle = {
  width: '400px',
  height: '400px'
}
const center ={
  lat: -3.745,
  lng: -38.523
}

const App = () => {
  const  {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.API_KEY
  })
  console.log("isloaded", isLoaded)

  const [map, setMap]= useState(null)

  const onLoad = useCallback(map =>{
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds)

    setMap(map)
  },[])

  const onUnmount = useCallback(map=>{
    setMap(null)
  },[])

  return (
    isLoaded ? (
      <GoogleMap 
        mapContainerClassName={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >
      </GoogleMap> 
    ) : <div>Loading ...</div>
  )
}

export default App
