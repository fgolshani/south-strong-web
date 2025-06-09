
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Filter, Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'همه محصولات' },
    { id: 'pressure', name: 'لوله‌های فشاری' },
    { id: 'drainage', name: 'لوله‌های زهکشی' },
    { id: 'irrigation', name: 'لوله‌های آبیاری' },
    { id: 'fittings', name: 'اتصالات' }
  ];

  const products = [
    {
      id: 1,
      title: 'لوله فشاری PVC کلاس 6',
      category: 'pressure',
      description: 'مناسب برای انتقال آب تحت فشار در شبکه‌های توزیع آب',
      image: '/placeholder.svg?height=200&width=300&text=لوله+فشاری+کلاس+6',
      specs: ['قطر: 20-630 میلی‌متر', 'فشار کاری: 6 بار', 'استاندارد: ISIRI 15154'],
      price: 'تماس بگیرید',
      features: ['مقاومت بالا در برابر فشار', 'عمر طولانی', 'مقاوم در برابر خوردگی']
    },
    {
      id: 2,
      title: 'لوله فشاری PVC کلاس 10',
      category: 'pressure',
      description: 'برای کاربردهای سنگین و فشار بالا',
      image: '/placeholder.svg?height=200&width=300&text=لوله+فشاری+کلاس+10',
      specs: ['قطر: 20-400 میلی‌متر', 'فشار کاری: 10 بار', 'استاندارد: ISIRI 15154'],
      price: 'تماس بگیرید',
      features: ['مقاومت فوق‌العاده بالا', 'کیفیت ممتاز', 'ضمانت 20 ساله']
    },
    {
      id: 3,
      title: 'لوله زهکشی PVC',
      category: 'drainage',
      description: 'برای سیستم‌های فاضلاب و زهکشی ساختمان',
      image: '/placeholder.svg?height=200&width=300&text=لوله+زهکشی',
      specs: ['قطر: 110-630 میلی‌متر', 'نوع اتصال: سوکتی', 'استاندارد: ISIRI 5347'],
      price: 'تماس بگیرید',
      features: ['نصب آسان', 'مقاوم در برابر مواد شیمیایی', 'سطح داخلی صاف']
    },
    {
      id: 4,
      title: 'لوله آبیاری PVC',
      category: 'irrigation',
      description: 'ویژه سیستم‌های آبیاری کشاورزی و فضای سبز',
      image: '/placeholder.svg?height=200&width=300&text=لوله+آبیاری',
      specs: ['قطر: 63-315 میلی‌متر', 'فشار کاری: 4-6 بار', 'ضد UV'],
      price: 'تماس بگیرید',
      features: ['مقاوم در برابر اشعه UV', 'مناسب آب و هوای مختلف', 'وزن سبک']
    },
    {
      id: 5,
      title: 'زانویی PVC 90 درجه',
      category: 'fittings',
      description: 'برای تغییر مسیر لوله‌ها',
      image: '/placeholder.svg?height=200&width=300&text=زانویی+90+درجه',
      specs: ['قطر: 20-315 میلی‌متر', 'زاویه: 90 درجه', 'نوع اتصال: سوکتی'],
      price: 'تماس بگیرید',
      features: ['نصب آسان', 'مقاومت بالا', 'کیفیت عالی']
    },
    {
      id: 6,
      title: 'سه راهی PVC',
      category: 'fittings',
      description: 'برای انشعاب گیری از خط اصلی',
      image: '/placeholder.svg?height=200&width=300&text=سه+راهی',
      specs: ['قطر: 20-200 میلی‌متر', 'نوع: سه راهی مساوی', 'نوع اتصال: سوکتی'],
      price: 'تماس بگیرید',
      features: ['طراحی بهینه', 'جریان یکنواخت', 'عمر طولانی']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              محصولات ما
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مجموعه کاملی از لوله‌ها و اتصالات PVC با کیفیت بالا و استاندارد برای تمامی کاربردها
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-muted-foreground" size={20} />
              <span className="font-medium">دسته‌بندی:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-sm"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="جستجو در محصولات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-10 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                  
                  {/* Specifications */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2 text-foreground">مشخصات فنی:</h4>
                    <div className="space-y-1">
                      {product.specs.map((spec, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="text-primary" size={14} />
                          <span className="text-xs text-muted-foreground">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2 text-foreground">ویژگی‌ها:</h4>
                    <div className="space-y-1">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="text-green-500" size={14} />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <Button size="sm">درخواست قیمت</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">محصولی با این مشخصات یافت نشد.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">سوالی در مورد محصولات دارید؟</h2>
          <p className="text-xl mb-8 opacity-90">
            تیم متخصص ما آماده پاسخگویی و ارائه مشاوره رایگان است
          </p>
          <Button variant="secondary" size="lg" className="text-lg px-8">
            تماس با کارشناسان فروش
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
