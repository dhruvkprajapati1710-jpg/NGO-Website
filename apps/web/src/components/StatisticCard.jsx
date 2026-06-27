import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatisticCard = ({ icon: Icon, value, label, description }) => {
  return (
    <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <div className="text-4xl font-bold text-foreground mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {value}
        </div>
        <div className="text-sm font-semibold text-foreground mb-2">{label}</div>
        {description && (
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatisticCard;