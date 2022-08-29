import React from 'react';
import {
    Autocomplete,
    //are only used with google map box
    useJsApiLoader,
    GoogleMap,
    Marker,
    DirectionsRenderer,
} from '@react-google-maps/api'

import {FaLocationArrow, FaTimes} from 'react-icons/fa'; 


export const center = {lat: 48.8584, lng: 2.2945}

export default function App(): JSX.Element {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })
    const [distance, setDistance] = React.useState<string>('');
    const [duration, setDuration] = React.useState<string>('')
    //const [map, setMap] = React.useState(/** @type google.maps.Map */ null)
    //const [directionsResponse, setDirectionsResponse] = React.useState(null)

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef: React.MutableRefObject<HTMLInputElement> = React.useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef: React.MutableRefObject<HTMLInputElement> = React.useRef()
    
    async function calculateRoute() {
        if (
            originRef.current.value === '' ||
            destinationRef.current.value === ''
        ) {
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new window.google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })
        //setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }
        
 function clearRoute() {
     //setDirectionsResponse(null)
     setDistance('')
     setDuration('')
     originRef.current.value = ''
     destinationRef.current.value = ''
 }

 return isLoaded ? (
     <div className="wrapper max-w">
         {/*            
            <div className="absolute left-0 top-0 h-full w-full">
                 Google Map Box 
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{width: '100%', height: '100%'}}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    onLoad={map => setMap(map)}
                >
                    <Marker position={center} />
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
                    </div> 
            */}
         <div className="">
             <div className="">
                 <div >
                     <Autocomplete>
                         <input
                         className="input"
                             type="text"
                             placeholder="Origin"
                             ref={originRef}
                         />
                     </Autocomplete>
                 </div>
                 <div >
                     <Autocomplete>
                         <input
                         className="input"
                             type="text"
                             placeholder="Destination"
                             ref={destinationRef}
                         />
                     </Autocomplete>
                 </div>

                 <button type="submit" onClick={calculateRoute}>
                     <FaLocationArrow /> Calculate Route
                 </button>
                 <button aria-label="center back" onClick={clearRoute}>
                     <FaTimes />
                 </button>
             </div>
             <div className="">
                 <h3>Distance: {distance} </h3>
                 <h3>Duration: {duration} </h3>
                 {/* <button
                        aria-label="center back"
                        onClick={() => {
                            map.panTo(center)
                            map.setZoom(15)
                        }}
                    >
                        <FaLocationArrow />
                    </button>*/}
             </div>
         </div>
     </div>
 ) : (
     <></>
 )
}