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
      image: 'https://cdn.poehali.dev/files/IMG_3757.png',
      title: 'Гостиная с обеденной зоной',
      area: '35 м²'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_3758.png',
      title: 'Современная прихожая',
      area: '12 м²'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_3759.png',
      title: 'Ванная комната премиум',
      area: '8 м²'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_3760.png',
      title: 'Уютная гостиная',
      area: '28 м²'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_3761.png',
      title: 'Студия с зонированием',
      area: '32 м²'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_3756.png',
      title: 'Спальня с гардеробной',
      area: '22 м²'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_3754.png',
      title: 'Уютная спальня',
      area: '18 м²'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_3753.png',
      title: 'Ванная с душевой',
      area: '9 м²'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_3752.png',
      title: 'Балкон с зоной отдыха',
      area: '6 м²'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_3751.png',
      title: 'Минималистичная прихожая',
      area: '10 м²'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_3749.png',
      title: 'Столовая зона с декором',
      area: '15 м²'
    },
    {
      image: 'https://cdn.poehali.dev/files/IMG_3746.png',
      title: 'Стильная спальня',
      area: '20 м²'
    }
  ];

  const testimonials: Array<{
    name: string;
    rating: number;
    text: string;
    project: string;
  }> = [];

  const advantages = [
    { icon: 'Award', text: 'Опыт работы более 15 лет' },
    { icon: 'Users', text: 'Команда из 20+ специалистов' },
    { icon: 'Clock', text: 'Соблюдение сроков' },
    { icon: 'Shield', text: 'Гарантия на все работы 5 лет' },
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
        <nav className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={24} />
            <span className="text-xl md:text-2xl font-bold text-primary">Master</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <a href="#contacts" className="md:hidden">
            <Button size="sm" className="text-sm">
              Связаться
            </Button>
          </a>
        </nav>
      </header>

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Создаём пространства вашей мечты
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Полный спектр ремонтных работ для квартир, домов, коттеджей и апартаментов. 
              Дизайн, черновая и чистовая отделка под ключ.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Наши услуги</h2>
            <p className="text-base md:text-xl text-muted-foreground">
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

      <section id="portfolio" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Портфолио работ</h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Примеры наших реализованных проектов
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {portfolio.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Home" size={16} />
                    <span>{project.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">О компании АртМастер</h2>
            <div className="max-w-4xl mx-auto text-base md:text-lg text-muted-foreground space-y-4">
              <p>
                Добро пожаловать в компанию <span className="font-semibold text-foreground">АртМастер</span> – ваш надежный партнер в ремонте под ключ! 
                Мы специализируемся на комплексном ремонтном обслуживании квартир, домов и коммерческих помещений, 
                превращая любые проекты в идеальное пространство для жизни и работы.
              </p>
            </div>
          </div>

          <div className="mb-10 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Наши преимущества</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Профессионализм и опыт</h4>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Команда АртМастер состоит из квалифицированных специалистов с многолетним опытом в строительстве и дизайне интерьеров.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-5 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="UserCheck" className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Индивидуальный подход</h4>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Мы тщательно анализируем пожелания клиента и особенности объекта, предлагая оптимальные решения с учетом бюджета и сроков.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-5 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Star" className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Высокое качество материалов и работ</h4>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Используем только проверенные материалы и современные технологии, гарантируя долговечность и эстетическую привлекательность ремонта.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-5 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle2" className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Полный спектр услуг под ключ</h4>
                      <p className="text-sm md:text-base text-muted-foreground">
                        От дизайна и подготовительных работ до установки коммуникаций и финишной отделки – мы берем на себя все этапы.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl md:col-span-2">
                <CardContent className="p-5 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="DollarSign" className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Прозрачное ценообразование</h4>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Никаких скрытых затрат – вы всегда знаете, за что платите.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-6 md:p-8 lg:p-12 text-center">
              <Icon name="Target" className="mx-auto mb-4 md:mb-6 text-primary" size={40} />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Миссия компании</h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Создавать комфортные и стильные пространства, которые отражают индивидуальность наших клиентов и делают их жизнь лучше.
              </p>
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-primary/20">
                <p className="text-lg md:text-xl font-semibold text-primary">
                  АртМастер – искусство ремонта в каждой детали.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 md:mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Быстрые факты</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
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
        </div>
      </section>

      {testimonials.length > 0 && (
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
      )}

      <section id="contacts" className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Свяжитесь с нами</h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в течение 15 минут
            </p>
          </div>
          <Card className="shadow-2xl">
            <CardContent className="p-5 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
                <Button type="submit" size="lg" className="w-full text-base md:text-lg py-5 md:py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-sm md:text-base">+7 978 172 63 30</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Основной номер</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-sm md:text-base">+7 978 131 04 94</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Резервный номер</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground pl-8">Звоните с 9:00 до 20:00</p>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-secondary flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-sm md:text-base break-all">eldar19810112@mail.ru</p>
                      <p className="text-xs md:text-sm text-muted-foreground">Ответим за 1 час</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-accent flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-sm md:text-base">Респ. Крым, Судак</p>
                      <p className="text-xs md:text-sm text-muted-foreground">ул. Феодосийское шоссе 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Icon name="Sparkles" className="text-primary" size={24} />
                <span className="text-xl md:text-2xl font-bold">Master</span>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Арт декор Master - профессиональная отделка под ключ с 2014 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Услуги</h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-400">
                <li>Дизайн интерьера</li>
                <li>Ремонт под ключ</li>
                <li>Отделка коттеджей</li>
                <li>Декоративная отделка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Компания</h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-400">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Контакты</h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-400">
                <li>+7 978 172 63 30</li>
                <li>+7 978 131 04 94</li>
                <li className="break-words">eldar19810112@mail.ru</li>
                <li>Респ. Крым, Судак</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400">
            <p className="text-sm md:text-base">© 2024 Master. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;