import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const DonationCard = ({ amount, description, benefits, isPopular, onSelect }) => {
  return (
    <Card className={`relative transition-all duration-300 hover:shadow-lg ${isPopular ? 'ring-2 ring-primary scale-105' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="text-sm font-medium text-muted-foreground mb-2">Donate</div>
          <div className="text-4xl font-bold text-foreground mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
            ₹{amount.toLocaleString()}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        
        {benefits && benefits.length > 0 && (
          <ul className="space-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Button 
          onClick={onSelect} 
          className="w-full"
          variant={isPopular ? "default" : "outline"}
        >
          Select Amount
        </Button>
      </CardContent>
    </Card>
  );
};

export default DonationCard;