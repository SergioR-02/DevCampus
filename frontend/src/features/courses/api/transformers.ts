import type { Course, StrapiCourse, Lesson, StrapiLesson } from '../types/course'

// Base URL para las imágenes de Strapi
const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_HOST;

// Función para transformar datos de Strapi a tipos del frontend
export const transformStrapiCourse = (strapiCourse: StrapiCourse): Course => {
  return {
    id: strapiCourse.documentId,
    slug: strapiCourse.slug,
    title: strapiCourse.title,
    description: strapiCourse.description,
    instructor: strapiCourse.instructor,
    image: strapiCourse.image ? `${STRAPI_BASE_URL}${strapiCourse.image.url}` : '',
    banner: strapiCourse.banner ? `${STRAPI_BASE_URL}${strapiCourse.banner.url}` : '',
    duration: strapiCourse.duration,
    level: strapiCourse.level,
    students: strapiCourse.students,
    lessons: strapiCourse.lessons ? strapiCourse.lessons.map(transformStrapiLesson) : []
  };
};

export const transformStrapiLesson = (strapiLesson: StrapiLesson): Lesson => {
  return {
    id: strapiLesson.documentId,
    title: strapiLesson.title,
    duration: strapiLesson.duration,
    description: strapiLesson.description
  };
};
