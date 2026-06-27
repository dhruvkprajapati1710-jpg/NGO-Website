import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import pb from '@/lib/pocketbaseClient';
import { Loader2 } from 'lucide-react';
import DonationCard from './DonationCard.jsx';

const DonationPaymentForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    donor_name: '',
    donor_email: '',
    payment_method: 'card'
  });

  const predefinedAmounts = [
    {
      amount: 500,
      description: 'Feed a child for a week',
      benefits: ['Nutritious meals', 'Weekly food supplies']
    },
    {
      amount: 1000,
      description: 'Support education for a month',
      benefits: ['School supplies', 'Books and materials', 'Learning resources'],
      isPopular: true
    },
    {
      amount: 2500,
      description: 'Healthcare support',
      benefits: ['Medical checkups', 'Medicines', 'Health monitoring']
    },
    {
      amount: 5000,
      description: 'Comprehensive care package',
      benefits: ['Education', 'Nutrition', 'Healthcare', 'Emotional support']
    }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalAmount = selectedAmount || parseFloat(customAmount);

    if (!finalAmount || finalAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      const donationData = {
        donor_name: formData.donor_name,
        donor_email: formData.donor_email,
        amount: finalAmount,
        payment_method: formData.payment_method,
        transaction_id: `TXN${Date.now()}`
      };

      await pb.collection('donations').create(donationData, { $autoCancel: false });

      toast({
        title: "Thank you for your donation",
        description: `Your contribution of ₹${finalAmount.toLocaleString()} will make a real difference. A receipt has been sent to your email.`
      });

      setFormData({
        donor_name: '',
        donor_email: '',
        payment_method: 'card'
      });
      setSelectedAmount(null);
      setCustomAmount('');
    } catch (error) {
      toast({
        title: "Payment failed",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-balance">Choose your donation amount</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {predefinedAmounts.map((option) => (
            <DonationCard
              key={option.amount}
              {...option}
              onSelect={() => handleAmountSelect(option.amount)}
            />
          ))}
        </div>

        <div className="bg-muted rounded-xl p-6">
          <Label htmlFor="custom-amount" className="text-base font-semibold mb-3 block">
            Or enter a custom amount
          </Label>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-muted-foreground">₹</span>
            <Input
              id="custom-amount"
              type="number"
              min="1"
              step="1"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="text-foreground text-lg"
              placeholder="Enter amount"
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="donor_name">Full Name *</Label>
            <Input
              id="donor_name"
              type="text"
              required
              value={formData.donor_name}
              onChange={(e) => setFormData({ ...formData, donor_name: e.target.value })}
              className="text-foreground"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="donor_email">Email *</Label>
            <Input
              id="donor_email"
              type="email"
              required
              value={formData.donor_email}
              onChange={(e) => setFormData({ ...formData, donor_email: e.target.value })}
              className="text-foreground"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label>Payment Method</Label>
          <RadioGroup
            value={formData.payment_method}
            onValueChange={(value) => setFormData({ ...formData, payment_method: value })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="cursor-pointer">Credit/Debit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi" className="cursor-pointer">UPI</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="netbanking" id="netbanking" />
              <Label htmlFor="netbanking" className="cursor-pointer">Net Banking</Label>
            </div>
          </RadioGroup>
        </div>

        <Button type="submit" disabled={loading} className="w-full" size="lg">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            `Donate ₹${(selectedAmount || parseFloat(customAmount) || 0).toLocaleString()}`
          )}
        </Button>
      </form>
    </div>
  );
};

export default DonationPaymentForm;