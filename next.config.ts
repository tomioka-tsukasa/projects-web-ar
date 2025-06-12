import type { NextConfig } from 'next'

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
}

export default withVanillaExtract(nextConfig)
