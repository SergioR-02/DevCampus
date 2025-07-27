import type { Course } from '../../types/course'; 
import CourseCard from './CourseCard';
import CourseCardSkeleton from './CourseCardSkeleton';
import NoResults from './NoResults';

interface CoursesListProps {
  loading: boolean;
  courses: Course[];
  searchTerm: string;
  hasActiveFilters: boolean;
  onClearSearch: () => void;
  onClearFilters: () => void;
}

const CoursesList= ({
  loading,
  courses,
  searchTerm,
  hasActiveFilters,
  onClearSearch,
  onClearFilters,
}:CoursesListProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }, (_, i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <NoResults
        searchTerm={searchTerm}
        onClearSearch={onClearSearch}
        onClearFilters={onClearFilters}
        hasActiveFilters={hasActiveFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;