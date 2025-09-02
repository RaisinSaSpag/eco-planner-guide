// E-Waste Database
const ewasteDatabase = [
    // Mobile Devices
    {
        id: 'smartphone',
        name: 'Smartphone',
        category: 'mobile',
        description: 'Modern mobile phone with touchscreen, battery, and various sensors',
        environmentalImpact: 'high',
        disposalMethods: [
            'Take to certified e-waste recycling center',
            'Return to manufacturer take-back program',
            'Drop off at retail store collection point'
        ],
        recyclingInfo: 'Contains valuable metals like gold, silver, and rare earth elements. Battery must be removed separately.',
        reuseOptions: [
            'Donate to charity if functional',
            'Sell or trade-in for credit',
            'Repurpose as security camera'
        ],
        hazardous: true,
        components: ['Lithium battery', 'Circuit board', 'Screen', 'Camera', 'Speakers'],
        estimatedLifespan: '2-4 years'
    },
    {
        id: 'tablet',
        name: 'Tablet',
        category: 'mobile',
        description: 'Touchscreen portable computer larger than a smartphone',
        environmentalImpact: 'high',
        disposalMethods: [
            'Manufacturer trade-in program',
            'Certified e-waste recycling',
            'Electronics store collection'
        ],
        recyclingInfo: 'Similar to smartphones but larger battery. Screen glass can be recycled separately.',
        reuseOptions: [
            'Educational donations',
            'Digital picture frame',
            'Kitchen recipe display'
        ],
        hazardous: true,
        components: ['Touchscreen', 'Battery', 'Processor', 'Memory'],
        estimatedLifespan: '3-5 years'
    },
    {
        id: 'smartwatch',
        name: 'Smartwatch',
        category: 'mobile',
        description: 'Wearable device with fitness tracking and smartphone connectivity',
        environmentalImpact: 'medium',
        disposalMethods: [
            'Electronics retailer collection',
            'Manufacturer recycling program',
            'E-waste drop-off events'
        ],
        recyclingInfo: 'Contains small lithium battery and rare earth metals in sensors.',
        reuseOptions: [
            'Donate if functional',
            'Basic fitness tracker use'
        ],
        hazardous: true,
        components: ['Lithium battery', 'Sensors', 'Display', 'Metal casing'],
        estimatedLifespan: '2-4 years'
    },

    // Computers & IT
    {
        id: 'laptop',
        name: 'Laptop Computer',
        category: 'computers',
        description: 'Portable computer with screen, keyboard, and internal components',
        environmentalImpact: 'very-high',
        disposalMethods: [
            'Professional data destruction + recycling',
            'Manufacturer take-back program',
            'Certified e-waste facility'
        ],
        recyclingInfo: 'Contains precious metals, rare earth elements, and hazardous materials. Hard drive data must be securely wiped.',
        reuseOptions: [
            'Donate to schools or nonprofits',
            'Refurbish and resell',
            'Convert to home server'
        ],
        hazardous: true,
        components: ['Hard drive', 'RAM', 'Processor', 'Battery', 'Screen'],
        estimatedLifespan: '3-5 years'
    },
    {
        id: 'desktop-computer',
        name: 'Desktop Computer',
        category: 'computers',
        description: 'Stationary computer system with separate tower and monitor',
        environmentalImpact: 'very-high',
        disposalMethods: [
            'Data destruction service + recycling',
            'Component harvesting for reuse',
            'Bulk e-waste collection'
        ],
        recyclingInfo: 'High concentration of valuable metals in motherboard and components.',
        reuseOptions: [
            'Upgrade components for continued use',
            'Donate working systems',
            'Server conversion'
        ],
        hazardous: true,
        components: ['Motherboard', 'Hard drive', 'Power supply', 'RAM', 'Graphics card'],
        estimatedLifespan: '4-6 years'
    },
    {
        id: 'monitor',
        name: 'Computer Monitor',
        category: 'computers',
        description: 'Display screen for desktop computer systems',
        environmentalImpact: 'high',
        disposalMethods: [
            'E-waste recycling center',
            'Manufacturer collection program',
            'Electronics retailer take-back'
        ],
        recyclingInfo: 'LCD monitors contain mercury in backlights. LED monitors are safer but still require proper recycling.',
        reuseOptions: [
            'Donate to community centers',
            'Second monitor setup',
            'Digital photo frame conversion'
        ],
        hazardous: true,
        components: ['LCD/LED panel', 'Backlight', 'Circuit boards', 'Plastic casing'],
        estimatedLifespan: '5-8 years'
    },
    {
        id: 'keyboard',
        name: 'Computer Keyboard',
        category: 'computers',
        description: 'Input device with keys for typing and computer control',
        environmentalImpact: 'low',
        disposalMethods: [
            'Electronics recycling bin',
            'Plastic recycling (if separated)',
            'E-waste collection events'
        ],
        recyclingInfo: 'Mostly plastic with some metal components. Circuit board contains small amounts of precious metals.',
        reuseOptions: [
            'Donate if functional',
            'Repair broken keys',
            'Art projects with keys'
        ],
        hazardous: false,
        components: ['Plastic keys', 'Circuit board', 'Cable', 'Metal springs'],
        estimatedLifespan: '5-10 years'
    },
    {
        id: 'mouse',
        name: 'Computer Mouse',
        category: 'computers',
        description: 'Pointing device for computer navigation and control',
        environmentalImpact: 'low',
        disposalMethods: [
            'Electronics recycling',
            'Small appliance collection',
            'E-waste drop-off'
        ],
        recyclingInfo: 'Contains small circuit board and plastic components.',
        reuseOptions: [
            'Repair if wheel/buttons fail',
            'Backup mouse storage',
            'Educational dissection'
        ],
        hazardous: false,
        components: ['Optical sensor', 'Circuit board', 'Plastic casing', 'Cable/wireless receiver'],
        estimatedLifespan: '3-7 years'
    },

    // Household Appliances
    {
        id: 'refrigerator',
        name: 'Refrigerator',
        category: 'appliances',
        description: 'Large kitchen appliance for food storage and preservation',
        environmentalImpact: 'very-high',
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
        id: 'washing-machine',
        name: 'Washing Machine',
        category: 'appliances',
        description: 'Appliance for cleaning clothes using water and detergent',
        environmentalImpact: 'high',
        disposalMethods: [
            'Appliance store haul-away service',
            'Scrap metal recycling',
            'Municipal appliance collection'
        ],
        recyclingInfo: 'Large amounts of steel and other metals. Motor contains copper windings.',
        reuseOptions: [
            'Repair and continue using',
            'Donate if working',
            'Parts salvage for repairs'
        ],
        hazardous: false,
        components: ['Steel drum', 'Electric motor', 'Control panel', 'Pump', 'Hoses'],
        estimatedLifespan: '8-12 years'
    },
    {
        id: 'microwave',
        name: 'Microwave Oven',
        category: 'appliances',
        description: 'Kitchen appliance that heats food using electromagnetic radiation',
        environmentalImpact: 'medium',
        disposalMethods: [
            'Electronics recycling center',
            'Appliance recycling program',
            'Metal recycling facility'
        ],
        recyclingInfo: 'Contains magnetron with ceramic magnets and metal components.',
        reuseOptions: [
            'Repair if door seals intact',
            'Donate if functional'
        ],
        hazardous: true,
        components: ['Magnetron', 'Transformer', 'Metal cavity', 'Control electronics', 'Glass turntable'],
        estimatedLifespan: '6-10 years'
    },
    {
        id: 'air-conditioner',
        name: 'Air Conditioner',
        category: 'appliances',
        description: 'Climate control appliance for cooling indoor spaces',
        environmentalImpact: 'critical',
        disposalMethods: [
            'HVAC professional removal',
            'Refrigerant recovery service',
            'Certified appliance recycling'
        ],
        recyclingInfo: 'Contains refrigerants (CFCs/HCFCs) that are ozone-depleting substances requiring special handling.',
        reuseOptions: [
            'Professional repair and maintenance',
            'Trade-in programs',
            'Certified refurbishment'
        ],
        hazardous: true,
        components: ['Compressor', 'Refrigerant', 'Coils', 'Fan motor', 'Electronic controls'],
        estimatedLifespan: '10-15 years'
    },
    {
        id: 'dishwasher',
        name: 'Dishwasher',
        category: 'appliances',
        description: 'Kitchen appliance for automatically washing dishes',
        environmentalImpact: 'medium',
        disposalMethods: [
            'Appliance retailer removal',
            'Metal recycling center',
            'Municipal bulk collection'
        ],
        recyclingInfo: 'Primarily steel construction with electronic controls and pump motors.',
        reuseOptions: [
            'Repair pump/motor issues',
            'Donate if working',
            'Metal salvage'
        ],
        hazardous: false,
        components: ['Steel tub', 'Pump motor', 'Heating element', 'Control panel', 'Spray arms'],
        estimatedLifespan: '7-12 years'
    },

    // Entertainment Electronics
    {
        id: 'television',
        name: 'Television',
        category: 'entertainment',
        description: 'Electronic device for receiving and displaying broadcast content',
        environmentalImpact: 'high',
        disposalMethods: [
            'Electronics retailer take-back',
            'Manufacturer recycling program',
            'E-waste collection events'
        ],
        recyclingInfo: 'Flat panel TVs contain mercury in backlights. CRT TVs contain lead in glass.',
        reuseOptions: [
            'Donate if functional',
            'Secondary room use',
            'Computer monitor conversion'
        ],
        hazardous: true,
        components: ['Display panel', 'Circuit boards', 'Speakers', 'Power supply', 'Metal frame'],
        estimatedLifespan: '6-10 years'
    },
    {
        id: 'gaming-console',
        name: 'Gaming Console',
        category: 'entertainment',
        description: 'Dedicated device for playing video games',
        environmentalImpact: 'high',
        disposalMethods: [
            'Gaming retailer trade-in',
            'Electronics recycling center',
            'Manufacturer take-back'
        ],
        recyclingInfo: 'Contains processor, memory, and circuit boards with precious metals.',
        reuseOptions: [
            'Sell or trade for newer model',
            'Retro gaming preservation',
            'Media center conversion'
        ],
        hazardous: true,
        components: ['Processor', 'Hard drive', 'Circuit boards', 'Power supply', 'Optical drive'],
        estimatedLifespan: '5-8 years'
    },
    {
        id: 'dvd-player',
        name: 'DVD/Blu-ray Player',
        category: 'entertainment',
        description: 'Device for playing optical disc media',
        environmentalImpact: 'medium',
        disposalMethods: [
            'Electronics recycling',
            'Goodwill/charity donation',
            'E-waste collection'
        ],
        recyclingInfo: 'Contains laser assembly and electronic components.',
        reuseOptions: [
            'Continue using for physical media',
            'Donate to seniors/libraries',
            'Backup media player'
        ],
        hazardous: false,
        components: ['Optical drive', 'Circuit board', 'Power supply', 'Remote control'],
        estimatedLifespan: '5-10 years'
    },
    {
        id: 'speakers',
        name: 'Audio Speakers',
        category: 'entertainment',
        description: 'Devices that convert electrical signals into sound waves',
        environmentalImpact: 'medium',
        disposalMethods: [
            'Electronics recycling',
            'Audio equipment specialists',
            'Component separation recycling'
        ],
        recyclingInfo: 'Contains rare earth magnets in drivers, metal components, and electronic crossovers.',
        reuseOptions: [
            'Repair foam surrounds',
            'Repurpose drivers for DIY projects',
            'Donate to audio enthusiasts'
        ],
        hazardous: false,
        components: ['Drivers', 'Magnets', 'Crossover circuits', 'Cabinet', 'Wiring'],
        estimatedLifespan: '10-20 years'
    },

    // Components & Parts
    {
        id: 'lithium-battery',
        name: 'Lithium-ion Battery',
        category: 'components',
        description: 'Rechargeable battery commonly found in portable electronics',
        environmentalImpact: 'critical',
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
        id: 'hard-drive',
        name: 'Hard Drive (HDD/SSD)',
        category: 'components',
        description: 'Data storage device for computers and electronics',
        environmentalImpact: 'high',
        disposalMethods: [
            'Professional data destruction',
            'Electronics recycling with data wiping',
            'Manufacturer return program'
        ],
        recyclingInfo: 'Contains rare earth metals and magnets. Data security is critical concern.',
        reuseOptions: [
            'External storage conversion',
            'Secondary backup drive',
            'Data recovery services'
        ],
        hazardous: false,
        components: ['Magnetic disks', 'Read/write heads', 'Circuit board', 'Motor', 'Metal casing'],
        estimatedLifespan: '3-8 years'
    },
    {
        id: 'circuit-board',
        name: 'Circuit Board/PCB',
        category: 'components',
        description: 'Electronic component that connects and supports electronic components',
        environmentalImpact: 'high',
        disposalMethods: [
            'Specialized e-waste recycling',
            'Precious metals recovery',
            'Electronics component recycling'
        ],
        recyclingInfo: 'High concentration of gold, silver, copper, and rare earth elements.',
        reuseOptions: [
            'Educational electronics projects',
            'Spare parts harvesting',
            'Art and craft projects'
        ],
        hazardous: true,
        components: ['Copper traces', 'Precious metals', 'Ceramic substrate', 'Electronic components'],
        estimatedLifespan: 'Varies by application'
    },
    {
        id: 'power-adapter',
        name: 'Power Adapter/Charger',
        category: 'components',
        description: 'Device that converts AC power to DC for electronic devices',
        environmentalImpact: 'medium',
        disposalMethods: [
            'Electronics recycling',
            'Small appliance collection',
            'Manufacturer take-back'
        ],
        recyclingInfo: 'Contains transformer, circuit boards, and plastic casing.',
        reuseOptions: [
            'Use with compatible devices',
            'Emergency backup charger',
            'DIY electronics projects'
        ],
        hazardous: false,
        components: ['Transformer', 'Circuit board', 'Plastic casing', 'Metal connectors'],
        estimatedLifespan: '3-7 years'
    },
    {
        id: 'cables',
        name: 'Electronic Cables',
        category: 'components',
        description: 'Various cables for connecting electronic devices',
        environmentalImpact: 'low',
        disposalMethods: [
            'Electronics recycling',
            'Cable recycling programs',
            'Copper wire recycling'
        ],
        recyclingInfo: 'Contains copper wire which is valuable for recycling.',
        reuseOptions: [
            'Repurpose for other devices',
            'DIY project materials',
            'Emergency replacements'
        ],
        hazardous: false,
        components: ['Copper wire', 'Plastic insulation', 'Metal connectors', 'Shielding'],
        estimatedLifespan: '5-15 years'
    },

    // Office Equipment
    {
        id: 'printer',
        name: 'Inkjet/Laser Printer',
        category: 'office',
        description: 'Device for producing physical documents from digital files',
        environmentalImpact: 'high',
        disposalMethods: [
            'Manufacturer take-back program',
            'Office equipment recycling',
            'Electronics retailer collection'
        ],
        recyclingInfo: 'Contains metals, plastics, and potentially hazardous toner materials.',
        reuseOptions: [
            'Donate to schools/nonprofits',
            'Repair and refurbishment',
            'Parts harvesting'
        ],
        hazardous: true,
        components: ['Print head', 'Motors', 'Circuit boards', 'Ink/toner cartridges', 'Plastic casing'],
        estimatedLifespan: '3-7 years'
    },
    {
        id: 'scanner',
        name: 'Document Scanner',
        category: 'office',
        description: 'Device for converting physical documents to digital format',
        environmentalImpact: 'medium',
        disposalMethods: [
            'Electronics recycling center',
            'Office equipment collection',
            'Manufacturer recycling'
        ],
        recyclingInfo: 'Contains CCD sensors, motors, and electronic components.',
        reuseOptions: [
            'Continue using for archives',
            'Donate to organizations',
            'Art digitization projects'
        ],
        hazardous: false,
        components: ['CCD sensor', 'Stepper motors', 'Glass bed', 'Circuit boards', 'Light source'],
        estimatedLifespan: '5-10 years'
    },
    {
        id: 'fax-machine',
        name: 'Fax Machine',
        category: 'office',
        description: 'Device for transmitting documents over telephone lines',
        environmentalImpact: 'medium',
        disposalMethods: [
            'Office equipment recycling',
            'Electronics collection events',
            'Scrap electronics dealer'
        ],
        recyclingInfo: 'Contains modem components, motors, and print mechanisms.',
        reuseOptions: [
            'Limited - mostly obsolete technology',
            'Historical/museum donation'
        ],
        hazardous: false,
        components: ['Modem', 'Print mechanism', 'Scanner', 'Circuit boards', 'Phone components'],
        estimatedLifespan: '7-12 years'
    },
    {
        id: 'projector',
        name: 'Digital Projector',
        category: 'office',
        description: 'Device for displaying images and video on large screens',
        environmentalImpact: 'high',
        disposalMethods: [
            'Electronics recycling center',
            'AV equipment specialists',
            'Educational institution donation'
        ],
        recyclingInfo: 'Contains lamp assemblies with mercury, optical components, and electronics.',
        reuseOptions: [
            'Educational settings',
            'Home theater setup',
            'Lamp replacement and continued use'
        ],
        hazardous: true,
        components: ['Mercury lamp', 'Optical lens system', 'Circuit boards', 'Cooling fans', 'Metal housing'],
        estimatedLifespan: '3-8 years'
    },
    {
        id: 'headphones',
        name: 'Headphones/Earbuds',
        category: 'entertainment',
        description: 'Audio devices worn over or in the ears',
        environmentalImpact: 'medium',
        disposalMethods: [
            'Electronics recycling bin',
            'Audio equipment specialist',
            'Small electronics collection'
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
    },
    {
        id: 'router',
        name: 'WiFi Router',
        category: 'computers',
        description: 'Device for creating wireless internet networks',
        environmentalImpact: 'medium',
        disposalMethods: [
            'Electronics recycling',
            'ISP equipment return',
            'Network equipment specialists'
        ],
        recyclingInfo: 'Contains circuit boards, antennas, and plastic components.',
        reuseOptions: [
            'Backup router',
            'Range extender conversion',
            'Guest network device'
        ],
        hazardous: false,
        components: ['Circuit board', 'Antennas', 'Power supply', 'Ethernet ports', 'Plastic casing'],
        estimatedLifespan: '3-6 years'
    }
];

// Sample recycling centers data
const recyclingCenters = [
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
    }
];

