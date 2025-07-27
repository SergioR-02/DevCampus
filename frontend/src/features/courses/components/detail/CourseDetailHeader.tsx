import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CourseDetailHeader= () => {
  return (
    <div className="relative bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 group"
        >
          <ArrowLeft
            size={16}
            className="text-blue-400 group-hover:-translate-x-1 group-hover:text-white transition-all duration-300"
          />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:text-white transition-all duration-300">
            Volver a cursos
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetailHeader;