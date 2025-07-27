import { Search, X, Filter, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export interface FilterOptions {
  level: string;
  sortBy: string;
}

interface SearchAndFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const SearchAndFilters = ({
  searchTerm,
  onSearchChange,
  filters,
  onFilterChange,
}:SearchAndFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const levels = ['Todos', 'Principiante', 'Intermedio', 'Avanzado'];
  const sortOptions = [
    { value: 'title', label: 'Título A-Z' },
    { value: 'students', label: 'Más populares' },
    { value: 'duration', label: 'Duración' },
    { value: 'level', label: 'Nivel' },
  ];

  const handleClearSearch = () => {
    onSearchChange('');
  };

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const hasActiveFilters =
    filters.level !== 'Todos' || filters.sortBy !== 'title';

  return (
    <div className="space-y-4">
      {/* Search Bar & Filter Button */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={20} className="text-slate-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por título, descripción o instructor..."
            className="w-full pl-10 pr-10 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          {searchTerm && (
            <button
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-200 ${
            showFilters || hasActiveFilters
              ? 'bg-blue-500 border-blue-500 text-white'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
          }`}
        >
          <Filter size={18} />
          <span>Filtros</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              showFilters ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Filters (conditional) */}
      {showFilters && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Nivel */}
          <div className="relative">
            <select
              value={filters.level}
              onChange={(e) => handleFilterChange('level', e.target.value)}
              className="w-full px-3 pr-10 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  Nivel: {level}
                </option>
              ))}
            </select>
            <ChevronDown
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>



          {/* Ordenar por */}
          <div className="relative">
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full px-3 pr-10 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  Ordenar por: {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>

        </div>
      )}
    </div>
  );
};

export default SearchAndFilters;
