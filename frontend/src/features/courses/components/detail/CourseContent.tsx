import LessonList from './LessonList'; 
import type { Course } from '../../types/course';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface CourseContentProps {
  course: Course;
}

const CourseContent = ({ course }:CourseContentProps) => {
  return (
    <div className="lg:col-span-2 space-y-8">
      {/* Descripción del curso */}
      <div className="bg-black/20 backdrop-blur-sm border border-slate-500/50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
          <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-400 to-cyan-300 rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Descripción del curso</h2>
        </div>
        <div className="text-slate-200 leading-relaxed text-base">
          <BlocksRenderer content={course.description} />
        </div>
      </div>

      {/* Contenido del curso */}
      <div className="bg-black/20 backdrop-blur-sm border border-slate-500/50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Contenido del curso</h2>
        </div>
        <LessonList lessons={course.lessons} />
      </div>
    </div>
  );
};

export default CourseContent;