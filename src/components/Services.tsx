import { Snowflake, Zap, Droplet, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Peças para refrigeração",
      description:
        "Amplo catálogo de peças e equipamentos para refrigeração com garantia de qualidade e procedência.",
    },
    {
      icon: Zap,
      title: "Equipamentos elétricos",
      description:
        "Fornecimento de equipamentos e componentes elétricos de alta qualidade para diversas aplicações.",
    },
    {
      icon: Droplet,
      title: "Sistemas hidráulicos",
      description:
        "Peças e equipamentos para instalações hidráulicas com foco em eficiência e durabilidade.",
    },
    {
      icon: Settings,
      title: "Fabricação de borrachas",
      description:
        "Fabricação especializada de borrachas para geladeiras de todos os modelos. Borracha nova, economia de energia!",
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos serviços</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em refrigeração, elétrica e hidráulica para atender todas as suas
            necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-transparent hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Produtos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">
                    Peças e equipamentos para refrigeração
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Componentes elétricos profissionais</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">
                    Equipamentos e peças para sistemas hidráulicos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">
                    Borrachas para geladeiras de todas as marcas e modelos
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Serviços</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">
                    Instalação de borrachas para geladeiras
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Atendimento para todos os modelos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Consultoria técnica especializada</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Garantia de qualidade e eficiência</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
