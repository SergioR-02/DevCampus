import CoursesHeader from "../features/courses/components/catalog/CoursesHeader";
import { useCoursesWithFilters } from '../features/courses/hooks/useCoursesWithFilters';
import ErrorMessage from '..//shared/components/ErrorMessage';
import SearchAndFilters from '../features/courses/components/catalog/SearchAndFilters';
import ResultsInfo from '../features/courses/components/catalog/ResultsInfo';
import CoursesList from '../features/courses/components/catalog/CoursesList';

const CoursesPage= () => {
  const {
    courses,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    refetch,
    totalResults,
    totalCourses,
  } = useCoursesWithFilters();

  const hasActiveFilters = filters.level !== 'Todos' || filters.sortBy !== 'title';

  const handleClearSearch = () => setSearchTerm('');
  const handleClearFilters = () => setFilters({ level: 'Todos', sortBy: 'title' });

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      
      <CoursesHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-4">
          <SearchAndFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filters={filters}
            onFilterChange={setFilters}
          />
        </div>
        
        <div className="flex items-center justify-between mb-8">
          <ResultsInfo
            totalResults={totalResults}
            totalCourses={totalCourses}
            searchTerm={searchTerm}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        <CoursesList
          loading={loading}
          courses={courses}
          searchTerm={searchTerm}
          hasActiveFilters={hasActiveFilters}
          onClearSearch={handleClearSearch}
          onClearFilters={handleClearFilters}
        />
      </main>
    </div>
  );
};

export default CoursesPage;