"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const photos = [
  {
    src: "/walk.JPG",
    alt: "Working on a project",
    caption: "Graduation w/ friends!",
  },
  {
    src: "/adventure.JPG",
    alt: "At a tech conference",
    caption: "Traveling the world",
  },
  {
    src: "/hike.JPG",
    alt: "Team collaboration",
    caption: "Hikes in Seattle",
  },
  {
    src: "/buzz.JPG",
    alt: "Outdoor adventure",
    caption: "Buzz on a snow day!",
  },
  {
    src: "/grad.jpg",
    alt: "More friends and graduation :)",
    caption: "More friends and graduation :)",
  },
  // {
  //   src: "/research.png",
  //   alt: "Outdoor adventure",
  //   caption: "Working as an undergraduate researcher",
  // },
]

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main Image */}
      <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
        <img
          src={photos[currentIndex].src || "/placeholder.svg"}
          alt={photos[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 text-foreground"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 text-foreground"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-white text-sm font-medium">{photos[currentIndex].caption}</p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
