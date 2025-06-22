import React from 'react';
import { Github, Heart, Users, Lightbulb, Target, Code } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button-2';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Focused Learning',
      description: 'Practice specific topics with targeted questions to improve weak areas.',
    },
    {
      icon: Users,
      title: 'For Everyone',
      description: 'Free and accessible to all students preparing for aptitude tests.',
    },
    {
      icon: Code,
      title: 'Open Source',
      description: 'Transparent development with community contributions welcome.',
    },
    {
      icon: Lightbulb,
      title: 'Smart Practice',
      description: 'Adaptive difficulty levels from basics to placement-ready questions.',
    },
  ];

  const contributors = [
    {
      name: 'Development Team',
      role: 'Core Development',
      description: 'Building the platform architecture and user experience',
    },
    {
      name: 'Content Team',
      role: 'Question Curation',
      description: 'Selecting and organizing high-quality practice questions',
    },
    {
      name: 'Community',
      role: 'Feedback & Testing',
      description: 'Helping improve the platform through usage and suggestions',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl">
              <Heart className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About AptiPrep
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            An open-source platform dedicated to making aptitude test preparation 
            accessible, effective, and completely free for everyone.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              We believe that quality education and test preparation resources should be 
              accessible to everyone, regardless of their economic background. AptiPrep is 
              our contribution to democratizing aptitude test preparation by providing a 
              comprehensive, free, and open-source platform.
            </p>
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
              <p className="text-primary-800 dark:text-primary-200 font-medium">
                "Empowering students worldwide with free, high-quality aptitude test preparation tools."
              </p>
            </div>
          </div>
        </Card>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Why Choose AptiPrep?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} hover className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl mr-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Source */}
        <Card className="mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl">
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Open Source & Community Driven
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              AptiPrep is completely open source, which means the code is freely available 
              for anyone to view, contribute to, and improve. We believe in transparency 
              and community collaboration to create the best possible learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://github.com/aptiprep/aptiprep', '_blank')}
                icon={Github}
                size="lg"
                className="w-full sm:w-auto"
              >
                View on GitHub
              </Button>
              <Button
                onClick={() => window.open('https://github.com/aptiprep/aptiprep/issues', '_blank')}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Report Issues
              </Button>
            </div>
          </div>
        </Card>

        {/* Contributors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Contributors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contributors.map((contributor, index) => (
              <Card key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-xl">
                    <Users className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {contributor.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {contributor.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {contributor.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Contribute */}
        <Card className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            How You Can Contribute
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                For Developers
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Fork the repository and submit pull requests</li>
                <li>• Report bugs and suggest new features</li>
                <li>• Improve documentation and code quality</li>
                <li>• Help with testing and code reviews</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                For Everyone
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Share feedback and suggestions</li>
                <li>• Contribute high-quality practice questions</li>
                <li>• Help with translations and localization</li>
                <li>• Spread the word to help more students</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Contact & Support */}
        <Card>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get Involved
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our community of learners and contributors. Whether you're a student, 
              educator, or developer, there's a place for you in the AptiPrep community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://github.com/aptiprep/aptiprep/discussions', '_blank')}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Join Discussions
              </Button>
              <Button
                onClick={() => window.open('https://github.com/aptiprep/aptiprep/wiki', '_blank')}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Documentation
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;