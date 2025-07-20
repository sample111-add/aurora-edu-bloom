import { motion } from 'framer-motion';
import { Users, Award, Zap, Target } from 'lucide-react';
// Using direct Unsplash URL instead of import

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience.',
    },
    {
      icon: Award,
      title: 'Certified Programs',
      description: 'Earn recognized certifications that boost your career prospects.',
    },
    {
      icon: Zap,
      title: 'Interactive Learning',
      description: 'Engage with cutting-edge tools and immersive learning experiences.',
    },
    {
      icon: Target,
      title: 'Career Focused',
      description: 'Curriculum designed to meet current industry demands and trends.',
    },
  ];

  const achievements = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '98%', label: 'Student Satisfaction' },
    { number: '500+', label: 'Partner Companies' },
    { number: '50K+', label: 'Graduates' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

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
            About <span className="text-gradient">EduPlatform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming education through innovation, technology, and a deep commitment 
            to student success. We're building the future of learning, one student at a time.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold">
                Pioneering the Future of Education
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform represents a paradigm shift in how education is delivered and experienced. 
                We combine cutting-edge technology with proven pedagogical methods to create learning 
                experiences that are both engaging and effective.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From personalized learning paths to industry-relevant curricula, we ensure every 
                student has the tools and support they need to succeed in today's rapidly evolving world.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-display font-semibold text-lg">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop&crop=faces&auto=format"
                alt="Modern learning environment"
                className="w-full h-96 object-cover rounded-2xl shadow-elegant"
              />
              
              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 glass-effect rounded-2xl p-6 max-w-xs"
              >
                <h4 className="font-display font-bold text-lg mb-2">Innovation Hub</h4>
                <p className="text-sm text-muted-foreground">
                  State-of-the-art facilities designed for collaborative learning and creativity.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center space-y-2"
            >
              <div className="text-4xl lg:text-5xl font-display font-bold text-gradient">
                {achievement.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;