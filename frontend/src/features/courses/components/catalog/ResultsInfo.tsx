import { BookOpen } from 'lucide-react';

interface ResultsInfoProps {
  totalResults: number;
  totalCourses: number;
  searchTerm: string;
  hasActiveFilters: boolean;
}

const ResultsInfo = ({
  totalResults,
  totalCourses,
  searchTerm,
  hasActiveFilters
}:ResultsInfoProps) => {
  const getResultsText = () => {
    if (searchTerm || hasActiveFilters) {
      return `${totalResults} de ${totalCourses} cursos`;
    }
    return `${totalCourses} cursos disponibles`;
  };

  return (
    <div className="flex items-center space-x-2 text-slate-400">
      <BookOpen size={16} />
      <span className="text-sm">
        {getResultsText()}
        {searchTerm && (
          <span className="ml-1">
            para "<span className="text-blue-400 font-medium">{searchTerm}</span>"
          </span>
        )}
      </span>
    </div>
  );
};

export default ResultsInfo;