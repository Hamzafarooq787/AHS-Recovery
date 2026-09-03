import type { Metadata } from "next"
import { siteConfig } from "./site-config"

interface BuildMetadataOptions {
  title: string
  description: string
  path?: string
}

export function buildMetadata({ title, description, path = "" }: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.siteUrl}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
