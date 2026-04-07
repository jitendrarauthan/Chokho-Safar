import React from 'react';
import { Badge } from './ui/badge';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1746106328500-8edb0a404d68",
    title: "Hawa Mahal, Jaipur"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1715628256203-6f8a5c9adaac",
    title: "Lake Pichola, Udaipur"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1602858659965-ea6f743b7679",
    title: "Jaisalmer Desert"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1651516725197-9ed18b572abe",
    title: "Mehrangarh Fort, Jodhpur"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1769718460805-97642006a6bc",
    title: "Taj Mahal, Agra"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1715628255013-153b74854aa0",
    title: "City Palace, Udaipur"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1670254812851-e59013163aee",
    title: "Amber Fort, Jaipur"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1603726378246-cabded0a2407",
    title: "Camel Safari"
  }
];

export const Gallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-1">
            Our Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Captured Moments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the beauty of Rajasthan through our lens. These snapshots showcase the magnificent destinations we cover.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
