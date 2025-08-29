import React, { useState } from 'react';
import { Search, Recycle, MapPin, Calendar, BookOpen, Smartphone, Monitor, Zap, Cpu, Headphones, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { icon: Smartphone, name: 'Mobile Devices', count: 45, color: 'text-primary' },
    { icon: Monitor, name: 'Computers', count: 38, color: 'text-secondary' },
    { icon: Zap, name: 'Appliances', count: 52, color: 'text-primary-light' },
    { icon: Cpu, name: 'Components', count: 29, color: 'text-secondary-light' },
    { icon: Headphones, name: 'Audio/Video', count: 34, color: 'text-primary' },
    { icon: Camera, name: 'Photography', count: 21, color: 'text-secondary' }
  ];

  const featuredItems = [
    {
      name: 'Smartphone',
      category: 'Mobile Devices',
      impact: 'High',
      disposal: 'Recycle at certified centers',
      reusable: true
    },
    {
      name: 'Laptop Computer',
      category: 'Computers',
      impact: 'Very High',
      disposal: 'Data wipe + recycling center',
      reusable: true
    },
    {
      name: 'Lithium Battery',
      category: 'Components',
      impact: 'Critical',
      disposal: 'Special hazardous waste collection',
      reusable: false
    }
  ];

  const stats = [
    { label: 'Items in Database', value: '500+' },
    { label: 'Recycling Centers', value: '1,200+' },
    { label: 'Users Helped', value: '25K+' },
    { label: 'Waste Diverted', value: '50 Tons' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Electronic waste recycling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Manage Your <span className="text-yellow-300">E-Waste</span> Responsibly
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Your comprehensive guide to electronic waste disposal, recycling centers, and sustainable practices
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for electronics (e.g., iPhone, laptop, battery...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 shadow-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/encyclopedia">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Recycle className="mr-2 h-5 w-5" />
                  Browse Encyclopedia
                </Button>
              </Link>
              <Link to="/centers">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find Centers
                </Button>
              </Link>
              <Link to="/planner">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Calendar className="mr-2 h-5 w-5" />
                  Plan Disposal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find disposal information for all types of electronic devices and components
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Link key={index} to="/encyclopedia">
                <Card className="group hover:shadow-eco transition-all duration-300 cursor-pointer bg-gradient-card border-0 h-full">
                  <CardHeader className="text-center pb-2">
                    <category.icon className={`h-12 w-12 mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base">
                      {category.count} items available
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Popular E-Waste Items</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick access to the most commonly disposed electronic items
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredItems.map((item, index) => (
              <Link key={index} to="/encyclopedia">
                <Card className="hover:shadow-card transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.impact === 'Critical' ? 'bg-destructive/20 text-destructive' :
                        item.impact === 'Very High' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.impact} Impact
                      </div>
                    </div>
                    <CardDescription>{item.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="font-medium text-sm mb-1">Disposal Method:</div>
                        <div className="text-sm text-muted-foreground">{item.disposal}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Recycle className="h-4 w-4 text-primary" />
                          <span className="text-sm">Recyclable</span>
                        </div>
                        {item.reusable && (
                          <div className="flex items-center gap-1">
                            <div className="h-4 w-4 text-secondary">🔄</div>
                            <span className="text-sm">Reusable</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Take Action Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your sustainable e-waste management journey with our tools and resources
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Learn & Discover</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90">
                    Explore our comprehensive encyclopedia of e-waste disposal methods
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Find Centers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90">
                    Locate certified recycling centers near you with our directory
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader className="text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2" />
                  <CardTitle>Plan & Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90">
                    Organize your disposal activities with our planning tools
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Recycle className="h-8 w-8 text-primary-light" />
                <span className="text-xl font-bold">EcoWaste Guide</span>
              </div>
              <p className="text-sm opacity-75">
                Making electronic waste management accessible and sustainable for everyone.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm opacity-75">
                <li>Encyclopedia</li>
                <li>Recycling Centers</li>
                <li>Educational Guides</li>
                <li>Disposal Calculator</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-sm opacity-75">
                <li>To-Do Planner</li>
                <li>Calendar</li>
                <li>Center Finder</li>
                <li>Item Search</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm opacity-75">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Community</li>
                <li>Report Issues</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-75">
              © 2024 EcoWaste Guide. Making the world greener, one device at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;