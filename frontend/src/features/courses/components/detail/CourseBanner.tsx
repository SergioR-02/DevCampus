import { Clock, Users, BookOpen, Play } from 'lucide-react';
import type { Course } from '../../types/course'; 

interface CourseBannerProps {
  course: Course;
}

const CourseBanner = ({ course }:CourseBannerProps) => {
  return (
    <div className="relative">
      <div className="relative h-95 sm:h-90 md:h-85 overflow-hidden">
        <img src={course.banner} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-90 sm:-mt-84 md:-mt-74 relative z-10">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-black/30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl pointer-events-none" />

            <div className="relative flex flex-col md:flex-row md:items-center justify-between mb-4 sm:mb-6">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full font-semibold shadow-md">
                    {course.level}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  <span className="text-transparent bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                    {course.title}
                  </span>
                </h1>
                <p className="text-slate-300 text-base sm:text-lg">
                  Por <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text font-semibold">{course.instructor}</span>
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
                <button className="group w-full md:w-auto bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl sm:rounded-2xl font-semibold hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2">
                  <Play size={16} className="group-hover:scale-110 transition-transform duration-200" />
                  <span>Comenzar curso</span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-slate-400 text-sm">
              <div className="flex items-center space-x-2 bg-slate-700/30 rounded-full px-3 py-1.5"><Clock size={14} /><span>{course.duration}</span></div>
              <div className="flex items-center space-x-2 bg-slate-700/30 rounded-full px-3 py-1.5"><Users size={14} /><span>{course.students.toLocaleString()} estudiantes</span></div>
              <div className="flex items-center space-x-2 bg-slate-700/30 rounded-full px-3 py-1.5"><BookOpen size={14} /><span>{course.lessons.length} lecciones</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;