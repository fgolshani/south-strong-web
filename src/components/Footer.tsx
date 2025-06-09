
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                م
              </div>
              <h3 className="text-xl font-bold">مستحکم جنوب</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              شرکت مستحکم جنوب با بیش از 20 سال تجربه در تولید انواع لوله‌های PVC با کیفیت بالا و استاندارد، 
              در خدمت صنعت ساختمان و کشاورزی کشور می‌باشد.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">دسترسی سریع</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-primary transition-colors">
                صفحه اصلی
              </Link>
              <Link to="/products" className="block text-gray-300 hover:text-primary transition-colors">
                محصولات
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-primary transition-colors">
                قیمت‌ها
              </Link>
              <Link to="/customer-club" className="block text-gray-300 hover:text-primary transition-colors">
                باشگاه مشتریان
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-primary transition-colors">
                تماس با ما
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">خدمات ما</h4>
            <div className="space-y-2 text-gray-300">
              <p>تولید لوله‌های PVC</p>
              <p>مشاوره فنی</p>
              <p>خدمات پس از فروش</p>
              <p>حمل و نقل</p>
              <p>ضمانت کیفیت</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">اطلاعات تماس</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-primary" />
                <span>021-33334444</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-primary" />
                <span>info@mostahkamjonoob.ir</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="text-primary mt-1" />
                <span>تهران، شهرک صنعتی البرز، خیابان صنعت، پلاک 125</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock size={18} className="text-primary" />
                <span>شنبه تا پنج‌شنبه: 8:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} شرکت مستحکم جنوب. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
