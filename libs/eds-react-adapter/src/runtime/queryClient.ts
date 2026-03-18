import { QueryClient } from '@tanstack/react-query';

// Single shared QueryClient for the entire page.
// All blocks share the same cache — no duplicate fetches.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
  },
});
