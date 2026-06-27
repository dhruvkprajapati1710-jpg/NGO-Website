import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, BookOpen, Quote } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import StatisticCard from '@/components/StatisticCard.jsx';
import { Card, CardContent } from '@/components/ui/card';
const HomePage = () => {
  const statistics = [{
    icon: Users,
    value: '6000+',
    label: 'Children Served',
    description: 'Providing long-term care and education'
  }, {
    icon: BookOpen,
    value: '3',
    label: 'Active Programs',
    description: 'Education, nutrition, and skill development'
  }];
  const teamTestimonials = [{
    name: 'Prajapati Bhaveshkumar Manilal',
    role: 'Principal',
    story: 'Every day at the ashram is a reminder of human resilience. Watching these over 140 children transform from timid arrivals into confident, capable students through our discipline and care is the greatest privilege of my life.'
  }, {
    name: 'Patel Darshankumar Sureshbhai',
    role: 'Head Teacher',
    story: 'We do not just teach subjects; we build character. Incorporating yoga and daily marching practice has given our students a profound sense of unity, pride, and focus that extends far beyond the classroom walls.'
  }, {
    name: 'Patel Kaushikkumar Rameshbhai',
    role: 'Head Teacher',
    story: 'The support we receive from the surrounding community is heartwarming. When local families choose to celebrate their special days by sharing meals with our children, it bridges gaps and creates a true extended family.'
  }];
  return <>
      <Helmet>
        <title>Gokul Ashram Shala - Providing Hope and Education</title>
        <meta name="description" content="Gokul Ashram Shala provides education, nutrition, and support to underprivileged children in Gota, Ahmedabad. Join us in building brighter futures." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-muted">
              <img src="https://horizons-cdn.hostinger.com/e981952e-6e26-4893-9aa9-b1dde5133395/main-photo-R6VSf.jpeg" alt="Children together at Gokul Ashram Shala" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6
              }}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                    A home, a school, a future
                  </h1>
                  <p className="text-lg md:text-xl text-foreground/90 font-medium leading-relaxed mb-8 max-w-2xl">
                    Located near S.G. Highway in Gota, Ahmedabad, Gokul Ashram Shala is a dedicated residential school providing comprehensive care, discipline, and education to 140 underprivileged and destitute children.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our impact over the years</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A steadfast commitment to uplifting the most vulnerable members of our society through education and continuous support.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {statistics.map((stat, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>
                    <StatisticCard {...stat} />
                  </motion.div>)}
              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Stories of hope and transformation</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Hear directly from the team members who work tirelessly to shape the futures of our children, witnessing daily miracles of growth.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamTestimonials.map((testimonial, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>
                    <Card className="h-full bg-card hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8">
                        <Quote className="h-8 w-8 text-primary/30 mb-6" />
                        <p className="text-card-foreground leading-relaxed mb-8 italic">
                          "{testimonial.story}"
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>)}
              </div>
            </div>
          </section>

          <section className="py-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto">
                <img src="https://horizons-cdn.hostinger.com/e981952e-6e26-4893-9aa9-b1dde5133395/children-GzuNm.jpeg" alt="Educational and developmental programs" className="w-full h-full object-cover" />
              </div>
              <div className="bg-primary text-primary-foreground p-12 md:p-20 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6">Fostering a nurturing environment</h3>
                <p className="text-lg opacity-90 leading-relaxed max-w-lg">
                  At Gokul Ashram Shala, our mission goes beyond textbooks. We ensure that every child is enveloped in an environment that promotes respect, discipline, and emotional well-being, preparing them to face the world with confidence and grace.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
};
export default HomePage;