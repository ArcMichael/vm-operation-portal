// useAuthToken.ts
import { useSession } from 'next-auth/react';

// Hook for getting the auth token
export default function useAuthToken() {
    const { data: session } = useSession();
    return session?.accessToken || '';
}