// Global variables
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let tasks = [];
let calendarEvents = [];
let filteredItems = [...ewasteDatabase];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadStoredData();
    displayItems(filteredItems);
    displayRecyclingCenters();
    displayTasks();
    displayCalendar();
    setupNavigation();
});

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Show home section by default
    showSection('home');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('href').substring(1);
            showSection(targetSection);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Search functionality
function searchItems() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    filteredItems = ewasteDatabase.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
    displayItems(filteredItems);
    showSection('encyclopedia');
}

// Filter functionality
function filterItems() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const impactFilter = document.getElementById('impactFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredItems = ewasteDatabase.filter(item => {
        const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
        const matchesImpact = impactFilter === 'all' || item.environmentalImpact === impactFilter;
        const matchesSearch = searchTerm === '' || 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesImpact && matchesSearch;
    });
    
    displayItems(filteredItems);
}

// Display items in encyclopedia
function displayItems(items) {
    const itemsGrid = document.getElementById('itemsGrid');
    
    if (items.length === 0) {
        itemsGrid.innerHTML = `
            <div class="no-results">
                <h3>No items found</h3>
                <p>Try adjusting your search terms or filters</p>
            </div>
        `;
        return;
    }
    
    itemsGrid.innerHTML = items.map(item => `
        <div class="item-card" data-category="${item.category}" data-impact="${item.environmentalImpact}">
            <div class="item-header">
                <h3 class="item-title">${item.name}</h3>
                <span class="impact-badge impact-${item.environmentalImpact}">
                    ${getImpactIcon(item.environmentalImpact)} ${formatImpact(item.environmentalImpact)}
                </span>
            </div>
            
            <div class="item-category">${formatCategory(item.category)}</div>
            <p class="item-description">${item.description}</p>
            
            <div class="disposal-methods">
                <h4>🔄 Disposal Methods:</h4>
                <ul>
                    ${item.disposalMethods.slice(0, 2).map(method => `<li>${method}</li>`).join('')}
                    ${item.disposalMethods.length > 2 ? `<li style="color: var(--primary-green);">+ ${item.disposalMethods.length - 2} more methods</li>` : ''}
                </ul>
            </div>
            
            <div class="item-badges">
                ${item.hazardous ? '<span class="badge badge-hazardous">⚠️ Hazardous</span>' : ''}
                ${item.reuseOptions.length > 0 ? '<span class="badge badge-reusable">🔄 Reusable</span>' : ''}
            </div>
            
            <button class="view-details-btn" onclick="viewItemDetails('${item.id}')">
                View Full Details
            </button>
        </div>
    `).join('');
}

