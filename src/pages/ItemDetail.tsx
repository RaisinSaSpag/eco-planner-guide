import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Recycle, AlertTriangle, Clock, Lightbulb, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { wasteItems } from '@/data/wasteItems';

const ItemDetail = () => {
  const { id } = useParams();
  const item = wasteItems.find(item => item.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Item Not Found</h1>
          <p className="text-muted-foreground mb-4">The item you're looking for doesn't exist.</p>
          <Link to="/encyclopedia">
            <Button>Back to Encyclopedia</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'destructive';
      case 'Very High': return 'destructive';
      case 'High': return 'secondary';
      case 'Medium': return 'secondary';
      case 'Low': return 'default';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/encyclopedia">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Encyclopedia
          </Button>
        </Link>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{item.name}</h1>
                  <p className="text-xl text-muted-foreground">{item.category}</p>
                </div>
                <Badge 
                  variant={getImpactColor(item.environmentalImpact)}
                  className="flex items-center gap-1 text-base px-3 py-1"
                >
                  <AlertTriangle className="h-4 w-4" />
                  {item.environmentalImpact} Impact
                </Badge>
              </div>
              
              <p className="text-lg text-muted-foreground">{item.description}</p>
            </div>

            {/* Key Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Lifespan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{item.estimatedLifespan}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Safety Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    {item.hazardous ? (
                      <Badge variant="destructive">Hazardous Material</Badge>
                    ) : (
                      <Badge variant="secondary">Non-Hazardous</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Disposal Methods */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Recycle className="h-5 w-5 text-primary" />
                  Disposal Methods
                </CardTitle>
                <CardDescription>
                  Safe and responsible ways to dispose of this item
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {item.disposalMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="text-sm">{method}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reuse Options */}
            {item.reuseOptions.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-secondary" />
                    Reuse & Repurpose Ideas
                  </CardTitle>
                  <CardDescription>
                    Creative ways to extend this item's life before disposal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.reuseOptions.map((option, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                        <div className="text-secondary">🔄</div>
                        <p className="text-sm">{option}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Components */}
            <Card>
              <CardHeader>
                <CardTitle>Components & Materials</CardTitle>
                <CardDescription>
                  Key components that make up this item
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.components.map((component, index) => (
                    <Badge key={index} variant="outline">
                      {component}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/centers" className="block">
                  <Button className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Find Recycling Centers
                  </Button>
                </Link>
                
                <Link to="/planner" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Disposal
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recycling Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {item.recyclingInfo}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Impact Level:</span>
                    <Badge variant={getImpactColor(item.environmentalImpact)}>
                      {item.environmentalImpact}
                    </Badge>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {item.environmentalImpact === 'Critical' && 
                      "Requires immediate proper disposal to prevent severe environmental damage."
                    }
                    {item.environmentalImpact === 'Very High' && 
                      "High potential for environmental harm if not disposed of properly."
                    }
                    {item.environmentalImpact === 'High' && 
                      "Significant environmental impact requires careful disposal."
                    }
                    {item.environmentalImpact === 'Medium' && 
                      "Moderate environmental impact. Proper disposal recommended."
                    }
                    {item.environmentalImpact === 'Low' && 
                      "Lower environmental risk but still requires responsible disposal."
                    }
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;