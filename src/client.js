import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: 'nhsga5av',
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.sanity_token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);