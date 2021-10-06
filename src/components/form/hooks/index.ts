import { useForm, UseFormReturn } from "react-hook-form";

/**
 * 
 * @returns form
 */
export const useBaseForm = <T, U extends Record<string, unknown> = Record<string, unknown>>(): UseFormReturn<T, U> => {
    const form = useForm<T>({ mode: 'all' });

    return form
}