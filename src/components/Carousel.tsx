import React, { useState } from 'react'


const images = [
    "https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1495580/pexels-photo-1495580.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/284951/pexels-photo-284951.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  
  const styles: Record<string, React.CSSProperties> = {
    carousel: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "600px",
      margin: "auto",
      position: "relative",
    },
    imageContainer: {
      overflow: "hidden",
      width: "600px",
      height: "300px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
    },
    button: {
    //   position: "absolute",
    //   top: "50%",
    //   transform: "translateY(-50%)",
      zIndex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
    },
    indicators: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
    },
    indicator: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      margin: "0 5px",
      cursor: "pointer",
    },
  };

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prev) => (prev+1)%images.length)
    }
console.log(currentIndex, 'oi',2%3)
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev-1+images.length)%images.length)
    }

  return (
    <div style={styles.carousel}>
       <button onClick={handlePrev} style={styles.button}>
        Prev
      </button>
      <div style={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={styles.image}
        />
      </div>
      <button onClick={handleNext} style={styles.button}>
        Next
      </button>
      <div style={styles.indicators}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.indicator,
              backgroundColor: currentIndex === index ? "black" : "lightgray",
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
