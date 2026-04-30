import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContentSection from "@/components/ContentSection";
import SectionDivider from "@/components/SectionDivider";
import CaneIcon from "@/components/CaneIcon";
import {
  Eye,
  Users,
  Brain,
  Smartphone,
  Volume2,
  Sparkles,
  Wrench,
  Building2,
  Globe,
  HeartHandshake,
  Compass,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <SiteHeader />

      <main id="conteudo-principal" role="main" className="flex-1">
        {/* Hero */}
        <section
          aria-label="Introdução ao portal"
          className="relative overflow-hidden bg-card border-b border-border"
        >
          <div className="container mx-auto px-4 py-12 sm:py-20 text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Eye size={40} className="text-primary-foreground" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
              Tecnologias Assistivas para
              <br />
              <span className="text-primary">Pessoas com Deficiência Visual</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Um portal dedicado à divulgação e análise de tecnologias que promovem
              acessibilidade, autonomia e inclusão social.
            </p>
            <div
              className="flex items-center justify-center gap-4 mt-8 text-muted-foreground flex-wrap"
              aria-hidden="true"
            >
              <div className="flex items-center gap-1">
                <CaneIcon size={18} />
                <span className="text-xs">Bengala</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={18} />
                <span className="text-xs">Inclusão</span>
              </div>
              <div className="flex items-center gap-1">
                <Brain size={18} />
                <span className="text-xs">IA</span>
              </div>
              <div className="flex items-center gap-1">
                <Smartphone size={18} />
                <span className="text-xs">Apps</span>
              </div>
            </div>
          </div>
          {/* Decorative shapes */}
          <div
            className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"
            aria-hidden="true"
          />
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-10 sm:py-16 space-y-6 max-w-3xl">
          <ContentSection
            id="apresentacao"
            title="Tecnologias Assistivas e Leitores de Tela"
            icon={<Volume2 size={22} aria-hidden="true" />}
          >
            <p>
              As tecnologias assistivas desempenham um papel essencial na promoção da
              autonomia, da inclusão social e da qualidade de vida de pessoas com
              deficiência visual. Elas englobam recursos, ferramentas e serviços que
              auxiliam na realização de atividades do cotidiano, permitindo maior
              independência no acesso à informação, comunicação, mobilidade e uso de
              dispositivos digitais.
            </p>
            <p>
              Atualmente, uma das principais categorias dessas tecnologias são os{" "}
              <strong>leitores de tela</strong>, que convertem o conteúdo visual em
              áudio. Entre os mais utilizados estão:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>VoiceOver</strong> — disponível em dispositivos iOS, descreve
                todos os elementos exibidos na tela e permite navegação completa por
                meio de gestos.{" "}
                <a
                  href="https://www.apple.com/br/accessibility/vision/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:no-underline font-semibold"
                  aria-label="Saiba mais sobre o VoiceOver no site da Apple (abre em nova aba)"
                >
                  Saiba mais
                </a>
              </li>
              <li>
                <strong>TalkBack</strong> — presente em dispositivos Android, oferece
                feedback por voz, sons e vibração, permitindo interação independente
                com o celular.{" "}
                <a
                  href="https://support.google.com/accessibility/android/answer/6007100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:no-underline font-semibold"
                  aria-label="Saiba mais sobre o TalkBack no suporte do Google (abre em nova aba)"
                >
                  Saiba mais
                </a>
              </li>
            </ul>
            <p>
              Essas ferramentas são fundamentais para o acesso a conteúdos digitais,
              como mensagens, redes sociais, sites e aplicativos.
            </p>
          </ContentSection>

          <SectionDivider />

          <ContentSection
            id="ia"
            title="Tecnologias com Inteligência Artificial"
            icon={<Sparkles size={22} aria-hidden="true" />}
          >
            <p>
              Com os avanços da Inteligência Artificial, novas soluções vêm ampliando
              ainda mais as possibilidades de autonomia.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Seeing AI</strong> — aplicativo que utiliza a câmera do celular
                para descrever textos, pessoas, objetos e ambientes em tempo real,
                auxiliando na interpretação do mundo ao redor.{" "}
                <a
                  href="https://www.microsoft.com/en-us/ai/seeing-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:no-underline font-semibold"
                  aria-label="Baixar Seeing AI no site da Microsoft (abre em nova aba)"
                >
                  Download
                </a>
              </li>
              <li>
                <strong>Google Lookout</strong> — oferece funcionalidades semelhantes,
                permitindo ler documentos, identificar produtos e reconhecer objetos
                com praticidade.{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:no-underline font-semibold"
                  aria-label="Baixar Google Lookout na Play Store (abre em nova aba)"
                >
                  Download
                </a>
              </li>
              <li>
                <strong>Be My Eyes</strong> — conecta pessoas com deficiência visual a
                voluntários por meio de chamadas de vídeo, possibilitando ajuda em
                tarefas do dia a dia.{" "}
                <a
                  href="https://www.bemyeyes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:no-underline font-semibold"
                  aria-label="Baixar Be My Eyes no site oficial (abre em nova aba)"
                >
                  Download
                </a>
              </li>
            </ul>
            <p>
              Essas tecnologias demonstram como a inovação pode contribuir diretamente
              para a inclusão e independência.
            </p>
          </ContentSection>

          <SectionDivider />

          <ContentSection
            id="recursos"
            title="Outros Recursos Importantes"
            icon={<Wrench size={22} aria-hidden="true" />}
          >
            <p>
              Além dos aplicativos, existem diversas soluções que complementam o uso
              das tecnologias assistivas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Audiodescrição</strong> — transforma informações visuais em
                narração verbal.
              </li>
              <li>
                <strong>Comandos por voz</strong> — permitem controlar dispositivos sem
                o uso da visão.
              </li>
              <li>
                <strong>Feedback tátil</strong> — vibrações que auxiliam na navegação.
              </li>
              <li>
                <strong>Tecnologias de mobilidade</strong> — GPS acessível e sistemas
                de orientação sonora.
              </li>
            </ul>
            <p>
              Esses recursos tornam a experiência mais acessível, intuitiva e adaptada
              às diferentes necessidades dos usuários.
            </p>
          </ContentSection>

          <SectionDivider />

          <ContentSection
            id="instituicoes"
            title="Instituições, Cursos e Apoio"
            icon={<Building2 size={22} aria-hidden="true" />}
          >
            <p>
              Além das tecnologias, existem instituições que desempenham um papel
              fundamental na inclusão, oferecendo cursos, capacitação e suporte
              especializado.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Fundação Dorina Nowill para Cegos</strong> — referência
                nacional na produção de materiais acessíveis e na oferta de programas
                de educação e inclusão profissional.{" "}
                <a
                  href="https://fundacaodorina.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:no-underline font-semibold"
                  aria-label="Acessar site da Fundação Dorina Nowill (abre em nova aba)"
                >
                  Acesse
                </a>
              </li>
              <li>
                <strong>Laramara</strong> — atua no desenvolvimento de autonomia por
                meio de cursos, orientação e mobilidade, além de apoio às famílias.{" "}
                <a
                  href="https://laramara.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:no-underline font-semibold"
                  aria-label="Acessar site da Laramara (abre em nova aba)"
                >
                  Acesse
                </a>
              </li>
              <li>
                <strong>ADEVA</strong> — promove inclusão social por meio de
                atividades educativas, culturais e cursos de capacitação.{" "}
                <a
                  href="https://adeva.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:no-underline font-semibold"
                  aria-label="Acessar site da ADEVA (abre em nova aba)"
                >
                  Acesse
                </a>
              </li>
              <li>
                <strong>Serenidade do Toque</strong> — desenvolve projetos voltados ao
                bem-estar, autonomia e inclusão, utilizando abordagens sensoriais,
                educativas e de acolhimento.{" "}
                <a
                  href="https://serenidadedotoque.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:no-underline font-semibold"
                  aria-label="Acessar site da Serenidade do Toque (abre em nova aba)"
                >
                  Acesse
                </a>
              </li>
            </ul>
            <p>
              Essas instituições oferecem oportunidades importantes para o aprendizado
              e o desenvolvimento de habilidades no uso de tecnologias assistivas,
              contribuindo para a inclusão educacional, social e profissional.
            </p>
          </ContentSection>

          <SectionDivider />

          <ContentSection
            id="acessibilidade-digital"
            title="Acessibilidade Digital"
            icon={<Globe size={22} aria-hidden="true" />}
          >
            <p>
              Para garantir que todas essas tecnologias funcionem corretamente, é
              fundamental que sites e aplicativos sejam desenvolvidos com foco em
              acessibilidade. As diretrizes da <strong>WCAG</strong> orientam a criação
              de conteúdos mais inclusivos.
            </p>
            <p>Esses princípios garantem que os ambientes digitais sejam:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Perceptíveis</li>
              <li>Operáveis</li>
              <li>Compreensíveis</li>
              <li>Compatíveis com diferentes tecnologias</li>
            </ul>
          </ContentSection>

          <SectionDivider />

          <ContentSection
            id="compromisso"
            title="Nosso Compromisso"
            icon={<HeartHandshake size={22} aria-hidden="true" />}
          >
            <p>
              Este portal foi desenvolvido com base em princípios de design inclusivo,
              com o objetivo de demonstrar, na prática, como a acessibilidade pode ser
              aplicada em ambientes digitais.
            </p>
            <p>Entre os recursos implementados estão:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Navegação por teclado</li>
              <li>Compatibilidade com leitores de tela</li>
              <li>Alto contraste e modo escuro</li>
              <li>Ajuste de tamanho de fonte</li>
              <li>Estrutura organizada e semântica</li>
            </ul>
          </ContentSection>

          <SectionDivider />

          <ContentSection
            id="explore"
            title="Explore e Descubra"
            icon={<Compass size={22} aria-hidden="true" />}
          >
            <p>
              As tecnologias assistivas estão em constante evolução e oferecem inúmeras
              possibilidades para promover autonomia e inclusão. Conhecer essas
              ferramentas e instituições é um passo essencial para ampliar
              oportunidades e fortalecer a participação de pessoas com deficiência
              visual na sociedade.
            </p>
            <p>
              Explore os recursos disponíveis, acesse os links, conheça os cursos e
              compartilhe essas informações. Quanto maior a divulgação, maior o impacto
              positivo na construção de um ambiente mais acessível e inclusivo para
              todos.
            </p>
          </ContentSection>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
