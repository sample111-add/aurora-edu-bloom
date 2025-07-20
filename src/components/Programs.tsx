import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users2, Building, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Senior Da\'wa College',
      description: 'Advanced education for students post-10th standard, combining Islamic education with robust school curriculum. Students complete Plus One and Plus Two studies.',
      icon: GraduationCap,
      duration: '2 years',
      students: '200+',
      level: 'Advanced',
      featured: true,
      size: 'large',
    },
    {
      id: 2,
      title: 'Junior Da\'wa College',
      description: 'Comprehensive educational experience for students after 7th standard, blending Islamic education with standard school curriculum.',
      icon: BookOpen,
      duration: '3 years',
      students: '150+',
      level: 'Intermediate',
      size: 'medium',
    },
    {
      id: 3,
      title: 'Arts College',
      description: 'Recognized for academic excellence with highly qualified faculty and focused curricular teachings.',
      icon: Building,
      duration: '3 years',
      students: '300+',
      level: 'Advanced',
      size: 'medium',
    },
    {
      id: 4,
      title: 'Secondary Madrasa',
      description: 'Islamic educational institution providing religious and secular education including Quranic studies, Hadith, Fiqh, and modern subjects.',
      icon: Users2,
      duration: '5 years',
      students: '250+',
      level: 'Foundation',
      size: 'small',
    },
  ];

  const getGridClasses = (size: string, index: number) => {
    if (size === 'large') return 'col-span-2 row-span-2';
    if (size === 'medium') return 'col-span-2 row-span-1';
    return 'col-span-1 row-span-1';
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Foundation': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="programs" className="py-24 bg-muted/30">
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
            Our <span className="text-gradient">Educational Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational programs that integrate Islamic knowledge with modern academic learning, 
            preparing students for both religious and professional excellence.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${getGridClasses(program.size, index)} bento-card group cursor-pointer`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  program.featured ? 'bg-gradient-primary' : 'bg-gradient-accent'
                }`}>
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(program.level)}`}>
                  {program.level}
                </span>
              </div>

              {/* Card Content */}
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className={`font-display font-bold ${
                    program.size === 'large' ? 'text-2xl' : 'text-xl'
                  } mb-2 group-hover:text-primary transition-colors`}>
                    {program.title}
                  </h3>
                  <p className={`text-muted-foreground ${
                    program.size === 'large' ? 'text-base' : 'text-sm'
                  }`}>
                    {program.description}
                  </p>
                </div>

                {/* Program Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {program.students}
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className={`mt-6 ${program.size === 'large' ? 'block' : 'hidden md:block'}`}>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  Learn More
                </Button>
              </div>

              {/* Featured Badge */}
              {program.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our integrated educational system?
          </p>
          <Button size="lg" className="bg-gradient-primary hover-glow px-8">
            Apply Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;