import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

global.Headers = fetch.Headers;

// restLink setup
const space = process.env.CONTENTFUL_SPACE;
const token = process.env.CONTENTFUL_TOKEN;

const restLink = new RestLink({
  uri: `https://cdn.contentful.com/spaces/${space}/environments/master`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export default client;
