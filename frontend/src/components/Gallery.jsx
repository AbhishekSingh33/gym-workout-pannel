import React from 'react'

const Gallery = () => {

  const gallery=[
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg", 
    "/img5.jpg",


    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
  ]
  return (
    <section className="gallery">
      <div className='wrapper'>
        <h1> BETTER BEATS BEST</h1>
        <p>Explore our gallery to see the vibrant community and the energy of our fitness sessions. From intense workouts to fun group activities, our gallery captures the essence of what it means to be part of Elite Edge Fitness.</p>
        <div className='images'>
          {gallery.slice(0,3).map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index + 1}`} />
          ))}
        </div>
        <div className='images'>
          {gallery.slice(3,6).map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index + 1}`} />
          ))}
        </div>
        <div className='images'>
          {gallery.slice(6,8).map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery