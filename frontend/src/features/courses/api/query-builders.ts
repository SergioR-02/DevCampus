import type { CourseFilters } from './types';

export const buildCourseQueryParams = (filters: CourseFilters = {}): string => {
  const params = new URLSearchParams();
  
  params.append('populate', '*');

  // Filtro de búsqueda por título, descripción o instructor
  if (filters.search) {
    params.append('filters[$or][0][title][$containsi]', filters.search);
    params.append('filters[$or][1][instructor][$containsi]', filters.search);
  }

  // Filtro por nivel
  if (filters.level && filters.level !== 'Todos') {
    params.append('filters[level][$eq]', filters.level);
  }

  // Ordenamiento
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'title':
        params.append('sort[0]', 'title:asc');
        break;
      case 'students':
        params.append('sort[0]', 'students:desc');
        break;
      case 'duration':
        params.append('sort[0]', 'duration:desc');
        break;
      case 'level':
        params.append('sort[0]', 'level:asc');
        break;
      default:
        params.append('sort[0]', 'title:asc');
    }
  } else {
    params.append('sort[0]', 'title:asc');
  }

  return params.toString();
};
