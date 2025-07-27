// Re-exporta todas las funciones y tipos de la API
export { getCourses, getCourseBySlug } from './courses-service';
export type { CourseFilters } from './types';
export { transformStrapiCourse, transformStrapiLesson } from './transformers';
