import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProgramCard from '@/components/ProgramCard.jsx';

import education from "../gallery/education.jpeg";
import nutrition from "../gallery/nutrition.jpeg";
import activity from "../gallery/activity.jpeg";

const OurProgramsPage = () => {
  const programs = [
    {
      title: 'Education & Discipline',
      description:
        'We provide comprehensive formal education combined with strong moral values. A key part of our curriculum includes daily Yoga sessions and rigorous discipline training to build strong, resilient character in all 140 resident students.',
      image: education,
      impactMetrics: [
        { value: 'Over 140', label: 'Resident students' },
        { value: 'Daily', label: 'Yoga & fitness' }
      ]
    },

    {
      title: 'Nutrition & Care',
      description:
        'Proper physical development requires consistent nourishment. Our facility prepares and serves wholesome, nutritious meals daily to ensure every child has the energy required for their studies and physical activities.',
      image: nutrition,
      impactMetrics: [
        { value: '100%', label: 'Dietary needs met' },
        { value: '3', label: 'Meals daily' }
      ]
    },

    {
      title: 'Skill Development & Extracurriculars',
      description:
        'Beyond academics, we focus on practical skills and teamwork. Students engage in various physical and creative activities, notably including specialized marching band practice used to honor and welcome guests to our ashram.',
      image: activity,
      impactMetrics: [
        { value: 'Weekly', label: 'Marching practice' },
        { value: 'Active', label: 'Team participation' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Programs - Gokul Ashram Shala</title>

        <meta
          name="description"
          content="Explore our core programs: Education, Nutrition, and Skill Development, designed to provide holistic care for the children at Gokul Ashram Shala."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">

          <section className="py-24 bg-muted/50 border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Focused Areas of Development
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our focused approach ensures that every resident child receives the exact balance of academic instruction, physical health, and community involvement they need to thrive.
                </p>
              </motion.div>

            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {programs.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                  >
                    <ProgramCard
                      title={program.title}
                      description={program.description}
                      image={program.image}
                      impactMetrics={program.impactMetrics}
                    />
                  </motion.div>
                ))}

              </div>

            </div>
          </section>

        </main>

        <Footer />

      </div>

    </>
  );
};

export default OurProgramsPage;