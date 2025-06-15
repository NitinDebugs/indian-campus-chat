import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MapPin, Users, Star, User, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const featuredColleges = [
    {
      id: 'iit-bombay',
      name: "IIT Bombay",
      location: "Mumbai, Maharashtra",
      students: "11,000+",
      rating: 4.9,
      image: "/lovable-uploads/b2f92153-bf4b-4201-988a-6979676859cf.png",
      activeRooms: 12,
      description: "Premier technical education institute"
    },
    {
      id: 'vit',
      name: "VIT Vellore",
      location: "Vellore, Tamil Nadu",
      students: "55,000+",
      rating: 4.8,
      image: "/lovable-uploads/a1ae13d9-6a11-43ec-aa41-debcf600d5f7.png",
      activeRooms: 18,
      description: "Leading private technical university"
    },
    {
      id: 'srm',
      name: "SRM Institute",
      location: "Chennai, Tamil Nadu",
      students: "50,000+",
      rating: 4.5,
      image: "/lovable-uploads/7cb1ad99-ba18-4722-8e57-3e580242d805.png",
      activeRooms: 15,
      description: "Multi-disciplinary university"
    },
    {
      id: 'du',
      name: "Delhi University",
      location: "New Delhi",
      students: "132,000+",
      rating: 4.7,
      image: "/lovable-uploads/3a0a4560-d02e-465b-bc00-c65650c46fa1.png",
      activeRooms: 28,
      description: "One of India's largest universities"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    if (isSignUp && (!formData.name || !selectedCollege)) {
      toast({
        title: "Error", 
        description: "Please fill in all fields and select your college",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: isSignUp ? "Account Created!" : "Welcome Back!",
        description: isSignUp 
          ? `Successfully created account for ${formData.name}` 
          : "You have been signed in successfully",
      });

      console.log('Form submitted with data:', {
        ...formData,
        college: selectedCollege,
        isSignUp
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCollegeSelect = (collegeId: string) => {
    setSelectedCollege(collegeId);
    const college = featuredColleges.find(c => c.id === collegeId);
    if (college) {
      toast({
        title: "College Selected",
        description: `Selected ${college.name}`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-comments text-white text-sm sm:text-lg"></i>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                ChatCampus
              </span>
            </div>
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 font-medium text-sm sm:text-base">
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      <div className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Login/Signup Form */}
            <div className="flex justify-center order-2 xl:order-1">
              <Card className="w-full max-w-md shadow-2xl border-0 bg-white dark:bg-gray-800">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                    {isSignUp ? 'Join ChatCampus' : 'Welcome Back'}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {isSignUp 
                      ? 'Connect with your college community' 
                      : 'Sign in to join your college chat rooms'
                    }
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {isSignUp && (
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name</Label>
                        <Input 
                          id="name"
                          name="name"
                          type="text" 
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="h-10 sm:h-12 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="Enter your college email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-10 sm:h-12 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
                      <Input 
                        id="password"
                        name="password"
                        type="password" 
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="h-10 sm:h-12 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white"
                      />
                    </div>

                    {isSignUp && (
                      <div className="space-y-2">
                        <Label htmlFor="college" className="text-gray-700 dark:text-gray-300">Select Your College</Label>
                        <select 
                          id="college"
                          value={selectedCollege}
                          onChange={(e) => handleCollegeSelect(e.target.value)}
                          className="w-full h-10 sm:h-12 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 dark:text-white text-sm sm:text-base"
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
                      disabled={isLoading}
                      className="w-full h-10 sm:h-12 bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base disabled:opacity-50"
                    >
                      {isLoading ? (
                        "Processing..."
                      ) : isSignUp ? (
                        <>
                          <User className="mr-2" size={18} />
                          Create Account
                        </>
                      ) : (
                        <>
                          <LogIn className="mr-2" size={18} />
                          Sign In
                        </>
                      )}
                    </Button>
                  </form>
                  
                  <div className="mt-4 sm:mt-6 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                      <button
                        type="button"
                        onClick={() => {
                          setIsSignUp(!isSignUp);
                          setFormData({ name: '', email: '', password: '' });
                          setSelectedCollege('');
                        }}
                        className="ml-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold"
                      >
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                      </button>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* College Details Sidebar */}
            <div className="space-y-6 order-1 xl:order-2">
              <div className="text-center xl:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Featured <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Colleges</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                  Join thousands of students already chatting on ChatCampus
                </p>
              </div>

              <div className="grid gap-4 sm:gap-6">
                {featuredColleges.map((college) => (
                  <Card key={college.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
                    <div className="flex">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                        <img 
                          src={college.image} 
                          alt={college.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-3 sm:p-4 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-gray-800 dark:text-white text-sm sm:text-base truncate pr-2">{college.name}</h3>
                          <div className="flex items-center gap-1 text-xs sm:text-sm flex-shrink-0">
                            <Star size={12} className="text-yellow-500 fill-current" />
                            <span className="text-gray-600 dark:text-gray-300">{college.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            <span className="truncate">{college.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={12} />
                            <span>{college.students}</span>
                          </div>
                        </div>
                        
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{college.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">
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
                <CardContent className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Can't find your college?</h3>
                  <p className="mb-4 text-orange-100 text-sm sm:text-base">We're adding new institutions every week!</p>
                  <Button 
                    onClick={() => {
                      toast({
                        title: "Request Submitted",
                        description: "We'll add your college soon! You'll be notified when it's available.",
                      });
                    }}
                    variant="secondary" 
                    className="bg-white text-gray-800 hover:bg-gray-100 text-sm sm:text-base px-4 sm:px-6 py-2"
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
