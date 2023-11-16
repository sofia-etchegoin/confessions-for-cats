import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getConfessions } from '../apis/confessions.ts'

export function useConfessions() {
  const query = useQuery({ queryKey: ['confessions'], queryFn: getConfessions })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useConfessionsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()
  const mutation = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['confessions'] })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
