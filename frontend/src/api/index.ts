import { GraphQLClient } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { graphql } from 'gql.tada';

const endpoint = import.meta.env.VITE_BACKEND_URL + '/graphql';

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: 'Bearer YOUR_TOKEN',
  },
});

const GetProducts = graphql(`
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
      const response = await client.request(GetProducts);
      return response.products;
    },
    initialData: [],
  });
};

const GetCategories = graphql(`
  query Categories {
    categories {
      id
      name
    }
  }
`);

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await client.request(GetCategories);
      return response.categories;
    },
    initialData: [],
  });
};
