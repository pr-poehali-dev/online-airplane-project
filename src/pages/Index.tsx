import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Train" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">РЖД Экспресс</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#destinations" className="text-foreground hover:text-primary transition-colors">Маршруты</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <Button>Купить билет</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/186540d5-87dd-41c7-8711-9560851a91c1/files/c4fbc193-a977-44f1-a3b4-f5529e50f509.jpg"
            alt="Train"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Путешествия в <span className="text-accent">комфорте</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Надёжный железнодорожный перевозчик. Безопасность и пунктуальность — наш приоритет.
          </p>
          
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <Icon name="MapPin" size={20} className="text-primary" />
                <input 
                  type="text" 
                  placeholder="Откуда" 
                  className="bg-transparent border-none outline-none text-foreground w-full"
                />
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <Icon name="MapPin" size={20} className="text-accent" />
                <input 
                  type="text" 
                  placeholder="Куда" 
                  className="bg-transparent border-none outline-none text-foreground w-full"
                />
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <Icon name="Calendar" size={20} className="text-primary" />
                <input 
                  type="date" 
                  className="bg-transparent border-none outline-none text-foreground w-full"
                />
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <Icon name="Users" size={20} className="text-primary" />
                <select className="bg-transparent border-none outline-none text-foreground w-full">
                  <option>1 пассажир</option>
                  <option>2 пассажира</option>
                  <option>3 пассажира</option>
                  <option>4+ пассажира</option>
                </select>
              </div>
            </div>
            <Button size="lg" className="w-full md:w-auto px-12 text-lg h-12">
              Найти поезда
              <Icon name="Search" size={20} className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-white" />
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для комфортного путешествия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Train" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Скоростные поезда</CardTitle>
                <CardDescription className="text-base">
                  Более 200 направлений по России с комфортным расписанием
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Ежедневные рейсы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Современные составы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Электронные билеты</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 border-accent">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Star" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl">СВ и Люкс</CardTitle>
                <CardDescription className="text-base">
                  Премиум-купе для комфортных путешествий на дальние расстояния
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Комфортные купе</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Постельное бельё</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span>Питание включено</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Luggage" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Багаж</CardTitle>
                <CardDescription className="text-base">
                  Гибкие тарифы и удобные условия перевозки багажа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>До 30 кг в эконом-классе</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Бесплатная ручная кладь</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    <span>Перевозка спортинвентаря</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные маршруты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выбирайте лучшие направления по выгодным ценам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Париж", country: "Франция", price: "от 15 000 ₽", icon: "🗼" },
              { city: "Токио", country: "Япония", price: "от 35 000 ₽", icon: "🗾" },
              { city: "Дубай", country: "ОАЭ", price: "от 20 000 ₽", icon: "🏙️" },
              { city: "Нью-Йорк", country: "США", price: "от 40 000 ₽", icon: "🗽" },
            ].map((destination, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  {destination.icon}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{destination.city}</CardTitle>
                  <CardDescription>{destination.country}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{destination.price}</span>
                    <Button variant="ghost" size="sm">
                      <Icon name="ArrowRight" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-accent mb-2">200+</div>
              <p className="text-lg">Маршрутов</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-accent mb-2">100M+</div>
              <p className="text-lg">Пассажиров в год</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-accent mb-2">99.2%</div>
              <p className="text-lg">Рейсов вовремя</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о наших услугах и правилах
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Какие документы нужны для перелёта?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Для внутренних рейсов достаточно паспорта гражданина РФ. Для международных перелётов необходим заграничный паспорт, виза (если требуется) и другие документы согласно требованиям страны назначения.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Когда открывается регистрация на рейс?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Онлайн-регистрация открывается за 24 часа до вылета и закрывается за 1 час. В аэропорту регистрация начинается за 2 часа и заканчивается за 40 минут до вылета.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Какой багаж можно провозить бесплатно?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                В эконом-классе: 1 место багажа до 23 кг и ручная кладь до 10 кг. В бизнес-классе: 2 места по 32 кг каждое и ручная кладь до 15 кг. Габариты ручной клади не должны превышать 55x40x20 см.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Можно ли вернуть или обменять билет?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Да, условия возврата и обмена зависят от тарифа. Базовый тариф - возврат с удержанием 50%, стандартный - 25%, гибкий - возврат без штрафа. Обмен возможен не позднее чем за 3 часа до вылета.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Есть ли питание на борту?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                На рейсах продолжительностью более 2 часов предоставляется бесплатное горячее питание и напитки. На коротких рейсах - лёгкие закуски. Спецпитание (вегетарианское, детское и т.д.) нужно заказать за 24 часа.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Как выбрать место в самолёте?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Выбор места доступен при онлайн-регистрации или через личный кабинет после покупки билета. Стандартные места - бесплатно, места у аварийного выхода и в первых рядах - за доплату от 500 ₽.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Plane" size={28} className="text-accent" />
                <h3 className="text-xl font-bold">SkyWings</h3>
              </div>
              <p className="text-secondary-foreground/80">
                Надёжная авиакомпания с 20-летней историей безопасных полётов.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Партнёры</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Возврат билетов</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} className="text-accent" />
                  <span>8 800 555-35-35</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} className="text-accent" />
                  <span>info@skywings.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={18} className="text-accent" />
                  <span>Круглосуточно</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
            <p>© 2024 SkyWings. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;