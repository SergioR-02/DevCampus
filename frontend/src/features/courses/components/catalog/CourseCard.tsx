import { Link } from 'react-router-dom';
import { Clock, Users, BookOpen } from 'lucide-react';
import type { Course } from '../../types/course';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }:CourseCardProps) => {
  return (
  <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
    <div className="relative overflow-hidden">
      <img 
      src={course.image} 
      alt={course.title}
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-3 right-3">
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          {course.level}
        </span>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {course.title}
      </h3>
      
      <div className="text-slate-400 text-sm mb-4 line-clamp-2">
          <BlocksRenderer content={course.description} />
      </div>
      
      <div className="flex items-center text-slate-500 text-sm mb-4 space-x-4">
        <div className="flex items-center space-x-1">
          <Clock size={14} />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users size={14} />
          <span>{course.students.toLocaleString()}</span>
        </div>
        <div className="flex items-center space-x-1">
          <BookOpen size={14} />
          <span>{course.lessons.length} lecciones</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-400">
          Por <span className="text-blue-400 font-medium">{course.instructor}</span>
        </div>
        
        <Link 
          to={`/courses/${course.slug}`}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
        >
          Ver curso
        </Link>
      </div>
    </div>
  </div>


  );
};

export default CourseCard;
