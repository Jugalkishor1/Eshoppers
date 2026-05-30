import { GraphQLClient } from 'graphql-request';
import { useQuery, useMutation } from '@tanstack/react-query';
import { graphql } from 'gql.tada';
import type { VariablesOf } from 'gql.tada';
import { useAuthStore } from '../store/authStore';
import { notify } from '@/lib/notifications';

const endpoint = import.meta.env.VITE_BACKEND_URL + '/graphql';

export const getClient = () => {
  const token = useAuthStore.getState().token;

  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    responseMiddleware: (response) => {
      if (!('response' in response)) return;

      const message = response.response.errors?.[0]?.message;

      if (message === 'Session not found') {
        logout();

        notify.error('Session expired. Please login again.');
      }
    }
  });
};

const userDocument = graphql(`
  mutation SignupMutation($input: SignupInput!) {
    signup(input: $input) {
      user { 
        id
        fullName
        email
      }
      errors
    }
  }
`);

export const useCreateUser = () => {
  return useMutation({
    mutationFn: async (variables: VariablesOf<typeof userDocument>) => {
      const response = await getClient().request(userDocument, variables);

      if (response.signup?.errors.length) {
        throw new Error(response.signup.errors[0]);
      }

      return response;
    },
  });
};

const loginDocument = graphql(`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        fullName
        email
      }
    }
  }
`);

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (variables: VariablesOf<typeof loginDocument>) =>
      getClient().request(loginDocument, variables),

    onSuccess: (response) => {
      useAuthStore.getState().setToken(response.login?.token ?? null);
    },
  });
};

export const logout = () => {
  useAuthStore.getState().logout();
};

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
      const response = await getClient().request({
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
      const response = await getClient().request({
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
      const response = await getClient().request(GetCategories);
      return response.categories;
    },
    initialData: [],
  });
};
