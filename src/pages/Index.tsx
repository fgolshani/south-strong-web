
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  Star,
  Phone,
  Factory
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: 'کیفیت بالا',
      description: 'تولید با بهترین مواد اولیه و تکنولوژی روز دنیا'
    },
    {
      icon: Award,
      title: 'استاندارد بین‌المللی',
      description: 'دارای گواهی‌نامه‌های معتبر ملی و بین‌المللی'
    },
    {
      icon: Users,
      title: 'تیم متخصص',
      description: 'کادری مجرب با بیش از 20 سال تجربه'
    },
    {
      icon: Clock,
      title: 'تحویل سریع',
      description: 'ارسال سریع و ایمن در کمترین زمان ممکن'
    }
  ];

  const products = [
    {
      title: 'لوله فشاری PVC',
      description: 'مناسب برای انتقال آب تحت فشار',
      image: '/placeholder.svg?height=200&width=300&text=لوله+فشاری',
      specs: ['قطر 20 تا 630 میلی‌متر', 'فشار کاری تا 16 بار', 'مقاوم در برابر خوردگی']
    },
    {
      title: 'لوله زهکشی PVC',
      description: 'برای سیستم‌های فاضلاب و زهکشی',
      image: '/placeholder.svg?height=200&width=300&text=لوله+زهکشی',
      specs: ['قطر 110 تا 630 میلی‌متر', 'مقاوم در برابر مواد شیمیایی', 'نصب آسان']
    },
    {
      title: 'لوله آبیاری PVC',
      description: 'ویژه سیستم‌های آبیاری کشاورزی',
      image: '/placeholder.svg?height=200&width=300&text=لوله+آبیاری',
      specs: ['قطر 63 تا 315 میلی‌متر', 'مقاوم در برابر اشعه UV', 'عمر طولانی']
    }
  ];

  const stats = [
    { number: '+1000', label: 'مشتری راضی' },
    { number: '20+', label: 'سال تجربه' },
    { number: '+50', label: 'نوع محصول' },
    { number: '24/7', label: 'پشتیبانی' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  شرکت <span className="text-primary">مستحکم جنوب</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  پیشرو در تولید لوله‌های PVC با کیفیت بالا و استاندارد
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  با بیش از 20 سال تجربه در تولید انواع لوله‌های PVC، ما متعهد به ارائه بهترین کیفیت 
                  و خدمات برای مشتریان عزیز خود هستیم.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/products">
                    مشاهده محصولات
                    <ArrowLeft className="mr-2" size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contact">
                    تماس با ما
                    <Phone className="mr-2" size={20} />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <span className="text-muted-foreground">رضایت 100% مشتریان</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-primary-foreground">
                <Factory size={200} className="mx-auto opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">تولید با کیفیت</h3>
                    <p className="text-lg">استاندارد بین‌المللی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              چرا مستحکم جنوب؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ما با تکیه بر تجربه، تکنولوژی و کیفیت، بهترین محصولات را برای شما تولید می‌کنیم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              محصولات ما
            </h2>
            <p className="text-xl text-muted-foreground">
              انواع لوله‌های PVC با کیفیت بالا و استاندارد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center gap-2">
                        <CheckCircle className="text-primary" size={16} />
                        <span className="text-sm text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/products">
                مشاهده تمام محصولات
                <ArrowLeft className="mr-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            آماده همکاری با شما هستیم
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            برای دریافت مشاوره رایگان و قیمت‌های ویژه با ما تماس بگیرید
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              <Link to="/contact">
                تماس با ما
                <Phone className="mr-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/customer-club">
                عضویت در باشگاه مشتریان
                <Users className="mr-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
