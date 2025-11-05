"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Coffee, Sparkles, Users, MessageSquare, Handshake, HelpCircle, Instagram, Linkedin, Globe, Facebook, Phone } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="medium"
      background="dotGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Наше меню", id: "products" },
            { name: "Пекарни", id: "about" },
            { name: "О нас", id: "team" },
            { name: "Вакансии", id: "contact" }
          ]}
          brandName="Bulochka"
          button={{ text: "Стать партнером", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Стань нашим партнером"
          description="Открой место встреч в своем городе! Присоединяйся к новой сети булочных в Украине"
          tag="Bulochka"
          tagIcon={Coffee}
          buttons={[
            { text: "Узнать подробнее", href: "about" },
            { text: "Стать партнером", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/6314908/pexels-photo-6314908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Современная пекарня Bulochka с свежей выпечкой"
          frameStyle="card"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="Новая сеть булочных в Украине, где каждый день начинается со свежей выпечки и ароматного кофе"
          buttons={[
            { text: "Наше меню", href: "products" },
            { text: "О нас", href: "team" }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardTwo
          title="Наше меню"
          description="Свежая выпечка, ароматные напитки и сладкие десерты каждый день"
          tag="Новое"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              brand: "Bulochka",
              name: "Круассан",
              price: "25 грн",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/34517053/pexels-photo-34517053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Свежий круассан"
            },
            {
              id: "2",
              brand: "Bulochka",
              name: "Булочка",
              price: "18 грн",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/22988903/pexels-photo-22988903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ароматная булочка"
            },
            {
              id: "3",
              brand: "Bulochka",
              name: "Слойка",
              price: "22 грн",
              rating: 4,
              reviewCount: "890",
              imageSrc: "https://images.pexels.com/photos/4408551/pexels-photo-4408551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Хрустящая слойка"
            },
            {
              id: "4",
              brand: "Bulochka",
              name: "Сладкое",
              price: "35 грн",
              rating: 5,
              reviewCount: "1.5k",
              imageSrc: "https://images.pexels.com/photos/34517056/pexels-photo-34517056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Сладкие десерты"
            },
            {
              id: "5",
              brand: "Bulochka",
              name: "Напитки",
              price: "28 грн",
              rating: 4,
              reviewCount: "760",
              imageSrc: "https://images.pexels.com/photos/34517063/pexels-photo-34517063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ароматные напитки"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardThree
          title="Наша команда"
          description="Профессиональные пекари, которые создают вкусную выпечку каждый день"
          tag="Команда"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Анна Петренко",
              role: "Главный пекарь",
              imageSrc: "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Анна Петренко - главный пекарь",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "2",
              name: "Мария Коваленко",
              role: "Кондитер",
              imageSrc: "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Мария Коваленко - кондитер",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com" }
              ]
            },
            {
              id: "3",
              name: "Олексий Сидоренко",
              role: "Менеджер пекарни",
              imageSrc: "https://images.pexels.com/photos/5778298/pexels-photo-5778298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Олексий Сидоренко - менеджер",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://bulochka.ua" }
              ]
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Отзывы наших клиентов"
          description="Что говорят люди о нашей свежей выпечке и сервисе"
          tag="Отзывы"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Светлана Иванова",
              role: "Постоянный клиент",
              testimonial: "Каждое утро захожу за свежими круассанами. Качество всегда на высоте, а персонал очень дружелюбный!",
              imageSrc: "https://images.pexels.com/photos/3985083/pexels-photo-3985083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Светлана Иванова"
            },
            {
              id: "2",
              name: "Дмитро Петров",
              role: "Офисный работник",
              testimonial: "Булочка стала моим любимым местом для завтрака. Кофе отличный, а выпечка всегда свежая и вкусная.",
              imageSrc: "https://images.pexels.com/photos/6974320/pexels-photo-6974320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Дмитро Петров"
            },
            {
              id: "3",
              name: "Елена Коваль",
              role: "Мама двоих детей",
              testimonial: "Дети обожают сладкие булочки отсюда. Удобное расположение и всегда есть что-то новенькое в ассортименте.",
              imageSrc: "https://images.pexels.com/photos/3985080/pexels-photo-3985080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Елена Коваль с семьей"
            },
            {
              id: "4",
              name: "Андрей Мельник",
              role: "Бизнесмен",
              testimonial: "Отличное место для деловых встреч за чашкой кофе. Атмосфера уютная, а качество продуктов всегда радует.",
              imageSrc: "https://images.pexels.com/photos/28681664/pexels-photo-28681664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Андрей Мельник"
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Нам доверяют"
          description="Присоединяйтесь к сети партнеров по всей Украине"
          tag="Партнеры"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/303324/pexels-photo-303324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11459428/pexels-photo-11459428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7258491/pexels-photo-7258491.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/19795702/pexels-photo-19795702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqBase
          title="Часто задаваемые вопросы"
          description="Ответы на популярные вопросы о нашей пекарне и партнерстве"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Как стать партнером Bulochka?",
              content: "Свяжитесь с нами через форму обратной связи или по телефону. Мы расскажем обо всех условиях партнерства и поможем открыть пекарню в вашем городе."
            },
            {
              id: "2",
              title: "Какая поддержка предоставляется франчайзи?",
              content: "Мы обеспечиваем полную поддержку: обучение персонала, поставка ингредиентов, маркетинговая поддержка и консультации по ведению бизнеса."
            },
            {
              id: "3",
              title: "Сколько времени занимает запуск пекарни?",
              content: "От подписания договора до открытия пекарни проходит обычно 2-3 месяца. Это включает подготовку помещения, обучение и запуск операций."
            },
            {
              id: "4",
              title: "Какие города доступны для открытия?",
              content: "Мы активно развиваемся по всей Украине. Свяжитесь с нами, чтобы узнать о возможностях открытия в вашем городе."
            }
          ]}
          animationType="smooth"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Свяжитесь с нами"
          description="Готовы открыть свою пекарню? Заполните форму и мы свяжемся с вами в ближайшее время"
          buttonText="Отправить заявку"
          inputs={[
            { name: "name", type: "text", placeholder: "Ваше имя", required: true },
            { name: "phone", type: "tel", placeholder: "Номер телефона", required: true },
            { name: "email", type: "email", placeholder: "Email адрес", required: true },
            { name: "city", type: "text", placeholder: "Ваш город", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Расскажите о ваших планах и задайте вопросы...", rows: 4, required: false }}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Bulochka"
          copyrightText="© 2025 Bulochka. Новая сеть булочных в Украине"
          columns={[
            {
              title: "Меню",
              items: [
                { label: "Наше меню", href: "products" },
                { label: "Новое", href: "products" },
                { label: "Выпечка", href: "products" },
                { label: "Напитки", href: "products" }
              ]
            },
            {
              title: "Компания",
              items: [
                { label: "О нас", href: "about" },
                { label: "Пекарни", href: "about" },
                { label: "Команда", href: "team" },
                { label: "Вакансии", href: "contact" }
              ]
            },
            {
              title: "Партнерство",
              items: [
                { label: "Стать партнером", href: "contact" },
                { label: "Условия", href: "faq" },
                { label: "Поддержка", href: "contact" }
              ]
            },
            {
              title: "Контакты",
              items: [
                { label: "Связаться с нами", href: "contact" },
                { label: "+380 12 467 78 35", href: "tel:+380124677835" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/bulochka", ariaLabel: "Instagram Bulochka" },
            { icon: Facebook, href: "https://facebook.com/bulochka", ariaLabel: "Facebook Bulochka" },
            { icon: Phone, href: "tel:+380124677835", ariaLabel: "Телефон" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}