// View item details (creates new page)
function viewItemDetails(itemId) {
    const item = ewasteDatabase.find(i => i.id === itemId);
    if (!item) return;
    
    const detailWindow = window.open('', '_blank');
    detailWindow.document.write(generateItemDetailPage(item));
    detailWindow.document.close();
}

// Generate item detail page HTML
function generateItemDetailPage(item) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${item.name} - E-Waste Details | EcoCycle</title>
    <style>
        ${getDetailPageStyles()}
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <h1>🌱 EcoCycle</h1>
            <button onclick="window.close()" class="close-btn">✕ Close</button>
        </div>
    </nav>
    
    <main class="detail-main">
        <div class="container">
            <div class="detail-header">
                <div class="header-content">
                    <h1>${item.name}</h1>
                    <p class="category">${formatCategory(item.category)}</p>
                    <p class="description">${item.description}</p>
                </div>
                <div class="impact-info">
                    <span class="impact-badge impact-${item.environmentalImpact}">
                        ${getImpactIcon(item.environmentalImpact)} ${formatImpact(item.environmentalImpact)} Impact
                    </span>
                </div>
            </div>
            
            <div class="detail-grid">
                <div class="main-content">
                    <div class="info-cards">
                        <div class="info-card">
                            <h3>⏱️ Estimated Lifespan</h3>
                            <p class="highlight">${item.estimatedLifespan}</p>
                        </div>
                        
                        <div class="info-card">
                            <h3>⚠️ Safety Status</h3>
                            <p class="highlight ${item.hazardous ? 'hazardous' : 'safe'}">
                                ${item.hazardous ? '⚠️ Hazardous Material' : '✅ Non-Hazardous'}
                            </p>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h2>♻️ Disposal Methods</h2>
                        <p class="section-description">Safe and responsible ways to dispose of this item</p>
                        <ol class="disposal-list">
                            ${item.disposalMethods.map((method, index) => `
                                <li class="disposal-item">
                                    <span class="step-number">${index + 1}</span>
                                    <span class="step-text">${method}</span>
                                </li>
                            `).join('')}
                        </ol>
                    </div>
                    
                    ${item.reuseOptions.length > 0 ? `
                    <div class="detail-section">
                        <h2>💡 Reuse & Repurpose Ideas</h2>
                        <p class="section-description">Creative ways to extend this item's life before disposal</p>
                        <div class="reuse-grid">
                            ${item.reuseOptions.map(option => `
                                <div class="reuse-item">
                                    <span class="reuse-icon">🔄</span>
                                    <span class="reuse-text">${option}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    <div class="detail-section">
                        <h2>🔧 Components & Materials</h2>
                        <p class="section-description">Key components that make up this item</p>
                        <div class="components-grid">
                            ${item.components.map(component => `
                                <span class="component-tag">${component}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="sidebar">
                    <div class="sidebar-card">
                        <h3>Quick Actions</h3>
                        <button class="action-btn" onclick="alert('Feature coming soon!')">
                            📍 Find Recycling Centers
                        </button>
                        <button class="action-btn outline" onclick="alert('Feature coming soon!')">
                            📅 Schedule Disposal
                        </button>
                    </div>
                    
                    <div class="sidebar-card">
                        <h3>Recycling Information</h3>
                        <p class="recycling-info">${item.recyclingInfo}</p>
                    </div>
                    
                    <div class="sidebar-card">
                        <h3>Environmental Impact</h3>
                        <div class="impact-details">
                            <div class="impact-level">
                                <span>Impact Level:</span>
                                <span class="impact-badge impact-${item.environmentalImpact}">
                                    ${formatImpact(item.environmentalImpact)}
                                </span>
                            </div>
                            <p class="impact-description">
                                ${getImpactDescription(item.environmentalImpact)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 EcoCycle. Making electronic waste management accessible and responsible.</p>
        </div>
    </footer>
</body>
</html>
    `;
}

// Display recycling centers
function displayRecyclingCenters() {
    const centersList = document.getElementById('centersList');
    
    centersList.innerHTML = recyclingCenters.map(center => `
        <div class="center-card">
            <div class="center-header">
                <div>
                    <h3 class="center-title">${center.name}</h3>
                    <p class="center-address">📍 ${center.address}</p>
                </div>
                <div class="center-info-summary">
                    <div class="center-distance">${center.distance} miles away</div>
                    <div class="center-rating">⭐ ${center.rating}</div>
                </div>
            </div>
            
            <div class="center-info">
                <div>
                    <h4>📞 Contact</h4>
                    <p>${center.phone}</p>
                    <p>🕒 ${center.hours}</p>
                </div>
                
                <div>
                    <h4>Accepted Items</h4>
                    <div class="item-tags">
                        ${center.acceptedItems.map(item => `<span class="item-tag">${item}</span>`).join('')}
                    </div>
                </div>
                
                <div>
                    <h4>Specialties</h4>
                    <div class="specialty-tags">
                        ${center.specialties.map(specialty => `<span class="specialty-tag">${specialty}</span>`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="center-actions">
                <button class="btn btn-primary" onclick="getDirections('${center.address}')">
                    🧭 Get Directions
                </button>
                <button class="btn btn-outline" onclick="callCenter('${center.phone}')">
                    📞 Call Center
                </button>
            </div>
        </div>
    `).join('');
}

// Task management functionality
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            category: 'general',
            dateAdded: new Date()
        };
        
        tasks.push(task);
        taskInput.value = '';
        displayTasks();
        saveData();
    }
}

