import { useState, useEffect } from 'react';
import type { Course } from '../types/course';
import { getCourseBySlug } from '../api/courses-service';

export const useCourse = (slug: string) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getCourseBySlug(slug);
        if (!data) {
          setError('Curso no encontrado');
        }
        setCourse(data);
      } catch (err) {
        setError('Error al cargar el curso. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCourse();
    }
  }, [slug]);

  return { course, loading, error };
};