import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight, Flag, CheckCircle } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button-2';
import Badge from '../components/UI/Badge';



const Test = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds
  const [testConfig, setTestConfig] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock questions for demo
  const questions = [
    {
      id: 1,
      topic: 'Time & Work',
      difficulty: 'medium',
      question: "A can complete a work in 12 days, and B can complete the same work in 15 days. How many days will they take to complete the work together?",
      options: ["6 days", "6.7 days", "7 days", "8 days"],
      correct: 1,
    },
    {
      id: 2,
      topic: 'Percentage',
      difficulty: 'easy',
      question: "What is 25% of 80?",
      options: ["15", "20", "25", "30"],
      correct: 1,
    },
    {
      id: 3,
      topic: 'Ratio & Proportion',
      difficulty: 'hard',
      question: "If the ratio of A:B is 3:4 and B:C is 2:5, what is A:B:C?",
      options: ["3:4:5", "6:8:20", "3:4:10", "6:8:10"],
      correct: 2,
    },
    // Add more mock questions as needed
  ];

  useEffect(() => {
    // Load test configuration
    const configStr = localStorage.getItem('testConfig');
    if (configStr) {
      const config = JSON.parse(configStr);
      setTestConfig(config);
      setTimeRemaining(config.timeLimit * 60);
    } else {
      // Default configuration if none found
      setTestConfig({
        topics: ['time-work'],
        difficulties: ['medium'],
        questionCount: 20,
        shuffleQuestions: true,
        timeLimit: 30,
      });
    }
  }, []);

  useEffect(() => {
    if (timeRemaining > 0 && !isSubmitted) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !isSubmitted) {
      handleSubmitTest();
    }
  }, [timeRemaining, isSubmitted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmitTest = () => {
    setIsSubmitted(true);
    
    // Calculate results
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / questions.length) * 100);
    
    // Navigate to results page with data
    navigate('/test-results', {
      state: {
        score,
        correctAnswers,
        totalQuestions: questions.length,
        timeSpent: testConfig ? (testConfig.timeLimit * 60) - timeRemaining : 0,
        answers: selectedAnswers,
        questions
      }
    });
  };

  const getAnsweredCount = () => {
    return Object.keys(selectedAnswers).length;
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const hasAnsweredCurrent = Object.prototype.hasOwnProperty.call(selectedAnswers, currentQuestion);

  if (!testConfig) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Test Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Badge variant="primary">
                Question {currentQuestion + 1} of {questions.length}
              </Badge>
              <Badge variant="secondary">
                {questions[currentQuestion].topic}
              </Badge>
              <Badge 
                variant={
                  questions[currentQuestion].difficulty === 'easy' ? 'success' :
                  questions[currentQuestion].difficulty === 'medium' ? 'warning' : 'error'
                }
              >
                {questions[currentQuestion].difficulty}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle className="w-4 h-4 mr-1" />
                {getAnsweredCount()}/{questions.length} answered
              </div>
              <div className={`flex items-center font-mono text-lg font-semibold ${
                timeRemaining < 300 ? 'text-error-600 dark:text-error-400' : 'text-gray-900 dark:text-white'
              }`}>
                <Clock className="w-5 h-5 mr-2" />
                {formatTime(timeRemaining)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Question Card */}
        <Card className="mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Question {currentQuestion + 1}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {questions[currentQuestion].question}
            </p>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-primary-500 bg-primary-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 font-medium mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
              icon={ChevronLeft}
            >
              Previous
            </Button>

            <div className="flex items-center space-x-3">
              {!hasAnsweredCurrent && (
                <Button
                  onClick={() => setCurrentQuestion(Math.min(currentQuestion + 1, questions.length - 1))}
                  variant="ghost"
                  icon={Flag}
                >
                  Skip
                </Button>
              )}
              
              {isLastQuestion ? (
                <Button
                  onClick={handleSubmitTest}
                  variant="primary"
                  icon={CheckCircle}
                  className="bg-accent-600 hover:bg-accent-700"
                >
                  Submit Test
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  variant="primary"
                  icon={ChevronRight}
                  iconPosition="right"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Question Navigator */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Question Navigator
          </h3>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
                  index === currentQuestion
                    ? 'bg-primary-600 text-white'
                    : Object.prototype.hasOwnProperty.call(selectedAnswers, index)
                    ? 'bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 border border-accent-300 dark:border-accent-700'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Test;