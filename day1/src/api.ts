//page 4
//1. Create a file api.ts and define:
//o An interface ApiResponse<T> with response, status, and optional message.
//o A function createApiResponse<T> returning that structure.

interface ApiResponse<T> {
  response: T;
  status: number;
  message?: string | undefined;
}

function createApiResponse<T>(
  response: T,
  status: number,
  message?: string
): ApiResponse<T> {
  return { response, status, message };
}

export { createApiResponse };
