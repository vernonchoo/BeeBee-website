import { ref, computed } from 'vue'
import { getFavorites, addFavorite, removeFavorite, isFavorite } from '@/utils/storage'
import type { Favorite } from '@/utils/storage'

export function useFavorites() {
  const favorites = ref<Favorite[]>(getFavorites())

  const favoriteIds = computed(() => favorites.value.map((f) => f.id))

  const toggleFavorite = (id: string, type: 'route' | 'promo') => {
    if (isFavorite(id, type)) {
      removeFavorite(id, type)
    } else {
      addFavorite(id, type)
    }
    favorites.value = getFavorites()
  }

  const checkIsFavorite = (id: string, type: 'route' | 'promo') => {
    return isFavorite(id, type)
  }

  return {
    favorites,
    favoriteIds,
    toggleFavorite,
    isFavorite: checkIsFavorite,
  }
}

