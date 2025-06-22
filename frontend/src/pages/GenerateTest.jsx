import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Play, Clock, Hash, Shuffle, CheckSquare } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button-2';
import Badge from '../components/UI/Badge';

function GenerateTest() {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState(['time-work']);
  const [selectedDifficulties, setSelectedDifficulties] = useState(['medium']);
  const [questionCount, setQuestionCount] = useState(20);
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [timeLimit, setTimeLimit] = useState(30);

  const topics = [
    { id: 'time-work', name: 'Time & Work', available: 45 },
    { id: 'ratio', name: 'Ratio & Proportion', available: 38 },
    { id: 'percentage', name: 'Percentage', available: 42 },
    { id: 'profit-loss', name: 'Profit & Loss', available: 35 },
    { id: 'simple-interest', name: 'Simple Interest', available: 28 },
    { id: 'compound-interest', name: 'Compound Interest', available: 32 },
    { id: 'averages', name: 'Averages', available: 25 },
    { id: 'mixtures', name: 'Mixtures & Alligations', available: 30 },
  ];

  const difficulties = [
    { id: 'easy', name: 'Easy', description: 'Basic level questions', color: 'success' },
    { id: 'medium', name: 'Medium', description: 'Moderate complexity', color: 'warning' },
    { id: 'hard', name: 'Hard', description: 'Advanced level', color: 'error' },
  ];

  const handleTopicToggle = (topicId) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleDifficultyToggle = (difficultyId) => {
    setSelectedDifficulties(prev => 
      prev.includes(difficultyId) 
        ? prev.filter(id => id !== difficultyId)
        : [...prev, difficultyId]
    );
  };

  const handleStartTest = () => {
    const testConfig = {
      topics: selectedTopics,
      difficulties: selectedDifficulties,
      questionCount,
      shuffleQuestions,
      timeLimit,
    };
    localStorage.setItem('testConfig', JSON.stringify(testConfig));
    navigate('/test');
  };

  const getTotalAvailableQuestions = () => {
    return topics
      .filter(topic => selectedTopics.includes(topic.id))
      .reduce((total, topic) => total + topic.available, 0);
  };

  const isValidConfiguration = () => {
    return selectedTopics.length > 0 && 
           selectedDifficulties.length > 0 && 
           questionCount > 0 &&
           questionCount <= getTotalAvailableQuestions();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Settings className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Generate Custom Test</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Create a personalized test by selecting topics, difficulty levels, and other preferences
          </p>
        </div>

        <div className="space-y-8">
          {/* Topic Selection */}
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Select Topics
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Choose one or more topics to include in your test
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => handleTopicToggle(topic.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                    selectedTopics.includes(topic.id)
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {topic.name}
                    </span>
                    {selectedTopics.includes(topic.id) && (
                      <CheckSquare className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    )}
                  </div>
                  <Badge size="sm" variant="secondary">
                    {topic.available} questions
                  </Badge>
                </button>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Selected: {selectedTopics.length} topic{selectedTopics.length !== 1 ? 's' : ''} 
              ({getTotalAvailableQuestions()} questions available)
            </div>
          </Card>

          {/* Difficulty Selection */}
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Select Difficulty Levels
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Choose the difficulty levels to include in your test
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty.id}
                  onClick={() => handleDifficultyToggle(difficulty.id)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                    selectedDifficulties.includes(difficulty.id)
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {difficulty.name}
                    </span>
                    {selectedDifficulties.includes(difficulty.id) && (
                      <CheckSquare className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {difficulty.description}
                  </p>
                </button>
              ))}
            </div>
          </Card>

          {/* Test Configuration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Question Count */}
            <Card>
              <div className="flex items-center mb-4">
                <Hash className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Number of Questions
                </h3>
              </div>
              <div className="space-y-4">
                <input
                  type="range"
                  min="5"
                  max={Math.min(50, getTotalAvailableQuestions())}
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>5</span>
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    {questionCount} questions
                  </span>
                  <span>{Math.min(50, getTotalAvailableQuestions())}</span>
                </div>
              </div>
            </Card>

            {/* Time Limit */}
            <Card>
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Time Limit
                </h3>
              </div>
              <div className="space-y-4">
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>10 min</span>
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    {timeLimit} minutes
                  </span>
                  <span>120 min</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Options */}
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Additional Options
            </h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                  <Shuffle className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      Shuffle Questions
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Randomize the order of questions in the test
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={shuffleQuestions}
                    onChange={(e) => setShuffleQuestions(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${
                    shuffleQuestions ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      shuffleQuestions ? 'translate-x-5' : 'translate-x-0'
                    }`} />
                  </div>
                </div>
              </label>
            </div>
          </Card>

          {/* Test Summary & Start Button */}
          <Card>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Test Summary
                </h3>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <p><strong>Topics:</strong> {selectedTopics.length} selected</p>
                  <p><strong>Difficulty:</strong> {selectedDifficulties.join(', ')}</p>
                  <p><strong>Questions:</strong> {questionCount}</p>
                  <p><strong>Time Limit:</strong> {timeLimit} minutes</p>
                  <p><strong>Shuffle:</strong> {shuffleQuestions ? 'Yes' : 'No'}</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button
                  onClick={handleStartTest}
                  disabled={!isValidConfiguration()}
                  icon={Play}
                  size="lg"
                  className="w-full lg:w-auto"
                >
                  Start Test
                </Button>
                {!isValidConfiguration() && (
                  <p className="text-sm text-error-600 dark:text-error-400 mt-2">
                    Please select at least one topic and difficulty level
                  </p>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default GenerateTest;