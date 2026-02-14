import React from 'react'
import { HeroSection, SectionTitle, Container, Card, Grid, Section, Button } from '../components/Common'
import { Users, Target, Heart, Award } from 'lucide-react'

const About = () => {
  const translations = {
    en: {
      title: 'About MATHWA',
      subtitle: 'Learn more about our organization and mission',
      our_story: 'Our Story',
      story_desc: 'MATHWA was founded with a simple yet powerful vision: to make a meaningful difference in the lives of those in need. Over the years, we have grown into one of the leading charity organizations in the region.',
      vision: 'Our Vision',
      vision_desc: 'To create a compassionate society where everyone has access to dignity, support, and opportunities for a better life.',
      mission: 'Our Mission',
      mission_desc: 'To provide comprehensive charitable services and support to those in need, with a focus on dignity, respect, and sustainable development.',
      values: 'Our Core Values',
      value1_title: 'Compassion',
      value1_desc: 'We lead with empathy and understanding in everything we do',
      value2_title: 'Integrity',
      value2_desc: 'We maintain the highest standards of transparency and honesty',
      value3_title: 'Excellence',
      value3_desc: 'We strive for excellence in all our programs and services',
      value4_title: 'Community',
      value4_desc: 'We believe in the power of community and collective action',
    },
    ar: {
      title: 'عن مثوى',
      subtitle: 'تعرف أكثر على منظمتنا ورسالتنا',
      our_story: 'قصتنا',
      story_desc: 'تأسست مثوى برؤية بسيطة لكن قوية: إحداث فرق حقيقي في حياة المحتاجين. على مر السنين، أصبحنا واحدة من الجمعيات الخيرية الرائدة في المنطقة.',
      vision: 'رؤيتنا',
      vision_desc: 'خلق مجتمع متعاطف حيث يتمتع الجميع بالوصول إلى الكرامة والدعم والفرص لحياة أفضل.',
      mission: 'رسالتنا',
      mission_desc: 'تقديم خدمات وحمات خيرية شاملة للمحتاجين، مع التركيز على الكرامة والاحترام والتنمية المستدامة.',
      values: 'قيمنا الأساسية',
      value1_title: 'التعاطف',
      value1_desc: 'نقود كل ما نفعله بالتعاطف والفهم',
      value2_title: 'النزاهة',
      value2_desc: 'نحافظ على أعلى معايير الشفافية والصدق',
      value3_title: 'التميز',
      value3_desc: 'نسعى للتميز في جميع برامجنا وخدماتنا',
      value4_title: 'المجتمع',
      value4_desc: 'نؤمن بقوة المجتمع والعمل الجماعي',
    }
  }

  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = translations[language]

  return (
    <>
      <HeroSection 
        title={t.title}
        subtitle={t.subtitle}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title={t.our_story} centered={false} />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t.story_desc}
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-80 hidden lg:block"></div>
          </div>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-secondary to-accent rounded-2xl opacity-80 hidden lg:block order-2 lg:order-1"></div>
            <div className="order-1 lg:order-2">
              <SectionTitle title={t.vision} centered={false} />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t.vision_desc}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title={t.mission} centered={false} />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t.mission_desc}
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-accent to-primary rounded-2xl opacity-80 hidden lg:block"></div>
          </div>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <SectionTitle title={t.values} />
          <Grid cols={4}>
            {[
              { title: t.value1_title, desc: t.value1_desc, icon: Heart, color: 'text-red-500' },
              { title: t.value2_title, desc: t.value2_desc, icon: Award, color: 'text-yellow-500' },
              { title: t.value3_title, desc: t.value3_desc, icon: Target, color: 'text-blue-500' },
              { title: t.value4_title, desc: t.value4_desc, icon: Users, color: 'text-green-500' },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <Card key={idx} className="text-center">
                  <Icon size={48} className={`mx-auto mb-4 ${value.color}`} />
                  <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </Card>
              )
            })}
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default About
