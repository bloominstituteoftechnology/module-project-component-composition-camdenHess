import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    const fetchPhoto = () => {
      axios.get(BASE_URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => console.log(err.message))
    }
    // fetchPhoto()
    setApod({
          "date": "2023-11-22",
          "explanation": "Similar in size to large, bright spiral galaxies in our neighborhood, IC 342 is a mere 10 million light-years distant in the long-necked, northern constellation Camelopardalis. A sprawling island universe, IC 342 would otherwise be a prominent galaxy in our night sky, but it is hidden from clear view and only glimpsed through the veil of stars, gas and dust clouds along the plane of our own Milky Way galaxy. Even though IC 342's light is dimmed and reddened by intervening cosmic clouds, this sha...",
          "hdurl": "https://apod.nasa.gov/apod/image/2311/ic342asi294large.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "IC 342: Hidden Galaxy in Camelopardalis",
          "url": "https://apod.nasa.gov/apod/image/2311/ic342asi294large_1024.jpg"
        })
  }, [])
  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card title={apod.title} imageURL={apod.url} date={apod.date} text={apod.explanation} />
    </section>
  )
}

export default App
