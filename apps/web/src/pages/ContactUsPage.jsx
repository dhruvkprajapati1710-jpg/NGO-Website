import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent } from '@/components/ui/card';

const ContactUsPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Nearby Rasam Hotel, Gokul ashram shala',
        'Sarkhej - Gandhinagar Hwy, opp. Radhakrishnan Temple',
        'Vasant Nagar, Gota, Ahmedabad, Gujarat 380060'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91 9725888201',
        '(Bhavesh Prajapati)',
      ]
    },
    {
      icon: Clock,
      title: 'Visiting Hours',
      details: [
        'Please contact us in advance to schedule your visit or community meal.'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Gokul Ashram Shala</title>
        <meta name="description" content="Contact Gokul Ashram Shala in Gota, Ahmedabad. Find our address, phone number, and location details." />
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contact information</h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Whether you wish to visit the ashram, sponsor a meal, or learn more about our work, please reach out to us directly via phone or visit our location.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300 bg-card">
                        <CardContent className="p-8 text-center flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                            <info.icon className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="font-bold text-xl mb-4 text-foreground">{info.title}</h3>
                          <div className="space-y-1 w-full">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground text-sm md:text-base">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-border"
                >
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=72.5200%2C23.0900%2C72.5600%2C23.1200&layer=mapnik&marker=23.1050%2C72.5400"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Gokul Ashram Shala Location - Gota, Ahmedabad"
                  ></iframe>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactUsPage;