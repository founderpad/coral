import { useRouter } from 'next/router';

enum Params {
    edit
}

export const useEditMode = (): any => useRouter().query[Params.edit];

export const useQueryParam = (param: string): string => useRouter().query[param] as string;