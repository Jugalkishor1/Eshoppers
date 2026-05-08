import { GraphQLClient } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { graphql } from 'gql.tada';

const endpoint = import.meta.env.VITE_BACKEND_URL + '/graphql';

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: 'Bearer YOUR_TOKEN',
  },
});

const GET_PRODUCTS = graphql(`
  query Products {
    products {
      id
      name
      price
      description
      category {
        name
      }
    }
  }
`);

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await client.request(GET_PRODUCTS);
      return response.products;
    },
    initialData: [],
  });
};