function displayTasks() {
    const tasksList = document.getElementById('tasksList');
    
    if (tasks.length === 0) {
        tasksList.innerHTML = '<p class="no-tasks">No disposal tasks yet. Add one above!</p>';
        return;
    }
    
    tasksList.innerHTML = tasks.map(task => `
        <div class="task-item ${task.completed ? 'task-completed' : ''}">
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button onclick="toggleTask(${task.id})" class="task-btn ${task.completed ? 'undo' : 'complete'}">
                    ${task.completed ? '↶' : '✓'}
                </button>
                <button onclick="deleteTask(${task.id})" class="task-btn delete">
                    🗑️
                </button>
            </div>
        </div>
    `).join('');
}

function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        displayTasks();
        saveData();
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    displayTasks();
    saveData();
}

// Calendar functionality
function displayCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthElement = document.getElementById('currentMonth');
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    
    currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    let calendarHTML = '';
    
    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        calendarHTML += `<div class="calendar-header">${day}</div>`;
    });
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
        calendarHTML += '<div class="calendar-day other-month"></div>';
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const hasEvent = calendarEvents.some(event => {
            const eventDate = new Date(event.date);
            return eventDate.getMonth() === currentMonth &&
                   eventDate.getFullYear() === currentYear &&
                   eventDate.getDate() === day;
        });
        
        calendarHTML += `
            <div class="calendar-day ${hasEvent ? 'has-event' : ''}" 
                 onclick="selectCalendarDay(${day})">
                ${day}
            </div>
        `;
    }
    
    calendarGrid.innerHTML = calendarHTML;
}

