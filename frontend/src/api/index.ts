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
  query ($categoryId: ID) {
    products(categoryId: $categoryId) {
      id
      name
      price
      images
      description
      category {
        name
      }
    }
  }
`);

export const useProducts = (categoryId?: string) => {
  return useQuery({
    enabled: categoryId !== undefined || categoryId === undefined,
    queryKey: ["products", categoryId],
    queryFn: async () => {
      const response = await client.request({
        document: GetProducts,
        variables: {
          categoryId,
        },
      });

      return response.products;
    },

    initialData: [],
  });
};

const GetProduct = graphql(`
  query Product($productId: ID!) {
    product(id: $productId) {
      id
      name
      price
      description
      images
    }
  }
`);

export const useProduct = (productId: string) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const response = await client.request({
        document: GetProduct,
        variables: {
          productId,
        },
      });
      return response.product;
    },
  });
};

const GetCategories = graphql(`
  query Categories {
    categories {
      id
      name
      image
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
