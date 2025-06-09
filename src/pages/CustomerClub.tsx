
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Gift, 
  Star, 
  Users, 
  ShoppingCart, 
  Trophy, 
  CreditCard,
  UserPlus,
  CheckCircle
} from 'lucide-react';

const CustomerClub = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    address: ''
  });

  const benefits = [
    {
      icon: Gift,
      title: 'تخفیف ویژه',
      description: 'تا 20% تخفیف بر روی تمامی محصولات'
    },
    {
      icon: Star,
      title: 'امتیاز خرید',
      description: 'دریافت امتیاز برای هر خرید و استفاده در خریدهای بعدی'
    },
    {
      icon: ShoppingCart,
      title: 'اولویت سفارش',
      description: 'اولویت در تحویل سفارشات و دسترسی به محصولات جدید'
    },
    {
      icon: Trophy,
      title: 'جوایز ویژه',
      description: 'شرکت در قرعه‌کشی‌های ماهانه و دریافت جوایز'
    }
  ];

  const membershipLevels = [
    {
      title: 'برنزی',
      minPurchase: '5 میلیون تومان',
      discount: '5%',
      benefits: ['تخفیف 5%', 'پشتیبانی تلفنی', 'اطلاع از محصولات جدید'],
      color: 'from-amber-600 to-amber-800'
    },
    {
      title: 'نقره‌ای',
      minPurchase: '20 میلیون تومان',
      discount: '10%',
      benefits: ['تخفیف 10%', 'ارسال رایگان', 'مشاوره تخصصی', 'امتیاز مضاعف'],
      color: 'from-gray-400 to-gray-600'
    },
    {
      title: 'طلایی',
      minPurchase: '50 میلیون تومان',
      discount: '15%',
      benefits: ['تخفیف 15%', 'ارسال فوری', 'پشتیبانی اختصاصی', 'تضمین قیمت'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'الماسی',
      minPurchase: '100 میلیون تومان',
      discount: '20%',
      benefits: ['تخفیف 20%', 'مدیر حساب اختصاصی', 'شرایط پرداخت ویژه', 'دسترسی VIP'],
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center">
                <Users size={40} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              باشگاه مشتریان مستحکم جنوب
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              عضو شوید و از مزایای ویژه، تخفیفات استثنایی و خدمات اختصاصی بهره‌مند شوید
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              مزایای عضویت در باشگاه مشتریان
            </h2>
            <p className="text-xl text-muted-foreground">
              با عضویت در باشگاه مشتریان از این مزایا بهره‌مند شوید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Levels */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              سطوح عضویت
            </h2>
            <p className="text-xl text-muted-foreground">
              بر اساس میزان خرید، از سطوح مختلف عضویت بهره‌مند شوید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipLevels.map((level, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${level.color}`}></div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{level.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-2">حداقل خرید سالانه:</p>
                  <p className="font-bold text-lg">{level.minPurchase}</p>
                  <div className="text-3xl font-bold text-primary mt-4">{level.discount}</div>
                  <p className="text-sm text-muted-foreground">تخفیف</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2 flex items-center justify-center gap-2">
                  <UserPlus className="text-primary" size={28} />
                  ثبت‌نام در باشگاه مشتریان
                </CardTitle>
                <p className="text-muted-foreground">
                  اطلاعات خود را وارد کنید تا در باشگاه مشتریان عضو شوید
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">نام و نام خانوادگی *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="نام کامل خود را وارد کنید"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">نام شرکت</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="نام شرکت (اختیاری)"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">شماره تماس *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="09123456789"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ایمیل</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">آدرس کامل *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="آدرس کامل خود را وارد کنید"
                      required
                    />
                  </div>

                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CreditCard className="text-primary" size={20} />
                      مزایای فوری عضویت:
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={14} />
                        تخفیف 5% برای اولین خرید
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={14} />
                        اطلاع‌رسانی قیمت‌های ویژه
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={14} />
                        مشاوره رایگان برای انتخاب محصول
                      </li>
                    </ul>
                  </div>

                  <Button type="submit" className="w-full text-lg py-6">
                    ثبت‌نام در باشگاه مشتریان
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">سوالی دارید؟</h2>
          <p className="text-xl mb-8 opacity-90">
            تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8">
            021-33334444
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerClub;
