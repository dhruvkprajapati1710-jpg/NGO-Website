import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProgramCard = ({ title, description, image, impactMetrics, ctaText, onCtaClick }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="flex-1 p-6">
        <h3 className="text-2xl font-semibold mb-3 text-balance">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        {impactMetrics && impactMetrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mt-4">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-muted rounded-xl p-3">
                <div className="text-2xl font-bold text-primary">{metric.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      {ctaText && (
        <CardFooter className="p-6 pt-0 mt-auto">
          <Button onClick={onCtaClick} className="w-full group">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProgramCard;