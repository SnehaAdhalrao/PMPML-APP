import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon issue in Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

L.Marker.prototype.options.icon = DefaultIcon

export default function MapPage() {
  const [location, setLocation] = useState(null) // Store user location
  const [error, setError] = useState('') // Store error messages

  useEffect(() => {
    // Fetch user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setLocation({ lat: latitude, lng: longitude })
      },
      (err) => {
        setError('Unable to retrieve your location.')
      },
    )
  }, [])

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {location ? (
        <MapContainer
          center={location}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <Marker position={location}>
            <Popup>Your Current Location</Popup>
          </Marker>
        </MapContainer>
      ) : error ? (
        <p className="text-center text-red-500 mt-5">{error}</p>
      ) : (
        <p className="text-center mt-5">Fetching your location...</p>
      )}
    </div>
  )
}
