import React from 'react'
import Image from 'next/image'

interface PomeloLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export const PomeloLogo: React.FC<PomeloLogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = false 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-14 h-14',
    lg: 'w-24 h-24'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image */}
      <div className={`${sizeClasses[size]} relative`}>
        <Image
          src="/images/download.png?v=2"
          alt="Pomelo Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className={`font-semibold text-foreground ${textSizeClasses[size]}`}>
          pomelo
        </span>
      )}
    </div>
  )
}

export default PomeloLogo
