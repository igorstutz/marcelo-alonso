export const contact = {
  phone: "(21) 99626-9145",
  phoneRaw: "5521996269145",
  email: "contato@drmarceloalonso.com.br",
  instagram: "https://instagram.com/dr_marcelo_alonso",
  instagramHandle: "@dr_marcelo_alonso",
  address:
    "Barralife Medical Center — Av. Armando Lombardi, 1.000, Bloco 02, Salas 101/102, Barra da Tijuca, Rio de Janeiro — RJ",
  shortAddress: "Barra da Tijuca — Rio de Janeiro",
  whatsappLink:
    "https://wa.me/5521996269145?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20o%20Dr.%20Marcelo%20Alonso.",
  crm: "CRM 5285429-8",
};

export type QuickInfo = {
  duration: string;
  anesthesia: string;
  stay: string;
  recovery: string;
};

export type Procedure = {
  slug: string;
  name: string;
  description: string;
  overview: string;
  quickInfo: QuickInfo;
  indications: string[];
  postOp: string;
};

export type ProcedureCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: Procedure[];
};

export const procedureCategories: ProcedureCategory[] = [
  {
    id: "face",
    title: "Procedimentos Faciais",
    subtitle: "Harmonia e naturalidade para cada traço do rosto",
    items: [
      {
        slug: "rinoplastia",
        name: "Rinoplastia",
        description:
          "Cirurgia do nariz para harmonizar o contorno facial, preservando a naturalidade e melhorando a função respiratória.",
        overview:
          "A rinoplastia é uma das cirurgias mais delicadas da face. O Dr. Marcelo Alonso utiliza técnicas modernas que respeitam a anatomia individual e a proporção facial, buscando resultados naturais que conversem com a identidade de cada paciente. Também corrige alterações funcionais como desvio de septo, melhorando a respiração.",
        quickInfo: {
          duration: "2 a 4 horas",
          anesthesia: "Geral",
          stay: "1 noite no hospital",
          recovery: "Retorno social em 10–14 dias",
        },
        indications: [
          "Desarmonia entre o nariz e o restante da face",
          "Giba dorsal (bossa) ou ponta caída",
          "Assimetrias e desvios do dorso nasal",
          "Dificuldade respiratória por desvio de septo",
        ],
        postOp:
          "Uso de tala nasal por cerca de 7 dias e orientação cuidadosa para retorno às atividades. O edema diminui progressivamente, com o resultado final se consolidando ao longo do primeiro ano.",
      },
      {
        slug: "lifting-facial",
        name: "Lifting Facial",
        description:
          "Rejuvenescimento facial com reposicionamento dos tecidos e suavização de linhas de expressão.",
        overview:
          "O lifting facial devolve frescor ao rosto ao reposicionar planos profundos da face, não apenas a pele. Técnicas modernas como o deep plane permitem resultados naturais, duradouros e sem aspecto artificial. O objetivo é devolver uma versão descansada de você mesma — não um rosto diferente.",
        quickInfo: {
          duration: "4 a 6 horas",
          anesthesia: "Geral",
          stay: "1 noite no hospital",
          recovery: "Retorno social em 15–21 dias",
        },
        indications: [
          "Flacidez de terço médio e inferior da face",
          "Sulcos nasogenianos marcados e ptose malar",
          "Contorno mandibular indefinido (jowls)",
          "Flacidez cervical associada",
        ],
        postOp:
          "Uso de malha compressiva nos primeiros dias e repouso relativo. Retorno gradual às atividades sociais conforme o edema regride. Resultado amadurece nos primeiros 2–3 meses.",
      },
      {
        slug: "blefaroplastia",
        name: "Blefaroplastia",
        description:
          "Cirurgia das pálpebras para remoção de excesso de pele e bolsas de gordura, devolvendo jovialidade ao olhar.",
        overview:
          "A blefaroplastia corrige o excesso de pele e as bolsas de gordura das pálpebras superiores e inferiores, aliviando o aspecto de cansaço e devolvendo ao olhar um ar descansado e mais jovem. É uma das cirurgias de maior impacto estético com menor tempo de recuperação.",
        quickInfo: {
          duration: "1 a 2 horas",
          anesthesia: "Local com sedação",
          stay: "Alta no mesmo dia",
          recovery: "Retorno social em 7–10 dias",
        },
        indications: [
          "Excesso de pele nas pálpebras superiores (dermatocálase)",
          "Bolsas de gordura nas pálpebras inferiores",
          "Olhar cansado mesmo após descanso",
          "Campo visual reduzido pela sobra de pele",
        ],
        postOp:
          "Compressas frias nas primeiras 48h. Pontos retirados entre o 5º e 7º dia. Discreta equimose regride em cerca de 10 dias.",
      },
      {
        slug: "bichectomia",
        name: "Bichectomia",
        description:
          "Remoção das bolas de Bichat para afinamento do terço inferior do rosto e maior definição facial.",
        overview:
          "A bichectomia promove um afinamento sutil do terço médio-inferior da face, evidenciando os contornos das maçãs do rosto e da mandíbula. O procedimento é realizado por via intraoral, sem cicatrizes aparentes, com planejamento individual para evitar excessos e preservar a naturalidade.",
        quickInfo: {
          duration: "40 a 60 minutos",
          anesthesia: "Local com sedação",
          stay: "Alta no mesmo dia",
          recovery: "Retorno social em 5–7 dias",
        },
        indications: [
          "Face arredondada sem relação com o peso corporal",
          "Busca por maior definição do contorno mandibular",
          "Harmonização facial complementar a outros tratamentos",
        ],
        postOp:
          "Alimentação pastosa e fria nos primeiros dias. Discreto inchaço regride em 7–10 dias, com o resultado definitivo aparecendo em cerca de 60 dias.",
      },
      {
        slug: "otoplastia",
        name: "Otoplastia",
        description:
          "Correção de orelhas proeminentes ou assimétricas com técnicas que preservam a forma natural.",
        overview:
          "A otoplastia corrige as chamadas orelhas em abano e outras alterações de forma, aproximando o pavilhão auricular da cabeça em um ângulo natural. É um procedimento de grande impacto na autoestima, especialmente quando realizado ainda na infância ou adolescência.",
        quickInfo: {
          duration: "1 a 2 horas",
          anesthesia: "Local com sedação",
          stay: "Alta no mesmo dia",
          recovery: "Retorno social em 7–10 dias",
        },
        indications: [
          "Orelhas em abano (ângulo aumentado com a cabeça)",
          "Assimetria entre as orelhas",
          "Ausência ou pouca definição da anti-hélice",
        ],
        postOp:
          "Uso de faixa elástica contínua por 7 dias e noturna por mais 3 semanas. Proteção durante atividades esportivas por 30 dias.",
      },
      {
        slug: "elevacao-de-sobrancelha",
        name: "Elevação de Supercílio",
        description:
          "Reposicionamento das sobrancelhas para um olhar mais aberto, descansado e harmônico.",
        overview:
          "A elevação de supercílio (brow lift) reposiciona a altura e o desenho das sobrancelhas, frequentemente caídas com o passar dos anos. Pode ser realizada por técnicas endoscópicas ou incisões discretas, muitas vezes associada à blefaroplastia para um resultado mais completo.",
        quickInfo: {
          duration: "1 a 2 horas",
          anesthesia: "Local com sedação ou geral",
          stay: "Alta no mesmo dia",
          recovery: "Retorno social em 7–10 dias",
        },
        indications: [
          "Queda da cauda do supercílio",
          "Olhar cansado ou com peso na região frontal",
          "Rugas frontais marcadas associadas",
        ],
        postOp:
          "Compressas frias e repouso relativo nos primeiros dias. Retorno a atividades físicas após cerca de 3 semanas.",
      },
    ],
  },
  {
    id: "corpo",
    title: "Procedimentos Corporais",
    subtitle: "Contorno e proporção para a silhueta que você deseja",
    items: [
      {
        slug: "lipoaspiracao",
        name: "Lipoaspiração",
        description:
          "Remoção da gordura localizada para redefinição do contorno corporal em áreas específicas.",
        overview:
          "A lipoaspiração moderna é muito mais do que apenas retirar gordura: é um trabalho de escultura que redefine o contorno corporal respeitando a anatomia de cada paciente. O Dr. Marcelo utiliza técnicas seguras como a lipo HD quando indicado, para realçar a musculatura natural com resultados elegantes.",
        quickInfo: {
          duration: "2 a 4 horas",
          anesthesia: "Peridural com sedação ou geral",
          stay: "1 noite no hospital",
          recovery: "Retorno ao trabalho em 7–14 dias",
        },
        indications: [
          "Gordura localizada resistente a dieta e exercício",
          "Cintura, flancos, abdome, coxas, costas ou braços",
          "Pacientes dentro ou próximos ao peso ideal",
          "Boa qualidade de pele (elasticidade preservada)",
        ],
        postOp:
          "Uso de cinta compressiva por 30–60 dias e drenagem linfática. Retorno a atividades físicas leves em 30 dias e completas em 60 dias.",
      },
      {
        slug: "abdominoplastia",
        name: "Abdominoplastia",
        description:
          "Remove o excesso de pele e gordura do abdome, restaura a musculatura e redefine a cintura.",
        overview:
          "A abdominoplastia é indicada quando apenas a lipoaspiração não resolve — como após gestações ou grandes perdas de peso — pois remove o excesso de pele, corrige a diástase (afastamento) dos músculos retos abdominais e redefine completamente o contorno da cintura. É uma cirurgia transformadora quando bem indicada.",
        quickInfo: {
          duration: "3 a 5 horas",
          anesthesia: "Peridural com sedação ou geral",
          stay: "1 a 2 noites no hospital",
          recovery: "Retorno ao trabalho em 21–30 dias",
        },
        indications: [
          "Excesso de pele e estrias abaixo do umbigo",
          "Diástase dos músculos abdominais",
          "Flacidez abdominal pós-gestação ou pós-emagrecimento",
          "Cicatriz de cesariana com abaulamento associado",
        ],
        postOp:
          "Uso contínuo de cinta por 60 dias e posição levemente fletida nos primeiros dias. Drenagem linfática e retorno progressivo às atividades. Exercícios completos após 60 dias.",
      },
      {
        slug: "protese-mamaria",
        name: "Prótese Mamária",
        description:
          "Aumento e projeção das mamas com implantes de silicone de alta qualidade, personalizados ao seu biotipo.",
        overview:
          "A inclusão de próteses mamárias é planejada de forma individualizada: escolha do implante, via de acesso e plano de posicionamento são decididos em conjunto com a paciente, respeitando seu biotipo e expectativas. O objetivo é um resultado bonito, natural e proporcional ao corpo.",
        quickInfo: {
          duration: "1,5 a 2,5 horas",
          anesthesia: "Geral",
          stay: "1 noite no hospital",
          recovery: "Retorno ao trabalho em 7–14 dias",
        },
        indications: [
          "Mamas pequenas ou assimétricas",
          "Perda de volume após amamentação ou emagrecimento",
          "Busca por maior proporção corporal",
          "Ausência de contraindicações mamárias (avaliação prévia)",
        ],
        postOp:
          "Sutiã cirúrgico por 30–45 dias. Afastamento de exercícios físicos completos por 60 dias. Retorno gradual a atividades que envolvem membros superiores.",
      },
      {
        slug: "mastopexia",
        name: "Mastopexia",
        description:
          "Lifting mamário com levantamento das mamas, reposicionamento da aréola e resultado rejuvenescido.",
        overview:
          "A mastopexia corrige a ptose (queda) mamária reposicionando as mamas em uma altura mais jovem, com reposicionamento da aréola e, quando indicado, associação com prótese para recuperar o volume perdido. É uma cirurgia especialmente buscada após gestações e perdas de peso.",
        quickInfo: {
          duration: "2 a 4 horas",
          anesthesia: "Geral",
          stay: "1 noite no hospital",
          recovery: "Retorno ao trabalho em 10–14 dias",
        },
        indications: [
          "Queda mamária (ptose) com ou sem perda de volume",
          "Pós-amamentação e pós-emagrecimento",
          "Assimetria significativa entre as mamas",
        ],
        postOp:
          "Sutiã cirúrgico contínuo por 45 dias. Cicatrizes evoluem ao longo de 12 meses, com cuidados orientados para amadurecimento adequado.",
      },
      {
        slug: "mamoplastia-redutora",
        name: "Mamoplastia Redutora",
        description:
          "Redução do volume mamário para aliviar desconforto e alcançar proporção corporal equilibrada.",
        overview:
          "A redução mamária alivia queixas físicas (dor nas costas, sulcos nas alças do sutiã, intertrigo) e devolve proporção e conforto. Além do impacto estético, é uma cirurgia com grande ganho em qualidade de vida para pacientes com hipertrofia mamária significativa.",
        quickInfo: {
          duration: "3 a 4 horas",
          anesthesia: "Geral",
          stay: "1 a 2 noites no hospital",
          recovery: "Retorno ao trabalho em 14–21 dias",
        },
        indications: [
          "Dores cervicais e dorsais por peso mamário",
          "Sulcos nas alças do sutiã",
          "Dermatites por atrito no sulco mamário",
          "Dificuldade em atividades físicas",
        ],
        postOp:
          "Sutiã cirúrgico por 45 dias. Retorno gradual às atividades e cuidados contínuos com as cicatrizes por até 12 meses.",
      },
      {
        slug: "gluteoplastia",
        name: "Gluteoplastia",
        description:
          "Aumento e projeção dos glúteos com próteses de silicone ou lipoenxertia (gordura autóloga).",
        overview:
          "A gluteoplastia pode ser realizada com próteses de silicone específicas ou por lipoenxertia — uso de gordura do próprio paciente para modelar e dar volume aos glúteos. A escolha é individualizada a partir da anatomia, da quantidade de gordura disponível e das expectativas.",
        quickInfo: {
          duration: "2 a 4 horas",
          anesthesia: "Peridural ou geral",
          stay: "1 noite no hospital",
          recovery: "Retorno ao trabalho em 14–21 dias",
        },
        indications: [
          "Pouca projeção glútea",
          "Assimetria entre os glúteos",
          "Flacidez e perda de contorno pós-emagrecimento",
        ],
        postOp:
          "Evitar sentar diretamente sobre os glúteos por 15–21 dias. Uso de malha compressiva e retorno progressivo às atividades físicas após 60 dias.",
      },
      {
        slug: "ginecomastia",
        name: "Ginecomastia",
        description:
          "Correção do aumento das glândulas mamárias em homens, restaurando o contorno torácico masculino.",
        overview:
          "A cirurgia de ginecomastia trata o aumento da mama masculina, combinando lipoaspiração e retirada direta do tecido glandular quando necessário. É um procedimento com grande impacto na autoestima, permitindo ao paciente retomar atividades como a exposição torácica sem constrangimento.",
        quickInfo: {
          duration: "1,5 a 3 horas",
          anesthesia: "Local com sedação ou geral",
          stay: "Alta no mesmo dia ou 1 noite",
          recovery: "Retorno ao trabalho em 7–14 dias",
        },
        indications: [
          "Aumento glandular mamário masculino",
          "Excesso de gordura na região peitoral",
          "Assimetrias torácicas",
        ],
        postOp:
          "Colete compressivo por 30 dias. Retorno a exercícios leves após 30 dias e completos após 60 dias.",
      },
      {
        slug: "lifting-braquial",
        name: "Lifting Braquial",
        description:
          "Remove excesso de pele da parte interna dos braços, redefinindo a silhueta após perda de peso.",
        overview:
          "O lifting braquial (braquioplastia) remove o excesso de pele da parte interna dos braços, comum após grandes emagrecimentos ou com o envelhecimento. O resultado devolve firmeza e permite retomar peças de roupa e atividades com mais confiança.",
        quickInfo: {
          duration: "2 a 3 horas",
          anesthesia: "Geral",
          stay: "1 noite no hospital",
          recovery: "Retorno ao trabalho em 10–14 dias",
        },
        indications: [
          "Flacidez acentuada da pele dos braços",
          "Pós-emagrecimento ou pós-bariátrica",
          "Desconforto com atrito cutâneo na região",
        ],
        postOp:
          "Malha compressiva por 30 dias. Limitação de movimentos de elevação do braço nos primeiros 15 dias. Cicatrizes acompanhadas ao longo de 12 meses.",
      },
      {
        slug: "lifting-crural",
        name: "Lifting Crural",
        description:
          "Retira o excesso de pele entre as coxas, devolvendo firmeza e harmonia à região.",
        overview:
          "O lifting crural é indicado quando há excesso de pele na face interna das coxas, frequentemente após grandes perdas de peso. A cirurgia devolve contorno e firmeza, permitindo caminhar e praticar atividades sem o incômodo do atrito cutâneo.",
        quickInfo: {
          duration: "2 a 3 horas",
          anesthesia: "Peridural ou geral",
          stay: "1 noite no hospital",
          recovery: "Retorno ao trabalho em 14–21 dias",
        },
        indications: [
          "Flacidez na face interna das coxas",
          "Pós-emagrecimento ou pós-bariátrica",
          "Atrito cutâneo recorrente",
        ],
        postOp:
          "Malha compressiva por 30–45 dias. Evitar esforços com os membros inferiores e retomar caminhada leve após 7 dias.",
      },
      {
        slug: "cirurgia-intima",
        name: "Cirurgia Íntima",
        description:
          "Ninfoplastia e procedimentos íntimos femininos realizados com delicadeza e total discrição.",
        overview:
          "A ninfoplastia — cirurgia íntima de redução dos pequenos lábios vaginais — é realizada com técnica delicada, preservando sensibilidade e função. O atendimento é totalmente discreto, do consultório ao centro cirúrgico, respeitando o que cada paciente sente e deseja.",
        quickInfo: {
          duration: "1 a 1,5 hora",
          anesthesia: "Local com sedação",
          stay: "Alta no mesmo dia",
          recovery: "Retorno ao trabalho em 5–7 dias",
        },
        indications: [
          "Hipertrofia dos pequenos lábios",
          "Desconforto com roupas e atividades físicas",
          "Assimetrias labiais",
        ],
        postOp:
          "Higiene local cuidadosa, abstinência sexual por 30 dias e retorno a exercícios após 21–30 dias, conforme evolução.",
      },
      {
        slug: "protese-de-panturrilha",
        name: "Prótese de Panturrilha",
        description:
          "Aumento volumétrico da panturrilha para maior harmonia proporcional do membro inferior.",
        overview:
          "A prótese de panturrilha é indicada para pacientes com pouca definição ou assimetrias importantes na região, usando implantes de silicone específicos que devolvem volume e proporção ao membro inferior. É um procedimento delicado que requer planejamento individualizado.",
        quickInfo: {
          duration: "1,5 a 2 horas",
          anesthesia: "Peridural ou geral",
          stay: "1 noite no hospital",
          recovery: "Retorno ao trabalho em 14–21 dias",
        },
        indications: [
          "Pouca definição muscular das panturrilhas",
          "Assimetrias congênitas ou pós-traumáticas",
          "Hipotrofia por sequela neurológica",
        ],
        postOp:
          "Repouso com elevação dos membros nos primeiros dias. Deambulação progressiva e retorno a exercícios após 60 dias.",
      },
    ],
  },
  {
    id: "minimamente",
    title: "Minimamente Invasivos",
    subtitle: "Resultados naturais com recuperação rápida",
    items: [
      {
        slug: "toxina-botulinica",
        name: "Toxina Botulínica",
        description:
          "Aplicação de botox para suavização de rugas dinâmicas e prevenção de linhas de expressão.",
        overview:
          "A aplicação de toxina botulínica suaviza rugas dinâmicas — aquelas que aparecem com a expressão facial — e ajuda a prevenir o aprofundamento dessas linhas ao longo do tempo. Quando bem aplicada, preserva completamente a naturalidade da expressão.",
        quickInfo: {
          duration: "20 a 30 minutos",
          anesthesia: "Sem anestesia (tópica opcional)",
          stay: "Procedimento ambulatorial",
          recovery: "Sem afastamento",
        },
        indications: [
          "Rugas da glabela (entre as sobrancelhas)",
          "Rugas frontais e periorbitárias (pés-de-galinha)",
          "Prevenção de linhas de expressão em pacientes jovens",
          "Correção de assimetrias de expressão",
        ],
        postOp:
          "Evitar deitar e massagear a região nas primeiras horas. Efeito inicial em 3–5 dias e pleno em 14 dias, com duração média de 4–6 meses.",
      },
      {
        slug: "preenchimento-facial",
        name: "Preenchimento Facial",
        description:
          "Ácido hialurônico para restaurar volume, contornar e hidratar áreas específicas da face.",
        overview:
          "O preenchimento com ácido hialurônico restaura volumes perdidos, define contornos faciais e hidrata a pele profundamente. Quando planejado com visão global da face, promove um rejuvenescimento discreto e natural, sem aspecto artificial.",
        quickInfo: {
          duration: "30 a 60 minutos",
          anesthesia: "Tópica e anestésico no próprio produto",
          stay: "Procedimento ambulatorial",
          recovery: "Retorno social imediato",
        },
        indications: [
          "Sulcos nasogenianos e código de barras",
          "Contorno mandibular e mento",
          "Olheiras (tear trough)",
          "Hidratação profunda e skinbooster",
        ],
        postOp:
          "Evitar calor intenso, exercícios e massagens nas primeiras 24h. Pequenos hematomas, quando ocorrem, regridem em poucos dias.",
      },
      {
        slug: "bioestimuladores",
        name: "Bioestimuladores de Colágeno",
        description:
          "Estímulo à produção natural de colágeno para firmeza e rejuvenescimento progressivo da pele.",
        overview:
          "Os bioestimuladores de colágeno (ácido polilático, hidroxiapatita de cálcio) estimulam a produção natural de colágeno pela própria pele, promovendo um rejuvenescimento progressivo, natural e duradouro. O resultado aparece ao longo dos meses seguintes à aplicação.",
        quickInfo: {
          duration: "30 a 60 minutos",
          anesthesia: "Tópica",
          stay: "Procedimento ambulatorial",
          recovery: "Retorno social em 1–2 dias",
        },
        indications: [
          "Flacidez facial leve a moderada",
          "Pele fina com perda de sustentação",
          "Prevenção de sinais de envelhecimento",
          "Flacidez em colo, braços e glúteos",
        ],
        postOp:
          "Massagens locais conforme orientação nos primeiros 5 dias. Resultado progressivo ao longo de 2–4 meses, com duração média de 18–24 meses.",
      },
      {
        slug: "lipo-de-papada",
        name: "Lipo de Papada",
        description:
          "Lipoaspiração submentoniana minimamente invasiva para definição do ângulo cervical.",
        overview:
          "A lipo de papada é um procedimento rápido e de impacto significativo no contorno facial, removendo a gordura submentoniana e devolvendo definição ao ângulo entre o queixo e o pescoço. Pode ser combinada com outros tratamentos de harmonização.",
        quickInfo: {
          duration: "45 a 60 minutos",
          anesthesia: "Local com sedação",
          stay: "Alta no mesmo dia",
          recovery: "Retorno social em 5–7 dias",
        },
        indications: [
          "Acúmulo de gordura no submento",
          "Ângulo cervical apagado",
          "Pacientes com boa qualidade de pele",
        ],
        postOp:
          "Uso de mentoneira por cerca de 15 dias. Edema regride progressivamente, com resultado pleno em 60 dias.",
      },
    ],
  },
  {
    id: "reparadores",
    title: "Procedimentos Reparadores",
    subtitle: "Devolvendo função, forma e autoestima",
    items: [
      {
        slug: "reconstrucao-mamaria",
        name: "Reconstrução Mamária",
        description:
          "Reconstrução após mastectomia, com técnicas personalizadas para cada caso e momento de vida.",
        overview:
          "A reconstrução mamária é um passo fundamental no tratamento do câncer de mama. O planejamento é individualizado — considerando o tempo de tratamento, as características de cada paciente e o momento de vida — podendo ser realizada com implantes, retalhos ou combinações, em tempo imediato ou tardio.",
        quickInfo: {
          duration: "Varia conforme a técnica",
          anesthesia: "Geral",
          stay: "1 a 3 noites no hospital",
          recovery: "Varia conforme a técnica",
        },
        indications: [
          "Pós-mastectomia imediata ou tardia",
          "Reconstrução após cirurgia conservadora",
          "Simetrização da mama contralateral",
        ],
        postOp:
          "Acompanhamento próximo e multidisciplinar. Retorno gradual às atividades, respeitando o momento oncológico de cada paciente.",
      },
      {
        slug: "cirurgia-pos-bariatrica",
        name: "Cirurgia Pós-Bariátrica",
        description:
          "Remoção do excesso de pele após grande perda de peso, devolvendo contorno e conforto.",
        overview:
          "Após grandes perdas de peso, o excesso de pele pode comprometer conforto, higiene e autoestima. As cirurgias pós-bariátricas — abdominoplastia em âncora, lifting de coxas, braços e mamas — completam a jornada de transformação e devolvem a sensação de que o corpo finalmente acompanhou o esforço.",
        quickInfo: {
          duration: "3 a 6 horas por região",
          anesthesia: "Geral",
          stay: "1 a 3 noites no hospital",
          recovery: "Varia conforme a região",
        },
        indications: [
          "Excesso de pele após bariátrica ou grande perda de peso",
          "Peso estabilizado há pelo menos 12 meses",
          "Boas condições nutricionais",
        ],
        postOp:
          "Acompanhamento nutricional e multidisciplinar. Uso rigoroso de malhas compressivas e respeito ao tempo de cicatrização.",
      },
      {
        slug: "correcao-de-cicatrizes",
        name: "Correção de Cicatrizes",
        description:
          "Tratamento cirúrgico de cicatrizes hipertróficas, queloides e sequelas de trauma.",
        overview:
          "Cicatrizes inestéticas, queloides, cicatrizes hipertróficas ou resultantes de traumas podem ser tratadas cirurgicamente, muitas vezes combinadas com terapias complementares como infiltrações e laser. O objetivo é disfarçar e reduzir o impacto da marca, devolvendo conforto estético.",
        quickInfo: {
          duration: "30 minutos a 2 horas",
          anesthesia: "Local, local com sedação ou geral",
          stay: "Geralmente alta no mesmo dia",
          recovery: "Retorno social em 5–10 dias",
        },
        indications: [
          "Queloides e cicatrizes hipertróficas",
          "Cicatrizes largas ou com pigmentação alterada",
          "Sequelas de cirurgias prévias ou traumas",
        ],
        postOp:
          "Cuidados intensivos com a nova cicatriz: proteção solar rigorosa, silicone tópico e acompanhamento por 6 a 12 meses.",
      },
      {
        slug: "reparacao-de-traumas",
        name: "Reparação de Traumas",
        description:
          "Correção de deformidades decorrentes de acidentes, queimaduras ou cirurgias anteriores.",
        overview:
          "A cirurgia reparadora trata as consequências de acidentes, queimaduras e sequelas de procedimentos anteriores. Cada caso é único e exige planejamento personalizado, muitas vezes em etapas, priorizando função e forma em conjunto.",
        quickInfo: {
          duration: "Varia conforme o caso",
          anesthesia: "Conforme indicação",
          stay: "Conforme indicação",
          recovery: "Varia conforme o caso",
        },
        indications: [
          "Sequelas de queimaduras",
          "Deformidades pós-trauma",
          "Retoques de cirurgias anteriores",
        ],
        postOp:
          "Acompanhamento próximo e frequentemente multidisciplinar, com cuidado individual para cada etapa do tratamento.",
      },
    ],
  },
];

export const differentials = [
  {
    title: "Formação de Excelência",
    description:
      "Residência em cirurgia geral no Hospital Central do Exército e em cirurgia plástica no Hospital Municipal Barata Ribeiro.",
  },
  {
    title: "Membro da SBCP",
    description:
      "Associado à Sociedade Brasileira de Cirurgia Plástica e à Associação Médica Brasileira.",
  },
  {
    title: "Atendimento Humanizado",
    description:
      "Dedicação, seriedade e respeito ao paciente — com foco no bem-estar físico, mental e social.",
  },
  {
    title: "Tecnologia e Segurança",
    description:
      "Estrutura hospitalar completa no Barralife Medical Center, com equipamentos de última geração.",
  },
];

import { asset } from "./asset";

const procedureImages: Record<string, string> = {
  // Face
  rinoplastia: "/images/procedures/face1.jpg",
  "lifting-facial": "/images/procedures/face3.jpg",
  blefaroplastia: "/images/procedures/face2.jpg",
  bichectomia: "/images/procedures/face2.jpg",
  otoplastia: "/images/procedures/face1.jpg",
  "elevacao-de-sobrancelha": "/images/procedures/face2.jpg",
  // Body
  lipoaspiracao: "/images/procedures/body1.jpg",
  abdominoplastia: "/images/procedures/body1.jpg",
  "protese-mamaria": "/images/procedures/body1.jpg",
  mastopexia: "/images/procedures/body1.jpg",
  "mamoplastia-redutora": "/images/procedures/body2.jpg",
  gluteoplastia: "/images/procedures/body1.jpg",
  ginecomastia: "/images/procedures/body2.jpg",
  "lifting-braquial": "/images/procedures/body2.jpg",
  "lifting-crural": "/images/procedures/body3.jpg",
  "cirurgia-intima": "/images/procedures/body1.jpg",
  "protese-de-panturrilha": "/images/procedures/body3.jpg",
  // Minimamente
  "toxina-botulinica": "/images/procedures/aesthetic1.jpg",
  "preenchimento-facial": "/images/procedures/face2.jpg",
  bioestimuladores: "/images/procedures/aesthetic2.jpg",
  "lipo-de-papada": "/images/procedures/face3.jpg",
  // Reparadores
  "reconstrucao-mamaria": "/images/procedures/medical3.jpg",
  "cirurgia-pos-bariatrica": "/images/procedures/medical2.jpg",
  "correcao-de-cicatrizes": "/images/procedures/medical4.jpg",
  "reparacao-de-traumas": "/images/procedures/medical1.jpg",
};

const categoryFallbackImages: Record<string, string> = {
  face: "/images/procedures/face.jpg",
  corpo: "/images/procedures/corpo.jpg",
  minimamente: "/images/procedures/minimamente.jpg",
  reparadores: "/images/procedures/reparadores.jpg",
};

export function getProcedureImage(slug: string, categoryId?: string): string {
  return asset(
    procedureImages[slug] ??
      (categoryId ? categoryFallbackImages[categoryId] : undefined) ??
      "/images/procedures/face.jpg"
  );
}

export function getAllProcedures(): Array<Procedure & { categoryId: string; categoryTitle: string }> {
  return procedureCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      categoryId: cat.id,
      categoryTitle: cat.title,
    }))
  );
}

export function getProcedureBySlug(slug: string) {
  for (const cat of procedureCategories) {
    const item = cat.items.find((i) => i.slug === slug);
    if (item) return { ...item, categoryId: cat.id, categoryTitle: cat.title };
  }
  return null;
}

export function getRelatedProcedures(slug: string, limit = 3) {
  const current = getProcedureBySlug(slug);
  if (!current) return [];
  const sameCategory =
    procedureCategories.find((c) => c.id === current.categoryId)?.items ?? [];
  return sameCategory
    .filter((p) => p.slug !== slug)
    .slice(0, limit)
    .map((p) => ({ ...p, categoryId: current.categoryId, categoryTitle: current.categoryTitle }));
}
