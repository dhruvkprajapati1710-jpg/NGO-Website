import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent } from '@/components/ui/card';

const HowToHelpPage = () => {
  return (
    <>
      <Helmet>
        <title>How to Help - Gokul Ashram Shala</title>
        <meta name="description" content="Discover how you can make a difference at Gokul Ashram Shala by sharing meals and celebrating special occasions with our children." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Make a difference today</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your presence and generosity can bring immense joy to the children at the ashram.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="shadow-xl border-t-4 border-t-primary bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-10 md:p-16">
                    <div className="text-center space-y-8">
                      <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-2">
                        <span className="text-4xl">🙏</span>
                      </div>
                      
                      <div className="prose prose-lg mx-auto text-foreground">
                        <p className="text-xl md:text-2xl leading-loose font-medium" style={{ lineHeight: '1.8' }}>
                          ગોકુળ આશ્રમશાળા ગોતા જે ગોતા હાઉસિંગ એસ. જી હાઇવે નજીક આવેલી છે જેમાં ૧૪૦ નિરાધાર અને જરૂરિયાતવાળા તકવાંચિત તથા અતિ પછાત વર્ગ ના બાળકો નિવાસ કરીને અભ્યાસ કરે છે જેમને તમે ઘણી રીતે મદદરૂપ થઈ શકો છો જેમ કે તમારા પરિવારમાં કોઈની બર્થ ડે હોય અથવા કોઈને તિથિ હોય અથવા કોઈને બાળકોને પ્રેમથી જમાડવા હોય તો તમે સંપર્ક કરી શકો છો
                        </p>
                      </div>

                      <div className="mt-12 pt-10 border-t border-border/50">
                        <p className="text-lg text-muted-foreground mb-3">સંપર્ક કરો:</p>
                        <p className="text-2xl font-bold text-foreground">આચાર્ય શ્રી પ્રજાપતિ ભવેશકુમાર</p>
                        <p className="text-3xl font-black text-primary mt-2 flex items-center justify-center gap-3">
                          <span className="text-2xl">📞</span> 
                          <a href="tel:+919725888201" className="hover:underline">+91 9725888201</a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HowToHelpPage;