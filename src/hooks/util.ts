import { useRouter } from 'next/router';

enum Params {
    edit
}

export const useEditMode = (): any => useRouter().query[Params.edit];