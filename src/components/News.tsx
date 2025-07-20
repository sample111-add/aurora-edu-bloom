import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Revolutionary AI Course Launch',
      excerpt: 'Introducing our comprehensive AI and Machine Learning program designed for the next generation of tech innovators.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      date: '2024-01-15',
      author: 'Dr. Sarah Chen',
      readTime: '5 min read',
      category: 'Programs',
      featured: true
    },
    {
      id: 2,
      title: 'Student Success Story: From Bootcamp to Tech Lead',
      excerpt: 'Follow Maria Rodriguez\'s journey from our web development bootcamp to becoming a senior tech lead at a Fortune 500 company.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      date: '2024-01-12',
      author: 'James Wilson',
      readTime: '8 min read',
      category: 'Success Stories',
      featured: false
    },
    {
      id: 3,
      title: 'Partnership with Leading Tech Companies',
      excerpt: 'We\'re excited to announce new partnerships with Google, Microsoft, and Amazon for exclusive internship opportunities.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      date: '2024-01-10',
      author: 'Michael Foster',
      readTime: '3 min read',
      category: 'Partnerships',
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="news" className="py-24 bg-muted/30">
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
            Latest <span className="text-gradient">News & Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments, success stories, and exciting 
            announcements from our educational community.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`group cursor-pointer ${
                article.featured ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div className="bento-card h-full">
                {/* Article Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      article.featured ? 'h-64' : 'h-48'
                    }`}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Featured Badge */}
                  {article.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Article Content */}
                <div className="space-y-4 flex-1">
                  <h3 className={`font-display font-bold group-hover:text-primary transition-colors ${
                    article.featured ? 'text-2xl' : 'text-xl'
                  }`}>
                    {article.title}
                  </h3>
                  
                  <p className={`text-muted-foreground ${
                    article.featured ? 'text-base' : 'text-sm'
                  }`}>
                    {article.excerpt}
                  </p>
                  
                  {/* Article Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="mt-6">
                  <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to stay updated with all our latest news and events?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover-glow px-8">
              View All Articles
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;