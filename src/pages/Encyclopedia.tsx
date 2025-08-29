import React, { useState, useMemo } from 'react';
import { Search, Filter, Recycle, AlertTriangle, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { wasteItems, categories, WasteItem } from '@/data/wasteItems';
import { Link } from 'react-router-dom';

const Encyclopedia = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [impactFilter, setImpactFilter] = useState('all');

  const filteredItems = useMemo(() => {
    return wasteItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      const matchesImpact = impactFilter === 'all' || item.environmentalImpact === impactFilter;
      
      return matchesSearch && matchesCategory && matchesImpact;
    });
  }, [searchQuery, selectedCategory, impactFilter]);

  const getImpactColor = (impact: WasteItem['environmentalImpact']) => {
    switch (impact) {
      case 'Critical': return 'destructive';
      case 'Very High': return 'destructive';
      case 'High': return 'secondary';
      case 'Medium': return 'secondary';
      case 'Low': return 'default';
      default: return 'default';
    }
  };

  const getImpactIcon = (impact: WasteItem['environmentalImpact']) => {
    if (impact === 'Critical' || impact === 'Very High') {
      return <AlertTriangle className="h-4 w-4" />;
    }
    return <CheckCircle className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">E-Waste Encyclopedia</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive database of electronic items with disposal methods and environmental impact information
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search electronics (e.g., iPhone, laptop, battery...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={impactFilter} onValueChange={setImpactFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Impact Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Impacts</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="Very High">Very High</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
            >
              All ({wasteItems.length})
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredItems.length} of {wasteItems.length} items
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover:shadow-eco transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <Badge 
                    variant={getImpactColor(item.environmentalImpact)}
                    className="flex items-center gap-1"
                  >
                    {getImpactIcon(item.environmentalImpact)}
                    {item.environmentalImpact}
                  </Badge>
                </div>
                <CardDescription>{item.category}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Recycle className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Disposal Methods:</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      {item.disposalMethods.slice(0, 2).map((method, index) => (
                        <li key={index} className="list-disc">{method}</li>
                      ))}
                      {item.disposalMethods.length > 2 && (
                        <li className="text-primary">+ {item.disposalMethods.length - 2} more</li>
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.hazardous && (
                      <Badge variant="destructive" className="text-xs">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Hazardous
                      </Badge>
                    )}
                    {item.reuseOptions.length > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        🔄 Reusable
                      </Badge>
                    )}
                  </div>

                  <Link to={`/encyclopedia/${item.id}`}>
                    <Button className="w-full mt-4" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Encyclopedia;