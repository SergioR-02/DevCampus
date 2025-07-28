import { useState, useEffect } from 'react';
import type { Course } from '../types/course';
import { getCourseBySlug } from '../api/courses-service';

// Hook personalizado para obtener los datos de un curso según su slug
export const useCourse = (slug: string) => {
  const [course, setCourse] = useState<Course | null>(null); // Estado del curso
  const [loading, setLoading] = useState(true);              // Estado de carga
  const [error, setError] = useState<string | null>(null);   // Estado de error

  useEffect(() => {
    
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getCourseBySlug(slug);
        
        // Si no se encuentra el curso, mostrar mensaje de error
        if (!data) {
          setError('Curso no encontrado');
        }

        setCourse(data);
      } catch (err) {
        // Error en la consulta o red
        setError('Error al cargar el curso. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    // Ejecuta la carga solo si hay un slug válido
    if (slug) {
      fetchCourse();
    }
  }, [slug]);

  // Retorna el estado del curso y sus indicadores asociados
  return { course, loading, error };
};
