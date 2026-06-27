import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Map
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary fill-primary" />
              <span className="text-lg font-bold text-foreground">
                Gokul Ashram Shala
              </span>
            </div>

            <p className="text-sm leading-relaxed">
              Nearby Rasam Hotel, Sarkhej-Gandhinagar Highway,
              Opp. Radhakrishnan Temple, Vasant Nagar,
              Gota, Ahmedabad, Gujarat 382481
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/programs"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Our Programs
                </Link>
              </li>

              <li>
                <Link
                  to="/help"
                  className="hover:text-primary transition-colors duration-200"
                >
                  How to Help
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Contact Info
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  Nearby Rasam Hotel, Sarkhej-Gandhinagar Highway,
                  Opp. Radhakrishnan Temple, Vasant Nagar,
                  Gota, Ahmedabad, Gujarat 382481
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="tel:+919725888201"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +91 9725888201
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a
                  href="mailto:info@gokulashramshala.org"
                  className="hover:text-primary transition-colors duration-200"
                >
                  info@gokulashramshala.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Follow Us
            </h3>

            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1LcMwiGnaJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/gokulashramshala/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* Google Maps */}
              <a
                href="https://maps.app.goo.gl/zg4hT47oN9yQamCq9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Location"
              >
                <Map className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 flex justify-center items-center text-sm">
          <p>
            &copy; 2026 Gokul Ashram Shala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;