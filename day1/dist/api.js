//page 4
//1. Create a file api.ts and define:
//o An interface ApiResponse<T> with response, status, and optional message.
//o A function createApiResponse<T> returning that structure.
function createApiResponse(response, status, message) {
    return { response, status, message };
}
export { createApiResponse };
//# sourceMappingURL=api.js.map