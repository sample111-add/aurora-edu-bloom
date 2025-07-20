import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Play, Image as ImageIcon, Video } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      alt: 'Students working on laptops',
      title: 'Collaborative Learning',
      category: 'Campus Life'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=800&fit=crop',
      alt: 'Programming on monitor',
      title: 'Coding Bootcamp',
      category: 'Programs'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=500&fit=crop',
      alt: 'Student using laptop',
      title: 'Online Learning',
      category: 'Remote Education'
    },
    {
      id: 4,
      type: 'video',
      src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=900&h=600&fit=crop',
      alt: 'Code on screen',
      title: 'Development Workshop',
      category: 'Workshops'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=700&fit=crop',
      alt: 'Group presentation',
      title: 'Project Showcase',
      category: 'Events'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
      alt: 'Circuit board macro',
      title: 'Electronics Lab',
      category: 'Labs'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=800&fit=crop',
      alt: 'Matrix digital art',
      title: 'Digital Innovation',
      category: 'Technology'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=700&h=600&fit=crop',
      alt: 'Modern building',
      title: 'Campus Architecture',
      category: 'Campus'
    }
  ];

  const categories = ['All', ...Array.from(new Set(mediaItems.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold mb-6">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our vibrant campus life, innovative programs, and the success stories 
            that define our educational community.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-white shadow-glass'
                  : 'bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="masonry-item group cursor-pointer"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-glass transition-all duration-300">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-display font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                  
                  {/* Media Type Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                      {item.type === 'video' ? (
                        <Play className="w-5 h-5 text-white" />
                      ) : (
                        <ImageIcon className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-6"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white font-display font-semibold text-xl mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-white/80">{selectedMedia.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;