/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['a.storyblok.com'], // Add 'a.storyblok.com' to the list of allowed domains
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
    },
  };
  
  module.exports = nextConfig;
  