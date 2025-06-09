
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'تلفن تماس',
      details: ['021-33334444', '021-33335555'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'ایمیل',
      details: ['info@mostahkamjonoob.ir', 'sales@mostahkamjonoob.ir'],
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'آدرس',
      details: ['تهران، شهرک صنعتی البرز', 'خیابان صنعت، پلاک 125'],
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'ساعات کاری',
      details: ['شنبه تا پنج‌شنبه: 8:00 - 17:00', 'جمعه: تعطیل'],
      color: 'text-purple-600'
    }
  ];

  const departments = [
    { name: 'واحد فروش', phone: '021-33334444', email: 'sales@mostahkamjonoob.ir' },
    { name: 'پشتیبانی فنی', phone: '021-33335555', email: 'support@mostahkamjonoob.ir' },
    { name: 'واحد مالی', phone: '021-33336666', email: 'finance@mostahkamjonoob.ir' },
    { name: 'مدیریت', phone: '021-33337777', email: 'manager@mostahkamjonoob.ir' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              تماس با ما
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ما همیشه آماده پاسخگویی به سوالات شما و ارائه بهترین خدمات هستیم
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className={info.color} size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageCircle className="text-primary" size={28} />
                  ارسال پیام
                </CardTitle>
                <p className="text-muted-foreground">
                  پیام خود را برای ما ارسال کنید تا در کوتاه‌ترین زمان پاسخ دهیم
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

                  <div className="space-y-2">
                    <Label htmlFor="subject">موضوع *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="موضوع پیام خود را وارد کنید"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">پیام *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="پیام خود را اینجا بنویسید..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg py-6">
                    <Send className="ml-2" size={20} />
                    ارسال پیام
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-6">
              {/* Departments */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">واحدهای مختلف</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <div key={index} className="border-b border-border pb-4 last:border-b-0">
                        <h4 className="font-semibold mb-2">{dept.name}</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>{dept.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>{dept.email}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">شبکه‌های اجتماعی</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg hover:shadow-lg transition-shadow">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="bg-blue-600 text-white p-3 rounded-lg hover:shadow-lg transition-shadow">
                      <Linkedin size={24} />
                    </a>
                    <a href="#" className="bg-red-600 text-white p-3 rounded-lg hover:shadow-lg transition-shadow">
                      <Youtube size={24} />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    ما را در شبکه‌های اجتماعی دنبال کنید تا از آخرین اخبار و محصولات باخبر شوید
                  </p>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">موقعیت ما روی نقشه</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="text-gray-400 mx-auto mb-2" size={48} />
                      <p className="text-gray-600">نقشه موقعیت</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    تهران، شهرک صنعتی البرز، خیابان صنعت، پلاک 125
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">تماس فوری</h2>
          <p className="text-xl mb-8 opacity-90">
            برای مشاوره فوری و دریافت قیمت تماس بگیرید
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              021-33334444
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              واتساپ: 09123456789
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
