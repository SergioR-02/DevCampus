import { useState, useEffect, useCallback } from 'react';
import type { Course } from '../types/course';
import { getCourses, type CourseFilters } from '../api';
import type { FilterOptions } from '../components/catalog/SearchAndFilters';

export const useCoursesWithFilters = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    level: 'Todos',
    sortBy: 'title'
  });

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const courseFilters: CourseFilters = {
        search: searchTerm || undefined,
        level: filters.level !== 'Todos' ? filters.level : undefined,
        sortBy: filters.sortBy
      };

      const data = await getCourses(courseFilters);
      setCourses(data);
    } catch (err) {
      setError('Error al cargar los cursos. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  }, [searchTerm, filters]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const refetch = useCallback(async () => {
    await fetchCourses();
  }, [fetchCourses]);

  return {
    courses,
    allCourses: courses,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    refetch,
    totalResults: courses.length,
    totalCourses: courses.length
  };
};