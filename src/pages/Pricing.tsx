
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Download, Phone, Calculator, TrendingUp } from 'lucide-react';

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('pressure');

  const categories = [
    { id: 'pressure', name: 'لوله‌های فشاری' },
    { id: 'drainage', name: 'لوله‌های زهکشی' },
    { id: 'irrigation', name: 'لوله‌های آبیاری' },
    { id: 'fittings', name: 'اتصالات' }
  ];

  const priceData = {
    pressure: [
      { size: '20 میلی‌متر', class6: '15,000', class10: '18,000', unit: 'متر' },
      { size: '25 میلی‌متر', class6: '22,000', class10: '27,000', unit: 'متر' },
      { size: '32 میلی‌متر', class6: '35,000', class10: '42,000', unit: 'متر' },
      { size: '40 میلی‌متر', class6: '48,000', class10: '58,000', unit: 'متر' },
      { size: '50 میلی‌متر', class6: '67,000', class10: '82,000', unit: 'متر' },
      { size: '63 میلی‌متر', class6: '95,000', class10: '115,000', unit: 'متر' },
      { size: '75 میلی‌متر', class6: '135,000', class10: '165,000', unit: 'متر' },
      { size: '90 میلی‌متر', class6: '185,000', class10: '225,000', unit: 'متر' },
      { size: '110 میلی‌متر', class6: '270,000', class10: '320,000', unit: 'متر' },
      { size: '125 میلی‌متر', class6: '340,000', class10: '410,000', unit: 'متر' }
    ],
    drainage: [
      { size: '110 میلی‌متر', price: '180,000', unit: 'متر', type: 'زهکشی ساده' },
      { size: '125 میلی‌متر', price: '220,000', unit: 'متر', type: 'زهکشی ساده' },
      { size: '160 میلی‌متر', price: '320,000', unit: 'متر', type: 'زهکشی ساده' },
      { size: '200 میلی‌متر', price: '450,000', unit: 'متر', type: 'زهکشی سنگین' },
      { size: '250 میلی‌متر', price: '680,000', unit: 'متر', type: 'زهکشی سنگین' },
      { size: '315 میلی‌متر', price: '980,000', unit: 'متر', type: 'زهکشی سنگین' }
    ],
    irrigation: [
      { size: '63 میلی‌متر', pressure: 'کلاس 4', price: '75,000', unit: 'متر' },
      { size: '75 میلی‌متر', pressure: 'کلاس 4', price: '105,000', unit: 'متر' },
      { size: '90 میلی‌متر', pressure: 'کلاس 4', price: '145,000', unit: 'متر' },
      { size: '110 میلی‌متر', pressure: 'کلاس 6', price: '210,000', unit: 'متر' },
      { size: '125 میلی‌متر', pressure: 'کلاس 6', price: '265,000', unit: 'متر' },
      { size: '160 میلی‌متر', pressure: 'کلاس 6', price: '420,000', unit: 'متر' }
    ],
    fittings: [
      { item: 'زانویی 90 درجه 20mm', price: '8,500', unit: 'عدد' },
      { item: 'زانویی 90 درجه 25mm', price: '12,000', unit: 'عدد' },
      { item: 'زانویی 90 درجه 32mm', price: '18,500', unit: 'عدد' },
      { item: 'سه راهی 20mm', price: '15,000', unit: 'عدد' },
      { item: 'سه راهی 25mm', price: '22,000', unit: 'عدد' },
      { item: 'سه راهی 32mm', price: '32,000', unit: 'عدد' },
      { item: 'کوپلینگ 20mm', price: '6,500', unit: 'عدد' },
      { item: 'کوپلینگ 25mm', price: '9,000', unit: 'عدد' },
      { item: 'کوپلینگ 32mm', price: '13,500', unit: 'عدد' }
    ]
  };

  const discounts = [
    { quantity: 'بیش از 100 متر', discount: '5%' },
    { quantity: 'بیش از 500 متر', discount: '8%' },
    { quantity: 'بیش از 1000 متر', discount: '12%' },
    { quantity: 'بیش از 5000 متر', discount: '15%' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              لیست قیمت محصولات
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              قیمت‌های روز انواع لوله‌ها و اتصالات PVC - آپدیت شده در تاریخ {new Date().toLocaleDateString('fa-IR')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="flex items-center gap-2">
                <Download size={20} />
                دانلود کاتالوگ PDF
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Calculator size={20} />
                محاسبه قیمت پروژه
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Price Alert */}
      <section className="py-4 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-yellow-800">
            <TrendingUp size={20} />
            <span className="font-medium">توجه: قیمت‌ها بر اساس نرخ روز بازار و ممکن است تغییر کند</span>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="text-sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Price Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {selectedCategory === 'pressure' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">قیمت لوله‌های فشاری PVC</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-secondary">
                        <th className="border border-border p-3 text-right">قطر لوله</th>
                        <th className="border border-border p-3 text-center">کلاس 6 (تومان)</th>
                        <th className="border border-border p-3 text-center">کلاس 10 (تومان)</th>
                        <th className="border border-border p-3 text-center">واحد</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceData.pressure.map((item, index) => (
                        <tr key={index} className="hover:bg-secondary/50">
                          <td className="border border-border p-3 font-medium">{item.size}</td>
                          <td className="border border-border p-3 text-center">{item.class6}</td>
                          <td className="border border-border p-3 text-center">{item.class10}</td>
                          <td className="border border-border p-3 text-center">{item.unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedCategory === 'drainage' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">قیمت لوله‌های زهکشی PVC</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-secondary">
                        <th className="border border-border p-3 text-right">قطر لوله</th>
                        <th className="border border-border p-3 text-center">نوع</th>
                        <th className="border border-border p-3 text-center">قیمت (تومان)</th>
                        <th className="border border-border p-3 text-center">واحد</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceData.drainage.map((item, index) => (
                        <tr key={index} className="hover:bg-secondary/50">
                          <td className="border border-border p-3 font-medium">{item.size}</td>
                          <td className="border border-border p-3 text-center">{item.type}</td>
                          <td className="border border-border p-3 text-center">{item.price}</td>
                          <td className="border border-border p-3 text-center">{item.unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedCategory === 'irrigation' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">قیمت لوله‌های آبیاری PVC</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-secondary">
                        <th className="border border-border p-3 text-right">قطر لوله</th>
                        <th className="border border-border p-3 text-center">کلاس فشار</th>
                        <th className="border border-border p-3 text-center">قیمت (تومان)</th>
                        <th className="border border-border p-3 text-center">واحد</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceData.irrigation.map((item, index) => (
                        <tr key={index} className="hover:bg-secondary/50">
                          <td className="border border-border p-3 font-medium">{item.size}</td>
                          <td className="border border-border p-3 text-center">{item.pressure}</td>
                          <td className="border border-border p-3 text-center">{item.price}</td>
                          <td className="border border-border p-3 text-center">{item.unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedCategory === 'fittings' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">قیمت اتصالات PVC</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-secondary">
                        <th className="border border-border p-3 text-right">نوع اتصال</th>
                        <th className="border border-border p-3 text-center">قیمت (تومان)</th>
                        <th className="border border-border p-3 text-center">واحد</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceData.fittings.map((item, index) => (
                        <tr key={index} className="hover:bg-secondary/50">
                          <td className="border border-border p-3 font-medium">{item.item}</td>
                          <td className="border border-border p-3 text-center">{item.price}</td>
                          <td className="border border-border p-3 text-center">{item.unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Discount Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">تخفیفات ویژه</h2>
            <p className="text-xl text-muted-foreground">برای خریدهای عمده از تخفیفات ویژه بهره‌مند شوید</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {discounts.map((discount, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{discount.quantity}</h3>
                  <div className="text-3xl font-bold text-primary">{discount.discount}</div>
                  <p className="text-sm text-muted-foreground mt-2">تخفیف</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">برای دریافت قیمت نهایی تماس بگیرید</h2>
          <p className="text-xl mb-8 opacity-90">
            قیمت‌های ویژه برای پروژه‌های بزرگ و خرید عمده
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              <Phone className="ml-2" size={20} />
              021-33334444
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              درخواست مشاوره رایگان
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
