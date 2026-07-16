import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './DivineClickEffect.css';

/**
 * DivineClickEffect Component for df-admin
 * Adds a global visual "blessing/halo" ripple effect on click or tap.
 */
export default function DivineClickEffect({ color = '#FFD700', size = 1 }) {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      let clientX = e.clientX;
      let clientY = e.clientY;

      if (e.type === 'touchstart') {
        const touch = e.touches[0];
        clientX = touch.clientX;
        clientY = touch.clientY;
      }

      const id = Date.now() + Math.random().toString(36).substr(2, 9);
      setClicks((prev) => [...prev, { id, x: clientX, y: clientY }]);

      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== id));
      }, 850);
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleClick, { passive: true });

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleClick);
    };
  }, []);

  return createPortal(
    <div className="divine-click-effect-container">
      {clicks.map((click) => (
        <div
          key={click.id}
          className="divine-effect-item"
          style={{
            left: click.x,
            top: click.y,
            transform: `translate(-50%, -50%) scale(${size})`,
          }}
        >
          {/* 1. Center pulsing spark */}
          <div 
            className="divine-spark" 
            style={{ 
              background: `radial-gradient(circle, #FFF8E1 0%, ${color} 70%, rgba(255, 215, 0, 0) 100%)`,
              boxShadow: `0 0 10px ${color}, 0 0 20px #FFF8E1`
            }} 
          />
          {/* 2. Expanding radiant aura halo ring */}
          <div 
            className="divine-halo" 
            style={{ 
              borderColor: color,
              boxShadow: `inset 0 0 8px ${color}, 0 0 12px #FFF8E1`
            }} 
          />
          {/* 3. Shoot 6 sparkle rays in radial directions */}
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className={`divine-ray ray-${idx + 1}`}
              style={{
                background: `linear-gradient(to top, rgba(255, 215, 0, 0), #FFF8E1 50%, ${color} 100%)`
              }}
            />
          ))}
        </div>
      ))}
    </div>,
    document.documentElement
  );
}
