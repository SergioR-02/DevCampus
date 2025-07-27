import { Search, RotateCcw } from 'lucide-react';

interface NoResultsProps {
  searchTerm: string;
  onClearSearch: () => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const NoResults = ({
    searchTerm,
    onClearSearch,
    onClearFilters,
    hasActiveFilters
  }:NoResultsProps) => {
  
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="bg-slate-800 border border-slate-700 rounded-full p-6 mb-6">
        <Search size={48} className="text-slate-400" />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2">
        No se encontraron cursos
      </h3>
      
      <p className="text-slate-400 mb-6 max-w-md">
        {searchTerm 
          ? `No encontramos cursos que coincidan con "${searchTerm}"`
          : "No hay cursos que coincidan con los filtros seleccionados"
        }
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        {searchTerm && (
          <button
            onClick={onClearSearch}
            className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <RotateCcw size={16} />
            <span>Limpiar búsqueda</span>
          </button>
        )}
        
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <RotateCcw size={16} />
            <span>Limpiar filtros</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default NoResults;