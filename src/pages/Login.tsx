
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MapPin, Users, Star, User, LogIn } from 'lucide-react';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState('');

  const featuredColleges = [
    {
      id: 'iit-bombay',
      name: "IIT Bombay",
      location: "Mumbai, Maharashtra",
      students: "11,000+",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      activeRooms: 12,
      description: "Premier technical education institute"
    },
    {
      id: 'du',
      name: "Delhi University",
      location: "New Delhi",
      students: "132,000+",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      activeRooms: 28,
      description: "One of India's largest universities"
    },
    {
      id: 'vit',
      name: "VIT Vellore",
      location: "Vellore, Tamil Nadu",
      students: "55,000+",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      activeRooms: 18,
      description: "Leading private technical university"
    },
    {
      id: 'jnu',
      name: "JNU",
      location: "New Delhi",
      students: "8,500+",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      activeRooms: 8,
      description: "Prestigious central university"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-lg shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-comments text-white text-lg"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                ChatCampus
              </span>
            </div>
            <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Login/Signup Form */}
            <div className="flex justify-center">
              <Card className="w-full max-w-md shadow-2xl border-0">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                    {isSignUp ? 'Join ChatCampus' : 'Welcome Back'}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {isSignUp 
                      ? 'Connect with your college community' 
                      : 'Sign in to join your college chat rooms'
                    }
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {isSignUp && (
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          type="text" 
                          placeholder="Enter your full name"
                          className="h-12"
                        />
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your college email"
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Enter your password"
                        className="h-12"
                      />
                    </div>

                    {isSignUp && (
                      <div className="space-y-2">
                        <Label htmlFor="college">Select Your College</Label>
                        <select 
                          id="college"
                          value={selectedCollege}
                          onChange={(e) => setSelectedCollege(e.target.value)}
                          className="w-full h-12 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="">Choose your college</option>
                          {featuredColleges.map((college) => (
                            <option key={college.id} value={college.id}>
                              {college.name} - {college.location}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      {isSignUp ? (
                        <>
                          <User className="mr-2" size={20} />
                          Create Account
                        </>
                      ) : (
                        <>
                          <LogIn className="mr-2" size={20} />
                          Sign In
                        </>
                      )}
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-gray-600">
                      {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                      <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="ml-2 text-orange-600 hover:text-orange-700 font-semibold"
                      >
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                      </button>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* College Details Sidebar */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Featured <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Colleges</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Join thousands of students already chatting on ChatCampus
                </p>
              </div>

              <div className="grid gap-6">
                {featuredColleges.map((college) => (
                  <Card key={college.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="flex">
                      <div className="w-24 h-24 flex-shrink-0">
                        <img 
                          src={college.image} 
                          alt={college.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-gray-800">{college.name}</h3>
                          <div className="flex items-center gap-1 text-sm">
                            <Star size={14} className="text-yellow-500 fill-current" />
                            <span className="text-gray-600">{college.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{college.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={14} />
                            <span>{college.students}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-2">{college.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-green-600">
                            {college.activeRooms} active rooms
                          </span>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Can't find your college?</h3>
                  <p className="mb-4 text-orange-100">We're adding new institutions every week!</p>
                  <Button 
                    variant="secondary" 
                    className="bg-white text-gray-800 hover:bg-gray-100"
                  >
                    Request Your College
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
