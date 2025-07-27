import { AlertCircle, RotateCcw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }:ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
      <div className="bg-red-500/10 border border-red-500/20 rounded-full p-4 mb-4">
        <AlertCircle size={48} className="text-red-400" />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2">
        Algo salió mal
      </h3>
      
      <p className="text-slate-400 mb-6 max-w-sm">
        {message}
      </p>
      
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <RotateCcw size={16} />
          <span>Intentar de nuevo</span>
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;