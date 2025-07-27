import { useState } from 'react';
import { ChevronDown, Play, Clock } from 'lucide-react';
import type { Lesson } from '../../types/course';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface LessonListProps {
  lessons: Lesson[];
}

const LessonList = ({ lessons }:LessonListProps) => {
  const [openLessonId, setOpenLessonId] = useState<string | null>(null);

  const toggleLesson = (lessonId: string) => {
    setOpenLessonId(openLessonId === lessonId ? null : lessonId);
  };

  return (
    <div className="space-y-2">
      {lessons.map((lesson, index) => {
        const isOpen = openLessonId === lesson.id;

        return (
          <div
            key={lesson.id}
            className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-500 ${
              isOpen
                ? 'border-blue-500/50 shadow-md shadow-blue-500/10'
                : 'border-slate-700/50 hover:border-slate-600/50'
            }`}
          >
            <button
              onClick={() => toggleLesson(lesson.id)}
              className="relative w-full p-3 text-left transition-all duration-300 flex items-center justify-between group/btn hover:bg-slate-700/20 cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold bg-gradient-to-br from-slate-700 to-slate-800 text-slate-300 group-hover/btn:from-blue-500 group-hover/btn:to-purple-600 group-hover/btn:text-white group-hover/btn:shadow-md group-hover/btn:shadow-blue-500/25">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-base mb-0.5 text-white group-hover/btn:text-transparent group-hover/btn:bg-gradient-to-r group-hover/btn:from-blue-400 group-hover/btn:to-cyan-300 group-hover/btn:bg-clip-text">
                    {lesson.title}
                  </h4>

                  <div className="flex items-center space-x-2 text-slate-400 text-sm">
                    <Clock size={12} />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
              </div>

              <ChevronDown
                size={16}
                className={`text-slate-400 transition-all duration-300 group-hover/btn:text-blue-400 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`transition-all duration-500 ease-out overflow-hidden ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-3 pb-3 border-t border-slate-700/50">
                <div className="pt-3">
                  {lesson.description && lesson.description.length > 0 && (
                    <div className="text-slate-300 text-base mb-3 leading-relaxed">
                      <BlocksRenderer content={lesson.description} />
                    </div>
                  )}

                  <button className="group/play flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    <Play size={14} className="group-hover/play:scale-110 transition-transform duration-200" />
                    <span>Reproducir lección</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LessonList;
