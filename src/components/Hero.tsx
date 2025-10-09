import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521983092181", "_blank");
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/90" />
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Borracha nova, economia de energia!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Impactar Representações Comércio e Serviços ltda
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Especialistas em peças e equipamentos para refrigeração, com anos de experiência no
              mercado. Oferecemos soluções completas em refrigeração, elétrica, hidráulica e
              fabricação de borrachas para geladeiras.
            </h2>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent transition-all hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Fale conosco
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById("servicos");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Nossos serviços
              </Button>
            </div>
          </div>

          <div className="hidden md:flex justify-center animate-fade-in">
            <img
              src="/logo-new.png"
              alt="Impactar Representações - Logo"
              className="max-w-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
