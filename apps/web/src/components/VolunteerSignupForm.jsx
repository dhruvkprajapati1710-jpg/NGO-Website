import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import pb from '@/lib/pocketbaseClient';
import { Loader2 } from 'lucide-react';

const VolunteerSignupForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    skills: [],
    availability: [],
    message: ''
  });

  const skillOptions = [
    { value: 'teaching', label: 'Teaching' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'mentoring', label: 'Mentoring' },
    { value: 'nutrition', label: 'Nutrition' },
    { value: 'other', label: 'Other' }
  ];

  const availabilityOptions = [
    { value: 'weekdays', label: 'Weekdays' },
    { value: 'weekends', label: 'Weekends' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await pb.collection('volunteer_signups').create(formData, { $autoCancel: false });
      
      toast({
        title: "Thank you for volunteering",
        description: "We've received your application and will contact you soon."
      });

      setFormData({
        full_name: '',
        email: '',
        phone: '',
        skills: [],
        availability: [],
        message: ''
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name *</Label>
          <Input
            id="full_name"
            type="text"
            required
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className="text-foreground"
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="text-foreground"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="text-foreground"
          placeholder="+91 98765 43210"
        />
      </div>

      <div className="space-y-3">
        <Label>Skills</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skillOptions.map((skill) => (
            <div key={skill.value} className="flex items-center space-x-2">
              <Checkbox
                id={`skill-${skill.value}`}
                checked={formData.skills.includes(skill.value)}
                onCheckedChange={() => handleCheckboxChange('skills', skill.value)}
              />
              <label
                htmlFor={`skill-${skill.value}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {skill.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Label>Availability</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {availabilityOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <Checkbox
                id={`availability-${option.value}`}
                checked={formData.availability.includes(option.value)}
                onCheckedChange={() => handleCheckboxChange('availability', option.value)}
              />
              <label
                htmlFor={`availability-${option.value}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="text-foreground min-h-[120px]"
          placeholder="Tell us why you want to volunteer and how you can help..."
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </Button>
    </form>
  );
};

export default VolunteerSignupForm;