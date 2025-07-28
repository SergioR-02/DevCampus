import type { Course } from '../types/course';
import { query } from '../../../shared/service/query';
import { transformStrapiCourse } from './transformers';
import { buildCourseQueryParams } from './query-builders';
import type { CourseFilters } from './types';

// Obtiene una lista de cursos desde la API de Strapi, aplicando filtros y transformando los datos
export const getCourses = async (filters: CourseFilters = {}): Promise<Course[]> => {
  try {
    // Construye la cadena de consulta en función de los filtros
    const queryString = buildCourseQueryParams(filters);

    // Realiza la solicitud a la API
    const response = await query(`courses?${queryString}`);
    
    // Valida que la respuesta tenga el formato esperado
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid response format from API');
    }

    // Transforma los datos de Strapi al formato local `Course`
    return response.data.map(transformStrapiCourse);
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw new Error('Error al cargar los cursos. Por favor, intenta de nuevo.');
  }
};

// Obtiene un curso específico desde la API usando su slug único
export const getCourseBySlug = async (slug: string): Promise<Course | null> => {
  try {
    // Filtra por slug y solicita todos los campos relacionados
    const response = await query(`courses?filters[slug][$eq]=${slug}&populate=*`);
    
    // Si no se encuentra el curso, retorna null
    if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
      return null;
    }

    // Retorna el curso transformado
    return transformStrapiCourse(response.data[0]);
  } catch (error) {
    console.error('Error fetching course by slug:', error);
    throw new Error('Error al cargar el curso. Por favor, intenta de nuevo.');
  }
};
