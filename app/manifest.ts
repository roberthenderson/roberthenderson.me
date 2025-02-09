import type { MetadataRoute } from 'next';
import { METADATA, NAME } from './constants/metadata';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: NAME,
    short_name: NAME.split(' ')[0],
    description: METADATA.description,
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    icons: [
      {
        src: '/icons/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
