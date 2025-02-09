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
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
