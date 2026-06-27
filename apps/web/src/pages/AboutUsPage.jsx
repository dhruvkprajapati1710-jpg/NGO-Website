import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent } from '@/components/ui/card';

import bhavesh from "../gallery/bhavesh.jpeg";
import kaushik from "../gallery/kaushik.jpeg";
import ankur from "../gallery/ankur.jpeg";
import darshan from "../gallery/darshan.jpeg";
import dipak from "../gallery/dipak.jpeg";

const AboutUsPage = () => {
  const teamMembers = [
    {
      image: bhavesh,
      name: 'Prajapati Bhaveshkumar Manilal',
      role: 'Head / Director',
      doj: '15-01-2005',
      id: '10202740'
    },
    {
      image: kaushik,
      name: 'Patel Kaushikkumar Rameshbhai',
      role: 'Administrator',
      doj: '03-01-1988',
      id: '10202741'
    },
    {
      image: ankur,
      name: 'Patel Ankurkumar Gunavbhai',
      role: 'Staff Member',
      doj: '21-10-2006',
      id: '10202743'
    },
    {
      image: darshan,
      name: 'Patel Darshankumar Sureshbhai',
      role: 'Staff Member',
      doj: '05-05-2016',
      id: '10233476'
    },
    {
      image: dipak,
      name: 'Patel Dipakbhai Babubhai',
      role: 'Staff Member',
      doj: '01-06-2016',
      id: '10233497'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Gokul Ashram Shala</title>
        <meta
          name="description"
          content="Learn about Gokul Ashram Shala's history, mission, and the team dedicated to providing hope and education to underprivileged children in Gota, Ahmedabad."
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
                  Our History and Mission
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Founded in 1989, Gokul Ashram Shala began with a simple but profound vision:
                  that every child deserves a home and a bright future. We strive to ensure that
                  every destitute and underprivileged child has access to quality education,
                  proper nutrition, discipline, and a safe place to call home.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                    How We Started
                  </h2>

                  <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Years ago, People Welfare Trust established Gokul Ashram Shala with the aim of providing care and education to children who were not fortunate enough to have parental support.
                    </p>

                    <p>
                      Over the years, we have developed efficient infrastructure, including smart classrooms, sports facilities, and creative learning spaces.
                    </p>

                    <p>
                      Today, we proudly serve hundreds of children and provide not only formal education but also a complete ecosystem of care, discipline, physical fitness, and moral values.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src="https://horizons-cdn.hostinger.com/e981952e-6e26-4893-9aa9-b1dde5133395/whatsapp-image-2026-06-21-at-7.35.21-pm-pJVRk.jpeg"
                    alt="Community gathering at Gokul Ashram Shala"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>
                    <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Our Team
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The dedicated individuals who work tirelessly to ensure the
                  smooth operation of the ashram and the well-being of our children.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
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
                    <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 border-none shadow-sm">
                      <CardContent className="p-8">

                        <div className="mb-6 flex justify-center">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-36 h-36 rounded-full object-cover border-4 border-secondary shadow-lg"
                          />
                        </div>

                        <h3 className="text-2xl font-bold text-center mb-2 text-foreground">
                          {member.name}
                        </h3>

                        <p className="text-base font-semibold text-secondary text-center mb-8">
                          {member.role}
                        </p>

                        <div className="space-y-4">

                          <div className="flex items-center justify-between bg-muted/50 rounded-xl px-4 py-3">
                            <span className="text-muted-foreground font-medium">
                              Date of Joining
                            </span>

                            <span className="font-semibold text-foreground">
                              {member.doj}
                            </span>
                          </div>

                          <div className="flex items-center justify-between bg-muted/50 rounded-xl px-4 py-3">
                            <span className="text-muted-foreground font-medium">
                              Employee ID
                            </span>

                            <span className="font-semibold text-foreground">
                              {member.id}
                            </span>
                          </div>

                        </div>

                      </CardContent>
                    </Card>
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

export default AboutUsPage;