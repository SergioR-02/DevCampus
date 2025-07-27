import type { Course } from '../types/course';
import { query } from '../../../shared/service/query';
import { transformStrapiCourse } from './transformers';
import { buildCourseQueryParams } from './query-builders';
import type { CourseFilters } from './types';

export const getCourses = async (filters: CourseFilters = {}): Promise<Course[]> => {
  try {
    const queryString = buildCourseQueryParams(filters);
    const response = await query(`courses?${queryString}`);
    
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid response format from API');
    }

    return response.data.map(transformStrapiCourse);
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw new Error('Error al cargar los cursos. Por favor, intenta de nuevo.');
  }
};

export const getCourseBySlug = async (slug: string): Promise<Course | null> => {
  try {
    const response = await query(`courses?filters[slug][$eq]=${slug}&populate=*`);
    
    if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
      return null;
    }

    return transformStrapiCourse(response.data[0]);
  } catch (error) {
    console.error('Error fetching course by slug:', error);
    throw new Error('Error al cargar el curso. Por favor, intenta de nuevo.');
  }
};
