import { Ref } from 'vue'

type UseLoadingType = {
  loading: Ref<boolean>,
  loadingOn: () => void,
  loadingOff: () => void
}

export function useLoading (): UseLoadingType {
  const loading = ref(false)
  function loadingOn (): void {
    loading.value = true
  }
  function loadingOff (): void {
    loading.value = false
  }

  return {
    loading,
    loadingOn,
    loadingOff,
  }
}
