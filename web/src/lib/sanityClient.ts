// sanity-md/web/src/components/SanityClient.ts

import sanityClient from '@sanity/client';

// create Client interface to type check options
type Client = {
  projectId: string,
  dataset: string,
  apiVersion: string,
  token: string,
  useCdn: boolean
//  ignoreBrowserTokenWarning: boolean
}

// create instance of sanityClient
// this is how you connect your frontend to your sanity studio
const options:Client = {
  //your project ID
  projectId: 't295jcoh',
  //your dataset; defaults to production
  dataset: 'production',
  // token: 'sk4G3tZ1UmbdkYjWfnRp7xgGqnNP8LvOwUKBuf2PJ7zdFyrCJEsd5qSQKTxhGtcMSkZ38BLji7qNm8GxQzoD5uJaqxgP0ORMHKEeemaRoGTZmTMwveRuXmFWwcjG1D7uTGYlzI4SSbP4fvmwJG72wI8k6AEKqXvXlz6RE2oC4mhol4NE5BuV',
  token: '',
  apiVersion: "2021-06-07",
  useCdn: true 
//  ignoreBrowserTokenWarning: true

}

const client = sanityClient( options );

export { client }