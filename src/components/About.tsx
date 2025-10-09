import { Award, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sobre nós</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Após muitos anos no ramo, tive a ideia de abrir minha própria empresa. A Impactar
              Representações nasceu da experiência e do conhecimento profundo do mercado de
              refrigeração.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atuamos na venda de peças, equipamentos e serviços nas áreas de refrigeração,
              elétrica, hidráulica, e na fabricação de borrachas para geladeiras. Nossa missão é
              fornecer produtos de qualidade e serviços especializados que garantem a eficiência e
              economia de energia dos seus equipamentos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com foco na satisfação do cliente, oferecemos soluções personalizadas para cada
              necessidade, sempre com profissionalismo e compromisso com a excelência.
            </p>
          </div>

          <div className="grid gap-6 animate-fade-in">
            <div className="bg-secondary/50 p-6 rounded-lg hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Qualidade garantida</h3>
                  <p className="text-muted-foreground">
                    Produtos e serviços de alta qualidade com garantia e suporte completo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Experiência no mercado</h3>
                  <p className="text-muted-foreground">
                    Anos de experiência no ramo de refrigeração e serviços especializados.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Atendimento personalizado</h3>
                  <p className="text-muted-foreground">
                    Soluções personalizadas para cada cliente, sempre com profissionalismo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
