import React, { useState } from 'react';
import { Clock, Calculator, Percent, TrendingUp,CarFront,Train,Users2,Pipette,LucideNetwork,Handshake, Users, Calendar, BookOpen } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button-2';
import Badge from '../components/UI/Badge';

const Practice = () => {
  const [selectedTopic, setSelectedTopic] = useState('time-work');
  const [selectedLevel, setSelectedLevel] = useState('basics');
  const [showAnswers, setShowAnswers] = useState(false);

  const topics = [
    { id: 'time-work', name: 'Time & Work', icon: Clock, count: 45 },
    { id: 'ratio-proportion', name: 'Ratio & Proportion', icon: Calculator, count: 38 },
    { id: 'percentage', name: 'Percentage', icon: Percent, count: 42 },
    { id: 'profit-loss', name: 'Profit & Loss', icon: TrendingUp, count: 35 },
    { id: 'simple-compound-interest', name: 'Simple Interest', icon: Calendar, count: 28 },
    { id: 'average', name: 'Averages', icon: TrendingUp, count: 25 },
    { id: 'alligation-and-mixtures', name: 'Mixtures & Alligations', icon: Pipette, count: 30 },
    { id: 'boat-streams', name: 'Boat & Streams', icon: Calculator, count: 30 },
    { id: 'calendar', name: 'Calendar', icon: Calendar, count: 30 },
    { id: 'partnership', name: 'Partnership', icon: Handshake, count: 30 },
    { id: 'pipe-cisterns', name: 'Pipe & Cisterns', icon: LucideNetwork, count: 30 },
    { id: 'problem-on-ages', name: 'Ages', icon: Users2, count: 30 },
    { id: 'problem-on-train', name: 'Trains', icon: Train, count: 30 },
    { id: 'time-distance', name: 'Time & Distance', icon: CarFront, count: 30 },
    { id: 'clock', name: 'Clocks', icon: Clock, count: 30 },
  ];

  const levels = [
    { id: 'basics', name: 'Basics', description: 'Fundamental concepts and formulas' },
    { id: 'basic-questions', name: 'Basic Questions', description: 'Simple problem-solving' },
    { id: 'difficult', name: 'Difficult', description: 'Complex multi-step problems' },
    { id: 'placement-ready', name: 'Placement Ready', description: 'Company-level questions' },
  ];

  const dummyQuestions = [
    {
      id: 1,
      question: "A can complete a work in 12 days, and B can complete the same work in 15 days. How many days will they take to complete the work together?",
      options: ["6 days", "6.7 days", "7 days", "8 days"],
      correct: 1,
      explanation: "Combined rate = 1/12 + 1/15 = 9/60 = 3/20. So they complete the work in 20/3 = 6.67 days."
    },
    {
      id: 2,
      question: "If A is 20% more efficient than B, and B can complete a work in 30 days, how many days will A take?",
      options: ["24 days", "25 days", "26 days", "28 days"],
      correct: 1,
      explanation: "If B takes 30 days, A being 20% more efficient will take 30/1.2 = 25 days."
    },
    {
      id: 3,
      question: "15 men can complete a work in 20 days. How many men are needed to complete the same work in 12 days?",
      options: ["20 men", "22 men", "25 men", "28 men"],
      correct: 2,
      explanation: "Total work = 15 × 20 = 300 man-days. To complete in 12 days: 300/12 = 25 men needed."
    },
  ];

  const selectedTopicData = topics.find(t => t.id === selectedTopic);
  const selectedLevelData = levels.find(l => l.id === selectedLevel);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Practice Questions</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Choose a topic and difficulty level to start practicing
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <Card className="sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Topics</h2>
              <div className="space-y-2">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                      selectedTopic === topic.id
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <topic.icon className="w-5 h-5 mr-3" />
                      <span className="text-sm font-medium">{topic.name}</span>
                    </div>
                    <Badge size="sm" variant={selectedTopic === topic.id ? 'primary' : 'secondary'}>
                      {topic.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Topic Header */}
            <Card className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {selectedTopicData && <selectedTopicData.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />}
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedTopicData?.name}
                  </h2>
                </div>
                <Badge variant="primary">
                  {selectedTopicData?.count} Questions
                </Badge>
              </div>

              {/* Level Tabs */}
              <div className="flex flex-wrap gap-2">
                {selectedTopic=="average"?(
                  <>
                   <button
                    key={'1'}
                    onClick={() => setSelectedLevel('basics')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedLevel === 'basics'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Basics
                  </button>
                   <button
                    key={'2'}
                    onClick={() => setSelectedLevel('basic+difficult')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedLevel === 'baisc+difficult'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Basic & difficult
                  </button>
                  </>
                  
                ):selectedTopic==='problem-on-ages'?
              levels
                    .filter((level) => level.id !== 'basics')
                    .map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setSelectedLevel(level.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedLevel === level.id
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {level.name}
                      </button>
                    
                ))
                :(
                  levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedLevel === level.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {level.name}
                  </button>
                ))
                )}
              </div>

              {selectedLevelData && (
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  {selectedLevelData.description}
                </p>
              )}
            </Card>

            {/* Controls */}
            <Card className="mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <BookOpen className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Showing {dummyQuestions.length} questions
                  </span>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showAnswers}
                    onChange={(e) => setShowAnswers(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`relative w-11 h-6 rounded-full transition-colors ${
                    showAnswers ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      showAnswers ? 'translate-x-5' : 'translate-x-0'
                    }`} />
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Show Answers
                  </span>
                </label>
              </div>
            </Card>

            {/* Questions */}
            <div className="space-y-6">
              {dummyQuestions.map((question, index) => (
                <Card key={question.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Question {question.id}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {question.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`p-3 text-left rounded-lg border-2 transition-all duration-200 ${
                          showAnswers && optionIndex === question.correct
                            ? 'border-accent-500 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300'
                            : 'border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <span className="font-medium text-gray-500 dark:text-gray-400 mr-3">
                          {String.fromCharCode(65 + optionIndex)}.
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{option}</span>
                      </button>
                    ))}
                  </div>

                  {showAnswers && (
                    <div className="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-4 border border-accent-200 dark:border-accent-800">
                      <h4 className="font-semibold text-accent-800 dark:text-accent-200 mb-2">
                        Explanation:
                      </h4>
                      <p className="text-accent-700 dark:text-accent-300 text-sm leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                Load More Questions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;