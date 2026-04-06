// Mock data for Chokho Safar Travels

export const companyInfo = {
  name: "Chokho Safar Travels",
  nameHindi: "चोखो सफ़र ट्रेवल्स",
  tagline: "Taking You to the Heart of Rajasthan",
  established: "2014",
  address: "135, Rajapark, Tilak Nagar, Jaipur",
  phone: ["+91 9829692253", "+91 7734915253"],
  email: "info@choukhosafar.com",
  website: "www.choukhosafar.com"
};

export const destinations = [
  {
    id: 1,
    name: "Jaipur",
    title: "The Pink City",
    description: "Experience the royal heritage of Rajasthan's capital with its magnificent forts, palaces, and vibrant bazaars.",
    image: "https://images.unsplash.com/photo-1746106328500-8edb0a404d68",
    highlights: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar"]
  },
  {
    id: 2,
    name: "Udaipur",
    title: "The City of Lakes",
    description: "Discover the romantic charm of Udaipur with its serene lakes, stunning palaces, and rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1715628256203-6f8a5c9adaac",
    highlights: ["Lake Pichola", "City Palace", "Jag Mandir", "Saheliyon Ki Bari"]
  },
  {
    id: 3,
    name: "Jaisalmer",
    title: "The Golden City",
    description: "Explore the golden sands and historic fort city that emerges like a mirage from the Thar Desert.",
    image: "https://images.unsplash.com/photo-1602858659965-ea6f743b7679",
    highlights: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli", "Camel Safari"]
  },
  {
    id: 4,
    name: "Jodhpur",
    title: "The Blue City",
    description: "Marvel at the majestic Mehrangarh Fort and the stunning blue houses of Rajasthan's second-largest city.",
    image: "https://images.unsplash.com/photo-1651516725197-9ed18b572abe",
    highlights: ["Mehrangarh Fort", "Umaid Bhawan", "Clock Tower", "Blue Houses"]
  },
  {
    id: 5,
    name: "Bikaner",
    title: "The Desert Jewel",
    description: "Visit the land of grand havelis, ancient forts, and the famous Karni Mata Temple.",
    image: "https://images.pexels.com/photos/925069/pexels-photo-925069.jpeg",
    highlights: ["Junagarh Fort", "Karni Mata Temple", "Lalgarh Palace", "Camel Breeding Farm"]
  },
  {
    id: 6,
    name: "Ranthambore",
    title: "Wildlife Paradise",
    description: "Embark on thrilling wildlife safaris in one of India's most famous tiger reserves.",
    image: "https://images.pexels.com/photos/570031/pexels-photo-570031.jpeg",
    highlights: ["Tiger Safari", "Ranthambore Fort", "Wildlife Photography", "Nature Trails"]
  },
  {
    id: 7,
    name: "Delhi",
    title: "The Capital City",
    description: "Experience the perfect blend of ancient history and modern culture in India's vibrant capital.",
    image: "https://images.unsplash.com/photo-1766585322668-3eb7dc72ef84",
    highlights: ["Red Fort", "Qutub Minar", "India Gate", "Lotus Temple"]
  },
  {
    id: 8,
    name: "Agra",
    title: "City of the Taj",
    description: "Witness the eternal symbol of love and explore the magnificent Mughal architecture.",
    image: "https://images.unsplash.com/photo-1769718460805-97642006a6bc",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"]
  }
];

export const tourPackages = [
  {
    id: 1,
    name: "Golden Triangle Tour",
    route: "Golden Line",
    duration: "5 Days / 4 Nights",
    cities: ["Delhi", "Agra", "Jaipur"],
    price: "₹18,999",
    image: "https://images.unsplash.com/photo-1706961121783-4ae6c933983a",
    highlights: ["Taj Mahal Visit", "Amber Fort", "City Palace", "Local Cuisine"],
    itinerary: "Delhi → Agra → Jaipur"
  },
  {
    id: 2,
    name: "Rajasthan Royal Heritage",
    route: "Black Line",
    duration: "7 Days / 6 Nights",
    cities: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
    price: "₹28,999",
    image: "https://images.unsplash.com/photo-1670254812851-e59013163aee",
    highlights: ["Desert Safari", "Lake Cruise", "Fort Tours", "Cultural Shows"],
    itinerary: "Jaipur → Jodhpur → Jaisalmer → Udaipur"
  },
  {
    id: 3,
    name: "Desert & Wildlife Adventure",
    route: "Black Line",
    duration: "6 Days / 5 Nights",
    cities: ["Jaipur", "Ranthambore", "Bikaner", "Jaisalmer"],
    price: "₹24,999",
    image: "https://images.unsplash.com/photo-1603726378246-cabded0a2407",
    highlights: ["Tiger Safari", "Camel Rides", "Desert Camping", "Cultural Experience"],
    itinerary: "Jaipur → Ranthambore → Bikaner → Jaisalmer"
  },
  {
    id: 4,
    name: "Complete Rajasthan Experience",
    route: "Golden Line + Black Line",
    duration: "10 Days / 9 Nights",
    cities: ["Delhi", "Agra", "Jaipur", "Jodhpur", "Udaipur"],
    price: "₹42,999",
    image: "https://images.unsplash.com/photo-1715628255013-153b74854aa0",
    highlights: ["All Major Attractions", "Luxury Accommodation", "Professional Guide", "Complete Tour"],
    itinerary: "Delhi → Agra → Jaipur → Jodhpur → Udaipur"
  }
];

