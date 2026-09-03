"use client"

import { useEffect, useMemo, useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { galleryCategories, galleryImages } from "@/lib/gallery"

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter((image) => image.category === activeCategory),
    [activeCategory],
  )

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  )
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  )

  useEffect(() => {
    if (lightboxIndex === null) return
    document.body.style.overflow = "hidden"
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKey)
    }
  }, [lightboxIndex, closeLightbox, showPrev, showNext])

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setLightboxIndex(null)
  }

  const activeImage = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {galleryCategories.map((category) => {
          const isActive = category.id === activeCategory
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors border ${
                isActive
                  ? "bg-primary text-background-dark border-primary"
                  : "bg-white/5 text-slate-300 border-white/10 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category.label}
            </button>
          )
        })}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {filtered.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="group relative mb-5 w-full block break-inside-avoid overflow-hidden rounded-2xl border border-white/5 bg-navy-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`View larger photo: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={1000}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-background-dark">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-500 py-16">No photos in this category yet.</p>
      )}

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4 py-10 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close photo viewer"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-[90vw] max-w-4xl h-[70vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
              />
            </div>
            <p className="text-center text-slate-300 text-sm max-w-2xl">{activeImage.alt}</p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  )
}
