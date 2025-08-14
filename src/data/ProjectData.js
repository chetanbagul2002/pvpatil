// data/projectsData.js
import projectImg from "../assets/project1.jpg";
import projectImg1 from "../assets/project2.jpg";
import projectImg2 from "../assets/project3.jpg";
import projectImg6 from "../assets/project6.jpg";
import projectImg1Extra from "../assets/project4.jpg";
import projectExtra1 from "../assets/project-extra.jpg";
import projectExtra2 from "../assets/project-extra1.jpg";
import projectExtra3 from "../assets/project-extra2.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Shani Mandir Temple Complex",
    "category": "Religious & Cultural",
    "short_description": "A sacred temple dedicated to Lord Shani, featuring traditional architecture, intricate carvings, and a serene spiritual atmosphere.",
    "description": "The Shani Mandir Temple Complex is a meticulously designed religious site that embodies the rich cultural heritage and spiritual significance of Lord Shani. The project involved the construction of a grand temple structure with traditional architectural elements, including ornate carvings, domed roofs, and a spacious courtyard for devotees. The temple complex also includes auxiliary facilities such as a prayer hall, meditation areas, and administrative offices. The design emphasizes harmony with nature, incorporating landscaped gardens and water features to create a tranquil environment for worship and reflection.",
    "tech_focused": "To ensure precision in the temple's intricate designs, advanced 3D modeling software was employed to visualize the architectural details before construction. Traditional craftsmanship was combined with modern construction techniques to achieve the delicate carvings and structural integrity. Sustainable materials were prioritized to align with the spiritual ethos of environmental respect. The project also utilized drone surveys for site monitoring, ensuring that every aspect of the construction adhered to the sacred geometry and alignment principles specified in the Vastu Shastra.",
    "client": "Local Religious Trust",
    "delivery": "Design-Build",
    "location": "India",
    images: [ projectImg1Extra,projectImg],
    "highlights": [
      "Traditional architecture with intricate carvings",
      "Spacious courtyard and landscaped gardens",
      "Sustainable materials and eco-friendly design",
      "Auxiliary facilities for devotees and visitors"
    ]
  },
  {
    "id": 2,
    "title": "Prathmik Arogya Kendra (Primary Health Center)",
    "category": "Infrastructure",
    "short_description": "A modern primary healthcare facility serving rural communities with comprehensive medical services and sustainable design.",
    "description": "The Prathmik Arogya Kendra at Tamavadi is a government-contracted healthcare facility designed to provide essential medical services to rural populations. The project features outpatient wards, diagnostic labs, a pharmacy, and maternal/child health units. Built with earthquake-resistant techniques and natural ventilation systems, the center prioritizes accessibility with ramps and separate sanitation facilities. Its solar-powered design reduces operational costs while ensuring uninterrupted service in remote areas.",
    "tech_focused": "The construction utilized geospatial data (Latitude: 20.982919, Longitude: 74.404478) for optimal site placement. Advanced elevation mapping (412.85±38 m) informed foundation engineering, while 8.5 m accuracy GPS ensured precise boundary demarcation. AirSAR technology was employed for terrain analysis, and engine-powered equipment facilitated rapid construction in challenging terrain. Real-time project tracking was enabled through NoteCam documentation systems.",
    "client": "Government Health Department",
    "delivery": "Turnkey Project",
    "location": "Tamavadi, India",
    
    "images": [projectImg1,projectExtra1, projectExtra2, projectExtra3],  
    "highlights": [
      "Serves 50+ villages in Tamavadi region",
      "Solar-powered with 24/7 emergency services",
      "Earthquake-resistant RCC structure",
      "Wheelchair-accessible design",
      "Built in record 8-month timeline"
    ],
  },
  {
    "id": 3,
    "title": "Tamavadi River Dam & Reservoir",
    "category": "Infrastructure",
    "short_description": "A large-scale dam project designed for irrigation, flood control, and hydroelectric power generation in the Tamavadi region.",
    "description": "The Tamavadi River Dam is a critical water management infrastructure project constructed to address regional water scarcity, provide flood mitigation, and generate renewable hydroelectric power. This gravity dam features a 58-meter-high concrete structure with a 1.2 km spillway, creating a reservoir capacity of 320 million cubic meters. The project includes irrigation canals serving 12,000 hectares of farmland, a 14 MW power station, and advanced sediment management systems. Designed to withstand 100-year flood events, the dam incorporates real-time monitoring sensors and automated gate controls.",
    "tech_focused": "The construction employed roller-compacted concrete (RCC) techniques for rapid placement of 850,000 m³ of material. Drone-based photogrammetry was used for daily progress tracking, while computational fluid dynamics (CFD) models optimized the spillway design. Earthquake-resistant features include base isolation pads designed for seismic zone IV. The project utilized BIM (Building Information Modeling) for clash detection between mechanical/electrical systems and structural components, reducing rework by 23%.",
    "client": "State Water Resources Department",
    "delivery": "EPC (Engineering, Procurement, Construction)",
    "location": "Tamavadi River, India",
    "specifications": {
      "dam_type": "Concrete Gravity Dam",
      "height": "58 meters",
      "length": "1.2 kilometers",
      "reservoir_capacity": "320 million m³",
      "power_capacity": "14 MW",
      "irrigation_coverage": "12,000 hectares"
    },
    "images": [projectImg2],
    "highlights": [
      "Provides water for 200,000+ residents",
      "Reduces flood risk for downstream communities",
      "Carbon-neutral power generation",
      "Fish ladder for ecological preservation",
      "Smart monitoring system with IoT sensors"
    ],
    "timeline": {
      "start_date": "2023-01-15",
      "completion_date": "2025-11-30",
      "construction_phase": "Final commissioning"
    },
    "sustainability_features": [
      "Sediment flushing system",
      "Downstream ecological flow maintenance",
      "Solar-powered monitoring stations",
      "Native vegetation replanting program"
    ]
  },
  {
    "id": 4,
    "title": "District Administrative Complex",
    "category": "Residential",
    "short_description": "A modern, multi-department government office complex designed for efficient public service delivery with sustainable features.",
    "description": "The District Administrative Complex is a state-of-the-art government facility housing 12 departments under one roof, including municipal offices, public works, and citizen service centers. The 8-story structure features a seismic-resistant steel frame with glass-reinforced concrete facades, designed for both functionality and architectural distinction. The complex includes a central atrium with natural lighting, 200+ workstations, 35 meeting rooms, and a public lobby with digital kiosks for automated services. The design emphasizes accessibility with tactile pathways, braille signage, and dedicated service counters for differently-abled citizens.",
    "tech_focused": "The project utilized Building Information Modeling (BIM) Level 3 for clash detection and coordinated MEP (Mechanical, Electrical, Plumbing) systems installation. Prefabricated modular components reduced construction time by 30%. Smart building technologies include IoT-based occupancy sensors for HVAC optimization, automated daylight harvesting systems, and a centralized building management system monitoring 1,200+ data points. The seismic design incorporates base isolation technology capable of withstanding Zone V earthquakes.",
    "client": "State Public Works Department",
    "delivery": "Design-Bid-Build",
    "location": "Urban District HQ, India",
    "specifications": {
      "structure_type": "Steel Frame with Composite Flooring",
      "floors": "8 (G+7)",
      "total_area": "42,500 sq.m.",
      "occupancy_capacity": "850 personnel",
      "parking": "300 vehicles (including EV charging)",
      "completion_date": "2025-09-15"
    },
    "images": [projectImg6],
    "highlights": [
      "Integrated e-governance server infrastructure",
      "35% reduced energy consumption through passive design",
      "Dedicated disaster recovery center",
      "Paperless office design with digital workflow systems",
      "Rainwater harvesting (1.2 million liter capacity)"
    ],
    "sustainability_features": {
      "leed_certification": "Gold (Targeted)",
      "energy_systems": [
        "200 kW rooftop solar array",
        "VRF air conditioning",
        "LED lighting with motion sensors"
      ],
      "water_management": [
        "Greywater recycling system",
        "Low-flow fixtures (40% water savings)",
        "Drought-resistant landscaping"
      ]
    },
    "security_features": [
      "Biometric access control",
      "Under-vehicle surveillance system",
      "Cybersecurity-hardened network",
      "Emergency command center"
    ]
  }
];
