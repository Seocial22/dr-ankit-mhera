'use client'
import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeImageAlt = "Before image",
  afterImageAlt = "After image",
  videoUrl = "https://www.youtube.com/embed/dzqDU9efnnk",
  showVideo = true,
  initialPosition = 50,
  aspectRatio = "12/9"
}) =>
{
  const [position, setPosition] = useState(initialPosition);
  const [beforeImageError, setBeforeImageError] = useState(false);
  const [afterImageError, setAfterImageError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() =>
  {
    if (containerRef.current)
    {
      containerRef.current.style.setProperty('--position', `${position}%`);
    }
  }, [position]);

  const handleSliderChange = (e) =>
  {
    const value = e.target.value;
    setPosition(value);
  };

  const handleBeforeImageError = () =>
  {
    setBeforeImageError(true);
  };

  const handleAfterImageError = () =>
  {
    setAfterImageError(true);
  };

  return (
    <>
      <style jsx>{`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        iframe {
          aspect-ratio: 16/9;
        }
        
        .video-container {
          margin: 2rem;
          max-height: 300px;
        }
        
        img {
          display: block;
          max-width: 100%;
        }
        
        main {
          display: grid;
          place-items: center;
          min-height: 100vh;
        }
        
        .container {
          display: grid;
          place-content: center;
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          --position: 50%;
        }
        
        .image-container {
          max-width: 800px;
          max-height: 50vh;
          aspect-ratio: ${aspectRatio};
        }
        
        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left;
        }
        
        .image-before {
          position: absolute;
          inset: 0;
          width: var(--position);
          filter: grayscale(100%);
        }
        
        .slider {
          position: absolute;
          inset: 0;
          cursor: pointer;
          opacity: 0;
          width: 100%;
          height: 100%;
        }
        
        .slider:focus-visible ~ .slider-button {
          outline: 5px solid black;
          outline-offset: 3px;
        }
        
        .slider-line {
          position: absolute;
          inset: 0;
          width: .2rem;
          height: 100%;
          background-color: #fff;
          left: var(--position);
          transform: translateX(-50%);
          pointer-events: none;
        }
        
        .slider-button {
          position: absolute;
          background-color: #fff;
          color: black;
          padding: .5rem;
          border-radius: 100vw;
          display: grid;
          place-items: center;
          top: 50%;
          left: var(--position);
          transform: translate(-50%, -50%);
          pointer-events: none;
          box-shadow: 1px 1px 1px hsl(0, 50%, 2%, .5);
        }
        
        .error-message {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background-color: #f8f9fa;
          color: #dc3545;
          padding: 1rem;
          text-align: center;
        }
      `}</style>

      <main>
        <div
          ref={containerRef}
          className="container"
        >
          <div className="image-container">
            {beforeImageError ? (
              <div className="error-message">Failed to load before image</div>
            ) : (
              <img
                className="image-before slider-image"
                src={beforeImage}
                alt={beforeImageAlt}
                onError={handleBeforeImageError}
              />
            )}
            {afterImageError ? (
              <div className="error-message">Failed to load after image</div>
            ) : (
              <img
                className="image-after slider-image"
                src={afterImage}
                alt={afterImageAlt}
                onError={handleAfterImageError}
              />
            )}
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            aria-label="Percentage of before photo shown"
            className="slider"
            onChange={handleSliderChange}
          />
          <div className="slider-line" aria-hidden="true"></div>
          <div className="slider-button" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="128"
                y1="40"
                x2="128"
                y2="216"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="96"
                y1="128"
                x2="16"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="48 160 16 128 48 96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
              <line
                x1="160"
                y1="128"
                x2="240"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="208 96 240 128 208 160"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
            </svg>
          </div>
        </div>
        {showVideo && (
          <div className="video-container">
            <iframe
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </main>
    </>
  );
};

BeforeAfterSlider.defaultProps = {
  beforeImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  afterImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  beforeImageAlt: "Before image",
  afterImageAlt: "After image",
  videoUrl: "https://www.youtube.com/embed/dzqDU9efnnk",
  showVideo: true,
  initialPosition: 50,
  aspectRatio: "12/9"
};

export default BeforeAfterSlider;