import React from 'react'

interface ParallaxSectionProps {
  bgImage: string
  height: string
  children: React.ReactNode
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ bgImage, height, children }) => {
  return (
    <div
      className="bg-fixed bg-center bg-no-repeat bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        height: height,
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        {children}
      </div>
    </div>
  )
}

export default ParallaxSection
