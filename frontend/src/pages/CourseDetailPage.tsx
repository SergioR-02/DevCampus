import { useParams } from 'react-router-dom';
import { useCourse } from '../features/courses/hooks/useCourse';
import LoadingSpinner from '../shared/components/LoadingSpinner';
import ErrorMessage from '../shared/components/ErrorMessage';

// Importa los nuevos componentes
import CourseDetailHeader from '../features/courses/components/detail/CourseDetailHeader';
import CourseBanner from '../features/courses/components/detail/CourseBanner';
import CourseContent from '../features/courses/components/detail/CourseContent';
import CourseSidebar from '../features/courses/components/detail/CourseSidebar';

const CourseDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { course, loading, error } = useCourse(slug || '');

  // La lógica de carga no cambia
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <LoadingSpinner size="lg" className="relative mx-auto mb-4" />
          </div>
          <p className="text-slate-400 text-sm">Cargando curso...</p>
        </div>
      </div>
    );
  }

  // La lógica de error no cambia
  if (error || !course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <ErrorMessage message={error || 'Curso no encontrado'} />
      </div>
    );
  }

  // El renderizado ahora es mucho más limpio
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Fondos animados */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <CourseDetailHeader />
      
      <CourseBanner course={course} />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <CourseContent course={course} />
          <CourseSidebar course={course} />
        </div>
      </main>
    </div>
  );
};

export default CourseDetailPage;