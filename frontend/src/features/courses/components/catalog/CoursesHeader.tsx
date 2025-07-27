import { BookOpen, Users, Award } from 'lucide-react';


const CoursesHeader = () => {
  return (
    <div className="relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-11">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full p-5">
                <BookOpen size={32} className="text-blue-400" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text">Cursos</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">Extraordinarios</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-5 leading-relaxed">
            Transforma tu carrera con nuestra colección premium de cursos diseñados por expertos de la industria
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Stat: Cursos Disponibles */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative flex items-center justify-center space-x-3 mb-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-lg"><BookOpen size={20} className="text-white" /></div>
              </div>
              <div className="text-1xl font-bold text-white mb-1">Completa a tu ritmo</div>
            </div>
            {/* Stat: Estudiantes */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative flex items-center justify-center space-x-3 mb-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-400 p-2 rounded-lg"><Users size={20} className="text-white" /></div>
                </div>
                <div className="text-1.5xl font-bold text-white mb-1">Mentores Expertos</div>
            </div>
            {/* Stat: Objetivos */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative flex items-center justify-center space-x-3 mb-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-400 p-2 rounded-lg"><Award size={20} className="text-white" /></div>
                </div>
                <div className="text-1xl font-bold text-white mb-1">Alcanza tus objetivos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHeader;