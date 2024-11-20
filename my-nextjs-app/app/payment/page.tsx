'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get('course')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would process the payment here
    alert('Payment processed successfully!')
  }

  return (
    <div className="max-w-md mx-auto space-y-8 my-4">
      <h1 className="text-3xl font-bold text-accent">Payment</h1>
      <p className="text-muted-foreground">Complete your payment for course ID: {courseId}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" value={formData.name} placeholder='Full Name' onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={formData.email} placeholder='email' onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input id="cardNumber" type='tel' pattern="[0-9\s]{13,19}" maxLength={19} name="cardNumber" value={formData.cardNumber} placeholder='Card Number' onChange={handleChange} required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input id="expiryDate" name="expiryDate" type='month' pattern="\d{2}/\d{2}" placeholder="MM/YY" value={formData.expiryDate} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" name="cvv" type='tel' maxLength={3} value={formData.cvv} placeholder='CVV' onChange={handleChange} required />
          </div>
        </div>
        <Button type="submit" className="w-full">Process Payment</Button>
      </form>
    </div>
  )
}