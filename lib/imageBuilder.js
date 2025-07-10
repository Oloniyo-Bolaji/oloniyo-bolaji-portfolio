import React from 'react';
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/src/sanity/client' 

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
