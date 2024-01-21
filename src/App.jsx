import {GoogleMap, useLoadScript} from "@react-google-maps/api"
import { useMemo } from "react"
import "./App.css"

const App = () => {
  const {isloaded, loadError} = useLoadScript({
    // eslint-disable-next-line no-undef
    googleMapsApiKey : process.env.GOOGLE_API_KEY
  })
  console.log("loaderror", loadError)
  console.log("isloaded", isloaded)

  const center = useMemo(()=>(
    {lat: 18.52043, lng:73.856743}
  ),[])

  return (
    <div className="h-screen w-screen">
      {!isloaded ? (
        <h1>Loading...</h1>
      ):(
        <GoogleMap
          mapContainerClassName = "map-container"
          center = {center}
          zoom = {10}
        />
      )
      }
      
    </div>
  )
}

export default App
