import { useSelector } from "react-redux";
import { useGetFavoriteCategoriesQuery, usePostFavoriteCategoriesMutation } from "../services/userService";
import { useEffect } from "react";

export const useCategories = () => {
    const { favoriteCategory } = useSelector(state => state.categories);
    const { localId } = useSelector(state => state.userSlice.value);
    
    const { data: categoriesGif, isLoading, isError, refetch } = useGetFavoriteCategoriesQuery(localId);
  
    // Obtener la mutación para guardar las categorías
    const [postFavoriteCategories] = usePostFavoriteCategoriesMutation();

    // Función para guardar categorías
    const handleSaveCategories = async () => {
        try {
            if (favoriteCategory.length > 0) {
                const existingCategories = categoriesGif?.categories || [];

                const updatedCategories = [
                    ...new Set([ ...favoriteCategory.map(c => c.name), ...existingCategories.map(c => c.name),])
                ].map(name => ({ name }));

                await postFavoriteCategories({ categories: updatedCategories, localId }).unwrap();
                
                // Vuelve a cargar las categorías desde la API
                refetch();
            }
        } catch (error) {
            alert("Error al guardar categorías:", error);
        }
    };

    // Ejecuta `handleSaveCategories` automáticamente cuando cambie `favoriteCategory`
    useEffect(() => {
        if (favoriteCategory.length > 0) {
            handleSaveCategories();
        }
    }, [favoriteCategory]);

    return {
        handleSaveCategories,
        isLoading, isError,
        categoriesGif
    };
};
