import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'px3hi0pm',
  dataset: 'production',
  apiVersion: '2022-07-26', // use current UTC date - see "specifying API version"!
  token:
    'skYZcmjMNki2Qs5O3F8IgGXRCAIlQUc6ix9UNJCfsDv7p3YzqyrrqJMoYbyfhEPEGYYu09trhEXiucgX9YPLrDI26q1J45qjAggruvpANj1Bcid7dU2pMGkp4cMM6xJ0mFUYKWL48mpNWz8mlqJzYmDfAYciNoaUdlXd5Mj4NZH6ermWoU3L', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})