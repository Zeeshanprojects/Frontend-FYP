/**
 * A helper function to handle async operations with try/catch.
 * It returns an array containing the result and any error encountered.
 *
 * @param {Function} fn - The async function to execute.
 * @returns {Promise<Array>} A promise that resolves to an array where the first element is the result (data) and the second element is the error (if any).
 *
 * @example
 * const [data, error] = await handleAsync(someAsyncFunction);
 * if (error) {
 *     console.error("Error:", error);
 * } else {
 *     console.log("Data:", data);
 * }
 */
export const handleAsync = async (fn) => {
    try {
        const data = await fn();
        return [data?.data?.data, null];
    } catch (error) {
        return [null, error];
    }
}