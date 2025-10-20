import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521983092181", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:naldoalexander70@gmail.com";
  };

  return (
    <section id="contato" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Entre em contato</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco e descubra como podemos
            ajudar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Fale conosco</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefone</p>
                    <a href="tel:21983092181" className="hover:underline">
                      (21) 98309-2181
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <a href="mailto:naldoalexander70@gmail.com" className="hover:underline">
                      naldoalexander70@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Endereço</p>
                    <p>Rua Felipe Camarão 22 , Itaboraí- RJ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Horário de atendimento</p>
                    <p>Segunda a Sábado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <div className="bg-secondary/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Pronto para economizar energia?
              </h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco agora mesmo e descubra nossas soluções em refrigeração e
                borrachas para geladeiras. Nossa equipe está pronta para atendê-lo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-accent transition-all hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                <Button
                  onClick={handleEmailClick}
                  variant="outline"
                  size="lg"
                  className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  E-mail
                </Button>
              </div>
            </div>

            <div className="bg-secondary/50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-3">CNPJ</h3>
              <p className="text-muted-foreground">48.367.244/0001-33</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
