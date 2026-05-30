export function getErrorMessage(error: unknown): string {
  if (typeof error === "string") {
    return error;
  }

  if (typeof error === "object" && error !== null && "response" in error) {
    const graphQLError = (
      error as {
        response?: {
          errors?: { message: string }[];
        };
      }
    ).response?.errors?.[0];

    if (graphQLError?.message) {
      return graphQLError.message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong";
}