export const vehicles = [
  {
    id: 1,
    name: "Swift Dzire",
    type: "Sedan",
    capacity: "4+1",
    image: "https://images.unsplash.com/photo-1663852397535-18292e115327",
    features: ["AC", "Music System", "Comfortable Seats"],
    pricePerKm: "₹12"
  },
  {
    id: 2,
    name: "Toyota Etios",
    type: "Sedan",
    capacity: "4+1",
    image: "https://images.unsplash.com/photo-1709620435392-c1ecacde8bd5",
    features: ["AC", "GPS", "Spacious Interior"],
    pricePerKm: "₹12"
  },
  {
    id: 3,
    name: "Maruti Ertiga",
    type: "MUV",
    capacity: "6+1",
    image: "https://images.unsplash.com/photo-1642345830428-612be5186aba",
    features: ["AC", "7 Seater", "Luggage Space"],
    pricePerKm: "₹15"
  },
  {
    id: 4,
    name: "Toyota Innova",
    type: "MUV",
    capacity: "7+1",
    image: "https://images.unsplash.com/photo-1748215210950-536c6621629a",
    features: ["AC", "Premium Comfort", "Extra Luggage"],
    pricePerKm: "₹18"
  },
  {
    id: 5,
    name: "Innova Crysta",
    type: "Premium MUV",
    capacity: "7+1",
    image: "https://images.unsplash.com/photo-1748215210939-ad8b6c8c086d",
    features: ["Luxury AC", "Premium Interior", "Best Comfort"],
    pricePerKm: "₹22"
  }
];

export const services = [
  {
    id: 1,
    title: "Customized Tour Packages",
    description: "Tailored itineraries designed to match your preferences, budget, and travel style.",
    icon: "MapPin"
  },
  {
    id: 2,
    title: "Comfortable Fleet",
    description: "Well-maintained vehicles with experienced drivers for a safe and pleasant journey.",
    icon: "Car"
  },
  {
    id: 3,
    title: "Expert Guides",
    description: "Knowledgeable local guides to enrich your experience with historical and cultural insights.",
    icon: "Users"
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you throughout your journey.",
    icon: "Headphones"
  },
  {
    id: 5,
    title: "Hotel Bookings",
    description: "Curated accommodation options from budget to luxury hotels and heritage properties.",
    icon: "Hotel"
  },
  {
    id: 6,
    title: "Best Pricing",
    description: "Competitive rates with transparent pricing and no hidden charges.",
    icon: "BadgeIndianRupee"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Excellent service! The Golden Triangle tour was perfectly organized. Our driver was professional and the accommodation was top-notch.",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Chokho Safar made our Rajasthan trip memorable. From desert safari to palace tours, everything was amazing!",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Highly recommended! Professional service, comfortable vehicles, and great value for money. Will definitely book again.",
    date: "January 2024"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 5,
    text: "As an international tourist, I was impressed by their hospitality and attention to detail. Rajasthan was magical!",
    date: "December 2023"
  }
];

export const faqs = [
  {
    id: 1,
    question: "What types of tour packages do you offer?",
    answer: "We offer customized tour packages including the Golden Triangle (Delhi-Agra-Jaipur), Rajasthan Royal Heritage tours, Desert & Wildlife adventures, and complete Rajasthan experiences. All packages can be tailored to your preferences."
  },
  {
    id: 2,
    question: "Do you provide pick-up and drop services?",
    answer: "Yes, we provide convenient pick-up and drop services from airports, railway stations, hotels, and your desired locations across all major cities."
  },
  {
    id: 3,
    question: "Are your drivers experienced and licensed?",
    answer: "Absolutely! All our drivers are experienced, licensed, and well-trained. They have extensive knowledge of routes and tourist destinations."
  },
  {
    id: 4,
    question: "Can I customize my tour package?",
    answer: "Yes, we specialize in creating customized itineraries based on your interests, budget, duration, and preferred destinations. Contact us to discuss your requirements."
  },
  {
    id: 5,
    question: "What is included in the tour package price?",
    answer: "Our packages typically include transportation, accommodation, breakfast, sightseeing, and driver allowances. Specific inclusions vary by package and can be customized."
  },
  {
    id: 6,
    question: "Do you arrange hotel bookings?",
    answer: "Yes, we arrange accommodation ranging from budget hotels to luxury heritage properties. We can book hotels according to your preferences and budget."
  }
];
