import useSWR from "swr";

export function useAuth(){
    // profile
    const {} = useSWR('/profile', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        
    })
}