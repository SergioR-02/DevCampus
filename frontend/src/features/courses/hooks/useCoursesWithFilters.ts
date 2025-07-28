import { useState, useEffect, useCallback } from 'react';
import type { Course } from '../types/course';
import { getCourses, type CourseFilters } from '../api';
import type { FilterOptions } from '../components/catalog/SearchAndFilters';

// Hook personalizado para obtener y gestionar cursos con filtros de búsqueda, nivel y ordenamiento
export const useCoursesWithFilters = () => {
  const [courses, setCourses] = useState<Course[]>([]);         // Lista de cursos cargados
  const [loading, setLoading] = useState(true);                 // Indicador de carga
  const [error, setError] = useState<string | null>(null);      // Mensaje de error si ocurre
  const [searchTerm, setSearchTerm] = useState('');             // Término de búsqueda por texto
  const [filters, setFilters] = useState<FilterOptions>({       // Filtros aplicados al catálogo
    level: 'Todos',
    sortBy: 'title',
  });

  //Obtener cursos desde la API aplicando filtros y término de búsqueda
  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const courseFilters: CourseFilters = {
        search: searchTerm || undefined,
        level: filters.level !== 'Todos' ? filters.level : undefined,
        sortBy: filters.sortBy,
      };

      const data = await getCourses(courseFilters);
      setCourses(data);
    } catch (err) {
      setError('Error al cargar los cursos. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  }, [searchTerm, filters]);

  // Ejecuta la carga de cursos cada vez que cambian los filtros o el término de búsqueda
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // Permite recargar los cursos manualmente desde fuera del hook
  const refetch = useCallback(async () => {
    await fetchCourses();
  }, [fetchCourses]);

  return {
    courses,                // Lista filtrada de cursos
    allCourses: courses,    
    loading,                // Indicador de estado de carga
    error,                  // Mensaje de error
    searchTerm,             // Término actual de búsqueda
    setSearchTerm,          // Setter del término de búsqueda
    filters,                // Filtros aplicados
    setFilters,             // Setter de filtros
    refetch,                // Función para recargar datos
    totalResults: courses.length,  // Total de resultados actuales
    totalCourses: courses.length, 
  };
};
