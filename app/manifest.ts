import type { MetadataRoute } from 'next';
import { METADATA, NAME } from './constants/metadata';

export default function manifest(): MetadataRoute.Manifest {
  const darkMode = document.body.classList.contains('dark');
  return {
    name: NAME,
    short_name: NAME.split(' ')[0],
    description: METADATA.description,
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: darkMode ? '#1e293b' : '#c7d2fe',
    theme_color: darkMode ? '#1e293b' : '#c7d2fe',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
