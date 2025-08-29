export interface WasteItem {
  id: string;
  name: string;
  category: string;
  description: string;
  environmentalImpact: 'Low' | 'Medium' | 'High' | 'Very High' | 'Critical';
  disposalMethods: string[];
  recyclingInfo: string;
  reuseOptions: string[];
  hazardous: boolean;
  components: string[];
  estimatedLifespan: string;
  image?: string;
}

export const wasteItems: WasteItem[] = [
  {
    id: 'smartphone',
    name: 'Smartphone',
    category: 'Mobile Devices',
    description: 'Modern mobile phone with touchscreen, battery, and various sensors',
    environmentalImpact: 'High',
    disposalMethods: [
      'Take to certified e-waste recycling center',
      'Return to manufacturer take-back program',
      'Drop off at retail store collection point'
    ],
    recyclingInfo: 'Contains valuable metals like gold, silver, and rare earth elements. Battery must be removed separately.',
    reuseOptions: [
      'Donate to charity if functional',
      'Sell or trade-in for credit',
      'Repurpose as security camera',
      'Use as dedicated music player'
    ],
    hazardous: true,
    components: ['Lithium battery', 'Circuit board', 'Screen', 'Camera', 'Speakers'],
    estimatedLifespan: '2-4 years'
  },
  {
    id: 'laptop',
    name: 'Laptop Computer',
    category: 'Computers',
    description: 'Portable computer with screen, keyboard, and internal components',
    environmentalImpact: 'Very High',
    disposalMethods: [
      'Professional data destruction + recycling',
      'Manufacturer take-back program',
      'Certified e-waste facility'
    ],
    recyclingInfo: 'Contains precious metals, rare earth elements, and hazardous materials. Hard drive data must be securely wiped.',
    reuseOptions: [
      'Donate to schools or nonprofits',
      'Refurbish and resell',
      'Convert to home server',
      'Parts harvesting for repairs'
    ],
    hazardous: true,
    components: ['Hard drive', 'RAM', 'Processor', 'Battery', 'Screen', 'Motherboard'],
    estimatedLifespan: '3-5 years'
  },
  {
    id: 'battery-lithium',
    name: 'Lithium-ion Battery',
    category: 'Components',
    description: 'Rechargeable battery commonly found in portable electronics',
    environmentalImpact: 'Critical',
    disposalMethods: [
      'Special hazardous waste collection',
      'Battery recycling drop-off points',
      'Retail store battery collection'
    ],
    recyclingInfo: 'Highly toxic if improperly disposed. Contains lithium, cobalt, and other valuable materials.',
    reuseOptions: [],
    hazardous: true,
    components: ['Lithium cells', 'Electrolyte', 'Protective circuit'],
    estimatedLifespan: '2-10 years depending on usage'
  },
  {
    id: 'desktop-monitor',
    name: 'Desktop Monitor',
    category: 'Computers',
    description: 'Computer display screen for desktop systems',
    environmentalImpact: 'High',
    disposalMethods: [
      'E-waste recycling center',
      'Manufacturer collection program',
      'Electronics retailer take-back'
    ],
    recyclingInfo: 'LCD monitors contain mercury in backlights. LED monitors are safer but still require proper recycling.',
    reuseOptions: [
      'Donate to community centers',
      'Second monitor setup',
      'Digital photo frame conversion',
      'Security monitoring display'
    ],
    hazardous: true,
    components: ['LCD/LED panel', 'Backlight', 'Circuit boards', 'Plastic casing'],
    estimatedLifespan: '5-8 years'
  },
  {
    id: 'tablet',
    name: 'Tablet',
    category: 'Mobile Devices',
    description: 'Touchscreen portable computer larger than a smartphone',
    environmentalImpact: 'High',
    disposalMethods: [
      'Manufacturer trade-in program',
      'Certified e-waste recycling',
      'Electronics store collection'
    ],
    recyclingInfo: 'Similar to smartphones but larger battery. Screen glass can be recycled separately.',
    reuseOptions: [
      'Educational donations',
      'Digital picture frame',
      'Kitchen recipe display',
      'Car entertainment system'
    ],
    hazardous: true,
    components: ['Touchscreen', 'Battery', 'Processor', 'Memory', 'Cameras'],
    estimatedLifespan: '3-5 years'
  },
  {
    id: 'refrigerator',
    name: 'Refrigerator',
    category: 'Appliances',
    description: 'Large kitchen appliance for food storage and preservation',
    environmentalImpact: 'Very High',
    disposalMethods: [
      'Appliance retailer pickup service',
      'Municipal bulk waste collection',
      'Specialized appliance recycling facility'
    ],
    recyclingInfo: 'Contains refrigerants that must be properly recovered. Metal components are highly recyclable.',
    reuseOptions: [
      'Donate if functional',
      'Appliance repair services',
      'Trade-in for new appliance credit'
    ],
    hazardous: true,
    components: ['Compressor', 'Refrigerant', 'Metal coils', 'Insulation', 'Electronic controls'],
    estimatedLifespan: '10-15 years'
  },
  {
    id: 'headphones',
    name: 'Headphones',
    category: 'Audio/Video',
    description: 'Audio device worn over or in the ears',
    environmentalImpact: 'Medium',
    disposalMethods: [
      'Electronics recycling bin',
      'Audio equipment specialist',
      'General e-waste collection'
    ],
    recyclingInfo: 'Drivers contain rare earth magnets. Cables contain copper wire.',
    reuseOptions: [
      'Repair worn components',
      'Donate to music programs',
      'Parts for DIY audio projects'
    ],
    hazardous: false,
    components: ['Drivers', 'Headband', 'Ear cups', 'Cable', 'Connector'],
    estimatedLifespan: '2-5 years'
  }
];

export const categories = [
  { id: 'mobile-devices', name: 'Mobile Devices', count: 12 },
  { id: 'computers', name: 'Computers', count: 18 },
  { id: 'appliances', name: 'Appliances', count: 25 },
  { id: 'components', name: 'Components', count: 15 },
  { id: 'audio-video', name: 'Audio/Video', count: 22 },
  { id: 'photography', name: 'Photography', count: 8 }
];