function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    displayCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    displayCalendar();
}

function selectCalendarDay(day) {
    const eventTitle = prompt(`Add event for ${currentMonth + 1}/${day}/${currentYear}:`);
    if (eventTitle) {
        const event = {
            id: Date.now(),
            title: eventTitle,
            date: new Date(currentYear, currentMonth, day),
            category: 'disposal'
        };
        
        calendarEvents.push(event);
        displayCalendar();
        saveData();
    }
}

// Utility functions
function formatCategory(category) {
    const categoryMap = {
        'mobile': 'Mobile Devices',
        'computers': 'Computers & IT',
        'appliances': 'Household Appliances',
        'entertainment': 'Entertainment Electronics',
        'components': 'Components & Parts',
        'office': 'Office Equipment'
    };
    return categoryMap[category] || category;
}

function formatImpact(impact) {
    return impact.charAt(0).toUpperCase() + impact.slice(1).replace('-', ' ');
}

function getImpactIcon(impact) {
    if (impact === 'critical' || impact === 'very-high') {
        return '⚠️';
    }
    return '✅';
}

function getImpactDescription(impact) {
    const descriptions = {
        'critical': 'Requires immediate proper disposal to prevent severe environmental damage.',
        'very-high': 'High potential for environmental harm if not disposed of properly.',
        'high': 'Significant environmental impact requires careful disposal.',
        'medium': 'Moderate environmental impact. Proper disposal recommended.',
        'low': 'Lower environmental risk but still requires responsible disposal.'
    };
    return descriptions[impact] || '';
}

