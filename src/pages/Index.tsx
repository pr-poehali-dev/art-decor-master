import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Home',
      title: 'Дизайн интерьера',
      description: 'Разработка уникальных дизайн-проектов для квартир, домов и апартаментов'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт под ключ',
      description: 'Полный цикл ремонтных работ от черновой отделки до финишной'
    },
    {
      icon: 'Building2',
      title: 'Отделка коттеджей',
      description: 'Комплексная отделка загородных домов и коттеджей любой сложности'
    },
    {
      icon: 'Paintbrush',
      title: 'Декоративная отделка',
      description: 'Венецианская штукатурка, фрески, молдинги и другие элементы декора'
    },
    {
      icon: 'Hammer',
      title: 'Черновые работы',
      description: 'Стяжка, штукатурка, электрика, сантехника и другие базовые работы'
    },
    {
      icon: 'Sparkles',
      title: 'Чистовая отделка',
      description: 'Поклейка обоев, укладка ламината, плитки, покраска и финишные работы'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/d33a6f32-6733-4a1b-b69f-b039e592aecd/files/b1c330cf-d8e1-44cf-a2cf-1030abefa815.jpg',
      title: 'Современная квартира',
      area: '85 м²',
      duration: '3 месяца'
    },
    {
      image: 'https://cdn.poehali.dev/projects/d33a6f32-6733-4a1b-b69f-b039e592aecd/files/9070dc76-bbd9-40b1-80e5-f2d430efbfbf.jpg',
      title: 'Кухня премиум-класса',
      area: '25 м²',
      duration: '1 месяц'
    },
    {
      image: 'https://cdn.poehali.dev/projects/d33a6f32-6733-4a1b-b69f-b039e592aecd/files/78ccae4f-a316-4d0b-9172-89947142f044.jpg',
      title: 'Спальня с гардеробной',
      area: '40 м²',
      duration: '1.5 месяца'
    }
  ];

  const testimonials = [
    {
      name: 'Елена Смирнова',
      rating: 5,
      text: 'Отличная работа! Ребята сделали ремонт качественно и в срок. Особенно понравился индивидуальный подход к дизайну.',
      project: 'Ремонт 3-комнатной квартиры'
    },
    {
      name: 'Михаил Петров',
      rating: 5,
      text: 'Профессионалы своего дела. Отделали наш коттедж под ключ. Все работы выполнены на высшем уровне!',
      project: 'Отделка коттеджа 200 м²'
    },
    {
      name: 'Анна Волкова',
      rating: 5,
      text: 'Спасибо команде Master за красивый дизайн и качественное исполнение! Квартира получилась как с картинки.',
      project: 'Дизайн и ремонт квартиры'
    }
  ];

  const advantages = [
    { icon: 'Award', text: 'Опыт работы более 10 лет' },
    { icon: 'Users', text: 'Команда из 25+ специалистов' },
    { icon: 'Clock', text: 'Соблюдение сроков' },
    { icon: 'Shield', text: 'Гарантия на все работы 3 года' },
    { icon: 'Wallet', text: 'Наличный и безналичный расчет' },
    { icon: 'FileText', text: 'Официальный договор' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-primary">Master</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="lg" className="hidden md:flex">
            Заказать звонок
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-base py-2 px-4" variant="secondary">
              Отделка под ключ с 2014 года
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Создаём пространства вашей мечты
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Полный спектр ремонтных работ для квартир, домов, коттеджей и апартаментов. 
              Дизайн, черновая и чистовая отделка под ключ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2" size={20} />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Профессиональный подход к каждому проекту
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-xl text-muted-foreground">
              Примеры наших реализованных проектов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Home" size={16} />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">
              Наши преимущества и гарантии качества
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={advantage.icon} className="text-white" size={24} />
                </div>
                <p className="font-medium">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((review, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в течение 15 минут
            </p>
          </div>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Phone" className="mx-auto mb-2 text-primary" size={24} />
                  <p className="font-medium">+7 (999) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Звоните с 9:00 до 21:00</p>
                </div>
                <div>
                  <Icon name="Mail" className="mx-auto mb-2 text-secondary" size={24} />
                  <p className="font-medium">info@master-decor.ru</p>
                  <p className="text-sm text-muted-foreground">Ответим за 1 час</p>
                </div>
                <div>
                  <Icon name="MapPin" className="mx-auto mb-2 text-accent" size={24} />
                  <p className="font-medium">Москва, ул. Примерная, 1</p>
                  <p className="text-sm text-muted-foreground">Офис с 10:00 до 19:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" className="text-primary" size={28} />
                <span className="text-2xl font-bold">Master</span>
              </div>
              <p className="text-gray-400">
                Арт декор Master - профессиональная отделка под ключ с 2014 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Дизайн интерьера</li>
                <li>Ремонт под ключ</li>
                <li>Отделка коттеджей</li>
                <li>Декоративная отделка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@master-decor.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Master. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
