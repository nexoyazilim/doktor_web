import React from 'react'

export default function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <div className="loading-text">
          <p>Yükleniyor...</p>
        </div>
      </div>
    </div>
  )
}