// Center interaction functions
function getDirections(address) {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com/maps?q=${encodedAddress}`, '_blank');
}

function callCenter(phone) {
    window.location.href = `tel:${phone}`;
}

// Data persistence
function saveData() {
    localStorage.setItem('ecocycle-tasks', JSON.stringify(tasks));
    localStorage.setItem('ecocycle-events', JSON.stringify(calendarEvents));
}

function loadStoredData() {
    const storedTasks = localStorage.getItem('ecocycle-tasks');
    const storedEvents = localStorage.getItem('ecocycle-events');
    
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    
    if (storedEvents) {
        calendarEvents = JSON.parse(storedEvents).map(event => ({
            ...event,
            date: new Date(event.date)
        }));
    }
}

// Detail page styles function
function getDetailPageStyles() {
    return `
        /* Include main styles here - truncated for brevity */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        :root {
            --primary-green: #22c55e;
            --primary-dark: #16a34a;
            --secondary-blue: #3b82f6;
            --accent-teal: #14b8a6;
            --forest-green: #166534;
            --white: #ffffff;
            --light-gray: #f8fafc;
            --medium-gray: #64748b;
            --dark-gray: #1e293b;
            --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--dark-gray);
            background-color: var(--light-gray);
        }
        
        .navbar {
            background: var(--white);
            box-shadow: var(--shadow-card);
            padding: 1rem 0;
        }
        
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .nav-container h1 {
            color: var(--primary-green);
            font-size: 1.5rem;
        }
        
        .close-btn {
            padding: 0.5rem 1rem;
            background: var(--primary-green);
            color: var(--white);
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .detail-main {
            padding: 2rem 0;
        }
        
        .detail-header {
            background: var(--white);
            border-radius: 0.5rem;
            padding: 2rem;
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: start;
            box-shadow: var(--shadow-card);
        }
        
        .detail-header h1 {
            font-size: 2.5rem;
            color: var(--forest-green);
            margin-bottom: 0.5rem;
        }
        
        .category {
            color: var(--medium-gray);
            font-size: 1.25rem;
            margin-bottom: 1rem;
        }
        
        .description {
            font-size: 1.125rem;
            color: var(--medium-gray);
        }
        
        .detail-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
        }
        
        .info-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .info-card {
            background: var(--white);
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-card);
        }
        
        .info-card h3 {
            margin-bottom: 0.5rem;
            color: var(--forest-green);
        }
        
        .highlight {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--primary-green);
        }
        
        .hazardous { color: #dc2626; }
        .safe { color: var(--primary-green); }
        
        .detail-section {
            background: var(--white);
            padding: 2rem;
            border-radius: 0.5rem;
            margin-bottom: 2rem;
            box-shadow: var(--shadow-card);
        }
        
        .detail-section h2 {
            margin-bottom: 0.5rem;
            color: var(--forest-green);
        }
        
        .section-description {
            color: var(--medium-gray);
            margin-bottom: 1.5rem;
        }
        
        .disposal-list {
            list-style: none;
            padding: 0;
        }
        
        .disposal-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: var(--light-gray);
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;
        }
        
        .step-number {
            background: var(--primary-green);
            color: var(--white);
            border-radius: 50%;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
        }
        
        .reuse-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
        }
        
        .reuse-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem;
            background: rgba(34, 197, 94, 0.1);
            border-radius: 0.5rem;
        }
        
        .components-grid {
            display: flex;
            flex-wrap: gap;
            gap: 0.5rem;
        }
        
        .component-tag {
            padding: 0.5rem 1rem;
            background: var(--light-gray);
            border: 1px solid var(--medium-gray);
            border-radius: 0.25rem;
            font-size: 0.875rem;
        }
        
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .sidebar-card {
            background: var(--white);
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-card);
        }
        
        .sidebar-card h3 {
            margin-bottom: 1rem;
            color: var(--forest-green);
        }
        
        .action-btn {
            width: 100%;
            padding: 0.75rem;
            margin-bottom: 0.5rem;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
            font-weight: 500;
            background: var(--primary-green);
            color: var(--white);
        }
        
        .action-btn.outline {
            background: transparent;
            color: var(--primary-green);
            border: 1px solid var(--primary-green);
        }
        
        .recycling-info {
            font-size: 0.875rem;
            color: var(--medium-gray);
        }
        
        .impact-details {
            space-y: 1rem;
        }
        
        .impact-level {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .impact-description {
            font-size: 0.75rem;
            color: var(--medium-gray);
        }
        
        .impact-badge {
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            font-weight: bold;
            color: var(--white);
        }
        
        .impact-critical { background: #dc2626; }
        .impact-very-high { background: #ea580c; }
        .impact-high { background: #d97706; }
        .impact-medium { background: #ca8a04; }
        .impact-low { background: var(--primary-green); }
        
        .footer {
            background: var(--forest-green);
            color: var(--white);
            text-align: center;
            padding: 2rem 0;
            margin-top: 2rem;
        }
        
        @media (max-width: 768px) {
            .detail-grid {
                grid-template-columns: 1fr;
            }
            
            .detail-header {
                flex-direction: column;
                align-items: stretch;
            }
            
            .info-cards {
                grid-template-columns: 1fr;
            }
            
            .reuse-grid {
                grid-template-columns: 1fr;
            }
        }
    `;
}

// Allow enter key for search and task input
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (e.target.id === 'searchInput') {
            searchItems();
        } else if (e.target.id === 'taskInput') {
            addTask();
        }
    }
});