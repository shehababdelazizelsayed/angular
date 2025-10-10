interface ApiResponse<T> {
    response: T;
    status: number;
    message?: string | undefined;
}
declare function createApiResponse<T>(response: T, status: number, message?: string): ApiResponse<T>;
export { createApiResponse };
//# sourceMappingURL=api.d.ts.map