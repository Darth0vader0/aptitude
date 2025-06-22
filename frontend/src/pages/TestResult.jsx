import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Trophy, Clock, Target, RotateCcw, Home, TrendingUp } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button-2';
import Badge from '../components/UI/Badge';

const TestResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const {
    score = 75,
    correctAnswers = 15,
    totalQuestions = 20,
    timeSpent = 1200,
    answers = {},
    questions = []
  } = location.state || {};

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'success';
    if (score >= 60) return 'warning';
    return 'error';
  };

  const getPerformanceText = (score) => {
    if (score >= 90) return 'Excellent! Outstanding performance!';
    if (score >= 80) return 'Great job! You\'re doing very well!';
    if (score >= 70) return 'Good work! Keep practicing to improve!';
    if (score >= 60) return 'Not bad! There\'s room for improvement!';
    return 'Keep practicing! You\'ll get better with time!';
  };

  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  const avgTimePerQuestion = Math.round(timeSpent / totalQuestions);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl">
              <Trophy className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Test Completed!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {getPerformanceText(score)}
          </p>
        </div>

        {/* Score Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <div className="flex justify-center mb-3">
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                score >= 80 ? 'bg-accent-100 dark:bg-accent-900' :
                score >= 60 ? 'bg-warning-100 dark:bg-warning-900' :
                'bg-error-100 dark:bg-error-900'
              }`}>
                <TrendingUp className={`w-6 h-6 ${
                  score >= 80 ? 'text-accent-600 dark:text-accent-400' :
                  score >= 60 ? 'text-warning-600 dark:text-warning-400' :
                  'text-error-600 dark:text-error-400'
                }`} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {score}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Overall Score</div>
          </Card>

          <Card className="text-center">
            <div className="flex justify-center mb-3">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl">
                <Target className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {correctAnswers}/{totalQuestions}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Correct Answers</div>
          </Card>

          <Card className="text-center">
            <div className="flex justify-center mb-3">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-xl">
                <Clock className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {formatTime(timeSpent)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Time Spent</div>
          </Card>

          <Card className="text-center">
            <div className="flex justify-center mb-3">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-xl">
                <Target className="w-6 h-6 text-accent-600 dark:text-accent-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {accuracy}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Accuracy</div>
          </Card>
        </div>

        {/* Performance Analysis */}
        <Card className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Performance Analysis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Score Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Correct Answers</span>
                  <Badge variant={getScoreColor(accuracy)}>
                    {correctAnswers}/{totalQuestions}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Accuracy Rate</span>
                  <Badge variant={getScoreColor(accuracy)}>
                    {accuracy}%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Time per Question</span>
                  <Badge variant="secondary">
                    {avgTimePerQuestion}s avg
                  </Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Recommendations</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {score >= 80 ? (
                  <>
                    <p>• Excellent performance! Keep up the great work!</p>
                    <p>• Try more challenging difficulty levels</p>
                    <p>• Focus on speed to improve timing</p>
                  </>
                ) : score >= 60 ? (
                  <>
                    <p>• Good foundation! Practice more to improve</p>
                    <p>• Review incorrect answers carefully</p>
                    <p>• Focus on weak topic areas</p>
                  </>
                ) : (
                  <>
                    <p>• Start with basic level questions</p>
                    <p>• Review fundamental concepts</p>
                    <p>• Practice regularly to build confidence</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Question Review */}
        <Card className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Question Review
          </h2>
          
          <div className="space-y-4">
            {questions.slice(0, 5).map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.correct;
              
              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 ${
                    isCorrect
                      ? 'border-accent-200 dark:border-accent-800 bg-accent-50 dark:bg-accent-900/20'
                      : userAnswer !== undefined
                      ? 'border-error-200 dark:border-error-800 bg-error-50 dark:bg-error-900/20'
                      : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Question {index + 1}
                    </span>
                    <Badge
                      variant={
                        isCorrect ? 'success' : 
                        userAnswer !== undefined ? 'error' : 'secondary'
                      }
                      size="sm"
                    >
                      {isCorrect ? 'Correct' : userAnswer !== undefined ? 'Incorrect' : 'Skipped'}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {question.question}
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    <span>Your answer: </span>
                    {userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'}
                    {!isCorrect && (
                      <>
                        <br />
                        <span>Correct answer: {question.options[question.correct]}</span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {questions.length > 5 && (
            <div className="mt-4 text-center">
              <Button variant="outline" size="sm">
                View All Questions
              </Button>
            </div>
          )}
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate('/generate')}
            icon={RotateCcw}
            size="lg"
            className="w-full sm:w-auto"
          >
            Take Another Test
          </Button>
          <Button
            onClick={() => navigate('/practice')}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            Practice More
          </Button>
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            icon={Home}
            size="lg"
            className="w-full sm:w-auto"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestResults;