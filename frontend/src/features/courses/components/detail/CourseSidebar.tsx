import { Clock, BookOpen, Star, Play, Download, CheckCircle2 } from 'lucide-react';
import type { Course } from '../../types/course';

interface CourseSidebarProps {
  course: Course;
}

const CourseSidebar= ({ course }:CourseSidebarProps) => {
  const courseIncludes = [
    { icon: Clock, text: `${course.duration} de contenido`, color: 'from-blue-400 to-cyan-300' },
    { icon: BookOpen, text: `${course.lessons.length} lecciones`, color: 'from-purple-400 to-pink-400' },
    { icon: Download, text: 'Recursos descargables', color: 'from-green-400 to-emerald-400' },
    { icon: CheckCircle2, text: 'Acceso de por vida', color: 'from-yellow-400 to-orange-400' },
    { icon: Star, text: 'Certificado de finalización', color: 'from-indigo-400 to-purple-400' },
  ];

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-8 space-y-8">
        <div className="bg-black/20 backdrop-blur-sm border border-slate-500/50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Este curso incluye:</h3>
          <ul className="space-y-4 text-slate-300 text-sm">
            {courseIncludes.map((item, index) => (
              <li key={index} className="flex items-center space-x-3 group">
                <div className={`bg-gradient-to-r ${item.color} p-2 rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                  <item.icon size={14} className="text-white" />
                </div>
                <span className="group-hover:text-white transition-colors duration-200">{item.text}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-6 sm:mt-8 flex items-center justify-center space-x-2 sm:space-x-3 group">
            <Play size={16} className="group-hover:scale-110 transition-transform duration-200" />
            <span>Inscribirse ahora</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;