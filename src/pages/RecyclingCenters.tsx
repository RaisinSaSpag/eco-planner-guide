import React, { useState } from 'react';
import { MapPin, Phone, Clock, Filter, Navigation } from 'lucide-react';
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

interface RecyclingCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  acceptedItems: string[];
  distance: number;
  rating: number;
  specialties: string[];
}

const mockCenters: RecyclingCenter[] = [
  {
    id: '1',
    name: 'GreenTech Electronics Recycling',
    address: '123 Eco Street, Green Valley, CA 90210',
    phone: '(555) 123-4567',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
    acceptedItems: ['Computers', 'Mobile Devices', 'Appliances', 'Components'],
    distance: 2.3,
    rating: 4.8,
    specialties: ['Data Destruction', 'Bulk Collection']
  },
  {
    id: '2',
    name: 'EcoWaste Solutions',
    address: '456 Recycle Road, Sustainability City, CA 90211',
    phone: '(555) 234-5678',
    hours: 'Mon-Sat: 7AM-7PM, Sun: 10AM-5PM',
    acceptedItems: ['Batteries', 'Mobile Devices', 'Audio/Video', 'Photography'],
    distance: 4.1,
    rating: 4.6,
    specialties: ['Hazardous Materials', 'Small Electronics']
  },
  {
    id: '3',
    name: 'Metro Electronics Recovery',
    address: '789 Green Avenue, Eco Heights, CA 90212',
    phone: '(555) 345-6789',
    hours: 'Mon-Fri: 9AM-5PM',
    acceptedItems: ['Computers', 'Appliances', 'Components'],
    distance: 6.7,
    rating: 4.4,
    specialties: ['Large Appliances', 'Corporate Services']
  },
  {
    id: '4',
    name: 'Clean Planet Recycling',
    address: '321 Earth Way, Greenfield, CA 90213',
    phone: '(555) 456-7890',
    hours: 'Tue-Sat: 8AM-6PM',
    acceptedItems: ['Mobile Devices', 'Components', 'Audio/Video'],
    distance: 8.2,
    rating: 4.7,
    specialties: ['Certified Data Wiping', 'Drop-off Service']
  },
  {
    id: '5',
    name: 'TechRecycle Pro',
    address: '654 Innovation Blvd, Tech Valley, CA 90214',
    phone: '(555) 567-8901',
    hours: 'Mon-Sun: 24/7 Drop-off',
    acceptedItems: ['Computers', 'Mobile Devices', 'Photography', 'Components'],
    distance: 12.5,
    rating: 4.9,
    specialties: ['24/7 Access', 'Premium Service']
  }
];

const RecyclingCenters = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [itemFilter, setItemFilter] = useState('all');
  const [sortBy, setSortBy] = useState('distance');

  const filteredCenters = mockCenters
    .filter(center => {
      if (itemFilter === 'all') return true;
      return center.acceptedItems.includes(itemFilter);
    })
    .sort((a, b) => {
      if (sortBy === 'distance') return a.distance - b.distance;
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Recycling Centers Directory</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find certified e-waste recycling centers near you with our comprehensive directory
          </p>
        </div>

        {/* Map Placeholder */}
        <Card className="mb-8 bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardContent className="p-8">
            <div className="bg-muted/50 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Map integration would show recycling centers with location pins
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  🗺️ Google Maps / OpenStreetMap integration coming soon
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filter Centers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Navigation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Enter your location (city, zip code, or address)"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={itemFilter} onValueChange={setItemFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Item Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Items</SelectItem>
                  <SelectItem value="Computers">Computers</SelectItem>
                  <SelectItem value="Mobile Devices">Mobile Devices</SelectItem>
                  <SelectItem value="Appliances">Appliances</SelectItem>
                  <SelectItem value="Components">Components</SelectItem>
                  <SelectItem value="Audio/Video">Audio/Video</SelectItem>
                  <SelectItem value="Photography">Photography</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Found {filteredCenters.length} recycling centers
          </p>
        </div>

        {/* Centers List */}
        <div className="space-y-6">
          {filteredCenters.map((center) => (
            <Card key={center.id} className="hover:shadow-eco transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{center.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      {center.address}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{center.distance} miles away</div>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{center.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contact
                    </h4>
                    <p className="text-sm text-muted-foreground">{center.phone}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{center.hours}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Accepted Items</h4>
                    <div className="flex flex-wrap gap-1">
                      {center.acceptedItems.map((item, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {center.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-4">
                  <Button className="flex-1">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Center
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecyclingCenters;