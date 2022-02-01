import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'o6sw0gg5',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skF4peO5p03VLqM5KUTT5Ao7WRD7FPP4j4qsxB8f5zXNSLur2MtoOQqCa2vBNZvCXidI9wmW8ogjWNlYWQtQhMgs7jGNuSMRsPU32eWtE40OdoEGwTPXNpPxMhQTkzzhOsjIiikKyJbB3xSp6JSRi2taJkYnQEKNvOcTNBBHjzw4tqYa4mXT',
  useCdn: false,
})
