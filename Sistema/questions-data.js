// Banco de questões para prática (Certo/Errado e múltipla escolha)
// Gerado a partir dos PDFs de estudo em /home/lyke/Documentos/Estudo-PRF
// Reorganizado conforme o cronograma recomendado (2h/dia, 2 matérias por dia)
const QUESTION_BANKS = {
  "Segunda": [
    {
      "id": "port-0",
      "type": "cebraspe",
      "statement": "Uma notícia jornalística e um artigo científico são exemplos de textos informativos, embora apresentem diferenças na linguagem e na finalidade.",
      "correct": "CERTO",
      "explanation": "Ambos os textos se encaixam no gênero informativo, mas suas finalidades e linguagens são adaptadas ao público que visam. A notícia jornalística é voltada para o público geral e busca informar de forma clara e direta sobre fatos recentes, com linguagem acessível e objetiva..."
    },
    {
      "id": "port-1",
      "type": "cebraspe",
      "statement": "No português brasileiro, a grafia da palavra \"consequência\" foi modificada com o Novo Acordo Ortográfico, passando a ser escrita sem o \"u\".",
      "correct": "ERRADO",
      "explanation": "O Novo Acordo Ortográfico, que entrou em vigor para unificar a ortografia dos países lusófonos, alterou apenas algumas palavras da língua portuguesa, principalmente aquelas com hífen, acentuação e consoantes mudas. No entanto, “consequência” não sofreu alteração; o \"u\" é mantido para sinalizar a sílaba tônica e fazer parte da sequência fonética correta..."
    },
    {
      "id": "port-2",
      "type": "cebraspe",
      "statement": "Na frase “Ela chegou cedo, pois queria assistir ao filme”, o conector “pois” estabelece uma relação de causa entre as orações.",
      "correct": "CERTO",
      "explanation": "O conectivo “pois” tem função causal nessa frase, indicando o motivo da ação de chegar cedo. Conectores são palavras que estabelecem coesão no texto ao expressar relações lógicas entre as ideias, como causa, consequência, adição, entre outras. Nesse caso, “pois” explica a razão do ato de chegar cedo, estabelecendo uma relação causal..."
    },
    {
      "id": "port-3",
      "type": "cebraspe",
      "statement": "Na oração “A maioria dos estudantes discordou da decisão tomada”, o verbo “discordar” está corretamente conjugado no singular para concordar com o núcleo “maioria”.",
      "correct": "CERTO",
      "explanation": "O núcleo do sujeito composto “a maioria dos estudantes” é “maioria”, um substantivo singular, e, portanto, o verbo “discordar” concorda no singular. Em construções desse tipo, o verbo se ajusta ao núcleo do sujeito, e não ao termo “estudantes”..."
    },
    {
      "id": "port-4",
      "type": "cebraspe",
      "statement": "O verbo “assistir” na frase “Assisti ao filme no final de semana” está corretamente empregado e rege a preposição “a”.",
      "correct": "CERTO",
      "explanation": "No sentido de ver ou presenciar, o verbo “assistir” é transitivo indireto e exige a preposição “a”, como em “assistir ao filme”. Essa regência é particular do português brasileiro e costuma ser abordada pelo CEBRASPE para verificar a compreensão das normas de regência verbal, especialmente com verbos que apresentam usos variados. Esse tipo de conhecimento é essencial para o domínio da norma-padrão."
    },
    {
      "id": "port-5",
      "type": "cebraspe",
      "statement": "Na frase “A professora se referiu à aluna”, o uso do acento indicativo de crase está incorreto.",
      "correct": "ERRADO",
      "explanation": "O uso da crase está correto, pois o verbo “referir-se” exige a preposição “a”, e “aluna” é um substantivo feminino determinado que aceita o artigo feminino “a”, formando “à”. A crase, que representa a fusão de duas vogais idênticas, deve ser aplicada quando há combinação de preposição com artigo definido. A CEBRASPE geralmente explora casos em que o uso da crase é obrigatório, proibido ou facultativo, como forma de avaliar a segurança do candidato com essa regra gramatical..."
    },
    {
      "id": "port-6",
      "type": "cebraspe",
      "statement": "Na oração “Deve-se avaliar o projeto com cautela”, o pronome “se” está corretamente posicionado segundo as normas da língua portuguesa.",
      "correct": "CERTO",
      "explanation": "O pronome “se” está corretamente em posição proclítica, pois o verbo “deve” está no infinitivo impessoal, que permite essa colocação. A próclise é uma das colocações pronominais e ocorre frequentemente em locuções verbais, especialmente quando o verbo auxiliar está no infinitivo..."
    },
    {
      "id": "port-7",
      "type": "cebraspe",
      "statement": "Na frase “A conferência foi dedicada à saúde mental dos trabalhadores”, o uso do acento indicativo de crase está correto.",
      "correct": "CERTO",
      "explanation": "O uso da crase está correto porque o verbo “dedicar” exige a preposição “a” e a palavra “saúde” pede o artigo feminino “a”, formando “à”. Em expressões que indicam destino ou objetivo e que envolvem palavras femininas, a crase se torna necessária. Questões como esta buscam verificar se o candidato domina a aplicação da crase em situações de regência verbal, especialmente em contextos que indicam direcionamento ou intenção."
    },
    {
      "id": "port-8",
      "type": "cebraspe",
      "statement": "Na frase “Mariana, por ser muito dedicada, foi promovida rapidamente”, as vírgulas foram usadas para isolar um adjunto adverbial explicativo.",
      "correct": "CERTO",
      "explanation": "A expressão “por ser muito dedicada” funciona como um adjunto adverbial explicativo, indicando a razão pela qual Mariana foi promovida, e as vírgulas foram corretamente empregadas para isolá-lo. Esse tipo de estrutura adiciona uma explicação adicional, e a pontuação ajuda a demarcar essa informação..."
    },
    {
      "id": "port-9",
      "type": "cebraspe",
      "statement": "No trecho “Ele estava exausto; no entanto, decidiu continuar a viagem”, o conector “no entanto” estabelece uma relação de oposição.",
      "correct": "CERTO",
      "explanation": "O conector “no entanto” é uma conjunção adversativa, que expressa uma ideia contrária à anterior, criando uma relação de oposição entre “estar exausto” e “decidir continuar a viagem”. Esse tipo de conector é essencial para a coesão textual, pois ele organiza o sentido entre as ideias de forma lógica..."
    },
    {
      "id": "port-10",
      "type": "cebraspe",
      "statement": "Na frase “Aquelas pessoas as quais você se referiu estão chegando”, o uso de “as quais” está incorreto, pois o correto seria “às quais”.",
      "correct": "CERTO",
      "explanation": "A regência do verbo “referir-se” exige a preposição “a”, e, ao se combinar com o pronome relativo “quais”, forma-se “às quais” devido à crase. A CEBRASPE aborda essa questão para avaliar o domínio do candidato sobre a relação entre pronomes relativos e as preposições exigidas pelos verbos, o que é crucial para a correção gramatical e a clareza dos enunciados em textos."
    },
    {
      "id": "port-11",
      "type": "cebraspe",
      "statement": "Na frase “O aluno, muito estudioso, foi premiado pela escola”, o trecho “muito estudioso” exerce a função de aposto.",
      "correct": "CERTO",
      "explanation": "Aqui, “muito estudioso” caracteriza o aluno e está isolado por vírgulas, cumprindo a função de aposto explicativo, que é usado para acrescentar informações sobre um substantivo. O aposto fornece um esclarecimento ou descrição adicional e, neste caso, explica uma característica do aluno. A CEBRASPE valoriza o entendimento desse tipo de estrutura, pois o aposto contribui para a construção da coesão e riqueza de informações em uma frase. 17..."
    },
    {
      "id": "port-12",
      "type": "cebraspe",
      "statement": "A frase “Lembrar-me-ei do compromisso” está correta quanto à colocação do pronome átono.",
      "correct": "CERTO",
      "explanation": "O pronome átono “me” foi corretamente posicionado em mesóclise devido à forma verbal no futuro do presente “lembrarei”. A mesóclise é exigida quando o verbo está no futuro do presente ou do pretérito, caso não haja nenhum elemento que a invalide. Esse conhecimento é essencial para candidatos do CEBRASPE, pois a mesóclise é um elemento específico do português formal e demonstra conhecimento profundo da norma culta."
    },
    {
      "id": "port-13",
      "type": "cebraspe",
      "statement": "Em “Os professores que têm experiência são valorizados”, a oração subordinada adjetiva “que têm experiência” restringe o sentido de “professores”.",
      "correct": "CERTO",
      "explanation": "A oração “que têm experiência” caracteriza uma parte específica dos “professores” e, por isso, é chamada de oração subordinada adjetiva restritiva. Esse tipo de oração delimita ou especifica o substantivo ao qual se refere, diferenciando-o de outros elementos do mesmo grupo. A CEBRASPE cobra esse entendimento para verificar se o candidato consegue identificar o papel das orações subordinadas adjetivas no enriquecimento semântico das frases."
    },
    {
      "id": "port-14",
      "type": "cebraspe",
      "statement": "No trecho “Ele estava exausto, mas persistiu”, a palavra “exausto” poderia ser substituída por “cansado” sem prejuízo de sentido.",
      "correct": "CERTO",
      "explanation": "A palavra “exausto” é sinônima de “cansado”, e, neste contexto, ambas podem ser usadas para indicar a condição de fadiga do sujeito. Em questões de substituição de palavras, a CEBRASPE busca avaliar a precisão semântica, verificando se o candidato compreende os sinônimos que mantêm o sentido do texto e que contribuem para a riqueza vocabular. 21..."
    },
    {
      "id": "port-15",
      "type": "cebraspe",
      "statement": "Na frase “Ele assistiu a uma palestra inspiradora”, a regência verbal do verbo “assistir” está correta.",
      "correct": "CERTO",
      "explanation": "No sentido de ver ou presenciar, “assistir” é transitivo indireto e exige a preposição “a”. Aqui, “assistiu a uma palestra” está de acordo com as regras de regência verbal da norma culta. Questões de regência verbal no CEBRASPE buscam avaliar a familiaridade do candidato com o uso formal dos verbos que possuem mais de um sentido e que, portanto, mudam de regência conforme o contexto."
    },
    {
      "id": "port-16",
      "type": "cebraspe",
      "statement": "Em um texto argumentativo, é comum que o autor apresente dados e exemplos para apoiar sua tese.",
      "correct": "CERTO",
      "explanation": "Em textos argumentativos, a construção da argumentação costuma incluir dados, exemplos e outras evidências para fortalecer a defesa de uma tese ou ponto de vista. Esse tipo de suporte contribui para tornar os argumentos mais sólidos e convincentes. A CEBRASPE geralmente explora essa questão para avaliar se o candidato entende as técnicas de argumentação e de como os dados e exemplos ajudam a sustentar um argumento no texto."
    },
    {
      "id": "port-17",
      "type": "cebraspe",
      "statement": "Uma carta de reclamação é um gênero textual que tem como principal objetivo informar o leitor.",
      "correct": "ERRADO",
      "explanation": "O principal objetivo de uma carta de reclamação é manifestar insatisfação e persuadir o destinatário a tomar alguma ação corretiva. Esse gênero textual é comumente direcionado a empresas ou autoridades, e seu tom é geralmente formal e direto. Questões de reconhecimento de gêneros textuais visam avaliar a capacidade do candidato de identificar os objetivos específicos de diferentes tipos de textos e adequar a interpretação ao contexto de comunicação. 25..."
    },
    {
      "id": "port-18",
      "type": "cebraspe",
      "statement": "Na frase “As crianças foram ao parque, e elas estavam animadas”, o termo “elas” funciona como elemento de coesão por referenciação.",
      "correct": "CERTO",
      "explanation": "O pronome “elas” refere-se a “as crianças” e serve para manter a coesão entre as orações sem repetição do termo original. Esse uso de pronomes evita redundâncias e melhora a fluidez do texto. A CEBRASPE explora esse tipo de estrutura para avaliar a compreensão do candidato sobre a função coesiva dos pronomes, essencial para uma leitura coesa e clara."
    },
    {
      "id": "port-19",
      "type": "cebraspe",
      "statement": "A frase “Se ele estudasse mais, teria mais chances de passar” está no modo subjuntivo, indicando uma condição.",
      "correct": "CERTO",
      "explanation": "O verbo “estudasse” está no subjuntivo, indicando uma hipótese ou condição necessária para que algo aconteça. O uso correto do modo subjuntivo é essencial para expressar situações incertas ou hipotéticas. Questões da CEBRASPE sobre tempos e modos verbais buscam assegurar que o candidato consegue reconhecer e utilizar verbos corretamente em contextos condicionais."
    },
    {
      "id": "port-20",
      "type": "cebraspe",
      "statement": "Na frase “Os jovens e adultos bem informados participam mais da política”, o adjetivo “informados” concorda corretamente com “jovens e adultos”.",
      "correct": "CERTO",
      "explanation": "O adjetivo “informados” está no plural e concorda com os dois núcleos do sujeito composto “jovens e adultos”. Em sujeitos compostos ligados por “e”, o adjetivo deve concordar no plural. A CEBRASPE frequentemente aborda questões de concordância nominal para avaliar o domínio do candidato sobre a harmonia entre o substantivo e os adjetivos. 29..."
    },
    {
      "id": "port-21",
      "type": "cebraspe",
      "statement": "Na frase “Ela precisa de ajuda”, o verbo “precisar” exige preposição, pois é transitivo indireto.",
      "correct": "CERTO",
      "explanation": "O verbo “precisar”, no sentido de “necessitar”, é transitivo indireto e exige a preposição “de”. Esse conhecimento é fundamental, pois muitos verbos na norma-padrão exigem preposições específicas para completar o sentido. Questões de regência verbal no CEBRASPE avaliam a familiaridade do candidato com essas construções."
    },
    {
      "id": "port-22",
      "type": "cebraspe",
      "statement": "Em “Ele se comprometeu a ajudar”, o pronome “se” está corretamente posicionado em próclise.",
      "correct": "CERTO",
      "explanation": "A colocação do pronome “se” em próclise está correta, pois há um elemento que atrai a próclise (o pronome pessoal “ele”). A CEBRASPE cobra esse tipo de colocação para verificar o domínio do candidato sobre as normas de colocação pronominal, que são específicas e fundamentais para a norma culta."
    },
    {
      "id": "port-23",
      "type": "cebraspe",
      "statement": "A frase “Ele afirmou que nada seria fácil” poderia ser reescrita como “Ele afirmou que nada fácil seria” sem prejuízo de sentido.",
      "correct": "ERRADO",
      "explanation": "A ordem “nada fácil seria” soa pouco usual e compromete a clareza e a naturalidade da frase. Em questões de reescrita, a CEBRASPE avalia a habilidade de o candidato manter o sentido e a clareza da mensagem original."
    },
    {
      "id": "port-24",
      "type": "cebraspe",
      "statement": "No trecho “Dedicou-se à pintura e à música”, o uso do acento de crase está correto nas duas ocorrências.",
      "correct": "CERTO",
      "explanation": "A crase ocorre devido à combinação da preposição “a” (do verbo dedicar-se) com o artigo feminino “a” que acompanha “pintura” e “música”. Questões de crase na CEBRASPE são frequentes e exigem atenção aos casos de regência e artigo. 34. (CEBRASPE - Concordância Verbal) Na expressão “Vinte por cento dos alunos faltou à prova”, o verbo deveria estar no plural para concordar com “alunos”. • Gabarito: ERRADO..."
    },
    {
      "id": "etica-0",
      "type": "mc",
      "statement": "Um agente público recebeu determinação de seu superior para atrasar intencionalmente a tramitação de requerimento legítimo de um cidadão, sem qualquer justificativa técnica ou legal, visando beneficiar terceiro. Diante dessa situação, a conduta eticamente correta é:",
      "options": [
        {
          "letter": "A",
          "text": "Acatar a determinação, pois a hierarquia prevalece sobre a finalidade do ato."
        },
        {
          "letter": "B",
          "text": "Cumprir a ordem somente se não houver prejuízo material direto ao cidadão."
        },
        {
          "letter": "C",
          "text": "Executar a ordem, mas registrar o fato por e-mail para resguardo pessoal."
        },
        {
          "letter": "D",
          "text": "Recusar-se a utilizar artifícios para procrastinar o exercício regular de direito, comunicando o fato pelos canais adequados."
        },
        {
          "letter": "E",
          "text": "Postergar o atendimento, desde que o processo seja concluído dentro do prazo interno."
        }
      ],
      "correct": "D"
    },
    {
      "id": "etica-1",
      "type": "mc",
      "statement": "Um servidor, em decorrência do exercício de suas funções, teve acesso a dados estatísticos ainda não divulgados oficialmente e os repassou a um conhecido para que este se antecipasse ao mercado. Essa conduta é:",
      "options": [
        {
          "letter": "A",
          "text": "Permitida, desde que não haja ganho financeiro direto para o servidor."
        },
        {
          "letter": "B",
          "text": "Permitida, se a informação for repassada sem identificação da fonte."
        },
        {
          "letter": "C",
          "text": "Vedada, por envolver a antecipação de resultados e o uso indevido de informação privilegiada."
        },
        {
          "letter": "D",
          "text": "Vedada apenas se houver dano comprovado à Administração."
        },
        {
          "letter": "E",
          "text": "Vedada somente quando houver classificação formal de sigilo no documento."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-2",
      "type": "mc",
      "statement": "De acordo com a Lei nº 8.112/1990, constitui dever do servidor público atender com presteza:",
      "options": [
        {
          "letter": "A",
          "text": "Apenas às requisições do chefe imediato, ainda que desprovidas de fundamentação."
        },
        {
          "letter": "B",
          "text": "Somente ao público em geral, sem qualquer exceção."
        },
        {
          "letter": "C",
          "text": "Ao público em geral, ressalvadas as informações protegidas por sigilo, bem como às requisições para defesa da Fazenda Pública."
        },
        {
          "letter": "D",
          "text": "Exclusivamente às demandas internas do órgão, por razões de segurança institucional."
        },
        {
          "letter": "E",
          "text": "Apenas às solicitações formalizadas por escrito e com firma reconhecida."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-3",
      "type": "mc",
      "statement": "Nos termos da Lei nº 8.112/1990, o servidor público deve cumprir as ordens emanadas de seus superiores hierárquicos:",
      "options": [
        {
          "letter": "A",
          "text": "Sempre, independentemente de sua legalidade."
        },
        {
          "letter": "B",
          "text": "Sempre, salvo quando houver risco de repercussão negativa na imprensa."
        },
        {
          "letter": "C",
          "text": "Exceto quando manifestamente ilegais."
        },
        {
          "letter": "D",
          "text": "Apenas se confirmadas por escrito pela autoridade competente."
        },
        {
          "letter": "E",
          "text": "Apenas quando reiteradas por duas autoridades hierarquicamente superiores."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-4",
      "type": "mc",
      "statement": "Um servidor ausentou-se do local de trabalho durante o horário de expediente para tratar de assunto de natureza pessoal, sem comunicar ou obter autorização prévia do chefe imediato. Nos termos do art. 117 da Lei nº 8.112/1990, essa conduta configura:",
      "options": [
        {
          "letter": "A",
          "text": "Dever funcional, desde que não comprometa a produtividade individual."
        },
        {
          "letter": "B",
          "text": "Conduta permitida, se as horas ausentes forem compensadas posteriormente."
        },
        {
          "letter": "C",
          "text": "Proibição expressamente prevista ao servidor público."
        },
        {
          "letter": "D",
          "text": "Conduta lícita, se não houver atendimento ao público no período da ausência."
        },
        {
          "letter": "E",
          "text": "Conduta lícita, se a ausência for inferior a uma hora."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-5",
      "type": "mc",
      "statement": "Quanto à acumulação remunerada de cargos públicos, conforme a Lei nº 8.112/1990, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "É livremente permitida, desde que exercida em órgãos distintos."
        },
        {
          "letter": "B",
          "text": "É vedada, ressalvadas as hipóteses constitucionais, sendo que mesmo a acumulação lícita exige compatibilidade de horários."
        },
        {
          "letter": "C",
          "text": "É sempre proibida, inclusive nas hipóteses excepcionalmente admitidas pela Constituição."
        },
        {
          "letter": "D",
          "text": "É permitida mediante autorização expressa do chefe imediato do servidor."
        },
        {
          "letter": "E",
          "text": "É permitida desde que não haja conflito de interesses formalmente declarado."
        }
      ],
      "correct": "B"
    },
    {
      "id": "etica-6",
      "type": "mc",
      "statement": "No que se refere às responsabilidades do servidor público, a Lei nº 8.112/1990 estabelece que ele responde:",
      "options": [
        {
          "letter": "A",
          "text": "Apenas administrativamente, pois a esfera penal é exclusiva do Poder Judiciário."
        },
        {
          "letter": "B",
          "text": "Apenas civilmente, quando houver dano material comprovado."
        },
        {
          "letter": "C",
          "text": "Civil, penal e administrativamente pelo exercício irregular de suas atribuições."
        },
        {
          "letter": "D",
          "text": "Apenas penalmente, quando houver dolo na conduta."
        },
        {
          "letter": "E",
          "text": "Civil e administrativamente, sendo a sanção penal substituída pela administrativa."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-7",
      "type": "mc",
      "statement": "Nos termos da Lei nº 8.112/1990, as responsabilidades civil, penal e administrativa:",
      "options": [
        {
          "letter": "A",
          "text": "Não podem ser cumuladas, para evitar a ocorrência de bis in idem."
        },
        {
          "letter": "B",
          "text": "Podem ser cumuladas e são independentes entre si."
        },
        {
          "letter": "C",
          "text": "Dependem sempre de condenação criminal prévia para serem aplicadas."
        },
        {
          "letter": "D",
          "text": "Excluem a responsabilidade administrativa quando houver indenização na esfera civil."
        },
        {
          "letter": "E",
          "text": "Exigem decisão de um único órgão colegiado para todas as esferas simultaneamente."
        }
      ],
      "correct": "B"
    },
    {
      "id": "etica-8",
      "type": "mc",
      "statement": "Conforme o art. 127 da Lei nº 8.112/1990, são penalidades disciplinares aplicáveis ao servidor público:",
      "options": [
        {
          "letter": "A",
          "text": "Advertência, multa e exoneração."
        },
        {
          "letter": "B",
          "text": "Suspensão, exoneração e multa."
        },
        {
          "letter": "C",
          "text": "Advertência, suspensão e demissão."
        },
        {
          "letter": "D",
          "text": "Repreensão, suspensão e demissão."
        },
        {
          "letter": "E",
          "text": "Censura, advertência e demissão."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-9",
      "type": "mc",
      "statement": "A respeito da Comissão de Ética e da sanção por ela aplicável, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "Aplica diretamente penalidades disciplinares previstas na Lei nº 8.112/1990, incluindo a demissão."
        },
        {
          "letter": "B",
          "text": "É órgão de apuração exclusivamente penal, com encaminhamento obrigatório ao Ministério Público."
        },
        {
          "letter": "C",
          "text": "Orienta e aconselha sobre ética profissional, sendo a censura a sanção aplicável pela Comissão."
        },
        {
          "letter": "D",
          "text": "Atua apenas mediante provocação externa, sendo vedada a atuação de ofício."
        },
        {
          "letter": "E",
          "text": "É responsável por autorizar a divulgação antecipada de resultados de pesquisas institucionais."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-10",
      "type": "mc",
      "statement": "De acordo com a Lei nº 8.112/1990, é dever do servidor público:",
      "options": [
        {
          "letter": "A",
          "text": "Resistir a ordens superiores, ainda que de caráter legal."
        },
        {
          "letter": "B",
          "text": "Levar ao conhecimento da autoridade superior irregularidades de que tiver ciência no exercício do cargo."
        },
        {
          "letter": "C",
          "text": "Silenciar diante de irregularidades para preservar a imagem do órgão perante a sociedade."
        },
        {
          "letter": "D",
          "text": "Comunicar irregularidades apenas após a conclusão do processo administrativo competente."
        },
        {
          "letter": "E",
          "text": "Denunciar irregularidades exclusivamente à imprensa, para garantir maior transparência."
        }
      ],
      "correct": "B"
    },
    {
      "id": "etica-11",
      "type": "mc",
      "statement": "Um servidor utilizou materiais e equipamentos pertencentes ao órgão público para finalidades particulares, sem qualquer autorização prévia. Essa conduta é:",
      "options": [
        {
          "letter": "A",
          "text": "Permitida, se não houver dano material comprovado ao patrimônio público."
        },
        {
          "letter": "B",
          "text": "Permitida, se ocorrer exclusivamente fora do horário de expediente."
        },
        {
          "letter": "C",
          "text": "Vedada, por configurar uso indevido de bens públicos."
        },
        {
          "letter": "D",
          "text": "Vedada apenas quando houver prejuízo financeiro devidamente comprovado."
        },
        {
          "letter": "E",
          "text": "Permitida, desde que o uso seja de caráter eventual e esporádico."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-12",
      "type": "mc",
      "statement": "Conforme a Lei nº 8.112/1990, a penalidade de demissão será aplicada, entre outros casos, quando o servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Cometer erro técnico de natureza involuntária e sem dolo."
        },
        {
          "letter": "B",
          "text": "Atrasar-se reiteradamente ao serviço sem justificativa."
        },
        {
          "letter": "C",
          "text": "Praticar ato de improbidade administrativa."
        },
        {
          "letter": "D",
          "text": "Deixar de cumprir meta institucional estabelecida pelo órgão."
        },
        {
          "letter": "E",
          "text": "Recusar-se a participar de curso de capacitação obrigatório."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-13",
      "type": "mc",
      "statement": "No relacionamento entre servidores públicos, o Código de Ética determina que deve prevalecer:",
      "options": [
        {
          "letter": "A",
          "text": "A competição interna voltada à obtenção de melhores resultados individuais."
        },
        {
          "letter": "B",
          "text": "A hierarquia formal, ainda que exercida com tratamento desrespeitoso."
        },
        {
          "letter": "C",
          "text": "O espírito de solidariedade, cooperação e respeito mútuo entre os colegas."
        },
        {
          "letter": "D",
          "text": "A neutralidade absoluta, sem troca de informações ou experiências entre servidores."
        },
        {
          "letter": "E",
          "text": "A subordinação irrestrita à autoridade com maior tempo de serviço no órgão."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-14",
      "type": "mc",
      "statement": "O dever de assiduidade e pontualidade, previsto na Lei nº 8.112/1990, impõe ao servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Cumprir apenas a carga horária mínima mensal estabelecida institucionalmente."
        },
        {
          "letter": "B",
          "text": "Comparecer ao serviço apenas quando houver demanda efetiva de atendimento."
        },
        {
          "letter": "C",
          "text": "Observar rigorosamente os horários e a frequência estabelecidos no órgão."
        },
        {
          "letter": "D",
          "text": "Comparecer ao serviço apenas nos dias úteis com maior fluxo de trabalho."
        },
        {
          "letter": "E",
          "text": "Cumprir os horários apenas quando houver sistema de controle eletrônico de ponto."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-15",
      "type": "mc",
      "statement": "Constitui proibição ao servidor público, nos termos da Lei nº 8.112/1990:",
      "options": [
        {
          "letter": "A",
          "text": "Participar de curso de capacitação ofertado pelo órgão de lotação."
        },
        {
          "letter": "B",
          "text": "Exercer função de chefia quando regularmente designado para tanto."
        },
        {
          "letter": "C",
          "text": "Valer-se do cargo para lograr proveito pessoal ou em favor de outrem."
        },
        {
          "letter": "D",
          "text": "Manifestar opinião técnica fundamentada no exercício regular do cargo."
        },
        {
          "letter": "E",
          "text": "Solicitar esclarecimentos acerca de normas e instruções internas do órgão."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-16",
      "type": "mc",
      "statement": "Um servidor público federal, no exercício do cargo, tratou com negligência atividade de sua responsabilidade direta. Nos termos da Lei nº 8.112/1990, essa conduta pode ensejar:",
      "options": [
        {
          "letter": "A",
          "text": "Apenas responsabilização de natureza moral, sem reflexo jurídico."
        },
        {
          "letter": "B",
          "text": "Responsabilidade administrativa, civil ou penal, conforme o caso concreto."
        },
        {
          "letter": "C",
          "text": "Apenas a aplicação de advertência verbal pela chefia imediata."
        },
        {
          "letter": "D",
          "text": "Exclusivamente responsabilização de ordem civil."
        },
        {
          "letter": "E",
          "text": "Apenas orientação corretiva pela chefia, sem aplicação de sanção."
        }
      ],
      "correct": "B"
    },
    {
      "id": "etica-17",
      "type": "mc",
      "statement": "Conforme a Lei nº 8.112/1990, durante o período em que estiver cumprindo a penalidade de suspensão, o servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Continuará a perceber remuneração integral."
        },
        {
          "letter": "B",
          "text": "Perceberá apenas metade da remuneração habitual."
        },
        {
          "letter": "C",
          "text": "Não perceberá qualquer remuneração."
        },
        {
          "letter": "D",
          "text": "Perceberá apenas as verbas de natureza indenizatória."
        },
        {
          "letter": "E",
          "text": "Terá a penalidade automaticamente convertida em advertência."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-18",
      "type": "mc",
      "statement": "Um servidor, ao participar de reunião técnica interna, omitiu deliberadamente informações relevantes para favorecer seu posicionamento pessoal no debate. Essa conduta é:",
      "options": [
        {
          "letter": "A",
          "text": "Aceitável, por se tratar de discussão de caráter interno ao órgão."
        },
        {
          "letter": "B",
          "text": "Permitida, desde que não haja prejuízo externo imediato para terceiros."
        },
        {
          "letter": "C",
          "text": "Vedada, por afrontar os deveres de lealdade institucional e transparência."
        },
        {
          "letter": "D",
          "text": "Tolerável, se a decisão final couber à autoridade da chefia."
        },
        {
          "letter": "E",
          "text": "Legítima, por envolver opinião pessoal do servidor no debate."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-19",
      "type": "mc",
      "statement": "Nos termos da Lei nº 8.112/1990, é proibido ao servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Exercer cargo em comissão para o qual tenha sido regularmente nomeado."
        },
        {
          "letter": "B",
          "text": "Participar de comissão ou grupo de trabalho instituído pelo órgão."
        },
        {
          "letter": "C",
          "text": "Retirar qualquer documento da repartição sem prévia anuência da autoridade competente."
        },
        {
          "letter": "D",
          "text": "Solicitar material necessário ao desempenho de suas atividades."
        },
        {
          "letter": "E",
          "text": "Cumprir ordens superiores de caráter legal e compatível com suas atribuições."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-20",
      "type": "mc",
      "statement": "Um servidor público retardou deliberadamente a prática de ato de ofício para satisfazer interesse pessoal. Essa conduta caracteriza:",
      "options": [
        {
          "letter": "A",
          "text": "Mera irregularidade administrativa, sem previsão de sanção."
        },
        {
          "letter": "B",
          "text": "Erro técnico de natureza escusável, sem responsabilização."
        },
        {
          "letter": "C",
          "text": "Infração funcional de natureza grave."
        },
        {
          "letter": "D",
          "text": "Ato lícito, desde que não haja prejuízo ao erário público."
        },
        {
          "letter": "E",
          "text": "Exercício regular da discricionariedade administrativa do servidor."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-21",
      "type": "mc",
      "statement": "A penalidade de demissão também será aplicada quando o servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Cometer inassiduidade habitual no serviço."
        },
        {
          "letter": "B",
          "text": "Atrasar-se ocasionalmente ao serviço sem justificativa."
        },
        {
          "letter": "C",
          "text": "Deixar de cumprir ordem superior de caráter legal."
        },
        {
          "letter": "D",
          "text": "Faltar injustificadamente ao serviço por apenas um dia."
        },
        {
          "letter": "E",
          "text": "Cometer erro material sem qualquer elemento de dolo."
        }
      ],
      "correct": "A"
    },
    {
      "id": "etica-22",
      "type": "mc",
      "statement": "Nos termos da Lei nº 8.112/1990, a inassiduidade habitual caracteriza- se pela:",
      "options": [
        {
          "letter": "A",
          "text": "Ausência ao serviço por mais de 15 dias consecutivos sem justificativa."
        },
        {
          "letter": "B",
          "text": "Falta ao serviço, sem causa justificada, por 60 dias interpoladamente no período de 12 meses."
        },
        {
          "letter": "C",
          "text": "Ausência reiterada ao serviço, ainda que devidamente justificada."
        },
        {
          "letter": "D",
          "text": "Falta ao serviço por 30 dias consecutivos sem qualquer justificativa."
        },
        {
          "letter": "E",
          "text": "Redução injustificada da produtividade individual do servidor."
        }
      ],
      "correct": "B"
    },
    {
      "id": "etica-23",
      "type": "mc",
      "statement": "Conforme a Lei nº 8.112/1990, o abandono de cargo ocorre quando o servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Deixa de cumprir as metas institucionais estabelecidas pelo órgão."
        },
        {
          "letter": "B",
          "text": "Ausenta-se do serviço por mais de 15 dias consecutivos sem justificativa."
        },
        {
          "letter": "C",
          "text": "Falta ao serviço, sem causa justificada, por 30 dias consecutivos."
        },
        {
          "letter": "D",
          "text": "Reduz a jornada de trabalho sem autorização da chefia competente."
        },
        {
          "letter": "E",
          "text": "Recusa-se a exercer atribuições inerentes ao seu cargo."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-24",
      "type": "mc",
      "statement": "Segundo a Lei nº 8.112/1990, o prazo prescricional da ação disciplinar para aplicação da penalidade de demissão é de:",
      "options": [
        {
          "letter": "A",
          "text": "1 ano."
        },
        {
          "letter": "B",
          "text": "2 anos."
        },
        {
          "letter": "C",
          "text": "3 anos."
        },
        {
          "letter": "D",
          "text": "4 anos."
        },
        {
          "letter": "E",
          "text": "5 anos."
        }
      ],
      "correct": "E"
    }
  ],
  "Terça": [
    {
      "id": "raci-0",
      "type": "mc",
      "statement": "Considere as proposições P: \"O documento foi assinado\" e Q: \"O prazo foi cumprido.\" A negação correta de \"Se o documento foi assinado, então o prazo foi cumprido\" é:",
      "options": [
        {
          "letter": "A",
          "text": "O documento foi assinado e o prazo não foi cumprido"
        },
        {
          "letter": "B",
          "text": "O documento não foi assinado ou o prazo não foi cumprido"
        },
        {
          "letter": "C",
          "text": "O documento não foi assinado e o prazo foi cumprido"
        },
        {
          "letter": "D",
          "text": "O documento foi assinado ou o prazo não foi cumprido"
        },
        {
          "letter": "E",
          "text": "Se o documento não foi assinado, então o prazo não foi cumprido"
        }
      ],
      "correct": "A"
    },
    {
      "id": "raci-1",
      "type": "mc",
      "statement": "Um número real positivo x satisfaz: x + 20% de x = 180. O valor de x é:",
      "options": [
        {
          "letter": "A",
          "text": "120"
        },
        {
          "letter": "B",
          "text": "135"
        },
        {
          "letter": "C",
          "text": "150"
        },
        {
          "letter": "D",
          "text": "160"
        },
        {
          "letter": "E",
          "text": "180"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-2",
      "type": "mc",
      "statement": "Em uma repartição, sabe-se que todo gestor é servidor efetivo e nenhum servidor temporário é gestor. Com base nisso, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "todo servidor efetivo é gestor"
        },
        {
          "letter": "B",
          "text": "nenhum servidor efetivo é gestor"
        },
        {
          "letter": "C",
          "text": "nenhum gestor é servidor temporário"
        },
        {
          "letter": "D",
          "text": "todo servidor temporário é gestor"
        },
        {
          "letter": "E",
          "text": "todo servidor temporário é servidor efetivo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-3",
      "type": "mc",
      "statement": "A tabela abaixo mostra a distribuição percentual do orçamento mensal de uma família com renda de R$ 4.000,00: Categoria Percentual Alimentação 35% Moradia 30% Transporte 15% Outros 20% O valor gasto com transporte é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 450,00"
        },
        {
          "letter": "B",
          "text": "R$ 500,00"
        },
        {
          "letter": "C",
          "text": "R$ 550,00"
        },
        {
          "letter": "D",
          "text": "R$ 600,00"
        },
        {
          "letter": "E",
          "text": "R$ 650,00"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-4",
      "type": "mc",
      "statement": "Uma urna contém 5 bolas azuis e 3 bolas vermelhas. Retira-se uma bola ao acaso. A probabilidade de ser vermelha é:",
      "options": [
        {
          "letter": "A",
          "text": "1/3"
        },
        {
          "letter": "B",
          "text": "3/5"
        },
        {
          "letter": "C",
          "text": "3/8"
        },
        {
          "letter": "D",
          "text": "5/8"
        },
        {
          "letter": "E",
          "text": "1/8"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-5",
      "type": "mc",
      "statement": "A negação logicamente equivalente de \"Todo agente de campo recebeu capacitação\" é:",
      "options": [
        {
          "letter": "A",
          "text": "Existe agente de campo que não recebeu capacitação"
        },
        {
          "letter": "B",
          "text": "Nenhum agente de campo recebeu capacitação"
        },
        {
          "letter": "C",
          "text": "Todo agente recebeu capacitação e atua em campo"
        },
        {
          "letter": "D",
          "text": "Se um agente recebeu capacitação, então atua em campo"
        },
        {
          "letter": "E",
          "text": "Existe agente que recebeu capacitação e não atua em campo"
        }
      ],
      "correct": "A"
    },
    {
      "id": "raci-6",
      "type": "mc",
      "statement": "A expressão \"P somente se Q\" é logicamente equivalente a:",
      "options": [
        {
          "letter": "A",
          "text": "P ∧ Q"
        },
        {
          "letter": "B",
          "text": "P ∨ Q"
        },
        {
          "letter": "C",
          "text": "P → Q"
        },
        {
          "letter": "D",
          "text": "Q → P"
        },
        {
          "letter": "E",
          "text": "¬P → ¬Q"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-7",
      "type": "mc",
      "statement": "Um capital de R$ 1.000,00 é aplicado a juros compostos de 10% ao mês por 2 meses. O montante final é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 1.100,00"
        },
        {
          "letter": "B",
          "text": "R$ 1.120,00"
        },
        {
          "letter": "C",
          "text": "R$ 1.200,00"
        },
        {
          "letter": "D",
          "text": "R$ 1.210,00"
        },
        {
          "letter": "E",
          "text": "R$ 1.220,00"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-8",
      "type": "mc",
      "statement": "Três funcionários (A, B e C) devem sentar em fila. A não pode ficar na ponta e B não pode ficar ao lado de C. A única ordem possível da esquerda para a direita é:",
      "options": [
        {
          "letter": "A",
          "text": "A, B, C"
        },
        {
          "letter": "B",
          "text": "A, C, B"
        },
        {
          "letter": "C",
          "text": "B, A, C"
        },
        {
          "letter": "D",
          "text": "C, A, B"
        },
        {
          "letter": "E",
          "text": "B, C, A"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-9",
      "type": "mc",
      "statement": "Uma caixa contém 6 cartões verdes e 4 amarelos. Retiram-se 2 cartões sem reposição. A probabilidade de ambos serem amarelos é:",
      "options": [
        {
          "letter": "A",
          "text": "1/9"
        },
        {
          "letter": "B",
          "text": "2/15"
        },
        {
          "letter": "C",
          "text": "1/6"
        },
        {
          "letter": "D",
          "text": "3/20"
        },
        {
          "letter": "E",
          "text": "2/9"
        }
      ],
      "correct": "B"
    },
    {
      "id": "raci-10",
      "type": "mc",
      "statement": "A negação logicamente equivalente de \"Todo pesquisador que domina Python domina R\" é:",
      "options": [
        {
          "letter": "A",
          "text": "Todo pesquisador que domina Python também domina R"
        },
        {
          "letter": "B",
          "text": "Nenhum pesquisador domina Python e domina R"
        },
        {
          "letter": "C",
          "text": "Todo pesquisador domina Python e não domina R"
        },
        {
          "letter": "D",
          "text": "Existe pesquisador que domina Python e não domina R"
        },
        {
          "letter": "E",
          "text": "Nenhum pesquisador domina Python"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-11",
      "type": "mc",
      "statement": "A expressão ¬(P ∨ Q) é logicamente equivalente a:",
      "options": [
        {
          "letter": "A",
          "text": "¬P ∨ ¬Q"
        },
        {
          "letter": "B",
          "text": "¬P ∧ ¬Q"
        },
        {
          "letter": "C",
          "text": "P ∧ Q"
        },
        {
          "letter": "D",
          "text": "P ∨ Q"
        },
        {
          "letter": "E",
          "text": "¬P → ¬Q"
        }
      ],
      "correct": "B"
    },
    {
      "id": "raci-12",
      "type": "mc",
      "statement": "Um produto custa R$ 200,00. Aplica-se desconto de 10% e, sobre o valor resultante, novo desconto de 5%. O preço final é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 170,00"
        },
        {
          "letter": "B",
          "text": "R$ 171,00"
        },
        {
          "letter": "C",
          "text": "R$ 175,00"
        },
        {
          "letter": "D",
          "text": "R$ 180,00"
        },
        {
          "letter": "E",
          "text": "R$ 185,00"
        }
      ],
      "correct": "B"
    },
    {
      "id": "raci-13",
      "type": "mc",
      "statement": "O tempo para concluir uma tarefa é inversamente proporcional ao número de máquinas. Se 8 máquinas concluem em 15 dias, 12 máquinas concluirão em:",
      "options": [
        {
          "letter": "A",
          "text": "8 dias"
        },
        {
          "letter": "B",
          "text": "9 dias"
        },
        {
          "letter": "C",
          "text": "10 dias"
        },
        {
          "letter": "D",
          "text": "11 dias"
        },
        {
          "letter": "E",
          "text": "12 dias"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-14",
      "type": "mc",
      "statement": "Três pessoas (Ana, Bruno e Carla) sentam em três cadeiras em linha. Ana não pode ficar na primeira cadeira e Bruno deve ficar imediatamente antes de Carla. A ordem correta é:",
      "options": [
        {
          "letter": "A",
          "text": "Ana, Bruno, Carla"
        },
        {
          "letter": "B",
          "text": "Bruno, Ana, Carla"
        },
        {
          "letter": "C",
          "text": "Bruno, Carla, Ana"
        },
        {
          "letter": "D",
          "text": "Carla, Bruno, Ana"
        },
        {
          "letter": "E",
          "text": "Carla, Ana, Bruno"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-15",
      "type": "mc",
      "statement": "A tabela abaixo mostra a produção trimestral: Trimestre Produção 1º 120 2º 150 3º 130 4º 100 A redução percentual do 2º para o 4º trimestre foi de:",
      "options": [
        {
          "letter": "A",
          "text": "20%"
        },
        {
          "letter": "B",
          "text": "25%"
        },
        {
          "letter": "C",
          "text": "30%"
        },
        {
          "letter": "D",
          "text": "33,3%"
        },
        {
          "letter": "E",
          "text": "50%"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-16",
      "type": "mc",
      "statement": "Dois dados honestos são lançados simultaneamente. A probabilidade de a soma das faces ser 7 é:",
      "options": [
        {
          "letter": "A",
          "text": "1/12"
        },
        {
          "letter": "B",
          "text": "1/9"
        },
        {
          "letter": "C",
          "text": "1/8"
        },
        {
          "letter": "D",
          "text": "1/6"
        },
        {
          "letter": "E",
          "text": "1/5"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-17",
      "type": "mc",
      "statement": "Um servidor recebeu aumento de 25% sobre o salário de R$ 2.400,00. O novo salário é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 2.700,00"
        },
        {
          "letter": "B",
          "text": "R$ 2.880,00"
        },
        {
          "letter": "C",
          "text": "R$ 3.000,00"
        },
        {
          "letter": "D",
          "text": "R$ 3.200,00"
        },
        {
          "letter": "E",
          "text": "R$ 3.600,00"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-18",
      "type": "mc",
      "statement": "Uma sala tem 9 m de comprimento e 6 m de largura. Para revestir o piso com placas quadradas de 0,30 m de lado, o número mínimo de placas necessárias é:",
      "options": [
        {
          "letter": "A",
          "text": "300"
        },
        {
          "letter": "B",
          "text": "450"
        },
        {
          "letter": "C",
          "text": "540"
        },
        {
          "letter": "D",
          "text": "600"
        },
        {
          "letter": "E",
          "text": "900"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-19",
      "type": "mc",
      "statement": "Em um grupo: todo analista é servidor efetivo e nenhum estagiário é servidor efetivo. É correto concluir que:",
      "options": [
        {
          "letter": "A",
          "text": "todo servidor efetivo é analista"
        },
        {
          "letter": "B",
          "text": "nenhum analista é estagiário"
        },
        {
          "letter": "C",
          "text": "todo estagiário é analista"
        },
        {
          "letter": "D",
          "text": "nenhum analista é servidor efetivo"
        },
        {
          "letter": "E",
          "text": "existe estagiário que é analista"
        }
      ],
      "correct": "B"
    },
    {
      "id": "raci-20",
      "type": "mc",
      "statement": "A população de uma cidade passou de 50.000 para 62.500 habitantes. O crescimento percentual foi de:",
      "options": [
        {
          "letter": "A",
          "text": "20%"
        },
        {
          "letter": "B",
          "text": "22,5%"
        },
        {
          "letter": "C",
          "text": "25%"
        },
        {
          "letter": "D",
          "text": "30%"
        },
        {
          "letter": "E",
          "text": "40%"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-21",
      "type": "mc",
      "statement": "Em uma caixa há 4 bolas brancas e 6 bolas pretas. Retira-se uma bola ao acaso. A probabilidade de ser branca é:",
      "options": [
        {
          "letter": "A",
          "text": "1/5"
        },
        {
          "letter": "B",
          "text": "2/5"
        },
        {
          "letter": "C",
          "text": "3/5"
        },
        {
          "letter": "D",
          "text": "4/5"
        },
        {
          "letter": "E",
          "text": "2/3"
        }
      ],
      "correct": "B"
    },
    {
      "id": "raci-22",
      "type": "mc",
      "statement": "A negação logicamente equivalente de \"Todo recenseador concluiu o treinamento e recebeu o material\" é:",
      "options": [
        {
          "letter": "A",
          "text": "Nenhum recenseador concluiu o treinamento e não recebeu o material"
        },
        {
          "letter": "B",
          "text": "Todo recenseador não concluiu o treinamento ou não recebeu o material"
        },
        {
          "letter": "C",
          "text": "Algum recenseador não concluiu o treinamento ou não recebeu o material"
        },
        {
          "letter": "D",
          "text": "Algum recenseador não concluiu o treinamento e não recebeu o material"
        },
        {
          "letter": "E",
          "text": "Se algum recenseador não recebeu o material, então não concluiu o treinamento"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-23",
      "type": "mc",
      "statement": "Um terreno retangular tem área de 240 m² e comprimento de 20 m. A largura é:",
      "options": [
        {
          "letter": "A",
          "text": "8 m"
        },
        {
          "letter": "B",
          "text": "10 m"
        },
        {
          "letter": "C",
          "text": "12 m"
        },
        {
          "letter": "D",
          "text": "15 m"
        },
        {
          "letter": "E",
          "text": "20 m"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-24",
      "type": "mc",
      "statement": "Em um órgão: todo técnico é servidor efetivo e nenhum servidor comissionado é servidor efetivo. Conclui-se que:",
      "options": [
        {
          "letter": "A",
          "text": "todo servidor efetivo é técnico"
        },
        {
          "letter": "B",
          "text": "nenhum técnico é servidor comissionado"
        },
        {
          "letter": "C",
          "text": "todo comissionado é técnico"
        },
        {
          "letter": "D",
          "text": "existe técnico que é comissionado"
        },
        {
          "letter": "E",
          "text": "todo servidor efetivo é comissionado"
        }
      ],
      "correct": "B"
    },
    {
      "id": "info-0",
      "type": "mc",
      "statement": "Qual recurso do Windows concentra o acesso a programas instalados, ferramentas de configuração e opções de encerramento do sistema?",
      "options": [
        {
          "letter": "A",
          "text": "Painel de Controle"
        },
        {
          "letter": "B",
          "text": "Área de Trabalho"
        },
        {
          "letter": "C",
          "text": "Menu Iniciar"
        },
        {
          "letter": "D",
          "text": "Barra de Tarefas"
        },
        {
          "letter": "E",
          "text": "Explorador de Arquivos"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-1",
      "type": "mc",
      "statement": "No ambiente Windows, qual combinação de teclas é responsável por recortar um arquivo, permitindo que ele seja transferido para outro local ao pressionar Ctrl + V?",
      "options": [
        {
          "letter": "A",
          "text": "Ctrl + C"
        },
        {
          "letter": "B",
          "text": "Ctrl + Z"
        },
        {
          "letter": "C",
          "text": "Ctrl + A"
        },
        {
          "letter": "D",
          "text": "Ctrl + X"
        },
        {
          "letter": "E",
          "text": "Ctrl + P"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-2",
      "type": "mc",
      "statement": "No Explorador de Arquivos do Windows, qual elemento da interface possibilita ao usuário navegar diretamente entre diretórios digitando o caminho desejado?",
      "options": [
        {
          "letter": "A",
          "text": "Menu Iniciar"
        },
        {
          "letter": "B",
          "text": "Gerenciador de Tarefas"
        },
        {
          "letter": "C",
          "text": "Painel de Controle"
        },
        {
          "letter": "D",
          "text": "Barra de endereços"
        },
        {
          "letter": "E",
          "text": "Lixeira"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-3",
      "type": "mc",
      "statement": "Ao formatar um parágrafo no Microsoft Word com alinhamento justificado, como o texto se distribui na página?",
      "options": [
        {
          "letter": "A",
          "text": "Centralizado entre as margens"
        },
        {
          "letter": "B",
          "text": "Alinhado somente à esquerda"
        },
        {
          "letter": "C",
          "text": "Alinhado somente à direita"
        },
        {
          "letter": "D",
          "text": "Ajustado simultaneamente às margens esquerda e direita"
        },
        {
          "letter": "E",
          "text": "Com espaçamento automático entre linhas"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-4",
      "type": "mc",
      "statement": "No Microsoft Word, qual é a principal utilidade de se inserir um cabeçalho em um documento?",
      "options": [
        {
          "letter": "A",
          "text": "Aplicar proteção contra edição"
        },
        {
          "letter": "B",
          "text": "Gerar sumário automático"
        },
        {
          "letter": "C",
          "text": "Exibir repetidamente informações no topo de cada página"
        },
        {
          "letter": "D",
          "text": "Alterar o tamanho da fonte do corpo do texto"
        },
        {
          "letter": "E",
          "text": "Inserir notas explicativas ao final das páginas"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-5",
      "type": "mc",
      "statement": "No Microsoft Excel, qual é o resultado produzido pela fórmula =MÉDIA(B1:B5)?",
      "options": [
        {
          "letter": "A",
          "text": "Soma total dos valores do intervalo"
        },
        {
          "letter": "B",
          "text": "Valor máximo entre as células"
        },
        {
          "letter": "C",
          "text": "Valor mínimo entre as células"
        },
        {
          "letter": "D",
          "text": "Quantidade de células preenchidas"
        },
        {
          "letter": "E",
          "text": "Média aritmética dos valores do intervalo"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info-6",
      "type": "mc",
      "statement": "Qual das alternativas representa uma conduta correta em relação à segurança digital?",
      "options": [
        {
          "letter": "A",
          "text": "Usar a mesma senha em todos os serviços online"
        },
        {
          "letter": "B",
          "text": "Abrir e-mails desconhecidos para verificar o conteúdo"
        },
        {
          "letter": "C",
          "text": "Dispensar atualizações do antivírus quando o sistema funciona bem"
        },
        {
          "letter": "D",
          "text": "Criar senhas com combinação de letras, números e caracteres especiais"
        },
        {
          "letter": "E",
          "text": "Ignorar backups quando há firewall ativo"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-7",
      "type": "mc",
      "statement": "Em um Sistema de Informação Geográfica (SIG), qual tipo de dado vetorial é mais indicado para representar rios, estradas e limites municipais?",
      "options": [
        {
          "letter": "A",
          "text": "Imagens de satélite"
        },
        {
          "letter": "B",
          "text": "Fotografias aéreas"
        },
        {
          "letter": "C",
          "text": "Dados raster contínuos"
        },
        {
          "letter": "D",
          "text": "Superfícies de temperatura"
        },
        {
          "letter": "E",
          "text": "Dados do tipo vetor"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info-8",
      "type": "mc",
      "statement": "Qual é a finalidade da Lixeira no sistema operacional Windows?",
      "options": [
        {
          "letter": "A",
          "text": "Organizar arquivos por extensão"
        },
        {
          "letter": "B",
          "text": "Proteger arquivos contra vírus"
        },
        {
          "letter": "C",
          "text": "Armazenar permanentemente arquivos apagados"
        },
        {
          "letter": "D",
          "text": "Compactar arquivos automaticamente"
        },
        {
          "letter": "E",
          "text": "Possibilitar a recuperação de itens excluídos antes da remoção definitiva"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info-9",
      "type": "mc",
      "statement": "Ao renomear um arquivo no Windows, o que efetivamente é alterado?",
      "options": [
        {
          "letter": "A",
          "text": "O conteúdo interno do arquivo"
        },
        {
          "letter": "B",
          "text": "A data de criação do arquivo"
        },
        {
          "letter": "C",
          "text": "O tamanho do arquivo"
        },
        {
          "letter": "D",
          "text": "Apenas o nome atribuído ao arquivo"
        },
        {
          "letter": "E",
          "text": "A extensão do arquivo automaticamente"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-10",
      "type": "mc",
      "statement": "No gerenciamento de arquivos do Windows, o que ocorre quando o usuário executa a ação de copiar um arquivo?",
      "options": [
        {
          "letter": "A",
          "text": "O arquivo é transferido definitivamente para outro local"
        },
        {
          "letter": "B",
          "text": "O arquivo original é excluído"
        },
        {
          "letter": "C",
          "text": "Um atalho é criado no destino"
        },
        {
          "letter": "D",
          "text": "Uma duplicata do arquivo é gerada em outro local"
        },
        {
          "letter": "E",
          "text": "O arquivo é compactado automaticamente"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-11",
      "type": "mc",
      "statement": "No Microsoft Word, ao modificar o tipo de fonte de um trecho selecionado, o que é alterado?",
      "options": [
        {
          "letter": "A",
          "text": "O alinhamento do parágrafo"
        },
        {
          "letter": "B",
          "text": "Apenas a cor do texto"
        },
        {
          "letter": "C",
          "text": "O espaçamento entre linhas"
        },
        {
          "letter": "D",
          "text": "O estilo visual dos caracteres"
        },
        {
          "letter": "E",
          "text": "O texto é excluído e reescrito"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-12",
      "type": "mc",
      "statement": "Para que serve, principalmente, o recurso de inserção de tabela no Microsoft Word?",
      "options": [
        {
          "letter": "A",
          "text": "Criar gráficos de forma automática"
        },
        {
          "letter": "B",
          "text": "Proteger o documento com senha"
        },
        {
          "letter": "C",
          "text": "Organizar informações em formato de linhas e colunas"
        },
        {
          "letter": "D",
          "text": "Aplicar efeitos visuais ao texto"
        },
        {
          "letter": "E",
          "text": "Calcular fórmulas matemáticas complexas"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-13",
      "type": "mc",
      "statement": "No Microsoft Excel, o que é uma célula?",
      "options": [
        {
          "letter": "A",
          "text": "O conjunto de todas as planilhas de um arquivo"
        },
        {
          "letter": "B",
          "text": "Um arquivo salvo no computador"
        },
        {
          "letter": "C",
          "text": "A interseção entre uma linha e uma coluna"
        },
        {
          "letter": "D",
          "text": "Uma função matemática predefinida"
        },
        {
          "letter": "E",
          "text": "Um gráfico inserido na planilha"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-14",
      "type": "mc",
      "statement": "Qual operação é executada pelo Excel ao processar a fórmula =A1+A2?",
      "options": [
        {
          "letter": "A",
          "text": "Concatenação dos valores"
        },
        {
          "letter": "B",
          "text": "Cálculo da média aritmética"
        },
        {
          "letter": "C",
          "text": "Identificação do maior valor"
        },
        {
          "letter": "D",
          "text": "Soma dos valores contidos nas células A1 e A2"
        },
        {
          "letter": "E",
          "text": "Divisão de A1 por A2"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-15",
      "type": "mc",
      "statement": "Na Segurança da Informação, o princípio da integridade está associado a qual garantia?",
      "options": [
        {
          "letter": "A",
          "text": "Acesso contínuo aos dados por qualquer usuário"
        },
        {
          "letter": "B",
          "text": "Proteção das senhas dos usuários"
        },
        {
          "letter": "C",
          "text": "Verificação da identidade do usuário"
        },
        {
          "letter": "D",
          "text": "Preservação da exatidão dos dados, evitando alterações indevidas"
        },
        {
          "letter": "E",
          "text": "Confidencialidade das informações armazenadas"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-16",
      "type": "mc",
      "statement": "No Windows, o que é um atalho de arquivo?",
      "options": [
        {
          "letter": "A",
          "text": "Uma cópia integral do arquivo original"
        },
        {
          "letter": "B",
          "text": "Um arquivo compactado pelo sistema"
        },
        {
          "letter": "C",
          "text": "Um vínculo que aponta para o item original"
        },
        {
          "letter": "D",
          "text": "Um arquivo temporário do sistema"
        },
        {
          "letter": "E",
          "text": "Uma versão de segurança do arquivo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-17",
      "type": "mc",
      "statement": "Qual procedimento exclui um arquivo do Windows sem enviá-lo à Lixeira?",
      "options": [
        {
          "letter": "A",
          "text": "Pressionar somente a tecla Delete"
        },
        {
          "letter": "B",
          "text": "Arrastar o arquivo para outra pasta"
        },
        {
          "letter": "C",
          "text": "Usar o comando Ctrl + C"
        },
        {
          "letter": "D",
          "text": "Renomear o arquivo antes de apagar"
        },
        {
          "letter": "E",
          "text": "Pressionar Shift + Delete"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info-18",
      "type": "mc",
      "statement": "A extensão \".pdf\" identifica arquivos de qual natureza?",
      "options": [
        {
          "letter": "A",
          "text": "Planilha eletrônica"
        },
        {
          "letter": "B",
          "text": "Apresentação de slides"
        },
        {
          "letter": "C",
          "text": "Imagem raster"
        },
        {
          "letter": "D",
          "text": "Documento em formato portátil de leitura"
        },
        {
          "letter": "E",
          "text": "Documento de texto editável"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-19",
      "type": "mc",
      "statement": "No Microsoft Word, quais aspectos são ajustados pelas opções de formatação de parágrafo?",
      "options": [
        {
          "letter": "A",
          "text": "Apenas o tipo de fonte"
        },
        {
          "letter": "B",
          "text": "Apenas a cor do texto"
        },
        {
          "letter": "C",
          "text": "Alinhamento, recuo e espaçamento entre linhas"
        },
        {
          "letter": "D",
          "text": "Margens da página inteira"
        },
        {
          "letter": "E",
          "text": "Proteção contra edição"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-20",
      "type": "mc",
      "statement": "Ao inserir uma imagem no Word, qual recurso permite configurar sua posição em relação ao texto ao redor?",
      "options": [
        {
          "letter": "A",
          "text": "Corretor ortográfico"
        },
        {
          "letter": "B",
          "text": "Cabeçalho automático"
        },
        {
          "letter": "C",
          "text": "Controle de versões"
        },
        {
          "letter": "D",
          "text": "Modo de exibição de leitura"
        },
        {
          "letter": "E",
          "text": "Opções de layout de texto"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info-21",
      "type": "mc",
      "statement": "No Microsoft Excel, como são posicionados os dados numéricos inseridos em uma célula por padrão?",
      "options": [
        {
          "letter": "A",
          "text": "Centralizados automaticamente"
        },
        {
          "letter": "B",
          "text": "Alinhados à esquerda"
        },
        {
          "letter": "C",
          "text": "Ocultados até uso de fórmula"
        },
        {
          "letter": "D",
          "text": "Alinhados à direita"
        },
        {
          "letter": "E",
          "text": "Convertidos em texto"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-22",
      "type": "mc",
      "statement": "No Excel, como se pode calcular a porcentagem de um valor usando recursos básicos do programa?",
      "options": [
        {
          "letter": "A",
          "text": "Apenas com funções estatísticas avançadas"
        },
        {
          "letter": "B",
          "text": "Somente por meio de gráficos"
        },
        {
          "letter": "C",
          "text": "Usando fórmulas com operadores matemáticos simples"
        },
        {
          "letter": "D",
          "text": "Exclusivamente com macros"
        },
        {
          "letter": "E",
          "text": "Apenas após salvar a planilha"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-23",
      "type": "mc",
      "statement": "No Microsoft PowerPoint, o que define um layout de slide?",
      "options": [
        {
          "letter": "A",
          "text": "O tipo de arquivo gerado pela apresentação"
        },
        {
          "letter": "B",
          "text": "A sequência automática dos slides"
        },
        {
          "letter": "C",
          "text": "A disposição dos espaços para textos e objetos no slide"
        },
        {
          "letter": "D",
          "text": "O tempo de exibição de cada slide"
        },
        {
          "letter": "E",
          "text": "O tamanho final do arquivo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-24",
      "type": "mc",
      "statement": "Em Segurança da Informação, qual é o objetivo central de se realizar um backup?",
      "options": [
        {
          "letter": "A",
          "text": "Impedir ataques de vírus"
        },
        {
          "letter": "B",
          "text": "Garantir a confidencialidade das senhas"
        },
        {
          "letter": "C",
          "text": "Substituir o uso de antivírus"
        },
        {
          "letter": "D",
          "text": "Recuperar dados em caso de perda ou falha"
        },
        {
          "letter": "E",
          "text": "Bloquear acessos não autorizados"
        }
      ],
      "correct": "D"
    }
  ],
  "Quarta": [
    {
      "id": "cons-0",
      "type": "mc",
      "statement": "A Constituição Federal protege um conjunto de direitos fundamentais, entre eles a vida, a liberdade, a igualdade, a segurança e a propriedade. Sobre esses direitos, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "O direito à vida tutela apenas a dimensão biológica do ser humano, sem abranger condições dignas de existência."
        },
        {
          "letter": "B",
          "text": "O direito à igualdade proíbe de modo absoluto qualquer distinção normativa entre pessoas."
        },
        {
          "letter": "C",
          "text": "O direito à liberdade admite restrições legais compatíveis com a ordem constitucional."
        },
        {
          "letter": "D",
          "text": "O direito à segurança veda a atuação preventiva do Estado, restringindo-se à repressão de ilícitos."
        },
        {
          "letter": "E",
          "text": "O direito à propriedade é absoluto e não comporta limitações fundadas no interesse coletivo."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-1",
      "type": "mc",
      "statement": "Os direitos sociais previstos na Constituição Federal distinguem-se dos direitos de liberdade porque, em regra:",
      "options": [
        {
          "letter": "A",
          "text": "Possuem eficácia meramente simbólica, sem aplicabilidade direta."
        },
        {
          "letter": "B",
          "text": "Demandam prestações positivas do Estado para sua efetivação."
        },
        {
          "letter": "C",
          "text": "Destinam-se exclusivamente aos trabalhadores com registro formal em carteira."
        },
        {
          "letter": "D",
          "text": "Situam-se fora do catálogo dos direitos fundamentais."
        },
        {
          "letter": "E",
          "text": "Não se submetem a qualquer forma de controle judicial."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-2",
      "type": "mc",
      "statement": "No tocante à nacionalidade, a Constituição Federal estabelece que:",
      "options": [
        {
          "letter": "A",
          "text": "O brasileiro nato pode perder sua nacionalidade em qualquer situação de aquisição de outra."
        },
        {
          "letter": "B",
          "text": "O brasileiro naturalizado detém os mesmos direitos políticos do nato, sem qualquer exceção."
        },
        {
          "letter": "C",
          "text": "A Constituição adota exclusivamente o critério territorial para atribuir a nacionalidade originária."
        },
        {
          "letter": "D",
          "text": "Não é permitido ao legislador infraconstitucional estabelecer distinções entre natos e naturalizados."
        },
        {
          "letter": "E",
          "text": "A perda da nacionalidade exige procedimento administrativo ou judicial, conforme a hipótese."
        }
      ],
      "correct": "E"
    },
    {
      "id": "cons-3",
      "type": "mc",
      "statement": "A cidadania, consagrada como fundamento da República Federativa do Brasil, compreende:",
      "options": [
        {
          "letter": "A",
          "text": "A titularidade e o exercício de direitos civis, políticos e sociais."
        },
        {
          "letter": "B",
          "text": "Apenas a condição de eleitor obrigatório."
        },
        {
          "letter": "C",
          "text": "A nacionalidade originária nata."
        },
        {
          "letter": "D",
          "text": "A capacidade civil plena do indivíduo."
        },
        {
          "letter": "E",
          "text": "O exercício de cargo público de provimento efetivo."
        }
      ],
      "correct": "A"
    },
    {
      "id": "cons-4",
      "type": "mc",
      "statement": "As garantias constitucionais individuais têm como função precípua:",
      "options": [
        {
          "letter": "A",
          "text": "Conceder diretamente benefícios materiais aos cidadãos."
        },
        {
          "letter": "B",
          "text": "Instrumentalizar a proteção e a defesa dos direitos fundamentais."
        },
        {
          "letter": "C",
          "text": "Definir políticas públicas de cunho setorial."
        },
        {
          "letter": "D",
          "text": "Restringir o exercício de direitos em situações ordinárias."
        },
        {
          "letter": "E",
          "text": "Regular exclusivamente a atuação do Poder Judiciário."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-5",
      "type": "mc",
      "statement": "Quanto às garantias dos direitos coletivos, sociais e políticos, é correto afirmar:",
      "options": [
        {
          "letter": "A",
          "text": "Apenas o indivíduo isoladamente possui legitimidade para pleitear sua tutela."
        },
        {
          "letter": "B",
          "text": "Não existem instrumentos processuais próprios para sua proteção."
        },
        {
          "letter": "C",
          "text": "São disciplinados unicamente por normas infraconstitucionais."
        },
        {
          "letter": "D",
          "text": "Entes coletivos podem promover sua defesa, conforme previsão constitucional."
        },
        {
          "letter": "E",
          "text": "Não se submetem ao controle de constitucionalidade."
        }
      ],
      "correct": "D"
    },
    {
      "id": "cons-6",
      "type": "mc",
      "statement": "O princípio da impessoalidade, previsto no art. 37 da Constituição Federal, implica, entre outros aspectos:",
      "options": [
        {
          "letter": "A",
          "text": "Impossibilidade de identificação do agente público nos atos oficiais."
        },
        {
          "letter": "B",
          "text": "Proibição de que autoridades promovam sua imagem pessoal por meio de atos administrativos."
        },
        {
          "letter": "C",
          "text": "Exclusão da responsabilidade individual do agente público."
        },
        {
          "letter": "D",
          "text": "Exigência de concurso público para o provimento de todos os cargos."
        },
        {
          "letter": "E",
          "text": "Publicidade irrestrita de todos os atos da Administração."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-7",
      "type": "mc",
      "statement": "O princípio da eficiência, introduzido expressamente no art. 37 da Constituição, exige da Administração Pública:",
      "options": [
        {
          "letter": "A",
          "text": "Atuação exclusivamente vinculada, sem margem de discricionariedade."
        },
        {
          "letter": "B",
          "text": "Redução de custos como único objetivo a ser perseguido."
        },
        {
          "letter": "C",
          "text": "Prestação de serviços de qualidade com uso racional dos recursos disponíveis."
        },
        {
          "letter": "D",
          "text": "Submissão integral às normas do direito privado."
        },
        {
          "letter": "E",
          "text": "Afastamento de qualquer modalidade de controle externo."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-8",
      "type": "mc",
      "statement": "Segundo a Constituição Federal, o acesso aos cargos, empregos e funções públicas:",
      "options": [
        {
          "letter": "A",
          "text": "É livre a qualquer pessoa, independentemente de requisitos legais."
        },
        {
          "letter": "B",
          "text": "Decorre exclusivamente de indicação política."
        },
        {
          "letter": "C",
          "text": "Exige concurso público somente para os cargos de provimento efetivo."
        },
        {
          "letter": "D",
          "text": "Observa os requisitos legais, garantindo igualdade de condições aos candidatos."
        },
        {
          "letter": "E",
          "text": "É vedado aos estrangeiros em qualquer hipótese."
        }
      ],
      "correct": "D"
    },
    {
      "id": "cons-9",
      "type": "mc",
      "statement": "Sobre o servidor público estável, nos termos dos arts. 37 a 41 da Constituição Federal, é correto afirmar:",
      "options": [
        {
          "letter": "A",
          "text": "Não pode perder o cargo em nenhuma circunstância."
        },
        {
          "letter": "B",
          "text": "Adquire a estabilidade após dois anos de efetivo exercício."
        },
        {
          "letter": "C",
          "text": "Pode perder o cargo mediante processo administrativo, assegurada ampla defesa."
        },
        {
          "letter": "D",
          "text": "Está dispensado de avaliação periódica de desempenho."
        },
        {
          "letter": "E",
          "text": "Possui estabilidade automática desde o ato de nomeação."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-10",
      "type": "mc",
      "statement": "A aplicação imediata dos direitos e garantias fundamentais, prevista na Constituição Federal, significa que:",
      "options": [
        {
          "letter": "A",
          "text": "Dependem sempre de lei complementar para produzir efeitos."
        },
        {
          "letter": "B",
          "text": "Só se aplicam após regulamentação infraconstitucional específica."
        },
        {
          "letter": "C",
          "text": "Vinculam apenas o Poder Judiciário."
        },
        {
          "letter": "D",
          "text": "Produzem efeitos desde a promulgação da Constituição, na medida do possível."
        },
        {
          "letter": "E",
          "text": "Possuem eficácia apenas programática e simbólica."
        }
      ],
      "correct": "D"
    },
    {
      "id": "cons-11",
      "type": "mc",
      "statement": "Sobre o direito à liberdade, a Constituição Federal:",
      "options": [
        {
          "letter": "A",
          "text": "Admite sua suspensão permanente em nome do interesse público."
        },
        {
          "letter": "B",
          "text": "Garante liberdade absoluta de manifestação, sem qualquer restrição."
        },
        {
          "letter": "C",
          "text": "Assegura a liberdade de crença, vedando a supressão de direitos por motivo religioso."
        },
        {
          "letter": "D",
          "text": "Limita a liberdade de locomoção ao território nacional."
        },
        {
          "letter": "E",
          "text": "Condiciona o exercício da liberdade de expressão à prévia autorização estatal."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-12",
      "type": "mc",
      "statement": "O direito de propriedade, segundo a Constituição Federal, deve atender:",
      "options": [
        {
          "letter": "A",
          "text": "Exclusivamente ao interesse pessoal do titular do bem."
        },
        {
          "letter": "B",
          "text": "À função social da propriedade."
        },
        {
          "letter": "C",
          "text": "Somente às normas de direito privado."
        },
        {
          "letter": "D",
          "text": "À livre disposição, sem quaisquer restrições legais."
        },
        {
          "letter": "E",
          "text": "Apenas ao valor econômico do bem."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-13",
      "type": "mc",
      "statement": "Integra expressamente o rol dos direitos sociais previsto na Constituição Federal:",
      "options": [
        {
          "letter": "A",
          "text": "A liberdade de expressão."
        },
        {
          "letter": "B",
          "text": "A inviolabilidade do domicílio."
        },
        {
          "letter": "C",
          "text": "O direito à educação."
        },
        {
          "letter": "D",
          "text": "O direito de petição."
        },
        {
          "letter": "E",
          "text": "O direito de reunião."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-14",
      "type": "mc",
      "statement": "A administração pública indireta, conforme a Constituição Federal, é formada por:",
      "options": [
        {
          "letter": "A",
          "text": "Ministérios e Secretarias de Estado."
        },
        {
          "letter": "B",
          "text": "Tribunais e Casas Legislativas."
        },
        {
          "letter": "C",
          "text": "Autarquias, fundações públicas, empresas públicas e sociedades de economia mista."
        },
        {
          "letter": "D",
          "text": "Apenas autarquias e fundações públicas."
        },
        {
          "letter": "E",
          "text": "Somente empresas públicas."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-15",
      "type": "mc",
      "statement": "A estabilidade do servidor público efetivo visa, primordialmente:",
      "options": [
        {
          "letter": "A",
          "text": "Impedir qualquer controle administrativo sobre o servidor."
        },
        {
          "letter": "B",
          "text": "Assegurar independência funcional e continuidade do serviço público."
        },
        {
          "letter": "C",
          "text": "Garantir remuneração vitalícia ao servidor."
        },
        {
          "letter": "D",
          "text": "Afastar a aplicação de sanções disciplinares."
        },
        {
          "letter": "E",
          "text": "Dispensar o servidor do cumprimento de deveres funcionais."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-16",
      "type": "mc",
      "statement": "Uma característica essencial dos direitos fundamentais consagrados na Constituição Federal é:",
      "options": [
        {
          "letter": "A",
          "text": "A possibilidade de sua supressão por lei ordinária."
        },
        {
          "letter": "B",
          "text": "O caráter absoluto e ilimitado."
        },
        {
          "letter": "C",
          "text": "A historicidade e a possibilidade de evolução ao longo do tempo."
        },
        {
          "letter": "D",
          "text": "A aplicação restrita ao âmbito das relações privadas."
        },
        {
          "letter": "E",
          "text": "A exclusão dos estrangeiros em qualquer situação."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-17",
      "type": "mc",
      "statement": "O habeas corpus, como remédio constitucional individual, destina-se a:",
      "options": [
        {
          "letter": "A",
          "text": "Proteger direito líquido e certo não amparado por habeas data."
        },
        {
          "letter": "B",
          "text": "Garantir acesso a informações pessoais em bancos de dados públicos."
        },
        {
          "letter": "C",
          "text": "Tutelar a liberdade de locomoção contra ilegalidade ou abuso de poder."
        },
        {
          "letter": "D",
          "text": "Anular atos administrativos ilegais em geral."
        },
        {
          "letter": "E",
          "text": "Defender interesses difusos e coletivos."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-18",
      "type": "mc",
      "statement": "Sobre os direitos coletivos, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "Pertencem exclusivamente a pessoas individualmente determinadas."
        },
        {
          "letter": "B",
          "text": "Não admitem tutela jurisdicional."
        },
        {
          "letter": "C",
          "text": "Possuem titularidade indivisível e podem ser defendidos de forma coletiva."
        },
        {
          "letter": "D",
          "text": "Se confundem integralmente com direitos individuais homogêneos."
        },
        {
          "letter": "E",
          "text": "Não possuem previsão expressa na Constituição Federal."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-19",
      "type": "mc",
      "statement": "A publicidade dos atos administrativos, nos termos da Constituição Federal:",
      "options": [
        {
          "letter": "A",
          "text": "É sempre facultativa para a Administração."
        },
        {
          "letter": "B",
          "text": "Pode ser afastada por simples conveniência do gestor."
        },
        {
          "letter": "C",
          "text": "Constitui requisito de validade de todos os atos administrativos sem exceção."
        },
        {
          "letter": "D",
          "text": "É princípio que visa dar transparência à atuação estatal, admitindo exceções legais de sigilo."
        },
        {
          "letter": "E",
          "text": "Restringe-se aos atos praticados pelo Poder Executivo."
        }
      ],
      "correct": "D"
    },
    {
      "id": "cons-20",
      "type": "mc",
      "statement": "O princípio da moralidade administrativa exige que o agente público:",
      "options": [
        {
          "letter": "A",
          "text": "Atue conforme sua consciência pessoal, independentemente de parâmetros jurídicos."
        },
        {
          "letter": "B",
          "text": "Observe padrões éticos e jurídicos na prática dos atos administrativos."
        },
        {
          "letter": "C",
          "text": "Limite-se ao cumprimento formal da lei, sem qualquer análise ética."
        },
        {
          "letter": "D",
          "text": "Esteja imune ao controle judicial."
        },
        {
          "letter": "E",
          "text": "Submeta-se apenas à hierarquia administrativa interna."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-21",
      "type": "mc",
      "statement": "A vedação constitucional à acumulação remunerada de cargos públicos comporta exceção quando houver:",
      "options": [
        {
          "letter": "A",
          "text": "Compatibilidade de horários e tratar-se de dois cargos de professor."
        },
        {
          "letter": "B",
          "text": "Interesse exclusivo da Administração Pública."
        },
        {
          "letter": "C",
          "text": "Autorização expressa da chefia imediata."
        },
        {
          "letter": "D",
          "text": "Cargos em comissão de qualquer natureza."
        },
        {
          "letter": "E",
          "text": "Cargos temporários de qualquer espécie."
        }
      ],
      "correct": "A"
    },
    {
      "id": "cons-22",
      "type": "mc",
      "statement": "Nos termos da Constituição Federal, a investidura em cargo público ocorre com:",
      "options": [
        {
          "letter": "A",
          "text": "A aprovação no concurso público."
        },
        {
          "letter": "B",
          "text": "A publicação do edital de abertura do certame."
        },
        {
          "letter": "C",
          "text": "A nomeação pela autoridade competente."
        },
        {
          "letter": "D",
          "text": "A posse no cargo."
        },
        {
          "letter": "E",
          "text": "O efetivo início do exercício das atribuições."
        }
      ],
      "correct": "D"
    },
    {
      "id": "cons-23",
      "type": "mc",
      "statement": "Conforme o art. 41 da Constituição Federal, o servidor público adquire estabilidade após:",
      "options": [
        {
          "letter": "A",
          "text": "Um ano de efetivo exercício."
        },
        {
          "letter": "B",
          "text": "Dois anos de exercício no cargo."
        },
        {
          "letter": "C",
          "text": "Três anos de efetivo exercício, após avaliação especial de desempenho."
        },
        {
          "letter": "D",
          "text": "A homologação do resultado do concurso público."
        },
        {
          "letter": "E",
          "text": "O ato de posse no cargo efetivo."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-24",
      "type": "mc",
      "statement": "O direito à inviolabilidade do domicílio, previsto na Constituição, admite exceção:",
      "options": [
        {
          "letter": "A",
          "text": "Somente durante o dia, mediante autorização judicial."
        },
        {
          "letter": "B",
          "text": "Em qualquer horário, por determinação administrativa."
        },
        {
          "letter": "C",
          "text": "Apenas em estado de defesa ou de sítio."
        },
        {
          "letter": "D",
          "text": "Em caso de flagrante delito, desastre ou para prestar socorro, ou durante o dia por ordem judicial."
        },
        {
          "letter": "E",
          "text": "Exclusivamente mediante consentimento expresso e escrito do morador."
        }
      ],
      "correct": "D"
    },
    {
      "id": "adm2-0",
      "type": "cebraspe",
      "statement": "A Administração Pública, em sentido amplo, abrange tanto a função política exercida pelo governo quanto a função administrativa propriamente dita.",
      "correct": "CERTO",
      "explanation": "Em sentido amplo, a Administração Pública engloba a função política (governo) e a função administrativa (execução das políticas públicas). Em sentido restrito, abrange apenas a função administrativa."
    },
    {
      "id": "adm2-1",
      "type": "cebraspe",
      "statement": "O princípio da moralidade administrativa se confunde com a legalidade, bastando a observância da lei para que o ato seja considerado moral.",
      "correct": "ERRADO",
      "explanation": "A moralidade é princípio autônomo em relação à legalidade: um ato pode ser formalmente legal e, ainda assim, violar a moralidade administrativa (ética, lealdade, boa-fé)."
    },
    {
      "id": "adm2-2",
      "type": "cebraspe",
      "statement": "A desconcentração administrativa implica a criação de uma nova pessoa jurídica, distinta do ente que distribui as competências.",
      "correct": "ERRADO",
      "explanation": "A desconcentração ocorre dentro da mesma pessoa jurídica (mera distribuição interna de competências). É a descentralização que transfere competências para uma nova pessoa jurídica."
    },
    {
      "id": "adm2-3",
      "type": "cebraspe",
      "statement": "As autarquias integram a Administração Indireta e possuem personalidade jurídica de direito público.",
      "correct": "CERTO",
      "explanation": "Autarquias são entes da Administração Indireta criados por lei específica, com personalidade jurídica de direito público e capacidade de autoadministração."
    },
    {
      "id": "adm2-4",
      "type": "cebraspe",
      "statement": "Segundo a Lei nº 8.112/1990, o prazo para a posse em cargo público é, em regra, de 30 dias contados da publicação do ato de provimento.",
      "correct": "CERTO",
      "explanation": "O art. 13, §1º, da Lei 8.112/1990 fixa em 30 dias o prazo para a posse, contado da publicação do ato de provimento."
    },
    {
      "id": "adm2-5",
      "type": "cebraspe",
      "statement": "O poder disciplinar permite à Administração aplicar sanções a qualquer cidadão que descumpra normas administrativas, esteja ele vinculado ou não à Administração.",
      "correct": "ERRADO",
      "explanation": "O poder disciplinar alcança apenas quem possui vínculo jurídico específico com a Administração (servidores, contratados). Punir qualquer cidadão, independentemente de vínculo, é manifestação do poder de polícia, não do poder disciplinar."
    },
    {
      "id": "adm2-6",
      "type": "cebraspe",
      "statement": "O poder de polícia caracteriza-se pela possibilidade de a Administração restringir e condicionar o exercício de direitos individuais em prol do interesse público.",
      "correct": "CERTO",
      "explanation": "O poder de polícia é a prerrogativa de a Administração limitar o exercício de direitos e liberdades individuais em favor do interesse coletivo, respeitados os limites legais."
    },
    {
      "id": "adm2-7",
      "type": "cebraspe",
      "statement": "Os atos administrativos vinculados admitem juízo de conveniência e oportunidade por parte do agente público.",
      "correct": "ERRADO",
      "explanation": "Nos atos vinculados, a lei não deixa margem de escolha: o agente apenas executa o que está predeterminado. O juízo de conveniência e oportunidade é característico dos atos discricionários."
    },
    {
      "id": "adm2-8",
      "type": "cebraspe",
      "statement": "A anulação do ato administrativo decorre de vício de legalidade e produz efeitos retroativos (ex tunc).",
      "correct": "CERTO",
      "explanation": "A anulação (por ilegalidade) retroage à origem do ato, desfazendo seus efeitos desde o início (ex tunc), diferentemente da revogação, que opera para frente (ex nunc)."
    },
    {
      "id": "adm2-9",
      "type": "cebraspe",
      "statement": "A revogação do ato administrativo pode atingir atos vinculados, desde que fundamentada em razões de conveniência e oportunidade.",
      "correct": "ERRADO",
      "explanation": "A revogação só pode atingir atos discricionários válidos. Atos vinculados não comportam juízo de conveniência e oportunidade, logo não podem ser revogados."
    },
    {
      "id": "adm2-10",
      "type": "cebraspe",
      "statement": "A Lei nº 8.429/1992 (Lei de Improbidade Administrativa) prevê que os atos de improbidade podem causar prejuízo ao erário, importar enriquecimento ilícito ou violar princípios da Administração Pública.",
      "correct": "CERTO",
      "explanation": "A Lei 8.429/1992 tipifica três categorias de atos de improbidade: os que causam prejuízo ao erário, os que geram enriquecimento ilícito e os que atentam contra os princípios da Administração Pública."
    },
    {
      "id": "adm2-11",
      "type": "cebraspe",
      "statement": "O processo administrativo regido pela Lei nº 9.784/1999 aplica-se exclusivamente à Administração Pública Federal direta, excluindo-se autarquias e fundações públicas.",
      "correct": "ERRADO",
      "explanation": "A Lei 9.784/1999 aplica-se à Administração Federal direta e também à indireta, incluindo autarquias e fundações públicas federais."
    }
  ],
  "Quinta": [
    {
      "id": "arq-0",
      "type": "mc",
      "statement": "Na teoria arquivística, qual princípio estabelece que documentos gerados por entidades distintas não devem ser reunidos em um mesmo conjunto, preservando a identidade de cada fundo?",
      "options": [
        {
          "letter": "A",
          "text": "Organicidade"
        },
        {
          "letter": "B",
          "text": "Unicidade"
        },
        {
          "letter": "C",
          "text": "Cumulatividade"
        },
        {
          "letter": "D",
          "text": "Proveniência"
        },
        {
          "letter": "E",
          "text": "Ordem original"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-1",
      "type": "mc",
      "statement": "Documentos sob uso constante, consultados diariamente para subsidiar as rotinas administrativas de um órgão público, pertencem ao arquivo denominado:",
      "options": [
        {
          "letter": "A",
          "text": "Permanente"
        },
        {
          "letter": "B",
          "text": "Histórico"
        },
        {
          "letter": "C",
          "text": "Intermediário"
        },
        {
          "letter": "D",
          "text": "Especial"
        },
        {
          "letter": "E",
          "text": "Corrente"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-2",
      "type": "mc",
      "statement": "Segundo a teoria arquivística, a classificação de documentos de arquivo deve fundamentar-se, prioritariamente, em:",
      "options": [
        {
          "letter": "A",
          "text": "Assunto principal abordado no texto"
        },
        {
          "letter": "B",
          "text": "Forma e espécie documental"
        },
        {
          "letter": "C",
          "text": "Funções e atividades do órgão produtor"
        },
        {
          "letter": "D",
          "text": "Critérios definidos pelo setor de arquivo"
        },
        {
          "letter": "E",
          "text": "Sequência cronológica dos documentos"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-3",
      "type": "mc",
      "statement": "A operação que consiste em guardar o documento em local previamente estabelecido, após sua devida classificação, denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "Ordenação"
        },
        {
          "letter": "B",
          "text": "Arquivamento"
        },
        {
          "letter": "C",
          "text": "Avaliação"
        },
        {
          "letter": "D",
          "text": "Tramitação"
        },
        {
          "letter": "E",
          "text": "Preservação"
        }
      ],
      "correct": "B"
    },
    {
      "id": "arq-4",
      "type": "mc",
      "statement": "Qual método de ordenação se baseia em sequências numéricas e exige, obrigatoriamente, a utilização de um índice auxiliar para localização dos documentos?",
      "options": [
        {
          "letter": "A",
          "text": "Alfabético"
        },
        {
          "letter": "B",
          "text": "Geográfico"
        },
        {
          "letter": "C",
          "text": "Ideográfico"
        },
        {
          "letter": "D",
          "text": "Cronológico"
        },
        {
          "letter": "E",
          "text": "Numérico"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-5",
      "type": "mc",
      "statement": "Como se denomina a operação de encaminhar documentos do arquivo corrente para o arquivo intermediário?",
      "options": [
        {
          "letter": "A",
          "text": "Recolhimento"
        },
        {
          "letter": "B",
          "text": "Eliminação"
        },
        {
          "letter": "C",
          "text": "Arquivamento"
        },
        {
          "letter": "D",
          "text": "Transferência"
        },
        {
          "letter": "E",
          "text": "Classificação"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-6",
      "type": "mc",
      "statement": "O uso de caixas-arquivo, pastas suspensas e materiais livres de acidez para acondicionar documentos refere-se à atividade de:",
      "options": [
        {
          "letter": "A",
          "text": "Armazenamento"
        },
        {
          "letter": "B",
          "text": "Conservação"
        },
        {
          "letter": "C",
          "text": "Preservação"
        },
        {
          "letter": "D",
          "text": "Acondicionamento"
        },
        {
          "letter": "E",
          "text": "Restauração"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-7",
      "type": "mc",
      "statement": "A gestão de documentos incide de forma mais direta sobre quais fases do ciclo de vida documental?",
      "options": [
        {
          "letter": "A",
          "text": "Corrente e permanente"
        },
        {
          "letter": "B",
          "text": "Intermediária e permanente"
        },
        {
          "letter": "C",
          "text": "Corrente e intermediária"
        },
        {
          "letter": "D",
          "text": "Histórica e permanente"
        },
        {
          "letter": "E",
          "text": "Intermediária e histórica"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-8",
      "type": "mc",
      "statement": "No protocolo, o ato de encaminhar pela primeira vez o documento ao setor responsável por sua análise denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "Tramitação"
        },
        {
          "letter": "B",
          "text": "Expedição"
        },
        {
          "letter": "C",
          "text": "Arquivamento"
        },
        {
          "letter": "D",
          "text": "Distribuição"
        },
        {
          "letter": "E",
          "text": "Classificação"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-9",
      "type": "mc",
      "statement": "A organização de documentos que leva em conta a estrutura organizacional do órgão produtor como critério de agrupamento denomina-se classificação:",
      "options": [
        {
          "letter": "A",
          "text": "Funcional"
        },
        {
          "letter": "B",
          "text": "Temática"
        },
        {
          "letter": "C",
          "text": "Ideográfica"
        },
        {
          "letter": "D",
          "text": "Por assunto"
        },
        {
          "letter": "E",
          "text": "Estrutural"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-10",
      "type": "mc",
      "statement": "Documentos que já encerraram sua vigência administrativa, mas que precisam ser mantidos até o cumprimento de prazos legais, compõem o arquivo:",
      "options": [
        {
          "letter": "A",
          "text": "Corrente"
        },
        {
          "letter": "B",
          "text": "Permanente"
        },
        {
          "letter": "C",
          "text": "Histórico"
        },
        {
          "letter": "D",
          "text": "Especial"
        },
        {
          "letter": "E",
          "text": "Intermediário"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-11",
      "type": "mc",
      "statement": "Na teoria das três idades, os documentos que adquirem valor secundário são aqueles que apresentam valor:",
      "options": [
        {
          "letter": "A",
          "text": "Administrativo"
        },
        {
          "letter": "B",
          "text": "Fiscal"
        },
        {
          "letter": "C",
          "text": "Jurídico"
        },
        {
          "letter": "D",
          "text": "Histórico ou informativo"
        },
        {
          "letter": "E",
          "text": "Operacional"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-12",
      "type": "mc",
      "statement": "A eliminação de documentos de arquivo somente poderá ocorrer após:",
      "options": [
        {
          "letter": "A",
          "text": "Autorização formal do setor que os gerou"
        },
        {
          "letter": "B",
          "text": "Encerramento da tramitação administrativa"
        },
        {
          "letter": "C",
          "text": "Avaliação técnica e previsão expressa em tabela de temporalidade"
        },
        {
          "letter": "D",
          "text": "Recolhimento ao arquivo permanente"
        },
        {
          "letter": "E",
          "text": "Digitalização completa do acervo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-13",
      "type": "mc",
      "statement": "Manter os documentos exatamente na disposição em que foram organizados pelo órgão produtor corresponde ao princípio:",
      "options": [
        {
          "letter": "A",
          "text": "Respeito aos fundos"
        },
        {
          "letter": "B",
          "text": "Respeito à ordem original"
        },
        {
          "letter": "C",
          "text": "Da unicidade"
        },
        {
          "letter": "D",
          "text": "Da cumulatividade"
        },
        {
          "letter": "E",
          "text": "Da avaliação"
        }
      ],
      "correct": "B"
    },
    {
      "id": "arq-14",
      "type": "mc",
      "statement": "O controle de temperatura, umidade relativa do ar e luminosidade nos depósitos documentais é uma medida característica de:",
      "options": [
        {
          "letter": "A",
          "text": "Conservação"
        },
        {
          "letter": "B",
          "text": "Acondicionamento"
        },
        {
          "letter": "C",
          "text": "Restauração"
        },
        {
          "letter": "D",
          "text": "Preservação"
        },
        {
          "letter": "E",
          "text": "Arquivamento"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-15",
      "type": "mc",
      "statement": "A movimentação de documentos entre setores durante o andamento de um processo administrativo denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "Distribuição"
        },
        {
          "letter": "B",
          "text": "Registro"
        },
        {
          "letter": "C",
          "text": "Expedição"
        },
        {
          "letter": "D",
          "text": "Arquivamento"
        },
        {
          "letter": "E",
          "text": "Tramitação"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-16",
      "type": "mc",
      "statement": "No âmbito do protocolo, a atividade correspondente à saída oficial de documentos da instituição para destinatários externos é denominada:",
      "options": [
        {
          "letter": "A",
          "text": "Distribuição"
        },
        {
          "letter": "B",
          "text": "Registro"
        },
        {
          "letter": "C",
          "text": "Tramitação"
        },
        {
          "letter": "D",
          "text": "Arquivamento"
        },
        {
          "letter": "E",
          "text": "Expedição"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-17",
      "type": "mc",
      "statement": "A classificação funcional de documentos de arquivo tem como característica principal:",
      "options": [
        {
          "letter": "A",
          "text": "Basear-se nos assuntos tratados nos documentos"
        },
        {
          "letter": "B",
          "text": "Refletir as funções e atividades exercidas pelo órgão"
        },
        {
          "letter": "C",
          "text": "Organizar documentos por datas de produção"
        },
        {
          "letter": "D",
          "text": "Depender exclusivamente da estrutura administrativa vigente"
        },
        {
          "letter": "E",
          "text": "Ser própria de bibliotecas e centros de documentação"
        }
      ],
      "correct": "B"
    },
    {
      "id": "arq-18",
      "type": "mc",
      "statement": "Quando o critério principal de organização documental é o tempo, o método de ordenação mais adequado é o:",
      "options": [
        {
          "letter": "A",
          "text": "Alfabético"
        },
        {
          "letter": "B",
          "text": "Numérico"
        },
        {
          "letter": "C",
          "text": "Ideográfico"
        },
        {
          "letter": "D",
          "text": "Geográfico"
        },
        {
          "letter": "E",
          "text": "Cronológico"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-19",
      "type": "mc",
      "statement": "Na tabela de temporalidade, a fixação do prazo de guarda no arquivo intermediário visa principalmente:",
      "options": [
        {
          "letter": "A",
          "text": "Facilitar a tramitação interna dos documentos"
        },
        {
          "letter": "B",
          "text": "Permitir a classificação temática dos acervos"
        },
        {
          "letter": "C",
          "text": "Determinar o tempo de permanência antes da destinação final"
        },
        {
          "letter": "D",
          "text": "Indicar o método de ordenação a ser adotado"
        },
        {
          "letter": "E",
          "text": "Definir o local de arquivamento corrente"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-20",
      "type": "mc",
      "statement": "A guarda definitiva de documentos dotados de valor histórico ou informativo permanente é característica do arquivo:",
      "options": [
        {
          "letter": "A",
          "text": "Corrente"
        },
        {
          "letter": "B",
          "text": "Intermediário"
        },
        {
          "letter": "C",
          "text": "Especial"
        },
        {
          "letter": "D",
          "text": "Permanente"
        },
        {
          "letter": "E",
          "text": "Setorial"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-21",
      "type": "mc",
      "statement": "A intervenção mínima e direta nos documentos, como retirada de clipes e reparos físicos pontuais, é característica da atividade de:",
      "options": [
        {
          "letter": "A",
          "text": "Preservação"
        },
        {
          "letter": "B",
          "text": "Conservação"
        },
        {
          "letter": "C",
          "text": "Armazenamento"
        },
        {
          "letter": "D",
          "text": "Acondicionamento"
        },
        {
          "letter": "E",
          "text": "Avaliação"
        }
      ],
      "correct": "B"
    },
    {
      "id": "arq-22",
      "type": "mc",
      "statement": "A relação natural estabelecida entre documentos produzidos por uma mesma entidade no exercício de suas atividades decorre do princípio da:",
      "options": [
        {
          "letter": "A",
          "text": "Unicidade"
        },
        {
          "letter": "B",
          "text": "Cumulatividade"
        },
        {
          "letter": "C",
          "text": "Organicidade"
        },
        {
          "letter": "D",
          "text": "Proveniência"
        },
        {
          "letter": "E",
          "text": "Indivisibilidade"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-23",
      "type": "mc",
      "statement": "Um dos objetivos centrais da gestão de documentos é:",
      "options": [
        {
          "letter": "A",
          "text": "Preservar exclusivamente documentos de valor histórico"
        },
        {
          "letter": "B",
          "text": "Eliminar todos os documentos após o encerramento administrativo"
        },
        {
          "letter": "C",
          "text": "Racionalizar a produção e o acúmulo de documentos"
        },
        {
          "letter": "D",
          "text": "Reunir documentos por assunto em acervos temáticos"
        },
        {
          "letter": "E",
          "text": "Converter arquivos físicos para formato digital"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-24",
      "type": "mc",
      "statement": "No protocolo, a atividade responsável pela circulação contínua do documento entre setores, ao longo da análise administrativa, denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "Distribuição"
        },
        {
          "letter": "B",
          "text": "Tramitação"
        },
        {
          "letter": "C",
          "text": "Registro"
        },
        {
          "letter": "D",
          "text": "Expedição"
        },
        {
          "letter": "E",
          "text": "Arquivamento"
        }
      ],
      "correct": "B"
    },
    {
      "id": "info2-0",
      "type": "mc",
      "statement": "Qual recurso do Windows concentra o acesso a programas instalados, ferramentas de configuração e opções de encerramento do sistema?",
      "options": [
        {
          "letter": "A",
          "text": "Painel de Controle"
        },
        {
          "letter": "B",
          "text": "Área de Trabalho"
        },
        {
          "letter": "C",
          "text": "Menu Iniciar"
        },
        {
          "letter": "D",
          "text": "Barra de Tarefas"
        },
        {
          "letter": "E",
          "text": "Explorador de Arquivos"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info2-1",
      "type": "mc",
      "statement": "No ambiente Windows, qual combinação de teclas é responsável por recortar um arquivo, permitindo que ele seja transferido para outro local ao pressionar Ctrl + V?",
      "options": [
        {
          "letter": "A",
          "text": "Ctrl + C"
        },
        {
          "letter": "B",
          "text": "Ctrl + Z"
        },
        {
          "letter": "C",
          "text": "Ctrl + A"
        },
        {
          "letter": "D",
          "text": "Ctrl + X"
        },
        {
          "letter": "E",
          "text": "Ctrl + P"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info2-2",
      "type": "mc",
      "statement": "No Explorador de Arquivos do Windows, qual elemento da interface possibilita ao usuário navegar diretamente entre diretórios digitando o caminho desejado?",
      "options": [
        {
          "letter": "A",
          "text": "Menu Iniciar"
        },
        {
          "letter": "B",
          "text": "Gerenciador de Tarefas"
        },
        {
          "letter": "C",
          "text": "Painel de Controle"
        },
        {
          "letter": "D",
          "text": "Barra de endereços"
        },
        {
          "letter": "E",
          "text": "Lixeira"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info2-3",
      "type": "mc",
      "statement": "Ao formatar um parágrafo no Microsoft Word com alinhamento justificado, como o texto se distribui na página?",
      "options": [
        {
          "letter": "A",
          "text": "Centralizado entre as margens"
        },
        {
          "letter": "B",
          "text": "Alinhado somente à esquerda"
        },
        {
          "letter": "C",
          "text": "Alinhado somente à direita"
        },
        {
          "letter": "D",
          "text": "Ajustado simultaneamente às margens esquerda e direita"
        },
        {
          "letter": "E",
          "text": "Com espaçamento automático entre linhas"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info2-4",
      "type": "mc",
      "statement": "No Microsoft Word, qual é a principal utilidade de se inserir um cabeçalho em um documento?",
      "options": [
        {
          "letter": "A",
          "text": "Aplicar proteção contra edição"
        },
        {
          "letter": "B",
          "text": "Gerar sumário automático"
        },
        {
          "letter": "C",
          "text": "Exibir repetidamente informações no topo de cada página"
        },
        {
          "letter": "D",
          "text": "Alterar o tamanho da fonte do corpo do texto"
        },
        {
          "letter": "E",
          "text": "Inserir notas explicativas ao final das páginas"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info2-5",
      "type": "mc",
      "statement": "No Microsoft Excel, qual é o resultado produzido pela fórmula =MÉDIA(B1:B5)?",
      "options": [
        {
          "letter": "A",
          "text": "Soma total dos valores do intervalo"
        },
        {
          "letter": "B",
          "text": "Valor máximo entre as células"
        },
        {
          "letter": "C",
          "text": "Valor mínimo entre as células"
        },
        {
          "letter": "D",
          "text": "Quantidade de células preenchidas"
        },
        {
          "letter": "E",
          "text": "Média aritmética dos valores do intervalo"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info2-6",
      "type": "mc",
      "statement": "Qual das alternativas representa uma conduta correta em relação à segurança digital?",
      "options": [
        {
          "letter": "A",
          "text": "Usar a mesma senha em todos os serviços online"
        },
        {
          "letter": "B",
          "text": "Abrir e-mails desconhecidos para verificar o conteúdo"
        },
        {
          "letter": "C",
          "text": "Dispensar atualizações do antivírus quando o sistema funciona bem"
        },
        {
          "letter": "D",
          "text": "Criar senhas com combinação de letras, números e caracteres especiais"
        },
        {
          "letter": "E",
          "text": "Ignorar backups quando há firewall ativo"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info2-7",
      "type": "mc",
      "statement": "Em um Sistema de Informação Geográfica (SIG), qual tipo de dado vetorial é mais indicado para representar rios, estradas e limites municipais?",
      "options": [
        {
          "letter": "A",
          "text": "Imagens de satélite"
        },
        {
          "letter": "B",
          "text": "Fotografias aéreas"
        },
        {
          "letter": "C",
          "text": "Dados raster contínuos"
        },
        {
          "letter": "D",
          "text": "Superfícies de temperatura"
        },
        {
          "letter": "E",
          "text": "Dados do tipo vetor"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info2-8",
      "type": "mc",
      "statement": "Qual é a finalidade da Lixeira no sistema operacional Windows?",
      "options": [
        {
          "letter": "A",
          "text": "Organizar arquivos por extensão"
        },
        {
          "letter": "B",
          "text": "Proteger arquivos contra vírus"
        },
        {
          "letter": "C",
          "text": "Armazenar permanentemente arquivos apagados"
        },
        {
          "letter": "D",
          "text": "Compactar arquivos automaticamente"
        },
        {
          "letter": "E",
          "text": "Possibilitar a recuperação de itens excluídos antes da remoção definitiva"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info2-9",
      "type": "mc",
      "statement": "Ao renomear um arquivo no Windows, o que efetivamente é alterado?",
      "options": [
        {
          "letter": "A",
          "text": "O conteúdo interno do arquivo"
        },
        {
          "letter": "B",
          "text": "A data de criação do arquivo"
        },
        {
          "letter": "C",
          "text": "O tamanho do arquivo"
        },
        {
          "letter": "D",
          "text": "Apenas o nome atribuído ao arquivo"
        },
        {
          "letter": "E",
          "text": "A extensão do arquivo automaticamente"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info2-10",
      "type": "mc",
      "statement": "No gerenciamento de arquivos do Windows, o que ocorre quando o usuário executa a ação de copiar um arquivo?",
      "options": [
        {
          "letter": "A",
          "text": "O arquivo é transferido definitivamente para outro local"
        },
        {
          "letter": "B",
          "text": "O arquivo original é excluído"
        },
        {
          "letter": "C",
          "text": "Um atalho é criado no destino"
        },
        {
          "letter": "D",
          "text": "Uma duplicata do arquivo é gerada em outro local"
        },
        {
          "letter": "E",
          "text": "O arquivo é compactado automaticamente"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info2-11",
      "type": "mc",
      "statement": "No Microsoft Word, ao modificar o tipo de fonte de um trecho selecionado, o que é alterado?",
      "options": [
        {
          "letter": "A",
          "text": "O alinhamento do parágrafo"
        },
        {
          "letter": "B",
          "text": "Apenas a cor do texto"
        },
        {
          "letter": "C",
          "text": "O espaçamento entre linhas"
        },
        {
          "letter": "D",
          "text": "O estilo visual dos caracteres"
        },
        {
          "letter": "E",
          "text": "O texto é excluído e reescrito"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info2-12",
      "type": "mc",
      "statement": "Para que serve, principalmente, o recurso de inserção de tabela no Microsoft Word?",
      "options": [
        {
          "letter": "A",
          "text": "Criar gráficos de forma automática"
        },
        {
          "letter": "B",
          "text": "Proteger o documento com senha"
        },
        {
          "letter": "C",
          "text": "Organizar informações em formato de linhas e colunas"
        },
        {
          "letter": "D",
          "text": "Aplicar efeitos visuais ao texto"
        },
        {
          "letter": "E",
          "text": "Calcular fórmulas matemáticas complexas"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info2-13",
      "type": "mc",
      "statement": "No Microsoft Excel, o que é uma célula?",
      "options": [
        {
          "letter": "A",
          "text": "O conjunto de todas as planilhas de um arquivo"
        },
        {
          "letter": "B",
          "text": "Um arquivo salvo no computador"
        },
        {
          "letter": "C",
          "text": "A interseção entre uma linha e uma coluna"
        },
        {
          "letter": "D",
          "text": "Uma função matemática predefinida"
        },
        {
          "letter": "E",
          "text": "Um gráfico inserido na planilha"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info2-14",
      "type": "mc",
      "statement": "Qual operação é executada pelo Excel ao processar a fórmula =A1+A2?",
      "options": [
        {
          "letter": "A",
          "text": "Concatenação dos valores"
        },
        {
          "letter": "B",
          "text": "Cálculo da média aritmética"
        },
        {
          "letter": "C",
          "text": "Identificação do maior valor"
        },
        {
          "letter": "D",
          "text": "Soma dos valores contidos nas células A1 e A2"
        },
        {
          "letter": "E",
          "text": "Divisão de A1 por A2"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info2-15",
      "type": "mc",
      "statement": "Na Segurança da Informação, o princípio da integridade está associado a qual garantia?",
      "options": [
        {
          "letter": "A",
          "text": "Acesso contínuo aos dados por qualquer usuário"
        },
        {
          "letter": "B",
          "text": "Proteção das senhas dos usuários"
        },
        {
          "letter": "C",
          "text": "Verificação da identidade do usuário"
        },
        {
          "letter": "D",
          "text": "Preservação da exatidão dos dados, evitando alterações indevidas"
        },
        {
          "letter": "E",
          "text": "Confidencialidade das informações armazenadas"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info2-16",
      "type": "mc",
      "statement": "No Windows, o que é um atalho de arquivo?",
      "options": [
        {
          "letter": "A",
          "text": "Uma cópia integral do arquivo original"
        },
        {
          "letter": "B",
          "text": "Um arquivo compactado pelo sistema"
        },
        {
          "letter": "C",
          "text": "Um vínculo que aponta para o item original"
        },
        {
          "letter": "D",
          "text": "Um arquivo temporário do sistema"
        },
        {
          "letter": "E",
          "text": "Uma versão de segurança do arquivo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info2-17",
      "type": "mc",
      "statement": "Qual procedimento exclui um arquivo do Windows sem enviá-lo à Lixeira?",
      "options": [
        {
          "letter": "A",
          "text": "Pressionar somente a tecla Delete"
        },
        {
          "letter": "B",
          "text": "Arrastar o arquivo para outra pasta"
        },
        {
          "letter": "C",
          "text": "Usar o comando Ctrl + C"
        },
        {
          "letter": "D",
          "text": "Renomear o arquivo antes de apagar"
        },
        {
          "letter": "E",
          "text": "Pressionar Shift + Delete"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info2-18",
      "type": "mc",
      "statement": "A extensão \".pdf\" identifica arquivos de qual natureza?",
      "options": [
        {
          "letter": "A",
          "text": "Planilha eletrônica"
        },
        {
          "letter": "B",
          "text": "Apresentação de slides"
        },
        {
          "letter": "C",
          "text": "Imagem raster"
        },
        {
          "letter": "D",
          "text": "Documento em formato portátil de leitura"
        },
        {
          "letter": "E",
          "text": "Documento de texto editável"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info2-19",
      "type": "mc",
      "statement": "No Microsoft Word, quais aspectos são ajustados pelas opções de formatação de parágrafo?",
      "options": [
        {
          "letter": "A",
          "text": "Apenas o tipo de fonte"
        },
        {
          "letter": "B",
          "text": "Apenas a cor do texto"
        },
        {
          "letter": "C",
          "text": "Alinhamento, recuo e espaçamento entre linhas"
        },
        {
          "letter": "D",
          "text": "Margens da página inteira"
        },
        {
          "letter": "E",
          "text": "Proteção contra edição"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info2-20",
      "type": "mc",
      "statement": "Ao inserir uma imagem no Word, qual recurso permite configurar sua posição em relação ao texto ao redor?",
      "options": [
        {
          "letter": "A",
          "text": "Corretor ortográfico"
        },
        {
          "letter": "B",
          "text": "Cabeçalho automático"
        },
        {
          "letter": "C",
          "text": "Controle de versões"
        },
        {
          "letter": "D",
          "text": "Modo de exibição de leitura"
        },
        {
          "letter": "E",
          "text": "Opções de layout de texto"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info2-21",
      "type": "mc",
      "statement": "No Microsoft Excel, como são posicionados os dados numéricos inseridos em uma célula por padrão?",
      "options": [
        {
          "letter": "A",
          "text": "Centralizados automaticamente"
        },
        {
          "letter": "B",
          "text": "Alinhados à esquerda"
        },
        {
          "letter": "C",
          "text": "Ocultados até uso de fórmula"
        },
        {
          "letter": "D",
          "text": "Alinhados à direita"
        },
        {
          "letter": "E",
          "text": "Convertidos em texto"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info2-22",
      "type": "mc",
      "statement": "No Excel, como se pode calcular a porcentagem de um valor usando recursos básicos do programa?",
      "options": [
        {
          "letter": "A",
          "text": "Apenas com funções estatísticas avançadas"
        },
        {
          "letter": "B",
          "text": "Somente por meio de gráficos"
        },
        {
          "letter": "C",
          "text": "Usando fórmulas com operadores matemáticos simples"
        },
        {
          "letter": "D",
          "text": "Exclusivamente com macros"
        },
        {
          "letter": "E",
          "text": "Apenas após salvar a planilha"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info2-23",
      "type": "mc",
      "statement": "No Microsoft PowerPoint, o que define um layout de slide?",
      "options": [
        {
          "letter": "A",
          "text": "O tipo de arquivo gerado pela apresentação"
        },
        {
          "letter": "B",
          "text": "A sequência automática dos slides"
        },
        {
          "letter": "C",
          "text": "A disposição dos espaços para textos e objetos no slide"
        },
        {
          "letter": "D",
          "text": "O tempo de exibição de cada slide"
        },
        {
          "letter": "E",
          "text": "O tamanho final do arquivo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info2-24",
      "type": "mc",
      "statement": "Em Segurança da Informação, qual é o objetivo central de se realizar um backup?",
      "options": [
        {
          "letter": "A",
          "text": "Impedir ataques de vírus"
        },
        {
          "letter": "B",
          "text": "Garantir a confidencialidade das senhas"
        },
        {
          "letter": "C",
          "text": "Substituir o uso de antivírus"
        },
        {
          "letter": "D",
          "text": "Recuperar dados em caso de perda ou falha"
        },
        {
          "letter": "E",
          "text": "Bloquear acessos não autorizados"
        }
      ],
      "correct": "D"
    }
  ],
  "Sexta": [
    {
      "id": "admin-0",
      "type": "mc",
      "statement": "A transição do paradigma burocrático para o gerencial na gestão pública marcou-se sobretudo pelo deslocamento do foco:",
      "options": [
        {
          "letter": "A",
          "text": "da hierarquia para a informalidade"
        },
        {
          "letter": "B",
          "text": "da legalidade para a eficiência"
        },
        {
          "letter": "C",
          "text": "dos procedimentos para os resultados"
        },
        {
          "letter": "D",
          "text": "do planejamento para a execução"
        },
        {
          "letter": "E",
          "text": "do controle interno para o externo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-1",
      "type": "mc",
      "statement": "Acerca das diferenças entre gestão pública e privada, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "ambas visam à maximização do lucro"
        },
        {
          "letter": "B",
          "text": "a gestão pública tem maior liberdade decisória"
        },
        {
          "letter": "C",
          "text": "a gestão privada está sujeita à legalidade estrita"
        },
        {
          "letter": "D",
          "text": "a gestão pública pode adotar ferramentas gerenciais privadas, respeitado o ordenamento jurídico"
        },
        {
          "letter": "E",
          "text": "não existem diferenças estruturais entre elas"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-2",
      "type": "mc",
      "statement": "A excelência nos serviços públicos vincula-se corretamente a:",
      "options": [
        {
          "letter": "A",
          "text": "redução de custos mesmo com prejuízo à qualidade"
        },
        {
          "letter": "B",
          "text": "foco exclusivo na eficiência econômica"
        },
        {
          "letter": "C",
          "text": "supressão de formalidades para agilizar o atendimento"
        },
        {
          "letter": "D",
          "text": "prestação de serviços de qualidade orientados ao cidadão e ao interesse público"
        },
        {
          "letter": "E",
          "text": "uso do conceito de cliente em substituição ao de cidadão"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-3",
      "type": "mc",
      "statement": "Um programa que atinge suas metas, mas não produz impacto real na sociedade, é considerado:",
      "options": [
        {
          "letter": "A",
          "text": "eficiente e efetivo"
        },
        {
          "letter": "B",
          "text": "eficaz, porém com baixa efetividade"
        },
        {
          "letter": "C",
          "text": "ineficiente, porém eficaz"
        },
        {
          "letter": "D",
          "text": "efetivo, embora ineficaz"
        },
        {
          "letter": "E",
          "text": "ineficiente e ineficaz"
        }
      ],
      "correct": "B"
    },
    {
      "id": "admin-4",
      "type": "mc",
      "statement": "Sobre gestão de pessoas no setor público, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "a estabilidade impede a avaliação de desempenho"
        },
        {
          "letter": "B",
          "text": "a gestão de pessoas restringe-se ao controle de frequência"
        },
        {
          "letter": "C",
          "text": "o planejamento estratégico de RH deve alinhar pessoas e objetivos organizacionais"
        },
        {
          "letter": "D",
          "text": "a gestão de pessoas dispensa concursos públicos"
        },
        {
          "letter": "E",
          "text": "práticas de RH são incompatíveis com o regime jurídico público"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-5",
      "type": "mc",
      "statement": "A gestão de desempenho é corretamente compreendida como um processo que:",
      "options": [
        {
          "letter": "A",
          "text": "se limita a punições"
        },
        {
          "letter": "B",
          "text": "ocorre apenas ao final do período funcional"
        },
        {
          "letter": "C",
          "text": "substitui o controle disciplinar"
        },
        {
          "letter": "D",
          "text": "envolve planejamento, acompanhamento, avaliação e desenvolvimento"
        },
        {
          "letter": "E",
          "text": "contraria o princípio da legalidade"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-6",
      "type": "mc",
      "statement": "A estrutura organizacional com dupla subordinação, combinando chefias funcionais e de projeto, denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "linear"
        },
        {
          "letter": "B",
          "text": "funcional"
        },
        {
          "letter": "C",
          "text": "linha-staff"
        },
        {
          "letter": "D",
          "text": "matricial"
        },
        {
          "letter": "E",
          "text": "em rede"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-7",
      "type": "mc",
      "statement": "No setor público, a EaD é utilizada principalmente para:",
      "options": [
        {
          "letter": "A",
          "text": "eliminar o ensino presencial"
        },
        {
          "letter": "B",
          "text": "reduzir custos com pessoal"
        },
        {
          "letter": "C",
          "text": "substituir a educação formal"
        },
        {
          "letter": "D",
          "text": "viabilizar capacitação em larga escala e atualização contínua"
        },
        {
          "letter": "E",
          "text": "descentralizar a autoridade administrativa"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-8",
      "type": "mc",
      "statement": "A excelência na gestão pública pressupõe:",
      "options": [
        {
          "letter": "A",
          "text": "eliminação do planejamento formal"
        },
        {
          "letter": "B",
          "text": "uso de indicadores e avaliação sistemática de resultados"
        },
        {
          "letter": "C",
          "text": "flexibilização irrestrita das normas"
        },
        {
          "letter": "D",
          "text": "centralização absoluta das decisões"
        },
        {
          "letter": "E",
          "text": "substituição do controle legal pelo social"
        }
      ],
      "correct": "B"
    },
    {
      "id": "admin-9",
      "type": "mc",
      "statement": "A prática voltada à identificação de necessidades futuras de pessoal denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "recrutamento interno"
        },
        {
          "letter": "B",
          "text": "avaliação de desempenho"
        },
        {
          "letter": "C",
          "text": "planejamento estratégico de RH"
        },
        {
          "letter": "D",
          "text": "análise de cargos"
        },
        {
          "letter": "E",
          "text": "monitoramento funcional"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-10",
      "type": "mc",
      "statement": "A avaliação de desempenho no setor público tem como uma de suas finalidades legítimas:",
      "options": [
        {
          "letter": "A",
          "text": "eliminar a estabilidade do servidor"
        },
        {
          "letter": "B",
          "text": "substituir o concurso público"
        },
        {
          "letter": "C",
          "text": "subsidiar ações de capacitação e desenvolvimento"
        },
        {
          "letter": "D",
          "text": "dispensar o controle disciplinar"
        },
        {
          "letter": "E",
          "text": "afastar a legalidade administrativa"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-11",
      "type": "mc",
      "statement": "A cultura organizacional diferencia-se do clima porque a cultura:",
      "options": [
        {
          "letter": "A",
          "text": "é formada exclusivamente por normas legais"
        },
        {
          "letter": "B",
          "text": "reflete percepções momentâneas"
        },
        {
          "letter": "C",
          "text": "possui caráter mais profundo e duradouro"
        },
        {
          "letter": "D",
          "text": "não influencia comportamentos"
        },
        {
          "letter": "E",
          "text": "depende apenas da estrutura hierárquica"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-12",
      "type": "mc",
      "statement": "A lacuna de competências corresponde a:",
      "options": [
        {
          "letter": "A",
          "text": "inexistência de cargos formais"
        },
        {
          "letter": "B",
          "text": "diferença entre competências exigidas e as existentes"
        },
        {
          "letter": "C",
          "text": "ausência de treinamento inicial"
        },
        {
          "letter": "D",
          "text": "falta de estabilidade funcional"
        },
        {
          "letter": "E",
          "text": "carência de estrutura organizacional"
        }
      ],
      "correct": "B"
    },
    {
      "id": "admin-13",
      "type": "mc",
      "statement": "A departamentalização que agrupa atividades conforme etapas de um fluxo de trabalho denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "funcional"
        },
        {
          "letter": "B",
          "text": "geográfica"
        },
        {
          "letter": "C",
          "text": "por clientes"
        },
        {
          "letter": "D",
          "text": "por processos"
        },
        {
          "letter": "E",
          "text": "por produtos"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-14",
      "type": "mc",
      "statement": "A liderança democrática caracteriza-se principalmente pela:",
      "options": [
        {
          "letter": "A",
          "text": "centralização das decisões e comunicação unilateral"
        },
        {
          "letter": "B",
          "text": "ausência de hierarquia formal"
        },
        {
          "letter": "C",
          "text": "ampla autonomia sem coordenação"
        },
        {
          "letter": "D",
          "text": "participação da equipe no processo decisório"
        },
        {
          "letter": "E",
          "text": "ênfase exclusiva no cumprimento de normas"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-15",
      "type": "mc",
      "statement": "A diferença essencial entre treinamento e desenvolvimento está no fato de que o desenvolvimento:",
      "options": [
        {
          "letter": "A",
          "text": "tem foco no curto prazo"
        },
        {
          "letter": "B",
          "text": "visa exclusivamente ao cargo atual"
        },
        {
          "letter": "C",
          "text": "prepara o servidor para desafios e funções futuras"
        },
        {
          "letter": "D",
          "text": "é incompatível com o setor público"
        },
        {
          "letter": "E",
          "text": "elimina a necessidade de educação corporativa"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-16",
      "type": "mc",
      "statement": "A Administração Pública gerencial diferencia-se da burocrática porque:",
      "options": [
        {
          "letter": "A",
          "text": "dispensa a observância da legalidade"
        },
        {
          "letter": "B",
          "text": "prioriza o controle por resultados em lugar do controle estrito de procedimentos"
        },
        {
          "letter": "C",
          "text": "elimina a hierarquia administrativa"
        },
        {
          "letter": "D",
          "text": "substitui o interesse público pelo do usuário"
        },
        {
          "letter": "E",
          "text": "adota exclusivamente critérios políticos de gestão"
        }
      ],
      "correct": "B"
    },
    {
      "id": "admin-17",
      "type": "mc",
      "statement": "A excelência nos serviços públicos exige necessariamente:",
      "options": [
        {
          "letter": "A",
          "text": "substituição do conceito de cidadão pelo de cliente"
        },
        {
          "letter": "B",
          "text": "ampla flexibilização das normas"
        },
        {
          "letter": "C",
          "text": "foco no atendimento às necessidades da sociedade"
        },
        {
          "letter": "D",
          "text": "eliminação dos controles internos"
        },
        {
          "letter": "E",
          "text": "total centralização das decisões"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-18",
      "type": "mc",
      "statement": "A atividade de acompanhar sistematicamente o desempenho e a vida funcional do servidor denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "provisão de pessoas"
        },
        {
          "letter": "B",
          "text": "aplicação de pessoas"
        },
        {
          "letter": "C",
          "text": "desenvolvimento de pessoas"
        },
        {
          "letter": "D",
          "text": "monitoramento de pessoas"
        },
        {
          "letter": "E",
          "text": "recrutamento externo"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-19",
      "type": "mc",
      "statement": "O planejamento estratégico de RH contribui para a Administração Pública ao:",
      "options": [
        {
          "letter": "A",
          "text": "eliminar a necessidade de capacitação"
        },
        {
          "letter": "B",
          "text": "definir critérios subjetivos de avaliação"
        },
        {
          "letter": "C",
          "text": "antecipar necessidades de pessoal e competências"
        },
        {
          "letter": "D",
          "text": "restringir a mobilidade funcional"
        },
        {
          "letter": "E",
          "text": "substituir o concurso público"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-20",
      "type": "mc",
      "statement": "A gestão de desempenho diferencia-se da avaliação de desempenho porque a gestão:",
      "options": [
        {
          "letter": "A",
          "text": "limita-se à mensuração de resultados"
        },
        {
          "letter": "B",
          "text": "ocorre apenas ao final do período avaliado"
        },
        {
          "letter": "C",
          "text": "compreende processo contínuo de planejamento e acompanhamento"
        },
        {
          "letter": "D",
          "text": "é incompatível com o setor público"
        },
        {
          "letter": "E",
          "text": "tem caráter exclusivamente punitivo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-21",
      "type": "mc",
      "statement": "O clima organizacional é influenciado principalmente por:",
      "options": [
        {
          "letter": "A",
          "text": "legislação constitucional"
        },
        {
          "letter": "B",
          "text": "estrutura federativa do Estado"
        },
        {
          "letter": "C",
          "text": "estilo de liderança e comunicação interna"
        },
        {
          "letter": "D",
          "text": "natureza jurídica do órgão"
        },
        {
          "letter": "E",
          "text": "regime previdenciário dos servidores"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-22",
      "type": "mc",
      "statement": "A gestão do conhecimento no setor público tem como finalidade central:",
      "options": [
        {
          "letter": "A",
          "text": "substituir normas e regulamentos"
        },
        {
          "letter": "B",
          "text": "valorizar exclusivamente o saber acadêmico"
        },
        {
          "letter": "C",
          "text": "preservar e compartilhar o conhecimento institucional"
        },
        {
          "letter": "D",
          "text": "eliminar a necessidade de treinamento"
        },
        {
          "letter": "E",
          "text": "descentralizar a autoridade hierárquica"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-23",
      "type": "mc",
      "statement": "A departamentalização funcional caracteriza-se por agrupar atividades com base:",
      "options": [
        {
          "letter": "A",
          "text": "no território de atuação"
        },
        {
          "letter": "B",
          "text": "no tipo de usuário atendido"
        },
        {
          "letter": "C",
          "text": "nos produtos ou serviços ofertados"
        },
        {
          "letter": "D",
          "text": "nas etapas do processo produtivo"
        },
        {
          "letter": "E",
          "text": "nas funções desempenhadas"
        }
      ],
      "correct": "E"
    },
    {
      "id": "admin-24",
      "type": "mc",
      "statement": "A principal diferença entre autoridade formal e liderança reside no fato de que a liderança:",
      "options": [
        {
          "letter": "A",
          "text": "decorre exclusivamente da posição hierárquica"
        },
        {
          "letter": "B",
          "text": "baseia-se na influência sobre as pessoas"
        },
        {
          "letter": "C",
          "text": "depende apenas de normas legais"
        },
        {
          "letter": "D",
          "text": "elimina a necessidade de comando"
        },
        {
          "letter": "E",
          "text": "restringe-se ao setor privado"
        }
      ],
      "correct": "B"
    },
    {
      "id": "prf-0",
      "type": "mc",
      "statement": "Com base no art. 144 da Constituição Federal, qual é a natureza jurídica e a principal missão institucional da Polícia Rodoviária Federal?",
      "options": [
        {
          "letter": "A",
          "text": "Órgão temporário criado por lei ordinária para atuar em vias estaduais"
        },
        {
          "letter": "B",
          "text": "Entidade autônoma, sem vinculação à administração pública federal"
        },
        {
          "letter": "C",
          "text": "Órgão auxiliar subordinado às polícias militares estaduais"
        },
        {
          "letter": "D",
          "text": "Órgão permanente, organizado e mantido pela União, voltado ao patrulhamento ostensivo das rodovias federais"
        },
        {
          "letter": "E",
          "text": "Órgão de polícia judiciária com atuação em todo o território nacional"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-1",
      "type": "mc",
      "statement": "Conforme o art. 144 da Constituição Federal, a segurança pública é exercida com qual finalidade precípua?",
      "options": [
        {
          "letter": "A",
          "text": "Garantir a justiça social e a igualdade material entre os cidadãos"
        },
        {
          "letter": "B",
          "text": "Assegurar o desenvolvimento econômico nacional"
        },
        {
          "letter": "C",
          "text": "Promover políticas públicas de prevenção social"
        },
        {
          "letter": "D",
          "text": "Assegurar exclusivamente a proteção do patrimônio público"
        },
        {
          "letter": "E",
          "text": "Preservar a ordem pública e a incolumidade das pessoas e do patrimônio"
        }
      ],
      "correct": "E"
    },
    {
      "id": "prf-2",
      "type": "mc",
      "statement": "O art. 20 da Lei nº 9.503/1997 (Código de Trânsito Brasileiro) enquadra a Polícia Rodoviária Federal dentro do Sistema Nacional de Trânsito como:",
      "options": [
        {
          "letter": "A",
          "text": "Órgão normativo do Sistema Nacional de Trânsito"
        },
        {
          "letter": "B",
          "text": "Órgão consultivo do Sistema Nacional de Trânsito"
        },
        {
          "letter": "C",
          "text": "Órgão executivo rodoviário da União"
        },
        {
          "letter": "D",
          "text": "Órgão executivo de trânsito dos Estados"
        },
        {
          "letter": "E",
          "text": "Órgão julgador de infrações de trânsito"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-3",
      "type": "mc",
      "statement": "Dentre as competências atribuídas à PRF pelo art. 20 do Código de Trânsito Brasileiro, está incluída:",
      "options": [
        {
          "letter": "A",
          "text": "A investigação de crimes praticados em rodovias federais"
        },
        {
          "letter": "B",
          "text": "O julgamento de recursos interpostos contra multas aplicadas"
        },
        {
          "letter": "C",
          "text": "A regulamentação do tráfego nas rodovias estaduais"
        },
        {
          "letter": "D",
          "text": "O policiamento ostensivo em vias urbanas"
        },
        {
          "letter": "E",
          "text": "A fiscalização do trânsito e a imposição de penalidades administrativas"
        }
      ],
      "correct": "E"
    },
    {
      "id": "prf-4",
      "type": "mc",
      "statement": "Qual é o propósito central do Decreto nº 1.655/1995 no que diz respeito à Polícia Rodoviária Federal?",
      "options": [
        {
          "letter": "A",
          "text": "Criar novas atribuições de natureza penal para a PRF"
        },
        {
          "letter": "B",
          "text": "Ampliar a atuação territorial da PRF para além das rodovias federais"
        },
        {
          "letter": "C",
          "text": "Transformar a PRF em órgão de polícia judiciária"
        },
        {
          "letter": "D",
          "text": "Regulamentar a organização e as competências operacionais da PRF"
        },
        {
          "letter": "E",
          "text": "Disciplinar exclusivamente a estrutura administrativa da instituição"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-5",
      "type": "mc",
      "statement": "Com fundamento no Decreto nº 1.655/1995, como é tratada a atuação da PRF em operações conjuntas com outros órgãos públicos?",
      "options": [
        {
          "letter": "A",
          "text": "É vedada, pois não há previsão legal para tal"
        },
        {
          "letter": "B",
          "text": "Depende exclusivamente de autorização judicial prévia"
        },
        {
          "letter": "C",
          "text": "Pode ocorrer, desde que respeitados os limites legais e constitucionais"
        },
        {
          "letter": "D",
          "text": "Transfere automaticamente à PRF as competências dos demais órgãos"
        },
        {
          "letter": "E",
          "text": "Restringe-se apenas a ações de caráter educativo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-6",
      "type": "mc",
      "statement": "O exercício do poder de polícia administrativa pela Polícia Rodoviária Federal autoriza a instituição a:",
      "options": [
        {
          "letter": "A",
          "text": "Instaurar inquérito policial"
        },
        {
          "letter": "B",
          "text": "Julgar recursos administrativos de trânsito"
        },
        {
          "letter": "C",
          "text": "Exercer jurisdição penal"
        },
        {
          "letter": "D",
          "text": "Aplicar sanções administrativas e adotar medidas coercitivas"
        },
        {
          "letter": "E",
          "text": "Legislar sobre matéria de trânsito"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-7",
      "type": "mc",
      "statement": "A leitura integrada da Constituição Federal, do CTB e dos decretos que regem a PRF leva à conclusão de que:",
      "options": [
        {
          "letter": "A",
          "text": "A PRF possui competência ampla para atuar em qualquer via pública"
        },
        {
          "letter": "B",
          "text": "Os decretos podem ampliar as competências fixadas na Constituição"
        },
        {
          "letter": "C",
          "text": "O CTB confere à PRF função de polícia judiciária"
        },
        {
          "letter": "D",
          "text": "A organização administrativa da PRF é definida exclusivamente pela Constituição"
        },
        {
          "letter": "E",
          "text": "A atuação da PRF está limitada às rodovias federais e à função ostensiva"
        }
      ],
      "correct": "E"
    },
    {
      "id": "prf-8",
      "type": "mc",
      "statement": "No sistema constitucional de segurança pública, a Polícia Rodoviária Federal é classificada como órgão:",
      "options": [
        {
          "letter": "A",
          "text": "Subordinado às Polícias Militares dos Estados"
        },
        {
          "letter": "B",
          "text": "De polícia judiciária da União"
        },
        {
          "letter": "C",
          "text": "Auxiliar das Polícias Civis"
        },
        {
          "letter": "D",
          "text": "Temporário, criado por decreto presidencial"
        },
        {
          "letter": "E",
          "text": "Permanente, organizado e mantido pela União"
        }
      ],
      "correct": "E"
    },
    {
      "id": "prf-9",
      "type": "mc",
      "statement": "Segundo o art. 144 da Constituição Federal, o campo de atuação da PRF está diretamente vinculado à:",
      "options": [
        {
          "letter": "A",
          "text": "Investigação de crimes de natureza federal"
        },
        {
          "letter": "B",
          "text": "Preservação da ordem pública no meio urbano"
        },
        {
          "letter": "C",
          "text": "Defesa nacional e controle de fronteiras terrestres"
        },
        {
          "letter": "D",
          "text": "Preservação da ordem pública nas rodovias federais"
        },
        {
          "letter": "E",
          "text": "Execução da política penitenciária nacional"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-10",
      "type": "mc",
      "statement": "Como o Código de Trânsito Brasileiro posiciona a Polícia Rodoviária Federal dentro de sua estrutura normativa?",
      "options": [
        {
          "letter": "A",
          "text": "Como integrante exclusiva da administração direta da União, fora do Sistema Nacional de Trânsito"
        },
        {
          "letter": "B",
          "text": "Como órgão executivo rodoviário da União, integrante do Sistema Nacional de Trânsito"
        },
        {
          "letter": "C",
          "text": "Como órgão do Sistema Nacional de Segurança Pública, sem atribuições de trânsito"
        },
        {
          "letter": "D",
          "text": "Como integrante do sistema estadual de trânsito, por delegação"
        },
        {
          "letter": "E",
          "text": "Como órgão do sistema municipal de trânsito, em caráter subsidiário"
        }
      ],
      "correct": "B"
    },
    {
      "id": "prf-11",
      "type": "mc",
      "statement": "Conforme o Decreto nº 1.655/1995, o atendimento pela PRF a acidentes de trânsito em rodovias federais tem como objetivo principal:",
      "options": [
        {
          "letter": "A",
          "text": "Apurar a responsabilidade penal dos envolvidos"
        },
        {
          "letter": "B",
          "text": "Substituir a atuação do Corpo de Bombeiros Militar"
        },
        {
          "letter": "C",
          "text": "Garantir a fluidez e a segurança do tráfego"
        },
        {
          "letter": "D",
          "text": "Exercer atividade de perícia técnica"
        },
        {
          "letter": "E",
          "text": "Instaurar procedimento investigativo formal"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-12",
      "type": "mc",
      "statement": "Conforme o Decreto nº 6.061/2007, como se organiza internamente a Polícia Rodoviária Federal?",
      "options": [
        {
          "letter": "A",
          "text": "Exclusivamente por meio de órgãos centrais"
        },
        {
          "letter": "B",
          "text": "Exclusivamente por meio de órgãos descentralizados"
        },
        {
          "letter": "C",
          "text": "Por meio de órgãos centrais e descentralizados"
        },
        {
          "letter": "D",
          "text": "Por meio de órgãos temporários e permanentes"
        },
        {
          "letter": "E",
          "text": "Por meio de órgãos consultivos e normativos"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-13",
      "type": "mc",
      "statement": "Qual é a principal atribuição das Superintendências Regionais da Polícia Rodoviária Federal?",
      "options": [
        {
          "letter": "A",
          "text": "Exercer a direção superior da instituição em nível nacional"
        },
        {
          "letter": "B",
          "text": "Coordenar a atuação da PRF no âmbito dos Estados"
        },
        {
          "letter": "C",
          "text": "Editar normas gerais de trânsito aplicáveis às rodovias"
        },
        {
          "letter": "D",
          "text": "Julgar infrações administrativas de trânsito"
        },
        {
          "letter": "E",
          "text": "Executar políticas nacionais de segurança pública"
        }
      ],
      "correct": "B"
    },
    {
      "id": "prf-14",
      "type": "mc",
      "statement": "Entre as características que marcam o poder de polícia exercido pela PRF, destaca-se a:",
      "options": [
        {
          "letter": "A",
          "text": "Ausência de coercibilidade"
        },
        {
          "letter": "B",
          "text": "Necessidade de autorização judicial prévia para cada ato"
        },
        {
          "letter": "C",
          "text": "Autoexecutoriedade de suas medidas administrativas"
        },
        {
          "letter": "D",
          "text": "Natureza jurisdicional de suas decisões"
        },
        {
          "letter": "E",
          "text": "Impossibilidade de aplicação de sanções imediatas"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-15",
      "type": "mc",
      "statement": "Diante do conjunto normativo que rege a PRF, qual afirmação está correta?",
      "options": [
        {
          "letter": "A",
          "text": "A lei ordinária pode suprimir atribuições constitucionais da PRF"
        },
        {
          "letter": "B",
          "text": "O decreto pode ampliar a atuação territorial da PRF além das rodovias federais"
        },
        {
          "letter": "C",
          "text": "O CTB cria juridicamente a Polícia Rodoviária Federal"
        },
        {
          "letter": "D",
          "text": "A Constituição estabelece a função essencial da PRF"
        },
        {
          "letter": "E",
          "text": "O Decreto nº 6.061/2007 define as competências de trânsito da PRF"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-16",
      "type": "mc",
      "statement": "Nos termos do art. 144 da Constituição Federal, o traço que diferencia a PRF das polícias civis é o exercício de função:",
      "options": [
        {
          "letter": "A",
          "text": "Judiciária, voltada à apuração de infrações penais"
        },
        {
          "letter": "B",
          "text": "Administrativa, de caráter normativo"
        },
        {
          "letter": "C",
          "text": "Ostensiva, voltada à prevenção"
        },
        {
          "letter": "D",
          "text": "Jurisdicional, no âmbito federal"
        },
        {
          "letter": "E",
          "text": "Consultiva, no sistema de segurança pública"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-17",
      "type": "mc",
      "statement": "A expressão \"patrulhamento ostensivo\" inserida pelo constituinte ao tratar da PRF indica um modelo de atuação:",
      "options": [
        {
          "letter": "A",
          "text": "Sigiloso e investigativo"
        },
        {
          "letter": "B",
          "text": "Preventivo e visível"
        },
        {
          "letter": "C",
          "text": "Eventual e subsidiário"
        },
        {
          "letter": "D",
          "text": "Normativo e regulador"
        },
        {
          "letter": "E",
          "text": "Exclusivamente repressivo"
        }
      ],
      "correct": "B"
    },
    {
      "id": "prf-18",
      "type": "mc",
      "statement": "O art. 20 do Código de Trânsito Brasileiro delimita o exercício da fiscalização de trânsito pela PRF às:",
      "options": [
        {
          "letter": "A",
          "text": "Rodovias estaduais delegadas pela União"
        },
        {
          "letter": "B",
          "text": "Vias urbanas federais e municipais"
        },
        {
          "letter": "C",
          "text": "Rodovias e estradas federais"
        },
        {
          "letter": "D",
          "text": "Rodovias que possuam convênio com os Estados"
        },
        {
          "letter": "E",
          "text": "Vias em que atue apenas em caráter educativo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-19",
      "type": "mc",
      "statement": "Dentre as atribuições conferidas à PRF pelo Código de Trânsito Brasileiro, encontra-se a competência para:",
      "options": [
        {
          "letter": "A",
          "text": "Julgar recursos de infrações de trânsito"
        },
        {
          "letter": "B",
          "text": "Estabelecer normas gerais de circulação"
        },
        {
          "letter": "C",
          "text": "Fiscalizar o excesso de peso e dimensões dos veículos"
        },
        {
          "letter": "D",
          "text": "Legislar sobre transporte interestadual"
        },
        {
          "letter": "E",
          "text": "Autorizar a realização de obras em rodovias federais"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-20",
      "type": "mc",
      "statement": "A estrutura administrativa da PRF definida pelo Decreto nº 6.061/2007 evidencia a observância do seguinte princípio do direito administrativo:",
      "options": [
        {
          "letter": "A",
          "text": "Autotutela"
        },
        {
          "letter": "B",
          "text": "Supremacia do interesse privado"
        },
        {
          "letter": "C",
          "text": "Descentralização administrativa"
        },
        {
          "letter": "D",
          "text": "Informalidade"
        },
        {
          "letter": "E",
          "text": "Especialização jurisdicional"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-21",
      "type": "mc",
      "statement": "Segundo o Decreto nº 6.061/2007, qual é a principal função das Delegacias e Unidades Operacionais da PRF?",
      "options": [
        {
          "letter": "A",
          "text": "Editar normas internas de funcionamento"
        },
        {
          "letter": "B",
          "text": "Exercer a direção superior da instituição"
        },
        {
          "letter": "C",
          "text": "Executar as atividades operacionais da PRF"
        },
        {
          "letter": "D",
          "text": "Julgar processos administrativos disciplinares"
        },
        {
          "letter": "E",
          "text": "Formular políticas nacionais de segurança pública"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-22",
      "type": "mc",
      "statement": "A atuação da PRF em cooperação com outros órgãos públicos:",
      "options": [
        {
          "letter": "A",
          "text": "É vedada por ausência de previsão legal"
        },
        {
          "letter": "B",
          "text": "Caracteriza delegação permanente de competências"
        },
        {
          "letter": "C",
          "text": "É admitida, sem afastar os limites legais e constitucionais"
        },
        {
          "letter": "D",
          "text": "Transforma a PRF em órgão auxiliar permanente"
        },
        {
          "letter": "E",
          "text": "Depende exclusivamente de autorização judicial prévia"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-23",
      "type": "mc",
      "statement": "À luz do conjunto normativo aplicável à PRF, qual assertiva está INCORRETA?",
      "options": [
        {
          "letter": "A",
          "text": "A PRF integra o sistema constitucional de segurança pública"
        },
        {
          "letter": "B",
          "text": "Sua atuação possui limites territoriais expressamente definidos"
        },
        {
          "letter": "C",
          "text": "Exerce poder de polícia administrativa"
        },
        {
          "letter": "D",
          "text": "Desempenha função de polícia judiciária"
        },
        {
          "letter": "E",
          "text": "Possui organização administrativa definida por decreto"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-24",
      "type": "mc",
      "statement": "O fato de a Polícia Rodoviária Federal estar inserida no art. 144 da Constituição Federal revela que se trata de órgão:",
      "options": [
        {
          "letter": "A",
          "text": "Criado por legislação infraconstitucional"
        },
        {
          "letter": "B",
          "text": "Integrante do sistema de segurança pública, com previsão constitucional expressa"
        },
        {
          "letter": "C",
          "text": "De atuação supletiva, condicionada à omissão dos Estados"
        },
        {
          "letter": "D",
          "text": "Subordinado hierarquicamente às Polícias Militares"
        },
        {
          "letter": "E",
          "text": "Vinculado exclusivamente ao Sistema Nacional de Trânsito"
        }
      ],
      "correct": "B"
    }
  ],
  "Sábado": [
    {
      "id": "port-0",
      "type": "cebraspe",
      "statement": "Uma notícia jornalística e um artigo científico são exemplos de textos informativos, embora apresentem diferenças na linguagem e na finalidade.",
      "correct": "CERTO",
      "explanation": "Ambos os textos se encaixam no gênero informativo, mas suas finalidades e linguagens são adaptadas ao público que visam. A notícia jornalística é voltada para o público geral e busca informar de forma clara e direta sobre fatos recentes, com linguagem acessível e objetiva..."
    },
    {
      "id": "port-1",
      "type": "cebraspe",
      "statement": "No português brasileiro, a grafia da palavra \"consequência\" foi modificada com o Novo Acordo Ortográfico, passando a ser escrita sem o \"u\".",
      "correct": "ERRADO",
      "explanation": "O Novo Acordo Ortográfico, que entrou em vigor para unificar a ortografia dos países lusófonos, alterou apenas algumas palavras da língua portuguesa, principalmente aquelas com hífen, acentuação e consoantes mudas. No entanto, “consequência” não sofreu alteração; o \"u\" é mantido para sinalizar a sílaba tônica e fazer parte da sequência fonética correta..."
    },
    {
      "id": "port-2",
      "type": "cebraspe",
      "statement": "Na frase “Ela chegou cedo, pois queria assistir ao filme”, o conector “pois” estabelece uma relação de causa entre as orações.",
      "correct": "CERTO",
      "explanation": "O conectivo “pois” tem função causal nessa frase, indicando o motivo da ação de chegar cedo. Conectores são palavras que estabelecem coesão no texto ao expressar relações lógicas entre as ideias, como causa, consequência, adição, entre outras. Nesse caso, “pois” explica a razão do ato de chegar cedo, estabelecendo uma relação causal..."
    },
    {
      "id": "port-3",
      "type": "cebraspe",
      "statement": "Na oração “A maioria dos estudantes discordou da decisão tomada”, o verbo “discordar” está corretamente conjugado no singular para concordar com o núcleo “maioria”.",
      "correct": "CERTO",
      "explanation": "O núcleo do sujeito composto “a maioria dos estudantes” é “maioria”, um substantivo singular, e, portanto, o verbo “discordar” concorda no singular. Em construções desse tipo, o verbo se ajusta ao núcleo do sujeito, e não ao termo “estudantes”..."
    },
    {
      "id": "port-4",
      "type": "cebraspe",
      "statement": "O verbo “assistir” na frase “Assisti ao filme no final de semana” está corretamente empregado e rege a preposição “a”.",
      "correct": "CERTO",
      "explanation": "No sentido de ver ou presenciar, o verbo “assistir” é transitivo indireto e exige a preposição “a”, como em “assistir ao filme”. Essa regência é particular do português brasileiro e costuma ser abordada pelo CEBRASPE para verificar a compreensão das normas de regência verbal, especialmente com verbos que apresentam usos variados. Esse tipo de conhecimento é essencial para o domínio da norma-padrão."
    },
    {
      "id": "port-5",
      "type": "cebraspe",
      "statement": "Na frase “A professora se referiu à aluna”, o uso do acento indicativo de crase está incorreto.",
      "correct": "ERRADO",
      "explanation": "O uso da crase está correto, pois o verbo “referir-se” exige a preposição “a”, e “aluna” é um substantivo feminino determinado que aceita o artigo feminino “a”, formando “à”. A crase, que representa a fusão de duas vogais idênticas, deve ser aplicada quando há combinação de preposição com artigo definido. A CEBRASPE geralmente explora casos em que o uso da crase é obrigatório, proibido ou facultativo, como forma de avaliar a segurança do candidato com essa regra gramatical..."
    },
    {
      "id": "port-6",
      "type": "cebraspe",
      "statement": "Na oração “Deve-se avaliar o projeto com cautela”, o pronome “se” está corretamente posicionado segundo as normas da língua portuguesa.",
      "correct": "CERTO",
      "explanation": "O pronome “se” está corretamente em posição proclítica, pois o verbo “deve” está no infinitivo impessoal, que permite essa colocação. A próclise é uma das colocações pronominais e ocorre frequentemente em locuções verbais, especialmente quando o verbo auxiliar está no infinitivo..."
    },
    {
      "id": "port-7",
      "type": "cebraspe",
      "statement": "Na frase “A conferência foi dedicada à saúde mental dos trabalhadores”, o uso do acento indicativo de crase está correto.",
      "correct": "CERTO",
      "explanation": "O uso da crase está correto porque o verbo “dedicar” exige a preposição “a” e a palavra “saúde” pede o artigo feminino “a”, formando “à”. Em expressões que indicam destino ou objetivo e que envolvem palavras femininas, a crase se torna necessária. Questões como esta buscam verificar se o candidato domina a aplicação da crase em situações de regência verbal, especialmente em contextos que indicam direcionamento ou intenção."
    },
    {
      "id": "port-8",
      "type": "cebraspe",
      "statement": "Na frase “Mariana, por ser muito dedicada, foi promovida rapidamente”, as vírgulas foram usadas para isolar um adjunto adverbial explicativo.",
      "correct": "CERTO",
      "explanation": "A expressão “por ser muito dedicada” funciona como um adjunto adverbial explicativo, indicando a razão pela qual Mariana foi promovida, e as vírgulas foram corretamente empregadas para isolá-lo. Esse tipo de estrutura adiciona uma explicação adicional, e a pontuação ajuda a demarcar essa informação..."
    },
    {
      "id": "port-9",
      "type": "cebraspe",
      "statement": "No trecho “Ele estava exausto; no entanto, decidiu continuar a viagem”, o conector “no entanto” estabelece uma relação de oposição.",
      "correct": "CERTO",
      "explanation": "O conector “no entanto” é uma conjunção adversativa, que expressa uma ideia contrária à anterior, criando uma relação de oposição entre “estar exausto” e “decidir continuar a viagem”. Esse tipo de conector é essencial para a coesão textual, pois ele organiza o sentido entre as ideias de forma lógica..."
    },
    {
      "id": "port-10",
      "type": "cebraspe",
      "statement": "Na frase “Aquelas pessoas as quais você se referiu estão chegando”, o uso de “as quais” está incorreto, pois o correto seria “às quais”.",
      "correct": "CERTO",
      "explanation": "A regência do verbo “referir-se” exige a preposição “a”, e, ao se combinar com o pronome relativo “quais”, forma-se “às quais” devido à crase. A CEBRASPE aborda essa questão para avaliar o domínio do candidato sobre a relação entre pronomes relativos e as preposições exigidas pelos verbos, o que é crucial para a correção gramatical e a clareza dos enunciados em textos."
    },
    {
      "id": "port-11",
      "type": "cebraspe",
      "statement": "Na frase “O aluno, muito estudioso, foi premiado pela escola”, o trecho “muito estudioso” exerce a função de aposto.",
      "correct": "CERTO",
      "explanation": "Aqui, “muito estudioso” caracteriza o aluno e está isolado por vírgulas, cumprindo a função de aposto explicativo, que é usado para acrescentar informações sobre um substantivo. O aposto fornece um esclarecimento ou descrição adicional e, neste caso, explica uma característica do aluno. A CEBRASPE valoriza o entendimento desse tipo de estrutura, pois o aposto contribui para a construção da coesão e riqueza de informações em uma frase. 17..."
    },
    {
      "id": "port-12",
      "type": "cebraspe",
      "statement": "A frase “Lembrar-me-ei do compromisso” está correta quanto à colocação do pronome átono.",
      "correct": "CERTO",
      "explanation": "O pronome átono “me” foi corretamente posicionado em mesóclise devido à forma verbal no futuro do presente “lembrarei”. A mesóclise é exigida quando o verbo está no futuro do presente ou do pretérito, caso não haja nenhum elemento que a invalide. Esse conhecimento é essencial para candidatos do CEBRASPE, pois a mesóclise é um elemento específico do português formal e demonstra conhecimento profundo da norma culta."
    },
    {
      "id": "port-13",
      "type": "cebraspe",
      "statement": "Em “Os professores que têm experiência são valorizados”, a oração subordinada adjetiva “que têm experiência” restringe o sentido de “professores”.",
      "correct": "CERTO",
      "explanation": "A oração “que têm experiência” caracteriza uma parte específica dos “professores” e, por isso, é chamada de oração subordinada adjetiva restritiva. Esse tipo de oração delimita ou especifica o substantivo ao qual se refere, diferenciando-o de outros elementos do mesmo grupo. A CEBRASPE cobra esse entendimento para verificar se o candidato consegue identificar o papel das orações subordinadas adjetivas no enriquecimento semântico das frases."
    },
    {
      "id": "port-14",
      "type": "cebraspe",
      "statement": "No trecho “Ele estava exausto, mas persistiu”, a palavra “exausto” poderia ser substituída por “cansado” sem prejuízo de sentido.",
      "correct": "CERTO",
      "explanation": "A palavra “exausto” é sinônima de “cansado”, e, neste contexto, ambas podem ser usadas para indicar a condição de fadiga do sujeito. Em questões de substituição de palavras, a CEBRASPE busca avaliar a precisão semântica, verificando se o candidato compreende os sinônimos que mantêm o sentido do texto e que contribuem para a riqueza vocabular. 21..."
    },
    {
      "id": "port-15",
      "type": "cebraspe",
      "statement": "Na frase “Ele assistiu a uma palestra inspiradora”, a regência verbal do verbo “assistir” está correta.",
      "correct": "CERTO",
      "explanation": "No sentido de ver ou presenciar, “assistir” é transitivo indireto e exige a preposição “a”. Aqui, “assistiu a uma palestra” está de acordo com as regras de regência verbal da norma culta. Questões de regência verbal no CEBRASPE buscam avaliar a familiaridade do candidato com o uso formal dos verbos que possuem mais de um sentido e que, portanto, mudam de regência conforme o contexto."
    },
    {
      "id": "port-16",
      "type": "cebraspe",
      "statement": "Em um texto argumentativo, é comum que o autor apresente dados e exemplos para apoiar sua tese.",
      "correct": "CERTO",
      "explanation": "Em textos argumentativos, a construção da argumentação costuma incluir dados, exemplos e outras evidências para fortalecer a defesa de uma tese ou ponto de vista. Esse tipo de suporte contribui para tornar os argumentos mais sólidos e convincentes. A CEBRASPE geralmente explora essa questão para avaliar se o candidato entende as técnicas de argumentação e de como os dados e exemplos ajudam a sustentar um argumento no texto."
    },
    {
      "id": "port-17",
      "type": "cebraspe",
      "statement": "Uma carta de reclamação é um gênero textual que tem como principal objetivo informar o leitor.",
      "correct": "ERRADO",
      "explanation": "O principal objetivo de uma carta de reclamação é manifestar insatisfação e persuadir o destinatário a tomar alguma ação corretiva. Esse gênero textual é comumente direcionado a empresas ou autoridades, e seu tom é geralmente formal e direto. Questões de reconhecimento de gêneros textuais visam avaliar a capacidade do candidato de identificar os objetivos específicos de diferentes tipos de textos e adequar a interpretação ao contexto de comunicação. 25..."
    },
    {
      "id": "port-18",
      "type": "cebraspe",
      "statement": "Na frase “As crianças foram ao parque, e elas estavam animadas”, o termo “elas” funciona como elemento de coesão por referenciação.",
      "correct": "CERTO",
      "explanation": "O pronome “elas” refere-se a “as crianças” e serve para manter a coesão entre as orações sem repetição do termo original. Esse uso de pronomes evita redundâncias e melhora a fluidez do texto. A CEBRASPE explora esse tipo de estrutura para avaliar a compreensão do candidato sobre a função coesiva dos pronomes, essencial para uma leitura coesa e clara."
    },
    {
      "id": "port-19",
      "type": "cebraspe",
      "statement": "A frase “Se ele estudasse mais, teria mais chances de passar” está no modo subjuntivo, indicando uma condição.",
      "correct": "CERTO",
      "explanation": "O verbo “estudasse” está no subjuntivo, indicando uma hipótese ou condição necessária para que algo aconteça. O uso correto do modo subjuntivo é essencial para expressar situações incertas ou hipotéticas. Questões da CEBRASPE sobre tempos e modos verbais buscam assegurar que o candidato consegue reconhecer e utilizar verbos corretamente em contextos condicionais."
    },
    {
      "id": "port-20",
      "type": "cebraspe",
      "statement": "Na frase “Os jovens e adultos bem informados participam mais da política”, o adjetivo “informados” concorda corretamente com “jovens e adultos”.",
      "correct": "CERTO",
      "explanation": "O adjetivo “informados” está no plural e concorda com os dois núcleos do sujeito composto “jovens e adultos”. Em sujeitos compostos ligados por “e”, o adjetivo deve concordar no plural. A CEBRASPE frequentemente aborda questões de concordância nominal para avaliar o domínio do candidato sobre a harmonia entre o substantivo e os adjetivos. 29..."
    },
    {
      "id": "port-21",
      "type": "cebraspe",
      "statement": "Na frase “Ela precisa de ajuda”, o verbo “precisar” exige preposição, pois é transitivo indireto.",
      "correct": "CERTO",
      "explanation": "O verbo “precisar”, no sentido de “necessitar”, é transitivo indireto e exige a preposição “de”. Esse conhecimento é fundamental, pois muitos verbos na norma-padrão exigem preposições específicas para completar o sentido. Questões de regência verbal no CEBRASPE avaliam a familiaridade do candidato com essas construções."
    },
    {
      "id": "port-22",
      "type": "cebraspe",
      "statement": "Em “Ele se comprometeu a ajudar”, o pronome “se” está corretamente posicionado em próclise.",
      "correct": "CERTO",
      "explanation": "A colocação do pronome “se” em próclise está correta, pois há um elemento que atrai a próclise (o pronome pessoal “ele”). A CEBRASPE cobra esse tipo de colocação para verificar o domínio do candidato sobre as normas de colocação pronominal, que são específicas e fundamentais para a norma culta."
    },
    {
      "id": "port-23",
      "type": "cebraspe",
      "statement": "A frase “Ele afirmou que nada seria fácil” poderia ser reescrita como “Ele afirmou que nada fácil seria” sem prejuízo de sentido.",
      "correct": "ERRADO",
      "explanation": "A ordem “nada fácil seria” soa pouco usual e compromete a clareza e a naturalidade da frase. Em questões de reescrita, a CEBRASPE avalia a habilidade de o candidato manter o sentido e a clareza da mensagem original."
    },
    {
      "id": "port-24",
      "type": "cebraspe",
      "statement": "No trecho “Dedicou-se à pintura e à música”, o uso do acento de crase está correto nas duas ocorrências.",
      "correct": "CERTO",
      "explanation": "A crase ocorre devido à combinação da preposição “a” (do verbo dedicar-se) com o artigo feminino “a” que acompanha “pintura” e “música”. Questões de crase na CEBRASPE são frequentes e exigem atenção aos casos de regência e artigo. 34. (CEBRASPE - Concordância Verbal) Na expressão “Vinte por cento dos alunos faltou à prova”, o verbo deveria estar no plural para concordar com “alunos”. • Gabarito: ERRADO..."
    },
    {
      "id": "info-0",
      "type": "mc",
      "statement": "Qual recurso do Windows concentra o acesso a programas instalados, ferramentas de configuração e opções de encerramento do sistema?",
      "options": [
        {
          "letter": "A",
          "text": "Painel de Controle"
        },
        {
          "letter": "B",
          "text": "Área de Trabalho"
        },
        {
          "letter": "C",
          "text": "Menu Iniciar"
        },
        {
          "letter": "D",
          "text": "Barra de Tarefas"
        },
        {
          "letter": "E",
          "text": "Explorador de Arquivos"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-1",
      "type": "mc",
      "statement": "No ambiente Windows, qual combinação de teclas é responsável por recortar um arquivo, permitindo que ele seja transferido para outro local ao pressionar Ctrl + V?",
      "options": [
        {
          "letter": "A",
          "text": "Ctrl + C"
        },
        {
          "letter": "B",
          "text": "Ctrl + Z"
        },
        {
          "letter": "C",
          "text": "Ctrl + A"
        },
        {
          "letter": "D",
          "text": "Ctrl + X"
        },
        {
          "letter": "E",
          "text": "Ctrl + P"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-2",
      "type": "mc",
      "statement": "No Explorador de Arquivos do Windows, qual elemento da interface possibilita ao usuário navegar diretamente entre diretórios digitando o caminho desejado?",
      "options": [
        {
          "letter": "A",
          "text": "Menu Iniciar"
        },
        {
          "letter": "B",
          "text": "Gerenciador de Tarefas"
        },
        {
          "letter": "C",
          "text": "Painel de Controle"
        },
        {
          "letter": "D",
          "text": "Barra de endereços"
        },
        {
          "letter": "E",
          "text": "Lixeira"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-3",
      "type": "mc",
      "statement": "Ao formatar um parágrafo no Microsoft Word com alinhamento justificado, como o texto se distribui na página?",
      "options": [
        {
          "letter": "A",
          "text": "Centralizado entre as margens"
        },
        {
          "letter": "B",
          "text": "Alinhado somente à esquerda"
        },
        {
          "letter": "C",
          "text": "Alinhado somente à direita"
        },
        {
          "letter": "D",
          "text": "Ajustado simultaneamente às margens esquerda e direita"
        },
        {
          "letter": "E",
          "text": "Com espaçamento automático entre linhas"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-4",
      "type": "mc",
      "statement": "No Microsoft Word, qual é a principal utilidade de se inserir um cabeçalho em um documento?",
      "options": [
        {
          "letter": "A",
          "text": "Aplicar proteção contra edição"
        },
        {
          "letter": "B",
          "text": "Gerar sumário automático"
        },
        {
          "letter": "C",
          "text": "Exibir repetidamente informações no topo de cada página"
        },
        {
          "letter": "D",
          "text": "Alterar o tamanho da fonte do corpo do texto"
        },
        {
          "letter": "E",
          "text": "Inserir notas explicativas ao final das páginas"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-5",
      "type": "mc",
      "statement": "No Microsoft Excel, qual é o resultado produzido pela fórmula =MÉDIA(B1:B5)?",
      "options": [
        {
          "letter": "A",
          "text": "Soma total dos valores do intervalo"
        },
        {
          "letter": "B",
          "text": "Valor máximo entre as células"
        },
        {
          "letter": "C",
          "text": "Valor mínimo entre as células"
        },
        {
          "letter": "D",
          "text": "Quantidade de células preenchidas"
        },
        {
          "letter": "E",
          "text": "Média aritmética dos valores do intervalo"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info-6",
      "type": "mc",
      "statement": "Qual das alternativas representa uma conduta correta em relação à segurança digital?",
      "options": [
        {
          "letter": "A",
          "text": "Usar a mesma senha em todos os serviços online"
        },
        {
          "letter": "B",
          "text": "Abrir e-mails desconhecidos para verificar o conteúdo"
        },
        {
          "letter": "C",
          "text": "Dispensar atualizações do antivírus quando o sistema funciona bem"
        },
        {
          "letter": "D",
          "text": "Criar senhas com combinação de letras, números e caracteres especiais"
        },
        {
          "letter": "E",
          "text": "Ignorar backups quando há firewall ativo"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-7",
      "type": "mc",
      "statement": "Em um Sistema de Informação Geográfica (SIG), qual tipo de dado vetorial é mais indicado para representar rios, estradas e limites municipais?",
      "options": [
        {
          "letter": "A",
          "text": "Imagens de satélite"
        },
        {
          "letter": "B",
          "text": "Fotografias aéreas"
        },
        {
          "letter": "C",
          "text": "Dados raster contínuos"
        },
        {
          "letter": "D",
          "text": "Superfícies de temperatura"
        },
        {
          "letter": "E",
          "text": "Dados do tipo vetor"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info-8",
      "type": "mc",
      "statement": "Qual é a finalidade da Lixeira no sistema operacional Windows?",
      "options": [
        {
          "letter": "A",
          "text": "Organizar arquivos por extensão"
        },
        {
          "letter": "B",
          "text": "Proteger arquivos contra vírus"
        },
        {
          "letter": "C",
          "text": "Armazenar permanentemente arquivos apagados"
        },
        {
          "letter": "D",
          "text": "Compactar arquivos automaticamente"
        },
        {
          "letter": "E",
          "text": "Possibilitar a recuperação de itens excluídos antes da remoção definitiva"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info-9",
      "type": "mc",
      "statement": "Ao renomear um arquivo no Windows, o que efetivamente é alterado?",
      "options": [
        {
          "letter": "A",
          "text": "O conteúdo interno do arquivo"
        },
        {
          "letter": "B",
          "text": "A data de criação do arquivo"
        },
        {
          "letter": "C",
          "text": "O tamanho do arquivo"
        },
        {
          "letter": "D",
          "text": "Apenas o nome atribuído ao arquivo"
        },
        {
          "letter": "E",
          "text": "A extensão do arquivo automaticamente"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-10",
      "type": "mc",
      "statement": "No gerenciamento de arquivos do Windows, o que ocorre quando o usuário executa a ação de copiar um arquivo?",
      "options": [
        {
          "letter": "A",
          "text": "O arquivo é transferido definitivamente para outro local"
        },
        {
          "letter": "B",
          "text": "O arquivo original é excluído"
        },
        {
          "letter": "C",
          "text": "Um atalho é criado no destino"
        },
        {
          "letter": "D",
          "text": "Uma duplicata do arquivo é gerada em outro local"
        },
        {
          "letter": "E",
          "text": "O arquivo é compactado automaticamente"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-11",
      "type": "mc",
      "statement": "No Microsoft Word, ao modificar o tipo de fonte de um trecho selecionado, o que é alterado?",
      "options": [
        {
          "letter": "A",
          "text": "O alinhamento do parágrafo"
        },
        {
          "letter": "B",
          "text": "Apenas a cor do texto"
        },
        {
          "letter": "C",
          "text": "O espaçamento entre linhas"
        },
        {
          "letter": "D",
          "text": "O estilo visual dos caracteres"
        },
        {
          "letter": "E",
          "text": "O texto é excluído e reescrito"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-12",
      "type": "mc",
      "statement": "Para que serve, principalmente, o recurso de inserção de tabela no Microsoft Word?",
      "options": [
        {
          "letter": "A",
          "text": "Criar gráficos de forma automática"
        },
        {
          "letter": "B",
          "text": "Proteger o documento com senha"
        },
        {
          "letter": "C",
          "text": "Organizar informações em formato de linhas e colunas"
        },
        {
          "letter": "D",
          "text": "Aplicar efeitos visuais ao texto"
        },
        {
          "letter": "E",
          "text": "Calcular fórmulas matemáticas complexas"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-13",
      "type": "mc",
      "statement": "No Microsoft Excel, o que é uma célula?",
      "options": [
        {
          "letter": "A",
          "text": "O conjunto de todas as planilhas de um arquivo"
        },
        {
          "letter": "B",
          "text": "Um arquivo salvo no computador"
        },
        {
          "letter": "C",
          "text": "A interseção entre uma linha e uma coluna"
        },
        {
          "letter": "D",
          "text": "Uma função matemática predefinida"
        },
        {
          "letter": "E",
          "text": "Um gráfico inserido na planilha"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-14",
      "type": "mc",
      "statement": "Qual operação é executada pelo Excel ao processar a fórmula =A1+A2?",
      "options": [
        {
          "letter": "A",
          "text": "Concatenação dos valores"
        },
        {
          "letter": "B",
          "text": "Cálculo da média aritmética"
        },
        {
          "letter": "C",
          "text": "Identificação do maior valor"
        },
        {
          "letter": "D",
          "text": "Soma dos valores contidos nas células A1 e A2"
        },
        {
          "letter": "E",
          "text": "Divisão de A1 por A2"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-15",
      "type": "mc",
      "statement": "Na Segurança da Informação, o princípio da integridade está associado a qual garantia?",
      "options": [
        {
          "letter": "A",
          "text": "Acesso contínuo aos dados por qualquer usuário"
        },
        {
          "letter": "B",
          "text": "Proteção das senhas dos usuários"
        },
        {
          "letter": "C",
          "text": "Verificação da identidade do usuário"
        },
        {
          "letter": "D",
          "text": "Preservação da exatidão dos dados, evitando alterações indevidas"
        },
        {
          "letter": "E",
          "text": "Confidencialidade das informações armazenadas"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-16",
      "type": "mc",
      "statement": "No Windows, o que é um atalho de arquivo?",
      "options": [
        {
          "letter": "A",
          "text": "Uma cópia integral do arquivo original"
        },
        {
          "letter": "B",
          "text": "Um arquivo compactado pelo sistema"
        },
        {
          "letter": "C",
          "text": "Um vínculo que aponta para o item original"
        },
        {
          "letter": "D",
          "text": "Um arquivo temporário do sistema"
        },
        {
          "letter": "E",
          "text": "Uma versão de segurança do arquivo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-17",
      "type": "mc",
      "statement": "Qual procedimento exclui um arquivo do Windows sem enviá-lo à Lixeira?",
      "options": [
        {
          "letter": "A",
          "text": "Pressionar somente a tecla Delete"
        },
        {
          "letter": "B",
          "text": "Arrastar o arquivo para outra pasta"
        },
        {
          "letter": "C",
          "text": "Usar o comando Ctrl + C"
        },
        {
          "letter": "D",
          "text": "Renomear o arquivo antes de apagar"
        },
        {
          "letter": "E",
          "text": "Pressionar Shift + Delete"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info-18",
      "type": "mc",
      "statement": "A extensão \".pdf\" identifica arquivos de qual natureza?",
      "options": [
        {
          "letter": "A",
          "text": "Planilha eletrônica"
        },
        {
          "letter": "B",
          "text": "Apresentação de slides"
        },
        {
          "letter": "C",
          "text": "Imagem raster"
        },
        {
          "letter": "D",
          "text": "Documento em formato portátil de leitura"
        },
        {
          "letter": "E",
          "text": "Documento de texto editável"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-19",
      "type": "mc",
      "statement": "No Microsoft Word, quais aspectos são ajustados pelas opções de formatação de parágrafo?",
      "options": [
        {
          "letter": "A",
          "text": "Apenas o tipo de fonte"
        },
        {
          "letter": "B",
          "text": "Apenas a cor do texto"
        },
        {
          "letter": "C",
          "text": "Alinhamento, recuo e espaçamento entre linhas"
        },
        {
          "letter": "D",
          "text": "Margens da página inteira"
        },
        {
          "letter": "E",
          "text": "Proteção contra edição"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-20",
      "type": "mc",
      "statement": "Ao inserir uma imagem no Word, qual recurso permite configurar sua posição em relação ao texto ao redor?",
      "options": [
        {
          "letter": "A",
          "text": "Corretor ortográfico"
        },
        {
          "letter": "B",
          "text": "Cabeçalho automático"
        },
        {
          "letter": "C",
          "text": "Controle de versões"
        },
        {
          "letter": "D",
          "text": "Modo de exibição de leitura"
        },
        {
          "letter": "E",
          "text": "Opções de layout de texto"
        }
      ],
      "correct": "E"
    },
    {
      "id": "info-21",
      "type": "mc",
      "statement": "No Microsoft Excel, como são posicionados os dados numéricos inseridos em uma célula por padrão?",
      "options": [
        {
          "letter": "A",
          "text": "Centralizados automaticamente"
        },
        {
          "letter": "B",
          "text": "Alinhados à esquerda"
        },
        {
          "letter": "C",
          "text": "Ocultados até uso de fórmula"
        },
        {
          "letter": "D",
          "text": "Alinhados à direita"
        },
        {
          "letter": "E",
          "text": "Convertidos em texto"
        }
      ],
      "correct": "D"
    },
    {
      "id": "info-22",
      "type": "mc",
      "statement": "No Excel, como se pode calcular a porcentagem de um valor usando recursos básicos do programa?",
      "options": [
        {
          "letter": "A",
          "text": "Apenas com funções estatísticas avançadas"
        },
        {
          "letter": "B",
          "text": "Somente por meio de gráficos"
        },
        {
          "letter": "C",
          "text": "Usando fórmulas com operadores matemáticos simples"
        },
        {
          "letter": "D",
          "text": "Exclusivamente com macros"
        },
        {
          "letter": "E",
          "text": "Apenas após salvar a planilha"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-23",
      "type": "mc",
      "statement": "No Microsoft PowerPoint, o que define um layout de slide?",
      "options": [
        {
          "letter": "A",
          "text": "O tipo de arquivo gerado pela apresentação"
        },
        {
          "letter": "B",
          "text": "A sequência automática dos slides"
        },
        {
          "letter": "C",
          "text": "A disposição dos espaços para textos e objetos no slide"
        },
        {
          "letter": "D",
          "text": "O tempo de exibição de cada slide"
        },
        {
          "letter": "E",
          "text": "O tamanho final do arquivo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "info-24",
      "type": "mc",
      "statement": "Em Segurança da Informação, qual é o objetivo central de se realizar um backup?",
      "options": [
        {
          "letter": "A",
          "text": "Impedir ataques de vírus"
        },
        {
          "letter": "B",
          "text": "Garantir a confidencialidade das senhas"
        },
        {
          "letter": "C",
          "text": "Substituir o uso de antivírus"
        },
        {
          "letter": "D",
          "text": "Recuperar dados em caso de perda ou falha"
        },
        {
          "letter": "E",
          "text": "Bloquear acessos não autorizados"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-0",
      "type": "mc",
      "statement": "Na teoria arquivística, qual princípio estabelece que documentos gerados por entidades distintas não devem ser reunidos em um mesmo conjunto, preservando a identidade de cada fundo?",
      "options": [
        {
          "letter": "A",
          "text": "Organicidade"
        },
        {
          "letter": "B",
          "text": "Unicidade"
        },
        {
          "letter": "C",
          "text": "Cumulatividade"
        },
        {
          "letter": "D",
          "text": "Proveniência"
        },
        {
          "letter": "E",
          "text": "Ordem original"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-1",
      "type": "mc",
      "statement": "Documentos sob uso constante, consultados diariamente para subsidiar as rotinas administrativas de um órgão público, pertencem ao arquivo denominado:",
      "options": [
        {
          "letter": "A",
          "text": "Permanente"
        },
        {
          "letter": "B",
          "text": "Histórico"
        },
        {
          "letter": "C",
          "text": "Intermediário"
        },
        {
          "letter": "D",
          "text": "Especial"
        },
        {
          "letter": "E",
          "text": "Corrente"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-2",
      "type": "mc",
      "statement": "Segundo a teoria arquivística, a classificação de documentos de arquivo deve fundamentar-se, prioritariamente, em:",
      "options": [
        {
          "letter": "A",
          "text": "Assunto principal abordado no texto"
        },
        {
          "letter": "B",
          "text": "Forma e espécie documental"
        },
        {
          "letter": "C",
          "text": "Funções e atividades do órgão produtor"
        },
        {
          "letter": "D",
          "text": "Critérios definidos pelo setor de arquivo"
        },
        {
          "letter": "E",
          "text": "Sequência cronológica dos documentos"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-3",
      "type": "mc",
      "statement": "A operação que consiste em guardar o documento em local previamente estabelecido, após sua devida classificação, denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "Ordenação"
        },
        {
          "letter": "B",
          "text": "Arquivamento"
        },
        {
          "letter": "C",
          "text": "Avaliação"
        },
        {
          "letter": "D",
          "text": "Tramitação"
        },
        {
          "letter": "E",
          "text": "Preservação"
        }
      ],
      "correct": "B"
    },
    {
      "id": "arq-4",
      "type": "mc",
      "statement": "Qual método de ordenação se baseia em sequências numéricas e exige, obrigatoriamente, a utilização de um índice auxiliar para localização dos documentos?",
      "options": [
        {
          "letter": "A",
          "text": "Alfabético"
        },
        {
          "letter": "B",
          "text": "Geográfico"
        },
        {
          "letter": "C",
          "text": "Ideográfico"
        },
        {
          "letter": "D",
          "text": "Cronológico"
        },
        {
          "letter": "E",
          "text": "Numérico"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-5",
      "type": "mc",
      "statement": "Como se denomina a operação de encaminhar documentos do arquivo corrente para o arquivo intermediário?",
      "options": [
        {
          "letter": "A",
          "text": "Recolhimento"
        },
        {
          "letter": "B",
          "text": "Eliminação"
        },
        {
          "letter": "C",
          "text": "Arquivamento"
        },
        {
          "letter": "D",
          "text": "Transferência"
        },
        {
          "letter": "E",
          "text": "Classificação"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-6",
      "type": "mc",
      "statement": "O uso de caixas-arquivo, pastas suspensas e materiais livres de acidez para acondicionar documentos refere-se à atividade de:",
      "options": [
        {
          "letter": "A",
          "text": "Armazenamento"
        },
        {
          "letter": "B",
          "text": "Conservação"
        },
        {
          "letter": "C",
          "text": "Preservação"
        },
        {
          "letter": "D",
          "text": "Acondicionamento"
        },
        {
          "letter": "E",
          "text": "Restauração"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-7",
      "type": "mc",
      "statement": "A gestão de documentos incide de forma mais direta sobre quais fases do ciclo de vida documental?",
      "options": [
        {
          "letter": "A",
          "text": "Corrente e permanente"
        },
        {
          "letter": "B",
          "text": "Intermediária e permanente"
        },
        {
          "letter": "C",
          "text": "Corrente e intermediária"
        },
        {
          "letter": "D",
          "text": "Histórica e permanente"
        },
        {
          "letter": "E",
          "text": "Intermediária e histórica"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-8",
      "type": "mc",
      "statement": "No protocolo, o ato de encaminhar pela primeira vez o documento ao setor responsável por sua análise denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "Tramitação"
        },
        {
          "letter": "B",
          "text": "Expedição"
        },
        {
          "letter": "C",
          "text": "Arquivamento"
        },
        {
          "letter": "D",
          "text": "Distribuição"
        },
        {
          "letter": "E",
          "text": "Classificação"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-9",
      "type": "mc",
      "statement": "A organização de documentos que leva em conta a estrutura organizacional do órgão produtor como critério de agrupamento denomina-se classificação:",
      "options": [
        {
          "letter": "A",
          "text": "Funcional"
        },
        {
          "letter": "B",
          "text": "Temática"
        },
        {
          "letter": "C",
          "text": "Ideográfica"
        },
        {
          "letter": "D",
          "text": "Por assunto"
        },
        {
          "letter": "E",
          "text": "Estrutural"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-10",
      "type": "mc",
      "statement": "Documentos que já encerraram sua vigência administrativa, mas que precisam ser mantidos até o cumprimento de prazos legais, compõem o arquivo:",
      "options": [
        {
          "letter": "A",
          "text": "Corrente"
        },
        {
          "letter": "B",
          "text": "Permanente"
        },
        {
          "letter": "C",
          "text": "Histórico"
        },
        {
          "letter": "D",
          "text": "Especial"
        },
        {
          "letter": "E",
          "text": "Intermediário"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-11",
      "type": "mc",
      "statement": "Na teoria das três idades, os documentos que adquirem valor secundário são aqueles que apresentam valor:",
      "options": [
        {
          "letter": "A",
          "text": "Administrativo"
        },
        {
          "letter": "B",
          "text": "Fiscal"
        },
        {
          "letter": "C",
          "text": "Jurídico"
        },
        {
          "letter": "D",
          "text": "Histórico ou informativo"
        },
        {
          "letter": "E",
          "text": "Operacional"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-12",
      "type": "mc",
      "statement": "A eliminação de documentos de arquivo somente poderá ocorrer após:",
      "options": [
        {
          "letter": "A",
          "text": "Autorização formal do setor que os gerou"
        },
        {
          "letter": "B",
          "text": "Encerramento da tramitação administrativa"
        },
        {
          "letter": "C",
          "text": "Avaliação técnica e previsão expressa em tabela de temporalidade"
        },
        {
          "letter": "D",
          "text": "Recolhimento ao arquivo permanente"
        },
        {
          "letter": "E",
          "text": "Digitalização completa do acervo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-13",
      "type": "mc",
      "statement": "Manter os documentos exatamente na disposição em que foram organizados pelo órgão produtor corresponde ao princípio:",
      "options": [
        {
          "letter": "A",
          "text": "Respeito aos fundos"
        },
        {
          "letter": "B",
          "text": "Respeito à ordem original"
        },
        {
          "letter": "C",
          "text": "Da unicidade"
        },
        {
          "letter": "D",
          "text": "Da cumulatividade"
        },
        {
          "letter": "E",
          "text": "Da avaliação"
        }
      ],
      "correct": "B"
    },
    {
      "id": "arq-14",
      "type": "mc",
      "statement": "O controle de temperatura, umidade relativa do ar e luminosidade nos depósitos documentais é uma medida característica de:",
      "options": [
        {
          "letter": "A",
          "text": "Conservação"
        },
        {
          "letter": "B",
          "text": "Acondicionamento"
        },
        {
          "letter": "C",
          "text": "Restauração"
        },
        {
          "letter": "D",
          "text": "Preservação"
        },
        {
          "letter": "E",
          "text": "Arquivamento"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-15",
      "type": "mc",
      "statement": "A movimentação de documentos entre setores durante o andamento de um processo administrativo denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "Distribuição"
        },
        {
          "letter": "B",
          "text": "Registro"
        },
        {
          "letter": "C",
          "text": "Expedição"
        },
        {
          "letter": "D",
          "text": "Arquivamento"
        },
        {
          "letter": "E",
          "text": "Tramitação"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-16",
      "type": "mc",
      "statement": "No âmbito do protocolo, a atividade correspondente à saída oficial de documentos da instituição para destinatários externos é denominada:",
      "options": [
        {
          "letter": "A",
          "text": "Distribuição"
        },
        {
          "letter": "B",
          "text": "Registro"
        },
        {
          "letter": "C",
          "text": "Tramitação"
        },
        {
          "letter": "D",
          "text": "Arquivamento"
        },
        {
          "letter": "E",
          "text": "Expedição"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-17",
      "type": "mc",
      "statement": "A classificação funcional de documentos de arquivo tem como característica principal:",
      "options": [
        {
          "letter": "A",
          "text": "Basear-se nos assuntos tratados nos documentos"
        },
        {
          "letter": "B",
          "text": "Refletir as funções e atividades exercidas pelo órgão"
        },
        {
          "letter": "C",
          "text": "Organizar documentos por datas de produção"
        },
        {
          "letter": "D",
          "text": "Depender exclusivamente da estrutura administrativa vigente"
        },
        {
          "letter": "E",
          "text": "Ser própria de bibliotecas e centros de documentação"
        }
      ],
      "correct": "B"
    },
    {
      "id": "arq-18",
      "type": "mc",
      "statement": "Quando o critério principal de organização documental é o tempo, o método de ordenação mais adequado é o:",
      "options": [
        {
          "letter": "A",
          "text": "Alfabético"
        },
        {
          "letter": "B",
          "text": "Numérico"
        },
        {
          "letter": "C",
          "text": "Ideográfico"
        },
        {
          "letter": "D",
          "text": "Geográfico"
        },
        {
          "letter": "E",
          "text": "Cronológico"
        }
      ],
      "correct": "E"
    },
    {
      "id": "arq-19",
      "type": "mc",
      "statement": "Na tabela de temporalidade, a fixação do prazo de guarda no arquivo intermediário visa principalmente:",
      "options": [
        {
          "letter": "A",
          "text": "Facilitar a tramitação interna dos documentos"
        },
        {
          "letter": "B",
          "text": "Permitir a classificação temática dos acervos"
        },
        {
          "letter": "C",
          "text": "Determinar o tempo de permanência antes da destinação final"
        },
        {
          "letter": "D",
          "text": "Indicar o método de ordenação a ser adotado"
        },
        {
          "letter": "E",
          "text": "Definir o local de arquivamento corrente"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-20",
      "type": "mc",
      "statement": "A guarda definitiva de documentos dotados de valor histórico ou informativo permanente é característica do arquivo:",
      "options": [
        {
          "letter": "A",
          "text": "Corrente"
        },
        {
          "letter": "B",
          "text": "Intermediário"
        },
        {
          "letter": "C",
          "text": "Especial"
        },
        {
          "letter": "D",
          "text": "Permanente"
        },
        {
          "letter": "E",
          "text": "Setorial"
        }
      ],
      "correct": "D"
    },
    {
      "id": "arq-21",
      "type": "mc",
      "statement": "A intervenção mínima e direta nos documentos, como retirada de clipes e reparos físicos pontuais, é característica da atividade de:",
      "options": [
        {
          "letter": "A",
          "text": "Preservação"
        },
        {
          "letter": "B",
          "text": "Conservação"
        },
        {
          "letter": "C",
          "text": "Armazenamento"
        },
        {
          "letter": "D",
          "text": "Acondicionamento"
        },
        {
          "letter": "E",
          "text": "Avaliação"
        }
      ],
      "correct": "B"
    },
    {
      "id": "arq-22",
      "type": "mc",
      "statement": "A relação natural estabelecida entre documentos produzidos por uma mesma entidade no exercício de suas atividades decorre do princípio da:",
      "options": [
        {
          "letter": "A",
          "text": "Unicidade"
        },
        {
          "letter": "B",
          "text": "Cumulatividade"
        },
        {
          "letter": "C",
          "text": "Organicidade"
        },
        {
          "letter": "D",
          "text": "Proveniência"
        },
        {
          "letter": "E",
          "text": "Indivisibilidade"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-23",
      "type": "mc",
      "statement": "Um dos objetivos centrais da gestão de documentos é:",
      "options": [
        {
          "letter": "A",
          "text": "Preservar exclusivamente documentos de valor histórico"
        },
        {
          "letter": "B",
          "text": "Eliminar todos os documentos após o encerramento administrativo"
        },
        {
          "letter": "C",
          "text": "Racionalizar a produção e o acúmulo de documentos"
        },
        {
          "letter": "D",
          "text": "Reunir documentos por assunto em acervos temáticos"
        },
        {
          "letter": "E",
          "text": "Converter arquivos físicos para formato digital"
        }
      ],
      "correct": "C"
    },
    {
      "id": "arq-24",
      "type": "mc",
      "statement": "No protocolo, a atividade responsável pela circulação contínua do documento entre setores, ao longo da análise administrativa, denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "Distribuição"
        },
        {
          "letter": "B",
          "text": "Tramitação"
        },
        {
          "letter": "C",
          "text": "Registro"
        },
        {
          "letter": "D",
          "text": "Expedição"
        },
        {
          "letter": "E",
          "text": "Arquivamento"
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-0",
      "type": "mc",
      "statement": "A Constituição Federal protege um conjunto de direitos fundamentais, entre eles a vida, a liberdade, a igualdade, a segurança e a propriedade. Sobre esses direitos, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "O direito à vida tutela apenas a dimensão biológica do ser humano, sem abranger condições dignas de existência."
        },
        {
          "letter": "B",
          "text": "O direito à igualdade proíbe de modo absoluto qualquer distinção normativa entre pessoas."
        },
        {
          "letter": "C",
          "text": "O direito à liberdade admite restrições legais compatíveis com a ordem constitucional."
        },
        {
          "letter": "D",
          "text": "O direito à segurança veda a atuação preventiva do Estado, restringindo-se à repressão de ilícitos."
        },
        {
          "letter": "E",
          "text": "O direito à propriedade é absoluto e não comporta limitações fundadas no interesse coletivo."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-1",
      "type": "mc",
      "statement": "Os direitos sociais previstos na Constituição Federal distinguem-se dos direitos de liberdade porque, em regra:",
      "options": [
        {
          "letter": "A",
          "text": "Possuem eficácia meramente simbólica, sem aplicabilidade direta."
        },
        {
          "letter": "B",
          "text": "Demandam prestações positivas do Estado para sua efetivação."
        },
        {
          "letter": "C",
          "text": "Destinam-se exclusivamente aos trabalhadores com registro formal em carteira."
        },
        {
          "letter": "D",
          "text": "Situam-se fora do catálogo dos direitos fundamentais."
        },
        {
          "letter": "E",
          "text": "Não se submetem a qualquer forma de controle judicial."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-2",
      "type": "mc",
      "statement": "No tocante à nacionalidade, a Constituição Federal estabelece que:",
      "options": [
        {
          "letter": "A",
          "text": "O brasileiro nato pode perder sua nacionalidade em qualquer situação de aquisição de outra."
        },
        {
          "letter": "B",
          "text": "O brasileiro naturalizado detém os mesmos direitos políticos do nato, sem qualquer exceção."
        },
        {
          "letter": "C",
          "text": "A Constituição adota exclusivamente o critério territorial para atribuir a nacionalidade originária."
        },
        {
          "letter": "D",
          "text": "Não é permitido ao legislador infraconstitucional estabelecer distinções entre natos e naturalizados."
        },
        {
          "letter": "E",
          "text": "A perda da nacionalidade exige procedimento administrativo ou judicial, conforme a hipótese."
        }
      ],
      "correct": "E"
    },
    {
      "id": "cons-3",
      "type": "mc",
      "statement": "A cidadania, consagrada como fundamento da República Federativa do Brasil, compreende:",
      "options": [
        {
          "letter": "A",
          "text": "A titularidade e o exercício de direitos civis, políticos e sociais."
        },
        {
          "letter": "B",
          "text": "Apenas a condição de eleitor obrigatório."
        },
        {
          "letter": "C",
          "text": "A nacionalidade originária nata."
        },
        {
          "letter": "D",
          "text": "A capacidade civil plena do indivíduo."
        },
        {
          "letter": "E",
          "text": "O exercício de cargo público de provimento efetivo."
        }
      ],
      "correct": "A"
    },
    {
      "id": "cons-4",
      "type": "mc",
      "statement": "As garantias constitucionais individuais têm como função precípua:",
      "options": [
        {
          "letter": "A",
          "text": "Conceder diretamente benefícios materiais aos cidadãos."
        },
        {
          "letter": "B",
          "text": "Instrumentalizar a proteção e a defesa dos direitos fundamentais."
        },
        {
          "letter": "C",
          "text": "Definir políticas públicas de cunho setorial."
        },
        {
          "letter": "D",
          "text": "Restringir o exercício de direitos em situações ordinárias."
        },
        {
          "letter": "E",
          "text": "Regular exclusivamente a atuação do Poder Judiciário."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-5",
      "type": "mc",
      "statement": "Quanto às garantias dos direitos coletivos, sociais e políticos, é correto afirmar:",
      "options": [
        {
          "letter": "A",
          "text": "Apenas o indivíduo isoladamente possui legitimidade para pleitear sua tutela."
        },
        {
          "letter": "B",
          "text": "Não existem instrumentos processuais próprios para sua proteção."
        },
        {
          "letter": "C",
          "text": "São disciplinados unicamente por normas infraconstitucionais."
        },
        {
          "letter": "D",
          "text": "Entes coletivos podem promover sua defesa, conforme previsão constitucional."
        },
        {
          "letter": "E",
          "text": "Não se submetem ao controle de constitucionalidade."
        }
      ],
      "correct": "D"
    },
    {
      "id": "cons-6",
      "type": "mc",
      "statement": "O princípio da impessoalidade, previsto no art. 37 da Constituição Federal, implica, entre outros aspectos:",
      "options": [
        {
          "letter": "A",
          "text": "Impossibilidade de identificação do agente público nos atos oficiais."
        },
        {
          "letter": "B",
          "text": "Proibição de que autoridades promovam sua imagem pessoal por meio de atos administrativos."
        },
        {
          "letter": "C",
          "text": "Exclusão da responsabilidade individual do agente público."
        },
        {
          "letter": "D",
          "text": "Exigência de concurso público para o provimento de todos os cargos."
        },
        {
          "letter": "E",
          "text": "Publicidade irrestrita de todos os atos da Administração."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-7",
      "type": "mc",
      "statement": "O princípio da eficiência, introduzido expressamente no art. 37 da Constituição, exige da Administração Pública:",
      "options": [
        {
          "letter": "A",
          "text": "Atuação exclusivamente vinculada, sem margem de discricionariedade."
        },
        {
          "letter": "B",
          "text": "Redução de custos como único objetivo a ser perseguido."
        },
        {
          "letter": "C",
          "text": "Prestação de serviços de qualidade com uso racional dos recursos disponíveis."
        },
        {
          "letter": "D",
          "text": "Submissão integral às normas do direito privado."
        },
        {
          "letter": "E",
          "text": "Afastamento de qualquer modalidade de controle externo."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-8",
      "type": "mc",
      "statement": "Segundo a Constituição Federal, o acesso aos cargos, empregos e funções públicas:",
      "options": [
        {
          "letter": "A",
          "text": "É livre a qualquer pessoa, independentemente de requisitos legais."
        },
        {
          "letter": "B",
          "text": "Decorre exclusivamente de indicação política."
        },
        {
          "letter": "C",
          "text": "Exige concurso público somente para os cargos de provimento efetivo."
        },
        {
          "letter": "D",
          "text": "Observa os requisitos legais, garantindo igualdade de condições aos candidatos."
        },
        {
          "letter": "E",
          "text": "É vedado aos estrangeiros em qualquer hipótese."
        }
      ],
      "correct": "D"
    },
    {
      "id": "cons-9",
      "type": "mc",
      "statement": "Sobre o servidor público estável, nos termos dos arts. 37 a 41 da Constituição Federal, é correto afirmar:",
      "options": [
        {
          "letter": "A",
          "text": "Não pode perder o cargo em nenhuma circunstância."
        },
        {
          "letter": "B",
          "text": "Adquire a estabilidade após dois anos de efetivo exercício."
        },
        {
          "letter": "C",
          "text": "Pode perder o cargo mediante processo administrativo, assegurada ampla defesa."
        },
        {
          "letter": "D",
          "text": "Está dispensado de avaliação periódica de desempenho."
        },
        {
          "letter": "E",
          "text": "Possui estabilidade automática desde o ato de nomeação."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-10",
      "type": "mc",
      "statement": "A aplicação imediata dos direitos e garantias fundamentais, prevista na Constituição Federal, significa que:",
      "options": [
        {
          "letter": "A",
          "text": "Dependem sempre de lei complementar para produzir efeitos."
        },
        {
          "letter": "B",
          "text": "Só se aplicam após regulamentação infraconstitucional específica."
        },
        {
          "letter": "C",
          "text": "Vinculam apenas o Poder Judiciário."
        },
        {
          "letter": "D",
          "text": "Produzem efeitos desde a promulgação da Constituição, na medida do possível."
        },
        {
          "letter": "E",
          "text": "Possuem eficácia apenas programática e simbólica."
        }
      ],
      "correct": "D"
    },
    {
      "id": "cons-11",
      "type": "mc",
      "statement": "Sobre o direito à liberdade, a Constituição Federal:",
      "options": [
        {
          "letter": "A",
          "text": "Admite sua suspensão permanente em nome do interesse público."
        },
        {
          "letter": "B",
          "text": "Garante liberdade absoluta de manifestação, sem qualquer restrição."
        },
        {
          "letter": "C",
          "text": "Assegura a liberdade de crença, vedando a supressão de direitos por motivo religioso."
        },
        {
          "letter": "D",
          "text": "Limita a liberdade de locomoção ao território nacional."
        },
        {
          "letter": "E",
          "text": "Condiciona o exercício da liberdade de expressão à prévia autorização estatal."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-12",
      "type": "mc",
      "statement": "O direito de propriedade, segundo a Constituição Federal, deve atender:",
      "options": [
        {
          "letter": "A",
          "text": "Exclusivamente ao interesse pessoal do titular do bem."
        },
        {
          "letter": "B",
          "text": "À função social da propriedade."
        },
        {
          "letter": "C",
          "text": "Somente às normas de direito privado."
        },
        {
          "letter": "D",
          "text": "À livre disposição, sem quaisquer restrições legais."
        },
        {
          "letter": "E",
          "text": "Apenas ao valor econômico do bem."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-13",
      "type": "mc",
      "statement": "Integra expressamente o rol dos direitos sociais previsto na Constituição Federal:",
      "options": [
        {
          "letter": "A",
          "text": "A liberdade de expressão."
        },
        {
          "letter": "B",
          "text": "A inviolabilidade do domicílio."
        },
        {
          "letter": "C",
          "text": "O direito à educação."
        },
        {
          "letter": "D",
          "text": "O direito de petição."
        },
        {
          "letter": "E",
          "text": "O direito de reunião."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-14",
      "type": "mc",
      "statement": "A administração pública indireta, conforme a Constituição Federal, é formada por:",
      "options": [
        {
          "letter": "A",
          "text": "Ministérios e Secretarias de Estado."
        },
        {
          "letter": "B",
          "text": "Tribunais e Casas Legislativas."
        },
        {
          "letter": "C",
          "text": "Autarquias, fundações públicas, empresas públicas e sociedades de economia mista."
        },
        {
          "letter": "D",
          "text": "Apenas autarquias e fundações públicas."
        },
        {
          "letter": "E",
          "text": "Somente empresas públicas."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-15",
      "type": "mc",
      "statement": "A estabilidade do servidor público efetivo visa, primordialmente:",
      "options": [
        {
          "letter": "A",
          "text": "Impedir qualquer controle administrativo sobre o servidor."
        },
        {
          "letter": "B",
          "text": "Assegurar independência funcional e continuidade do serviço público."
        },
        {
          "letter": "C",
          "text": "Garantir remuneração vitalícia ao servidor."
        },
        {
          "letter": "D",
          "text": "Afastar a aplicação de sanções disciplinares."
        },
        {
          "letter": "E",
          "text": "Dispensar o servidor do cumprimento de deveres funcionais."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-16",
      "type": "mc",
      "statement": "Uma característica essencial dos direitos fundamentais consagrados na Constituição Federal é:",
      "options": [
        {
          "letter": "A",
          "text": "A possibilidade de sua supressão por lei ordinária."
        },
        {
          "letter": "B",
          "text": "O caráter absoluto e ilimitado."
        },
        {
          "letter": "C",
          "text": "A historicidade e a possibilidade de evolução ao longo do tempo."
        },
        {
          "letter": "D",
          "text": "A aplicação restrita ao âmbito das relações privadas."
        },
        {
          "letter": "E",
          "text": "A exclusão dos estrangeiros em qualquer situação."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-17",
      "type": "mc",
      "statement": "O habeas corpus, como remédio constitucional individual, destina-se a:",
      "options": [
        {
          "letter": "A",
          "text": "Proteger direito líquido e certo não amparado por habeas data."
        },
        {
          "letter": "B",
          "text": "Garantir acesso a informações pessoais em bancos de dados públicos."
        },
        {
          "letter": "C",
          "text": "Tutelar a liberdade de locomoção contra ilegalidade ou abuso de poder."
        },
        {
          "letter": "D",
          "text": "Anular atos administrativos ilegais em geral."
        },
        {
          "letter": "E",
          "text": "Defender interesses difusos e coletivos."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-18",
      "type": "mc",
      "statement": "Sobre os direitos coletivos, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "Pertencem exclusivamente a pessoas individualmente determinadas."
        },
        {
          "letter": "B",
          "text": "Não admitem tutela jurisdicional."
        },
        {
          "letter": "C",
          "text": "Possuem titularidade indivisível e podem ser defendidos de forma coletiva."
        },
        {
          "letter": "D",
          "text": "Se confundem integralmente com direitos individuais homogêneos."
        },
        {
          "letter": "E",
          "text": "Não possuem previsão expressa na Constituição Federal."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-19",
      "type": "mc",
      "statement": "A publicidade dos atos administrativos, nos termos da Constituição Federal:",
      "options": [
        {
          "letter": "A",
          "text": "É sempre facultativa para a Administração."
        },
        {
          "letter": "B",
          "text": "Pode ser afastada por simples conveniência do gestor."
        },
        {
          "letter": "C",
          "text": "Constitui requisito de validade de todos os atos administrativos sem exceção."
        },
        {
          "letter": "D",
          "text": "É princípio que visa dar transparência à atuação estatal, admitindo exceções legais de sigilo."
        },
        {
          "letter": "E",
          "text": "Restringe-se aos atos praticados pelo Poder Executivo."
        }
      ],
      "correct": "D"
    },
    {
      "id": "cons-20",
      "type": "mc",
      "statement": "O princípio da moralidade administrativa exige que o agente público:",
      "options": [
        {
          "letter": "A",
          "text": "Atue conforme sua consciência pessoal, independentemente de parâmetros jurídicos."
        },
        {
          "letter": "B",
          "text": "Observe padrões éticos e jurídicos na prática dos atos administrativos."
        },
        {
          "letter": "C",
          "text": "Limite-se ao cumprimento formal da lei, sem qualquer análise ética."
        },
        {
          "letter": "D",
          "text": "Esteja imune ao controle judicial."
        },
        {
          "letter": "E",
          "text": "Submeta-se apenas à hierarquia administrativa interna."
        }
      ],
      "correct": "B"
    },
    {
      "id": "cons-21",
      "type": "mc",
      "statement": "A vedação constitucional à acumulação remunerada de cargos públicos comporta exceção quando houver:",
      "options": [
        {
          "letter": "A",
          "text": "Compatibilidade de horários e tratar-se de dois cargos de professor."
        },
        {
          "letter": "B",
          "text": "Interesse exclusivo da Administração Pública."
        },
        {
          "letter": "C",
          "text": "Autorização expressa da chefia imediata."
        },
        {
          "letter": "D",
          "text": "Cargos em comissão de qualquer natureza."
        },
        {
          "letter": "E",
          "text": "Cargos temporários de qualquer espécie."
        }
      ],
      "correct": "A"
    },
    {
      "id": "cons-22",
      "type": "mc",
      "statement": "Nos termos da Constituição Federal, a investidura em cargo público ocorre com:",
      "options": [
        {
          "letter": "A",
          "text": "A aprovação no concurso público."
        },
        {
          "letter": "B",
          "text": "A publicação do edital de abertura do certame."
        },
        {
          "letter": "C",
          "text": "A nomeação pela autoridade competente."
        },
        {
          "letter": "D",
          "text": "A posse no cargo."
        },
        {
          "letter": "E",
          "text": "O efetivo início do exercício das atribuições."
        }
      ],
      "correct": "D"
    },
    {
      "id": "cons-23",
      "type": "mc",
      "statement": "Conforme o art. 41 da Constituição Federal, o servidor público adquire estabilidade após:",
      "options": [
        {
          "letter": "A",
          "text": "Um ano de efetivo exercício."
        },
        {
          "letter": "B",
          "text": "Dois anos de exercício no cargo."
        },
        {
          "letter": "C",
          "text": "Três anos de efetivo exercício, após avaliação especial de desempenho."
        },
        {
          "letter": "D",
          "text": "A homologação do resultado do concurso público."
        },
        {
          "letter": "E",
          "text": "O ato de posse no cargo efetivo."
        }
      ],
      "correct": "C"
    },
    {
      "id": "cons-24",
      "type": "mc",
      "statement": "O direito à inviolabilidade do domicílio, previsto na Constituição, admite exceção:",
      "options": [
        {
          "letter": "A",
          "text": "Somente durante o dia, mediante autorização judicial."
        },
        {
          "letter": "B",
          "text": "Em qualquer horário, por determinação administrativa."
        },
        {
          "letter": "C",
          "text": "Apenas em estado de defesa ou de sítio."
        },
        {
          "letter": "D",
          "text": "Em caso de flagrante delito, desastre ou para prestar socorro, ou durante o dia por ordem judicial."
        },
        {
          "letter": "E",
          "text": "Exclusivamente mediante consentimento expresso e escrito do morador."
        }
      ],
      "correct": "D"
    },
    {
      "id": "etica-0",
      "type": "mc",
      "statement": "Um agente público recebeu determinação de seu superior para atrasar intencionalmente a tramitação de requerimento legítimo de um cidadão, sem qualquer justificativa técnica ou legal, visando beneficiar terceiro. Diante dessa situação, a conduta eticamente correta é:",
      "options": [
        {
          "letter": "A",
          "text": "Acatar a determinação, pois a hierarquia prevalece sobre a finalidade do ato."
        },
        {
          "letter": "B",
          "text": "Cumprir a ordem somente se não houver prejuízo material direto ao cidadão."
        },
        {
          "letter": "C",
          "text": "Executar a ordem, mas registrar o fato por e-mail para resguardo pessoal."
        },
        {
          "letter": "D",
          "text": "Recusar-se a utilizar artifícios para procrastinar o exercício regular de direito, comunicando o fato pelos canais adequados."
        },
        {
          "letter": "E",
          "text": "Postergar o atendimento, desde que o processo seja concluído dentro do prazo interno."
        }
      ],
      "correct": "D"
    },
    {
      "id": "etica-1",
      "type": "mc",
      "statement": "Um servidor, em decorrência do exercício de suas funções, teve acesso a dados estatísticos ainda não divulgados oficialmente e os repassou a um conhecido para que este se antecipasse ao mercado. Essa conduta é:",
      "options": [
        {
          "letter": "A",
          "text": "Permitida, desde que não haja ganho financeiro direto para o servidor."
        },
        {
          "letter": "B",
          "text": "Permitida, se a informação for repassada sem identificação da fonte."
        },
        {
          "letter": "C",
          "text": "Vedada, por envolver a antecipação de resultados e o uso indevido de informação privilegiada."
        },
        {
          "letter": "D",
          "text": "Vedada apenas se houver dano comprovado à Administração."
        },
        {
          "letter": "E",
          "text": "Vedada somente quando houver classificação formal de sigilo no documento."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-2",
      "type": "mc",
      "statement": "De acordo com a Lei nº 8.112/1990, constitui dever do servidor público atender com presteza:",
      "options": [
        {
          "letter": "A",
          "text": "Apenas às requisições do chefe imediato, ainda que desprovidas de fundamentação."
        },
        {
          "letter": "B",
          "text": "Somente ao público em geral, sem qualquer exceção."
        },
        {
          "letter": "C",
          "text": "Ao público em geral, ressalvadas as informações protegidas por sigilo, bem como às requisições para defesa da Fazenda Pública."
        },
        {
          "letter": "D",
          "text": "Exclusivamente às demandas internas do órgão, por razões de segurança institucional."
        },
        {
          "letter": "E",
          "text": "Apenas às solicitações formalizadas por escrito e com firma reconhecida."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-3",
      "type": "mc",
      "statement": "Nos termos da Lei nº 8.112/1990, o servidor público deve cumprir as ordens emanadas de seus superiores hierárquicos:",
      "options": [
        {
          "letter": "A",
          "text": "Sempre, independentemente de sua legalidade."
        },
        {
          "letter": "B",
          "text": "Sempre, salvo quando houver risco de repercussão negativa na imprensa."
        },
        {
          "letter": "C",
          "text": "Exceto quando manifestamente ilegais."
        },
        {
          "letter": "D",
          "text": "Apenas se confirmadas por escrito pela autoridade competente."
        },
        {
          "letter": "E",
          "text": "Apenas quando reiteradas por duas autoridades hierarquicamente superiores."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-4",
      "type": "mc",
      "statement": "Um servidor ausentou-se do local de trabalho durante o horário de expediente para tratar de assunto de natureza pessoal, sem comunicar ou obter autorização prévia do chefe imediato. Nos termos do art. 117 da Lei nº 8.112/1990, essa conduta configura:",
      "options": [
        {
          "letter": "A",
          "text": "Dever funcional, desde que não comprometa a produtividade individual."
        },
        {
          "letter": "B",
          "text": "Conduta permitida, se as horas ausentes forem compensadas posteriormente."
        },
        {
          "letter": "C",
          "text": "Proibição expressamente prevista ao servidor público."
        },
        {
          "letter": "D",
          "text": "Conduta lícita, se não houver atendimento ao público no período da ausência."
        },
        {
          "letter": "E",
          "text": "Conduta lícita, se a ausência for inferior a uma hora."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-5",
      "type": "mc",
      "statement": "Quanto à acumulação remunerada de cargos públicos, conforme a Lei nº 8.112/1990, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "É livremente permitida, desde que exercida em órgãos distintos."
        },
        {
          "letter": "B",
          "text": "É vedada, ressalvadas as hipóteses constitucionais, sendo que mesmo a acumulação lícita exige compatibilidade de horários."
        },
        {
          "letter": "C",
          "text": "É sempre proibida, inclusive nas hipóteses excepcionalmente admitidas pela Constituição."
        },
        {
          "letter": "D",
          "text": "É permitida mediante autorização expressa do chefe imediato do servidor."
        },
        {
          "letter": "E",
          "text": "É permitida desde que não haja conflito de interesses formalmente declarado."
        }
      ],
      "correct": "B"
    },
    {
      "id": "etica-6",
      "type": "mc",
      "statement": "No que se refere às responsabilidades do servidor público, a Lei nº 8.112/1990 estabelece que ele responde:",
      "options": [
        {
          "letter": "A",
          "text": "Apenas administrativamente, pois a esfera penal é exclusiva do Poder Judiciário."
        },
        {
          "letter": "B",
          "text": "Apenas civilmente, quando houver dano material comprovado."
        },
        {
          "letter": "C",
          "text": "Civil, penal e administrativamente pelo exercício irregular de suas atribuições."
        },
        {
          "letter": "D",
          "text": "Apenas penalmente, quando houver dolo na conduta."
        },
        {
          "letter": "E",
          "text": "Civil e administrativamente, sendo a sanção penal substituída pela administrativa."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-7",
      "type": "mc",
      "statement": "Nos termos da Lei nº 8.112/1990, as responsabilidades civil, penal e administrativa:",
      "options": [
        {
          "letter": "A",
          "text": "Não podem ser cumuladas, para evitar a ocorrência de bis in idem."
        },
        {
          "letter": "B",
          "text": "Podem ser cumuladas e são independentes entre si."
        },
        {
          "letter": "C",
          "text": "Dependem sempre de condenação criminal prévia para serem aplicadas."
        },
        {
          "letter": "D",
          "text": "Excluem a responsabilidade administrativa quando houver indenização na esfera civil."
        },
        {
          "letter": "E",
          "text": "Exigem decisão de um único órgão colegiado para todas as esferas simultaneamente."
        }
      ],
      "correct": "B"
    },
    {
      "id": "etica-8",
      "type": "mc",
      "statement": "Conforme o art. 127 da Lei nº 8.112/1990, são penalidades disciplinares aplicáveis ao servidor público:",
      "options": [
        {
          "letter": "A",
          "text": "Advertência, multa e exoneração."
        },
        {
          "letter": "B",
          "text": "Suspensão, exoneração e multa."
        },
        {
          "letter": "C",
          "text": "Advertência, suspensão e demissão."
        },
        {
          "letter": "D",
          "text": "Repreensão, suspensão e demissão."
        },
        {
          "letter": "E",
          "text": "Censura, advertência e demissão."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-9",
      "type": "mc",
      "statement": "A respeito da Comissão de Ética e da sanção por ela aplicável, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "Aplica diretamente penalidades disciplinares previstas na Lei nº 8.112/1990, incluindo a demissão."
        },
        {
          "letter": "B",
          "text": "É órgão de apuração exclusivamente penal, com encaminhamento obrigatório ao Ministério Público."
        },
        {
          "letter": "C",
          "text": "Orienta e aconselha sobre ética profissional, sendo a censura a sanção aplicável pela Comissão."
        },
        {
          "letter": "D",
          "text": "Atua apenas mediante provocação externa, sendo vedada a atuação de ofício."
        },
        {
          "letter": "E",
          "text": "É responsável por autorizar a divulgação antecipada de resultados de pesquisas institucionais."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-10",
      "type": "mc",
      "statement": "De acordo com a Lei nº 8.112/1990, é dever do servidor público:",
      "options": [
        {
          "letter": "A",
          "text": "Resistir a ordens superiores, ainda que de caráter legal."
        },
        {
          "letter": "B",
          "text": "Levar ao conhecimento da autoridade superior irregularidades de que tiver ciência no exercício do cargo."
        },
        {
          "letter": "C",
          "text": "Silenciar diante de irregularidades para preservar a imagem do órgão perante a sociedade."
        },
        {
          "letter": "D",
          "text": "Comunicar irregularidades apenas após a conclusão do processo administrativo competente."
        },
        {
          "letter": "E",
          "text": "Denunciar irregularidades exclusivamente à imprensa, para garantir maior transparência."
        }
      ],
      "correct": "B"
    },
    {
      "id": "etica-11",
      "type": "mc",
      "statement": "Um servidor utilizou materiais e equipamentos pertencentes ao órgão público para finalidades particulares, sem qualquer autorização prévia. Essa conduta é:",
      "options": [
        {
          "letter": "A",
          "text": "Permitida, se não houver dano material comprovado ao patrimônio público."
        },
        {
          "letter": "B",
          "text": "Permitida, se ocorrer exclusivamente fora do horário de expediente."
        },
        {
          "letter": "C",
          "text": "Vedada, por configurar uso indevido de bens públicos."
        },
        {
          "letter": "D",
          "text": "Vedada apenas quando houver prejuízo financeiro devidamente comprovado."
        },
        {
          "letter": "E",
          "text": "Permitida, desde que o uso seja de caráter eventual e esporádico."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-12",
      "type": "mc",
      "statement": "Conforme a Lei nº 8.112/1990, a penalidade de demissão será aplicada, entre outros casos, quando o servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Cometer erro técnico de natureza involuntária e sem dolo."
        },
        {
          "letter": "B",
          "text": "Atrasar-se reiteradamente ao serviço sem justificativa."
        },
        {
          "letter": "C",
          "text": "Praticar ato de improbidade administrativa."
        },
        {
          "letter": "D",
          "text": "Deixar de cumprir meta institucional estabelecida pelo órgão."
        },
        {
          "letter": "E",
          "text": "Recusar-se a participar de curso de capacitação obrigatório."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-13",
      "type": "mc",
      "statement": "No relacionamento entre servidores públicos, o Código de Ética determina que deve prevalecer:",
      "options": [
        {
          "letter": "A",
          "text": "A competição interna voltada à obtenção de melhores resultados individuais."
        },
        {
          "letter": "B",
          "text": "A hierarquia formal, ainda que exercida com tratamento desrespeitoso."
        },
        {
          "letter": "C",
          "text": "O espírito de solidariedade, cooperação e respeito mútuo entre os colegas."
        },
        {
          "letter": "D",
          "text": "A neutralidade absoluta, sem troca de informações ou experiências entre servidores."
        },
        {
          "letter": "E",
          "text": "A subordinação irrestrita à autoridade com maior tempo de serviço no órgão."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-14",
      "type": "mc",
      "statement": "O dever de assiduidade e pontualidade, previsto na Lei nº 8.112/1990, impõe ao servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Cumprir apenas a carga horária mínima mensal estabelecida institucionalmente."
        },
        {
          "letter": "B",
          "text": "Comparecer ao serviço apenas quando houver demanda efetiva de atendimento."
        },
        {
          "letter": "C",
          "text": "Observar rigorosamente os horários e a frequência estabelecidos no órgão."
        },
        {
          "letter": "D",
          "text": "Comparecer ao serviço apenas nos dias úteis com maior fluxo de trabalho."
        },
        {
          "letter": "E",
          "text": "Cumprir os horários apenas quando houver sistema de controle eletrônico de ponto."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-15",
      "type": "mc",
      "statement": "Constitui proibição ao servidor público, nos termos da Lei nº 8.112/1990:",
      "options": [
        {
          "letter": "A",
          "text": "Participar de curso de capacitação ofertado pelo órgão de lotação."
        },
        {
          "letter": "B",
          "text": "Exercer função de chefia quando regularmente designado para tanto."
        },
        {
          "letter": "C",
          "text": "Valer-se do cargo para lograr proveito pessoal ou em favor de outrem."
        },
        {
          "letter": "D",
          "text": "Manifestar opinião técnica fundamentada no exercício regular do cargo."
        },
        {
          "letter": "E",
          "text": "Solicitar esclarecimentos acerca de normas e instruções internas do órgão."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-16",
      "type": "mc",
      "statement": "Um servidor público federal, no exercício do cargo, tratou com negligência atividade de sua responsabilidade direta. Nos termos da Lei nº 8.112/1990, essa conduta pode ensejar:",
      "options": [
        {
          "letter": "A",
          "text": "Apenas responsabilização de natureza moral, sem reflexo jurídico."
        },
        {
          "letter": "B",
          "text": "Responsabilidade administrativa, civil ou penal, conforme o caso concreto."
        },
        {
          "letter": "C",
          "text": "Apenas a aplicação de advertência verbal pela chefia imediata."
        },
        {
          "letter": "D",
          "text": "Exclusivamente responsabilização de ordem civil."
        },
        {
          "letter": "E",
          "text": "Apenas orientação corretiva pela chefia, sem aplicação de sanção."
        }
      ],
      "correct": "B"
    },
    {
      "id": "etica-17",
      "type": "mc",
      "statement": "Conforme a Lei nº 8.112/1990, durante o período em que estiver cumprindo a penalidade de suspensão, o servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Continuará a perceber remuneração integral."
        },
        {
          "letter": "B",
          "text": "Perceberá apenas metade da remuneração habitual."
        },
        {
          "letter": "C",
          "text": "Não perceberá qualquer remuneração."
        },
        {
          "letter": "D",
          "text": "Perceberá apenas as verbas de natureza indenizatória."
        },
        {
          "letter": "E",
          "text": "Terá a penalidade automaticamente convertida em advertência."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-18",
      "type": "mc",
      "statement": "Um servidor, ao participar de reunião técnica interna, omitiu deliberadamente informações relevantes para favorecer seu posicionamento pessoal no debate. Essa conduta é:",
      "options": [
        {
          "letter": "A",
          "text": "Aceitável, por se tratar de discussão de caráter interno ao órgão."
        },
        {
          "letter": "B",
          "text": "Permitida, desde que não haja prejuízo externo imediato para terceiros."
        },
        {
          "letter": "C",
          "text": "Vedada, por afrontar os deveres de lealdade institucional e transparência."
        },
        {
          "letter": "D",
          "text": "Tolerável, se a decisão final couber à autoridade da chefia."
        },
        {
          "letter": "E",
          "text": "Legítima, por envolver opinião pessoal do servidor no debate."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-19",
      "type": "mc",
      "statement": "Nos termos da Lei nº 8.112/1990, é proibido ao servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Exercer cargo em comissão para o qual tenha sido regularmente nomeado."
        },
        {
          "letter": "B",
          "text": "Participar de comissão ou grupo de trabalho instituído pelo órgão."
        },
        {
          "letter": "C",
          "text": "Retirar qualquer documento da repartição sem prévia anuência da autoridade competente."
        },
        {
          "letter": "D",
          "text": "Solicitar material necessário ao desempenho de suas atividades."
        },
        {
          "letter": "E",
          "text": "Cumprir ordens superiores de caráter legal e compatível com suas atribuições."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-20",
      "type": "mc",
      "statement": "Um servidor público retardou deliberadamente a prática de ato de ofício para satisfazer interesse pessoal. Essa conduta caracteriza:",
      "options": [
        {
          "letter": "A",
          "text": "Mera irregularidade administrativa, sem previsão de sanção."
        },
        {
          "letter": "B",
          "text": "Erro técnico de natureza escusável, sem responsabilização."
        },
        {
          "letter": "C",
          "text": "Infração funcional de natureza grave."
        },
        {
          "letter": "D",
          "text": "Ato lícito, desde que não haja prejuízo ao erário público."
        },
        {
          "letter": "E",
          "text": "Exercício regular da discricionariedade administrativa do servidor."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-21",
      "type": "mc",
      "statement": "A penalidade de demissão também será aplicada quando o servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Cometer inassiduidade habitual no serviço."
        },
        {
          "letter": "B",
          "text": "Atrasar-se ocasionalmente ao serviço sem justificativa."
        },
        {
          "letter": "C",
          "text": "Deixar de cumprir ordem superior de caráter legal."
        },
        {
          "letter": "D",
          "text": "Faltar injustificadamente ao serviço por apenas um dia."
        },
        {
          "letter": "E",
          "text": "Cometer erro material sem qualquer elemento de dolo."
        }
      ],
      "correct": "A"
    },
    {
      "id": "etica-22",
      "type": "mc",
      "statement": "Nos termos da Lei nº 8.112/1990, a inassiduidade habitual caracteriza- se pela:",
      "options": [
        {
          "letter": "A",
          "text": "Ausência ao serviço por mais de 15 dias consecutivos sem justificativa."
        },
        {
          "letter": "B",
          "text": "Falta ao serviço, sem causa justificada, por 60 dias interpoladamente no período de 12 meses."
        },
        {
          "letter": "C",
          "text": "Ausência reiterada ao serviço, ainda que devidamente justificada."
        },
        {
          "letter": "D",
          "text": "Falta ao serviço por 30 dias consecutivos sem qualquer justificativa."
        },
        {
          "letter": "E",
          "text": "Redução injustificada da produtividade individual do servidor."
        }
      ],
      "correct": "B"
    },
    {
      "id": "etica-23",
      "type": "mc",
      "statement": "Conforme a Lei nº 8.112/1990, o abandono de cargo ocorre quando o servidor:",
      "options": [
        {
          "letter": "A",
          "text": "Deixa de cumprir as metas institucionais estabelecidas pelo órgão."
        },
        {
          "letter": "B",
          "text": "Ausenta-se do serviço por mais de 15 dias consecutivos sem justificativa."
        },
        {
          "letter": "C",
          "text": "Falta ao serviço, sem causa justificada, por 30 dias consecutivos."
        },
        {
          "letter": "D",
          "text": "Reduz a jornada de trabalho sem autorização da chefia competente."
        },
        {
          "letter": "E",
          "text": "Recusa-se a exercer atribuições inerentes ao seu cargo."
        }
      ],
      "correct": "C"
    },
    {
      "id": "etica-24",
      "type": "mc",
      "statement": "Segundo a Lei nº 8.112/1990, o prazo prescricional da ação disciplinar para aplicação da penalidade de demissão é de:",
      "options": [
        {
          "letter": "A",
          "text": "1 ano."
        },
        {
          "letter": "B",
          "text": "2 anos."
        },
        {
          "letter": "C",
          "text": "3 anos."
        },
        {
          "letter": "D",
          "text": "4 anos."
        },
        {
          "letter": "E",
          "text": "5 anos."
        }
      ],
      "correct": "E"
    },
    {
      "id": "raci-0",
      "type": "mc",
      "statement": "Considere as proposições P: \"O documento foi assinado\" e Q: \"O prazo foi cumprido.\" A negação correta de \"Se o documento foi assinado, então o prazo foi cumprido\" é:",
      "options": [
        {
          "letter": "A",
          "text": "O documento foi assinado e o prazo não foi cumprido"
        },
        {
          "letter": "B",
          "text": "O documento não foi assinado ou o prazo não foi cumprido"
        },
        {
          "letter": "C",
          "text": "O documento não foi assinado e o prazo foi cumprido"
        },
        {
          "letter": "D",
          "text": "O documento foi assinado ou o prazo não foi cumprido"
        },
        {
          "letter": "E",
          "text": "Se o documento não foi assinado, então o prazo não foi cumprido"
        }
      ],
      "correct": "A"
    },
    {
      "id": "raci-1",
      "type": "mc",
      "statement": "Um número real positivo x satisfaz: x + 20% de x = 180. O valor de x é:",
      "options": [
        {
          "letter": "A",
          "text": "120"
        },
        {
          "letter": "B",
          "text": "135"
        },
        {
          "letter": "C",
          "text": "150"
        },
        {
          "letter": "D",
          "text": "160"
        },
        {
          "letter": "E",
          "text": "180"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-2",
      "type": "mc",
      "statement": "Em uma repartição, sabe-se que todo gestor é servidor efetivo e nenhum servidor temporário é gestor. Com base nisso, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "todo servidor efetivo é gestor"
        },
        {
          "letter": "B",
          "text": "nenhum servidor efetivo é gestor"
        },
        {
          "letter": "C",
          "text": "nenhum gestor é servidor temporário"
        },
        {
          "letter": "D",
          "text": "todo servidor temporário é gestor"
        },
        {
          "letter": "E",
          "text": "todo servidor temporário é servidor efetivo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-3",
      "type": "mc",
      "statement": "A tabela abaixo mostra a distribuição percentual do orçamento mensal de uma família com renda de R$ 4.000,00: Categoria Percentual Alimentação 35% Moradia 30% Transporte 15% Outros 20% O valor gasto com transporte é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 450,00"
        },
        {
          "letter": "B",
          "text": "R$ 500,00"
        },
        {
          "letter": "C",
          "text": "R$ 550,00"
        },
        {
          "letter": "D",
          "text": "R$ 600,00"
        },
        {
          "letter": "E",
          "text": "R$ 650,00"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-4",
      "type": "mc",
      "statement": "Uma urna contém 5 bolas azuis e 3 bolas vermelhas. Retira-se uma bola ao acaso. A probabilidade de ser vermelha é:",
      "options": [
        {
          "letter": "A",
          "text": "1/3"
        },
        {
          "letter": "B",
          "text": "3/5"
        },
        {
          "letter": "C",
          "text": "3/8"
        },
        {
          "letter": "D",
          "text": "5/8"
        },
        {
          "letter": "E",
          "text": "1/8"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-5",
      "type": "mc",
      "statement": "A negação logicamente equivalente de \"Todo agente de campo recebeu capacitação\" é:",
      "options": [
        {
          "letter": "A",
          "text": "Existe agente de campo que não recebeu capacitação"
        },
        {
          "letter": "B",
          "text": "Nenhum agente de campo recebeu capacitação"
        },
        {
          "letter": "C",
          "text": "Todo agente recebeu capacitação e atua em campo"
        },
        {
          "letter": "D",
          "text": "Se um agente recebeu capacitação, então atua em campo"
        },
        {
          "letter": "E",
          "text": "Existe agente que recebeu capacitação e não atua em campo"
        }
      ],
      "correct": "A"
    },
    {
      "id": "raci-6",
      "type": "mc",
      "statement": "A expressão \"P somente se Q\" é logicamente equivalente a:",
      "options": [
        {
          "letter": "A",
          "text": "P ∧ Q"
        },
        {
          "letter": "B",
          "text": "P ∨ Q"
        },
        {
          "letter": "C",
          "text": "P → Q"
        },
        {
          "letter": "D",
          "text": "Q → P"
        },
        {
          "letter": "E",
          "text": "¬P → ¬Q"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-7",
      "type": "mc",
      "statement": "Um capital de R$ 1.000,00 é aplicado a juros compostos de 10% ao mês por 2 meses. O montante final é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 1.100,00"
        },
        {
          "letter": "B",
          "text": "R$ 1.120,00"
        },
        {
          "letter": "C",
          "text": "R$ 1.200,00"
        },
        {
          "letter": "D",
          "text": "R$ 1.210,00"
        },
        {
          "letter": "E",
          "text": "R$ 1.220,00"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-8",
      "type": "mc",
      "statement": "Três funcionários (A, B e C) devem sentar em fila. A não pode ficar na ponta e B não pode ficar ao lado de C. A única ordem possível da esquerda para a direita é:",
      "options": [
        {
          "letter": "A",
          "text": "A, B, C"
        },
        {
          "letter": "B",
          "text": "A, C, B"
        },
        {
          "letter": "C",
          "text": "B, A, C"
        },
        {
          "letter": "D",
          "text": "C, A, B"
        },
        {
          "letter": "E",
          "text": "B, C, A"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-9",
      "type": "mc",
      "statement": "Uma caixa contém 6 cartões verdes e 4 amarelos. Retiram-se 2 cartões sem reposição. A probabilidade de ambos serem amarelos é:",
      "options": [
        {
          "letter": "A",
          "text": "1/9"
        },
        {
          "letter": "B",
          "text": "2/15"
        },
        {
          "letter": "C",
          "text": "1/6"
        },
        {
          "letter": "D",
          "text": "3/20"
        },
        {
          "letter": "E",
          "text": "2/9"
        }
      ],
      "correct": "B"
    },
    {
      "id": "raci-10",
      "type": "mc",
      "statement": "A negação logicamente equivalente de \"Todo pesquisador que domina Python domina R\" é:",
      "options": [
        {
          "letter": "A",
          "text": "Todo pesquisador que domina Python também domina R"
        },
        {
          "letter": "B",
          "text": "Nenhum pesquisador domina Python e domina R"
        },
        {
          "letter": "C",
          "text": "Todo pesquisador domina Python e não domina R"
        },
        {
          "letter": "D",
          "text": "Existe pesquisador que domina Python e não domina R"
        },
        {
          "letter": "E",
          "text": "Nenhum pesquisador domina Python"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-11",
      "type": "mc",
      "statement": "A expressão ¬(P ∨ Q) é logicamente equivalente a:",
      "options": [
        {
          "letter": "A",
          "text": "¬P ∨ ¬Q"
        },
        {
          "letter": "B",
          "text": "¬P ∧ ¬Q"
        },
        {
          "letter": "C",
          "text": "P ∧ Q"
        },
        {
          "letter": "D",
          "text": "P ∨ Q"
        },
        {
          "letter": "E",
          "text": "¬P → ¬Q"
        }
      ],
      "correct": "B"
    },
    {
      "id": "raci-12",
      "type": "mc",
      "statement": "Um produto custa R$ 200,00. Aplica-se desconto de 10% e, sobre o valor resultante, novo desconto de 5%. O preço final é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 170,00"
        },
        {
          "letter": "B",
          "text": "R$ 171,00"
        },
        {
          "letter": "C",
          "text": "R$ 175,00"
        },
        {
          "letter": "D",
          "text": "R$ 180,00"
        },
        {
          "letter": "E",
          "text": "R$ 185,00"
        }
      ],
      "correct": "B"
    },
    {
      "id": "raci-13",
      "type": "mc",
      "statement": "O tempo para concluir uma tarefa é inversamente proporcional ao número de máquinas. Se 8 máquinas concluem em 15 dias, 12 máquinas concluirão em:",
      "options": [
        {
          "letter": "A",
          "text": "8 dias"
        },
        {
          "letter": "B",
          "text": "9 dias"
        },
        {
          "letter": "C",
          "text": "10 dias"
        },
        {
          "letter": "D",
          "text": "11 dias"
        },
        {
          "letter": "E",
          "text": "12 dias"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-14",
      "type": "mc",
      "statement": "Três pessoas (Ana, Bruno e Carla) sentam em três cadeiras em linha. Ana não pode ficar na primeira cadeira e Bruno deve ficar imediatamente antes de Carla. A ordem correta é:",
      "options": [
        {
          "letter": "A",
          "text": "Ana, Bruno, Carla"
        },
        {
          "letter": "B",
          "text": "Bruno, Ana, Carla"
        },
        {
          "letter": "C",
          "text": "Bruno, Carla, Ana"
        },
        {
          "letter": "D",
          "text": "Carla, Bruno, Ana"
        },
        {
          "letter": "E",
          "text": "Carla, Ana, Bruno"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-15",
      "type": "mc",
      "statement": "A tabela abaixo mostra a produção trimestral: Trimestre Produção 1º 120 2º 150 3º 130 4º 100 A redução percentual do 2º para o 4º trimestre foi de:",
      "options": [
        {
          "letter": "A",
          "text": "20%"
        },
        {
          "letter": "B",
          "text": "25%"
        },
        {
          "letter": "C",
          "text": "30%"
        },
        {
          "letter": "D",
          "text": "33,3%"
        },
        {
          "letter": "E",
          "text": "50%"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-16",
      "type": "mc",
      "statement": "Dois dados honestos são lançados simultaneamente. A probabilidade de a soma das faces ser 7 é:",
      "options": [
        {
          "letter": "A",
          "text": "1/12"
        },
        {
          "letter": "B",
          "text": "1/9"
        },
        {
          "letter": "C",
          "text": "1/8"
        },
        {
          "letter": "D",
          "text": "1/6"
        },
        {
          "letter": "E",
          "text": "1/5"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-17",
      "type": "mc",
      "statement": "Um servidor recebeu aumento de 25% sobre o salário de R$ 2.400,00. O novo salário é:",
      "options": [
        {
          "letter": "A",
          "text": "R$ 2.700,00"
        },
        {
          "letter": "B",
          "text": "R$ 2.880,00"
        },
        {
          "letter": "C",
          "text": "R$ 3.000,00"
        },
        {
          "letter": "D",
          "text": "R$ 3.200,00"
        },
        {
          "letter": "E",
          "text": "R$ 3.600,00"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-18",
      "type": "mc",
      "statement": "Uma sala tem 9 m de comprimento e 6 m de largura. Para revestir o piso com placas quadradas de 0,30 m de lado, o número mínimo de placas necessárias é:",
      "options": [
        {
          "letter": "A",
          "text": "300"
        },
        {
          "letter": "B",
          "text": "450"
        },
        {
          "letter": "C",
          "text": "540"
        },
        {
          "letter": "D",
          "text": "600"
        },
        {
          "letter": "E",
          "text": "900"
        }
      ],
      "correct": "D"
    },
    {
      "id": "raci-19",
      "type": "mc",
      "statement": "Em um grupo: todo analista é servidor efetivo e nenhum estagiário é servidor efetivo. É correto concluir que:",
      "options": [
        {
          "letter": "A",
          "text": "todo servidor efetivo é analista"
        },
        {
          "letter": "B",
          "text": "nenhum analista é estagiário"
        },
        {
          "letter": "C",
          "text": "todo estagiário é analista"
        },
        {
          "letter": "D",
          "text": "nenhum analista é servidor efetivo"
        },
        {
          "letter": "E",
          "text": "existe estagiário que é analista"
        }
      ],
      "correct": "B"
    },
    {
      "id": "raci-20",
      "type": "mc",
      "statement": "A população de uma cidade passou de 50.000 para 62.500 habitantes. O crescimento percentual foi de:",
      "options": [
        {
          "letter": "A",
          "text": "20%"
        },
        {
          "letter": "B",
          "text": "22,5%"
        },
        {
          "letter": "C",
          "text": "25%"
        },
        {
          "letter": "D",
          "text": "30%"
        },
        {
          "letter": "E",
          "text": "40%"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-21",
      "type": "mc",
      "statement": "Em uma caixa há 4 bolas brancas e 6 bolas pretas. Retira-se uma bola ao acaso. A probabilidade de ser branca é:",
      "options": [
        {
          "letter": "A",
          "text": "1/5"
        },
        {
          "letter": "B",
          "text": "2/5"
        },
        {
          "letter": "C",
          "text": "3/5"
        },
        {
          "letter": "D",
          "text": "4/5"
        },
        {
          "letter": "E",
          "text": "2/3"
        }
      ],
      "correct": "B"
    },
    {
      "id": "raci-22",
      "type": "mc",
      "statement": "A negação logicamente equivalente de \"Todo recenseador concluiu o treinamento e recebeu o material\" é:",
      "options": [
        {
          "letter": "A",
          "text": "Nenhum recenseador concluiu o treinamento e não recebeu o material"
        },
        {
          "letter": "B",
          "text": "Todo recenseador não concluiu o treinamento ou não recebeu o material"
        },
        {
          "letter": "C",
          "text": "Algum recenseador não concluiu o treinamento ou não recebeu o material"
        },
        {
          "letter": "D",
          "text": "Algum recenseador não concluiu o treinamento e não recebeu o material"
        },
        {
          "letter": "E",
          "text": "Se algum recenseador não recebeu o material, então não concluiu o treinamento"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-23",
      "type": "mc",
      "statement": "Um terreno retangular tem área de 240 m² e comprimento de 20 m. A largura é:",
      "options": [
        {
          "letter": "A",
          "text": "8 m"
        },
        {
          "letter": "B",
          "text": "10 m"
        },
        {
          "letter": "C",
          "text": "12 m"
        },
        {
          "letter": "D",
          "text": "15 m"
        },
        {
          "letter": "E",
          "text": "20 m"
        }
      ],
      "correct": "C"
    },
    {
      "id": "raci-24",
      "type": "mc",
      "statement": "Em um órgão: todo técnico é servidor efetivo e nenhum servidor comissionado é servidor efetivo. Conclui-se que:",
      "options": [
        {
          "letter": "A",
          "text": "todo servidor efetivo é técnico"
        },
        {
          "letter": "B",
          "text": "nenhum técnico é servidor comissionado"
        },
        {
          "letter": "C",
          "text": "todo comissionado é técnico"
        },
        {
          "letter": "D",
          "text": "existe técnico que é comissionado"
        },
        {
          "letter": "E",
          "text": "todo servidor efetivo é comissionado"
        }
      ],
      "correct": "B"
    },
    {
      "id": "admin-0",
      "type": "mc",
      "statement": "A transição do paradigma burocrático para o gerencial na gestão pública marcou-se sobretudo pelo deslocamento do foco:",
      "options": [
        {
          "letter": "A",
          "text": "da hierarquia para a informalidade"
        },
        {
          "letter": "B",
          "text": "da legalidade para a eficiência"
        },
        {
          "letter": "C",
          "text": "dos procedimentos para os resultados"
        },
        {
          "letter": "D",
          "text": "do planejamento para a execução"
        },
        {
          "letter": "E",
          "text": "do controle interno para o externo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-1",
      "type": "mc",
      "statement": "Acerca das diferenças entre gestão pública e privada, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "ambas visam à maximização do lucro"
        },
        {
          "letter": "B",
          "text": "a gestão pública tem maior liberdade decisória"
        },
        {
          "letter": "C",
          "text": "a gestão privada está sujeita à legalidade estrita"
        },
        {
          "letter": "D",
          "text": "a gestão pública pode adotar ferramentas gerenciais privadas, respeitado o ordenamento jurídico"
        },
        {
          "letter": "E",
          "text": "não existem diferenças estruturais entre elas"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-2",
      "type": "mc",
      "statement": "A excelência nos serviços públicos vincula-se corretamente a:",
      "options": [
        {
          "letter": "A",
          "text": "redução de custos mesmo com prejuízo à qualidade"
        },
        {
          "letter": "B",
          "text": "foco exclusivo na eficiência econômica"
        },
        {
          "letter": "C",
          "text": "supressão de formalidades para agilizar o atendimento"
        },
        {
          "letter": "D",
          "text": "prestação de serviços de qualidade orientados ao cidadão e ao interesse público"
        },
        {
          "letter": "E",
          "text": "uso do conceito de cliente em substituição ao de cidadão"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-3",
      "type": "mc",
      "statement": "Um programa que atinge suas metas, mas não produz impacto real na sociedade, é considerado:",
      "options": [
        {
          "letter": "A",
          "text": "eficiente e efetivo"
        },
        {
          "letter": "B",
          "text": "eficaz, porém com baixa efetividade"
        },
        {
          "letter": "C",
          "text": "ineficiente, porém eficaz"
        },
        {
          "letter": "D",
          "text": "efetivo, embora ineficaz"
        },
        {
          "letter": "E",
          "text": "ineficiente e ineficaz"
        }
      ],
      "correct": "B"
    },
    {
      "id": "admin-4",
      "type": "mc",
      "statement": "Sobre gestão de pessoas no setor público, é correto afirmar que:",
      "options": [
        {
          "letter": "A",
          "text": "a estabilidade impede a avaliação de desempenho"
        },
        {
          "letter": "B",
          "text": "a gestão de pessoas restringe-se ao controle de frequência"
        },
        {
          "letter": "C",
          "text": "o planejamento estratégico de RH deve alinhar pessoas e objetivos organizacionais"
        },
        {
          "letter": "D",
          "text": "a gestão de pessoas dispensa concursos públicos"
        },
        {
          "letter": "E",
          "text": "práticas de RH são incompatíveis com o regime jurídico público"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-5",
      "type": "mc",
      "statement": "A gestão de desempenho é corretamente compreendida como um processo que:",
      "options": [
        {
          "letter": "A",
          "text": "se limita a punições"
        },
        {
          "letter": "B",
          "text": "ocorre apenas ao final do período funcional"
        },
        {
          "letter": "C",
          "text": "substitui o controle disciplinar"
        },
        {
          "letter": "D",
          "text": "envolve planejamento, acompanhamento, avaliação e desenvolvimento"
        },
        {
          "letter": "E",
          "text": "contraria o princípio da legalidade"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-6",
      "type": "mc",
      "statement": "A estrutura organizacional com dupla subordinação, combinando chefias funcionais e de projeto, denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "linear"
        },
        {
          "letter": "B",
          "text": "funcional"
        },
        {
          "letter": "C",
          "text": "linha-staff"
        },
        {
          "letter": "D",
          "text": "matricial"
        },
        {
          "letter": "E",
          "text": "em rede"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-7",
      "type": "mc",
      "statement": "No setor público, a EaD é utilizada principalmente para:",
      "options": [
        {
          "letter": "A",
          "text": "eliminar o ensino presencial"
        },
        {
          "letter": "B",
          "text": "reduzir custos com pessoal"
        },
        {
          "letter": "C",
          "text": "substituir a educação formal"
        },
        {
          "letter": "D",
          "text": "viabilizar capacitação em larga escala e atualização contínua"
        },
        {
          "letter": "E",
          "text": "descentralizar a autoridade administrativa"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-8",
      "type": "mc",
      "statement": "A excelência na gestão pública pressupõe:",
      "options": [
        {
          "letter": "A",
          "text": "eliminação do planejamento formal"
        },
        {
          "letter": "B",
          "text": "uso de indicadores e avaliação sistemática de resultados"
        },
        {
          "letter": "C",
          "text": "flexibilização irrestrita das normas"
        },
        {
          "letter": "D",
          "text": "centralização absoluta das decisões"
        },
        {
          "letter": "E",
          "text": "substituição do controle legal pelo social"
        }
      ],
      "correct": "B"
    },
    {
      "id": "admin-9",
      "type": "mc",
      "statement": "A prática voltada à identificação de necessidades futuras de pessoal denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "recrutamento interno"
        },
        {
          "letter": "B",
          "text": "avaliação de desempenho"
        },
        {
          "letter": "C",
          "text": "planejamento estratégico de RH"
        },
        {
          "letter": "D",
          "text": "análise de cargos"
        },
        {
          "letter": "E",
          "text": "monitoramento funcional"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-10",
      "type": "mc",
      "statement": "A avaliação de desempenho no setor público tem como uma de suas finalidades legítimas:",
      "options": [
        {
          "letter": "A",
          "text": "eliminar a estabilidade do servidor"
        },
        {
          "letter": "B",
          "text": "substituir o concurso público"
        },
        {
          "letter": "C",
          "text": "subsidiar ações de capacitação e desenvolvimento"
        },
        {
          "letter": "D",
          "text": "dispensar o controle disciplinar"
        },
        {
          "letter": "E",
          "text": "afastar a legalidade administrativa"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-11",
      "type": "mc",
      "statement": "A cultura organizacional diferencia-se do clima porque a cultura:",
      "options": [
        {
          "letter": "A",
          "text": "é formada exclusivamente por normas legais"
        },
        {
          "letter": "B",
          "text": "reflete percepções momentâneas"
        },
        {
          "letter": "C",
          "text": "possui caráter mais profundo e duradouro"
        },
        {
          "letter": "D",
          "text": "não influencia comportamentos"
        },
        {
          "letter": "E",
          "text": "depende apenas da estrutura hierárquica"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-12",
      "type": "mc",
      "statement": "A lacuna de competências corresponde a:",
      "options": [
        {
          "letter": "A",
          "text": "inexistência de cargos formais"
        },
        {
          "letter": "B",
          "text": "diferença entre competências exigidas e as existentes"
        },
        {
          "letter": "C",
          "text": "ausência de treinamento inicial"
        },
        {
          "letter": "D",
          "text": "falta de estabilidade funcional"
        },
        {
          "letter": "E",
          "text": "carência de estrutura organizacional"
        }
      ],
      "correct": "B"
    },
    {
      "id": "admin-13",
      "type": "mc",
      "statement": "A departamentalização que agrupa atividades conforme etapas de um fluxo de trabalho denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "funcional"
        },
        {
          "letter": "B",
          "text": "geográfica"
        },
        {
          "letter": "C",
          "text": "por clientes"
        },
        {
          "letter": "D",
          "text": "por processos"
        },
        {
          "letter": "E",
          "text": "por produtos"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-14",
      "type": "mc",
      "statement": "A liderança democrática caracteriza-se principalmente pela:",
      "options": [
        {
          "letter": "A",
          "text": "centralização das decisões e comunicação unilateral"
        },
        {
          "letter": "B",
          "text": "ausência de hierarquia formal"
        },
        {
          "letter": "C",
          "text": "ampla autonomia sem coordenação"
        },
        {
          "letter": "D",
          "text": "participação da equipe no processo decisório"
        },
        {
          "letter": "E",
          "text": "ênfase exclusiva no cumprimento de normas"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-15",
      "type": "mc",
      "statement": "A diferença essencial entre treinamento e desenvolvimento está no fato de que o desenvolvimento:",
      "options": [
        {
          "letter": "A",
          "text": "tem foco no curto prazo"
        },
        {
          "letter": "B",
          "text": "visa exclusivamente ao cargo atual"
        },
        {
          "letter": "C",
          "text": "prepara o servidor para desafios e funções futuras"
        },
        {
          "letter": "D",
          "text": "é incompatível com o setor público"
        },
        {
          "letter": "E",
          "text": "elimina a necessidade de educação corporativa"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-16",
      "type": "mc",
      "statement": "A Administração Pública gerencial diferencia-se da burocrática porque:",
      "options": [
        {
          "letter": "A",
          "text": "dispensa a observância da legalidade"
        },
        {
          "letter": "B",
          "text": "prioriza o controle por resultados em lugar do controle estrito de procedimentos"
        },
        {
          "letter": "C",
          "text": "elimina a hierarquia administrativa"
        },
        {
          "letter": "D",
          "text": "substitui o interesse público pelo do usuário"
        },
        {
          "letter": "E",
          "text": "adota exclusivamente critérios políticos de gestão"
        }
      ],
      "correct": "B"
    },
    {
      "id": "admin-17",
      "type": "mc",
      "statement": "A excelência nos serviços públicos exige necessariamente:",
      "options": [
        {
          "letter": "A",
          "text": "substituição do conceito de cidadão pelo de cliente"
        },
        {
          "letter": "B",
          "text": "ampla flexibilização das normas"
        },
        {
          "letter": "C",
          "text": "foco no atendimento às necessidades da sociedade"
        },
        {
          "letter": "D",
          "text": "eliminação dos controles internos"
        },
        {
          "letter": "E",
          "text": "total centralização das decisões"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-18",
      "type": "mc",
      "statement": "A atividade de acompanhar sistematicamente o desempenho e a vida funcional do servidor denomina-se:",
      "options": [
        {
          "letter": "A",
          "text": "provisão de pessoas"
        },
        {
          "letter": "B",
          "text": "aplicação de pessoas"
        },
        {
          "letter": "C",
          "text": "desenvolvimento de pessoas"
        },
        {
          "letter": "D",
          "text": "monitoramento de pessoas"
        },
        {
          "letter": "E",
          "text": "recrutamento externo"
        }
      ],
      "correct": "D"
    },
    {
      "id": "admin-19",
      "type": "mc",
      "statement": "O planejamento estratégico de RH contribui para a Administração Pública ao:",
      "options": [
        {
          "letter": "A",
          "text": "eliminar a necessidade de capacitação"
        },
        {
          "letter": "B",
          "text": "definir critérios subjetivos de avaliação"
        },
        {
          "letter": "C",
          "text": "antecipar necessidades de pessoal e competências"
        },
        {
          "letter": "D",
          "text": "restringir a mobilidade funcional"
        },
        {
          "letter": "E",
          "text": "substituir o concurso público"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-20",
      "type": "mc",
      "statement": "A gestão de desempenho diferencia-se da avaliação de desempenho porque a gestão:",
      "options": [
        {
          "letter": "A",
          "text": "limita-se à mensuração de resultados"
        },
        {
          "letter": "B",
          "text": "ocorre apenas ao final do período avaliado"
        },
        {
          "letter": "C",
          "text": "compreende processo contínuo de planejamento e acompanhamento"
        },
        {
          "letter": "D",
          "text": "é incompatível com o setor público"
        },
        {
          "letter": "E",
          "text": "tem caráter exclusivamente punitivo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-21",
      "type": "mc",
      "statement": "O clima organizacional é influenciado principalmente por:",
      "options": [
        {
          "letter": "A",
          "text": "legislação constitucional"
        },
        {
          "letter": "B",
          "text": "estrutura federativa do Estado"
        },
        {
          "letter": "C",
          "text": "estilo de liderança e comunicação interna"
        },
        {
          "letter": "D",
          "text": "natureza jurídica do órgão"
        },
        {
          "letter": "E",
          "text": "regime previdenciário dos servidores"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-22",
      "type": "mc",
      "statement": "A gestão do conhecimento no setor público tem como finalidade central:",
      "options": [
        {
          "letter": "A",
          "text": "substituir normas e regulamentos"
        },
        {
          "letter": "B",
          "text": "valorizar exclusivamente o saber acadêmico"
        },
        {
          "letter": "C",
          "text": "preservar e compartilhar o conhecimento institucional"
        },
        {
          "letter": "D",
          "text": "eliminar a necessidade de treinamento"
        },
        {
          "letter": "E",
          "text": "descentralizar a autoridade hierárquica"
        }
      ],
      "correct": "C"
    },
    {
      "id": "admin-23",
      "type": "mc",
      "statement": "A departamentalização funcional caracteriza-se por agrupar atividades com base:",
      "options": [
        {
          "letter": "A",
          "text": "no território de atuação"
        },
        {
          "letter": "B",
          "text": "no tipo de usuário atendido"
        },
        {
          "letter": "C",
          "text": "nos produtos ou serviços ofertados"
        },
        {
          "letter": "D",
          "text": "nas etapas do processo produtivo"
        },
        {
          "letter": "E",
          "text": "nas funções desempenhadas"
        }
      ],
      "correct": "E"
    },
    {
      "id": "admin-24",
      "type": "mc",
      "statement": "A principal diferença entre autoridade formal e liderança reside no fato de que a liderança:",
      "options": [
        {
          "letter": "A",
          "text": "decorre exclusivamente da posição hierárquica"
        },
        {
          "letter": "B",
          "text": "baseia-se na influência sobre as pessoas"
        },
        {
          "letter": "C",
          "text": "depende apenas de normas legais"
        },
        {
          "letter": "D",
          "text": "elimina a necessidade de comando"
        },
        {
          "letter": "E",
          "text": "restringe-se ao setor privado"
        }
      ],
      "correct": "B"
    },
    {
      "id": "prf-0",
      "type": "mc",
      "statement": "Com base no art. 144 da Constituição Federal, qual é a natureza jurídica e a principal missão institucional da Polícia Rodoviária Federal?",
      "options": [
        {
          "letter": "A",
          "text": "Órgão temporário criado por lei ordinária para atuar em vias estaduais"
        },
        {
          "letter": "B",
          "text": "Entidade autônoma, sem vinculação à administração pública federal"
        },
        {
          "letter": "C",
          "text": "Órgão auxiliar subordinado às polícias militares estaduais"
        },
        {
          "letter": "D",
          "text": "Órgão permanente, organizado e mantido pela União, voltado ao patrulhamento ostensivo das rodovias federais"
        },
        {
          "letter": "E",
          "text": "Órgão de polícia judiciária com atuação em todo o território nacional"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-1",
      "type": "mc",
      "statement": "Conforme o art. 144 da Constituição Federal, a segurança pública é exercida com qual finalidade precípua?",
      "options": [
        {
          "letter": "A",
          "text": "Garantir a justiça social e a igualdade material entre os cidadãos"
        },
        {
          "letter": "B",
          "text": "Assegurar o desenvolvimento econômico nacional"
        },
        {
          "letter": "C",
          "text": "Promover políticas públicas de prevenção social"
        },
        {
          "letter": "D",
          "text": "Assegurar exclusivamente a proteção do patrimônio público"
        },
        {
          "letter": "E",
          "text": "Preservar a ordem pública e a incolumidade das pessoas e do patrimônio"
        }
      ],
      "correct": "E"
    },
    {
      "id": "prf-2",
      "type": "mc",
      "statement": "O art. 20 da Lei nº 9.503/1997 (Código de Trânsito Brasileiro) enquadra a Polícia Rodoviária Federal dentro do Sistema Nacional de Trânsito como:",
      "options": [
        {
          "letter": "A",
          "text": "Órgão normativo do Sistema Nacional de Trânsito"
        },
        {
          "letter": "B",
          "text": "Órgão consultivo do Sistema Nacional de Trânsito"
        },
        {
          "letter": "C",
          "text": "Órgão executivo rodoviário da União"
        },
        {
          "letter": "D",
          "text": "Órgão executivo de trânsito dos Estados"
        },
        {
          "letter": "E",
          "text": "Órgão julgador de infrações de trânsito"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-3",
      "type": "mc",
      "statement": "Dentre as competências atribuídas à PRF pelo art. 20 do Código de Trânsito Brasileiro, está incluída:",
      "options": [
        {
          "letter": "A",
          "text": "A investigação de crimes praticados em rodovias federais"
        },
        {
          "letter": "B",
          "text": "O julgamento de recursos interpostos contra multas aplicadas"
        },
        {
          "letter": "C",
          "text": "A regulamentação do tráfego nas rodovias estaduais"
        },
        {
          "letter": "D",
          "text": "O policiamento ostensivo em vias urbanas"
        },
        {
          "letter": "E",
          "text": "A fiscalização do trânsito e a imposição de penalidades administrativas"
        }
      ],
      "correct": "E"
    },
    {
      "id": "prf-4",
      "type": "mc",
      "statement": "Qual é o propósito central do Decreto nº 1.655/1995 no que diz respeito à Polícia Rodoviária Federal?",
      "options": [
        {
          "letter": "A",
          "text": "Criar novas atribuições de natureza penal para a PRF"
        },
        {
          "letter": "B",
          "text": "Ampliar a atuação territorial da PRF para além das rodovias federais"
        },
        {
          "letter": "C",
          "text": "Transformar a PRF em órgão de polícia judiciária"
        },
        {
          "letter": "D",
          "text": "Regulamentar a organização e as competências operacionais da PRF"
        },
        {
          "letter": "E",
          "text": "Disciplinar exclusivamente a estrutura administrativa da instituição"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-5",
      "type": "mc",
      "statement": "Com fundamento no Decreto nº 1.655/1995, como é tratada a atuação da PRF em operações conjuntas com outros órgãos públicos?",
      "options": [
        {
          "letter": "A",
          "text": "É vedada, pois não há previsão legal para tal"
        },
        {
          "letter": "B",
          "text": "Depende exclusivamente de autorização judicial prévia"
        },
        {
          "letter": "C",
          "text": "Pode ocorrer, desde que respeitados os limites legais e constitucionais"
        },
        {
          "letter": "D",
          "text": "Transfere automaticamente à PRF as competências dos demais órgãos"
        },
        {
          "letter": "E",
          "text": "Restringe-se apenas a ações de caráter educativo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-6",
      "type": "mc",
      "statement": "O exercício do poder de polícia administrativa pela Polícia Rodoviária Federal autoriza a instituição a:",
      "options": [
        {
          "letter": "A",
          "text": "Instaurar inquérito policial"
        },
        {
          "letter": "B",
          "text": "Julgar recursos administrativos de trânsito"
        },
        {
          "letter": "C",
          "text": "Exercer jurisdição penal"
        },
        {
          "letter": "D",
          "text": "Aplicar sanções administrativas e adotar medidas coercitivas"
        },
        {
          "letter": "E",
          "text": "Legislar sobre matéria de trânsito"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-7",
      "type": "mc",
      "statement": "A leitura integrada da Constituição Federal, do CTB e dos decretos que regem a PRF leva à conclusão de que:",
      "options": [
        {
          "letter": "A",
          "text": "A PRF possui competência ampla para atuar em qualquer via pública"
        },
        {
          "letter": "B",
          "text": "Os decretos podem ampliar as competências fixadas na Constituição"
        },
        {
          "letter": "C",
          "text": "O CTB confere à PRF função de polícia judiciária"
        },
        {
          "letter": "D",
          "text": "A organização administrativa da PRF é definida exclusivamente pela Constituição"
        },
        {
          "letter": "E",
          "text": "A atuação da PRF está limitada às rodovias federais e à função ostensiva"
        }
      ],
      "correct": "E"
    },
    {
      "id": "prf-8",
      "type": "mc",
      "statement": "No sistema constitucional de segurança pública, a Polícia Rodoviária Federal é classificada como órgão:",
      "options": [
        {
          "letter": "A",
          "text": "Subordinado às Polícias Militares dos Estados"
        },
        {
          "letter": "B",
          "text": "De polícia judiciária da União"
        },
        {
          "letter": "C",
          "text": "Auxiliar das Polícias Civis"
        },
        {
          "letter": "D",
          "text": "Temporário, criado por decreto presidencial"
        },
        {
          "letter": "E",
          "text": "Permanente, organizado e mantido pela União"
        }
      ],
      "correct": "E"
    },
    {
      "id": "prf-9",
      "type": "mc",
      "statement": "Segundo o art. 144 da Constituição Federal, o campo de atuação da PRF está diretamente vinculado à:",
      "options": [
        {
          "letter": "A",
          "text": "Investigação de crimes de natureza federal"
        },
        {
          "letter": "B",
          "text": "Preservação da ordem pública no meio urbano"
        },
        {
          "letter": "C",
          "text": "Defesa nacional e controle de fronteiras terrestres"
        },
        {
          "letter": "D",
          "text": "Preservação da ordem pública nas rodovias federais"
        },
        {
          "letter": "E",
          "text": "Execução da política penitenciária nacional"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-10",
      "type": "mc",
      "statement": "Como o Código de Trânsito Brasileiro posiciona a Polícia Rodoviária Federal dentro de sua estrutura normativa?",
      "options": [
        {
          "letter": "A",
          "text": "Como integrante exclusiva da administração direta da União, fora do Sistema Nacional de Trânsito"
        },
        {
          "letter": "B",
          "text": "Como órgão executivo rodoviário da União, integrante do Sistema Nacional de Trânsito"
        },
        {
          "letter": "C",
          "text": "Como órgão do Sistema Nacional de Segurança Pública, sem atribuições de trânsito"
        },
        {
          "letter": "D",
          "text": "Como integrante do sistema estadual de trânsito, por delegação"
        },
        {
          "letter": "E",
          "text": "Como órgão do sistema municipal de trânsito, em caráter subsidiário"
        }
      ],
      "correct": "B"
    },
    {
      "id": "prf-11",
      "type": "mc",
      "statement": "Conforme o Decreto nº 1.655/1995, o atendimento pela PRF a acidentes de trânsito em rodovias federais tem como objetivo principal:",
      "options": [
        {
          "letter": "A",
          "text": "Apurar a responsabilidade penal dos envolvidos"
        },
        {
          "letter": "B",
          "text": "Substituir a atuação do Corpo de Bombeiros Militar"
        },
        {
          "letter": "C",
          "text": "Garantir a fluidez e a segurança do tráfego"
        },
        {
          "letter": "D",
          "text": "Exercer atividade de perícia técnica"
        },
        {
          "letter": "E",
          "text": "Instaurar procedimento investigativo formal"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-12",
      "type": "mc",
      "statement": "Conforme o Decreto nº 6.061/2007, como se organiza internamente a Polícia Rodoviária Federal?",
      "options": [
        {
          "letter": "A",
          "text": "Exclusivamente por meio de órgãos centrais"
        },
        {
          "letter": "B",
          "text": "Exclusivamente por meio de órgãos descentralizados"
        },
        {
          "letter": "C",
          "text": "Por meio de órgãos centrais e descentralizados"
        },
        {
          "letter": "D",
          "text": "Por meio de órgãos temporários e permanentes"
        },
        {
          "letter": "E",
          "text": "Por meio de órgãos consultivos e normativos"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-13",
      "type": "mc",
      "statement": "Qual é a principal atribuição das Superintendências Regionais da Polícia Rodoviária Federal?",
      "options": [
        {
          "letter": "A",
          "text": "Exercer a direção superior da instituição em nível nacional"
        },
        {
          "letter": "B",
          "text": "Coordenar a atuação da PRF no âmbito dos Estados"
        },
        {
          "letter": "C",
          "text": "Editar normas gerais de trânsito aplicáveis às rodovias"
        },
        {
          "letter": "D",
          "text": "Julgar infrações administrativas de trânsito"
        },
        {
          "letter": "E",
          "text": "Executar políticas nacionais de segurança pública"
        }
      ],
      "correct": "B"
    },
    {
      "id": "prf-14",
      "type": "mc",
      "statement": "Entre as características que marcam o poder de polícia exercido pela PRF, destaca-se a:",
      "options": [
        {
          "letter": "A",
          "text": "Ausência de coercibilidade"
        },
        {
          "letter": "B",
          "text": "Necessidade de autorização judicial prévia para cada ato"
        },
        {
          "letter": "C",
          "text": "Autoexecutoriedade de suas medidas administrativas"
        },
        {
          "letter": "D",
          "text": "Natureza jurisdicional de suas decisões"
        },
        {
          "letter": "E",
          "text": "Impossibilidade de aplicação de sanções imediatas"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-15",
      "type": "mc",
      "statement": "Diante do conjunto normativo que rege a PRF, qual afirmação está correta?",
      "options": [
        {
          "letter": "A",
          "text": "A lei ordinária pode suprimir atribuições constitucionais da PRF"
        },
        {
          "letter": "B",
          "text": "O decreto pode ampliar a atuação territorial da PRF além das rodovias federais"
        },
        {
          "letter": "C",
          "text": "O CTB cria juridicamente a Polícia Rodoviária Federal"
        },
        {
          "letter": "D",
          "text": "A Constituição estabelece a função essencial da PRF"
        },
        {
          "letter": "E",
          "text": "O Decreto nº 6.061/2007 define as competências de trânsito da PRF"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-16",
      "type": "mc",
      "statement": "Nos termos do art. 144 da Constituição Federal, o traço que diferencia a PRF das polícias civis é o exercício de função:",
      "options": [
        {
          "letter": "A",
          "text": "Judiciária, voltada à apuração de infrações penais"
        },
        {
          "letter": "B",
          "text": "Administrativa, de caráter normativo"
        },
        {
          "letter": "C",
          "text": "Ostensiva, voltada à prevenção"
        },
        {
          "letter": "D",
          "text": "Jurisdicional, no âmbito federal"
        },
        {
          "letter": "E",
          "text": "Consultiva, no sistema de segurança pública"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-17",
      "type": "mc",
      "statement": "A expressão \"patrulhamento ostensivo\" inserida pelo constituinte ao tratar da PRF indica um modelo de atuação:",
      "options": [
        {
          "letter": "A",
          "text": "Sigiloso e investigativo"
        },
        {
          "letter": "B",
          "text": "Preventivo e visível"
        },
        {
          "letter": "C",
          "text": "Eventual e subsidiário"
        },
        {
          "letter": "D",
          "text": "Normativo e regulador"
        },
        {
          "letter": "E",
          "text": "Exclusivamente repressivo"
        }
      ],
      "correct": "B"
    },
    {
      "id": "prf-18",
      "type": "mc",
      "statement": "O art. 20 do Código de Trânsito Brasileiro delimita o exercício da fiscalização de trânsito pela PRF às:",
      "options": [
        {
          "letter": "A",
          "text": "Rodovias estaduais delegadas pela União"
        },
        {
          "letter": "B",
          "text": "Vias urbanas federais e municipais"
        },
        {
          "letter": "C",
          "text": "Rodovias e estradas federais"
        },
        {
          "letter": "D",
          "text": "Rodovias que possuam convênio com os Estados"
        },
        {
          "letter": "E",
          "text": "Vias em que atue apenas em caráter educativo"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-19",
      "type": "mc",
      "statement": "Dentre as atribuições conferidas à PRF pelo Código de Trânsito Brasileiro, encontra-se a competência para:",
      "options": [
        {
          "letter": "A",
          "text": "Julgar recursos de infrações de trânsito"
        },
        {
          "letter": "B",
          "text": "Estabelecer normas gerais de circulação"
        },
        {
          "letter": "C",
          "text": "Fiscalizar o excesso de peso e dimensões dos veículos"
        },
        {
          "letter": "D",
          "text": "Legislar sobre transporte interestadual"
        },
        {
          "letter": "E",
          "text": "Autorizar a realização de obras em rodovias federais"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-20",
      "type": "mc",
      "statement": "A estrutura administrativa da PRF definida pelo Decreto nº 6.061/2007 evidencia a observância do seguinte princípio do direito administrativo:",
      "options": [
        {
          "letter": "A",
          "text": "Autotutela"
        },
        {
          "letter": "B",
          "text": "Supremacia do interesse privado"
        },
        {
          "letter": "C",
          "text": "Descentralização administrativa"
        },
        {
          "letter": "D",
          "text": "Informalidade"
        },
        {
          "letter": "E",
          "text": "Especialização jurisdicional"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-21",
      "type": "mc",
      "statement": "Segundo o Decreto nº 6.061/2007, qual é a principal função das Delegacias e Unidades Operacionais da PRF?",
      "options": [
        {
          "letter": "A",
          "text": "Editar normas internas de funcionamento"
        },
        {
          "letter": "B",
          "text": "Exercer a direção superior da instituição"
        },
        {
          "letter": "C",
          "text": "Executar as atividades operacionais da PRF"
        },
        {
          "letter": "D",
          "text": "Julgar processos administrativos disciplinares"
        },
        {
          "letter": "E",
          "text": "Formular políticas nacionais de segurança pública"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-22",
      "type": "mc",
      "statement": "A atuação da PRF em cooperação com outros órgãos públicos:",
      "options": [
        {
          "letter": "A",
          "text": "É vedada por ausência de previsão legal"
        },
        {
          "letter": "B",
          "text": "Caracteriza delegação permanente de competências"
        },
        {
          "letter": "C",
          "text": "É admitida, sem afastar os limites legais e constitucionais"
        },
        {
          "letter": "D",
          "text": "Transforma a PRF em órgão auxiliar permanente"
        },
        {
          "letter": "E",
          "text": "Depende exclusivamente de autorização judicial prévia"
        }
      ],
      "correct": "C"
    },
    {
      "id": "prf-23",
      "type": "mc",
      "statement": "À luz do conjunto normativo aplicável à PRF, qual assertiva está INCORRETA?",
      "options": [
        {
          "letter": "A",
          "text": "A PRF integra o sistema constitucional de segurança pública"
        },
        {
          "letter": "B",
          "text": "Sua atuação possui limites territoriais expressamente definidos"
        },
        {
          "letter": "C",
          "text": "Exerce poder de polícia administrativa"
        },
        {
          "letter": "D",
          "text": "Desempenha função de polícia judiciária"
        },
        {
          "letter": "E",
          "text": "Possui organização administrativa definida por decreto"
        }
      ],
      "correct": "D"
    },
    {
      "id": "prf-24",
      "type": "mc",
      "statement": "O fato de a Polícia Rodoviária Federal estar inserida no art. 144 da Constituição Federal revela que se trata de órgão:",
      "options": [
        {
          "letter": "A",
          "text": "Criado por legislação infraconstitucional"
        },
        {
          "letter": "B",
          "text": "Integrante do sistema de segurança pública, com previsão constitucional expressa"
        },
        {
          "letter": "C",
          "text": "De atuação supletiva, condicionada à omissão dos Estados"
        },
        {
          "letter": "D",
          "text": "Subordinado hierarquicamente às Polícias Militares"
        },
        {
          "letter": "E",
          "text": "Vinculado exclusivamente ao Sistema Nacional de Trânsito"
        }
      ],
      "correct": "B"
    },
    {
      "id": "adm2-0",
      "type": "cebraspe",
      "statement": "A Administração Pública, em sentido amplo, abrange tanto a função política exercida pelo governo quanto a função administrativa propriamente dita.",
      "correct": "CERTO",
      "explanation": "Em sentido amplo, a Administração Pública engloba a função política (governo) e a função administrativa (execução das políticas públicas). Em sentido restrito, abrange apenas a função administrativa."
    },
    {
      "id": "adm2-1",
      "type": "cebraspe",
      "statement": "O princípio da moralidade administrativa se confunde com a legalidade, bastando a observância da lei para que o ato seja considerado moral.",
      "correct": "ERRADO",
      "explanation": "A moralidade é princípio autônomo em relação à legalidade: um ato pode ser formalmente legal e, ainda assim, violar a moralidade administrativa (ética, lealdade, boa-fé)."
    },
    {
      "id": "adm2-2",
      "type": "cebraspe",
      "statement": "A desconcentração administrativa implica a criação de uma nova pessoa jurídica, distinta do ente que distribui as competências.",
      "correct": "ERRADO",
      "explanation": "A desconcentração ocorre dentro da mesma pessoa jurídica (mera distribuição interna de competências). É a descentralização que transfere competências para uma nova pessoa jurídica."
    },
    {
      "id": "adm2-3",
      "type": "cebraspe",
      "statement": "As autarquias integram a Administração Indireta e possuem personalidade jurídica de direito público.",
      "correct": "CERTO",
      "explanation": "Autarquias são entes da Administração Indireta criados por lei específica, com personalidade jurídica de direito público e capacidade de autoadministração."
    },
    {
      "id": "adm2-4",
      "type": "cebraspe",
      "statement": "Segundo a Lei nº 8.112/1990, o prazo para a posse em cargo público é, em regra, de 30 dias contados da publicação do ato de provimento.",
      "correct": "CERTO",
      "explanation": "O art. 13, §1º, da Lei 8.112/1990 fixa em 30 dias o prazo para a posse, contado da publicação do ato de provimento."
    },
    {
      "id": "adm2-5",
      "type": "cebraspe",
      "statement": "O poder disciplinar permite à Administração aplicar sanções a qualquer cidadão que descumpra normas administrativas, esteja ele vinculado ou não à Administração.",
      "correct": "ERRADO",
      "explanation": "O poder disciplinar alcança apenas quem possui vínculo jurídico específico com a Administração (servidores, contratados). Punir qualquer cidadão, independentemente de vínculo, é manifestação do poder de polícia, não do poder disciplinar."
    },
    {
      "id": "adm2-6",
      "type": "cebraspe",
      "statement": "O poder de polícia caracteriza-se pela possibilidade de a Administração restringir e condicionar o exercício de direitos individuais em prol do interesse público.",
      "correct": "CERTO",
      "explanation": "O poder de polícia é a prerrogativa de a Administração limitar o exercício de direitos e liberdades individuais em favor do interesse coletivo, respeitados os limites legais."
    },
    {
      "id": "adm2-7",
      "type": "cebraspe",
      "statement": "Os atos administrativos vinculados admitem juízo de conveniência e oportunidade por parte do agente público.",
      "correct": "ERRADO",
      "explanation": "Nos atos vinculados, a lei não deixa margem de escolha: o agente apenas executa o que está predeterminado. O juízo de conveniência e oportunidade é característico dos atos discricionários."
    },
    {
      "id": "adm2-8",
      "type": "cebraspe",
      "statement": "A anulação do ato administrativo decorre de vício de legalidade e produz efeitos retroativos (ex tunc).",
      "correct": "CERTO",
      "explanation": "A anulação (por ilegalidade) retroage à origem do ato, desfazendo seus efeitos desde o início (ex tunc), diferentemente da revogação, que opera para frente (ex nunc)."
    },
    {
      "id": "adm2-9",
      "type": "cebraspe",
      "statement": "A revogação do ato administrativo pode atingir atos vinculados, desde que fundamentada em razões de conveniência e oportunidade.",
      "correct": "ERRADO",
      "explanation": "A revogação só pode atingir atos discricionários válidos. Atos vinculados não comportam juízo de conveniência e oportunidade, logo não podem ser revogados."
    },
    {
      "id": "adm2-10",
      "type": "cebraspe",
      "statement": "A Lei nº 8.429/1992 (Lei de Improbidade Administrativa) prevê que os atos de improbidade podem causar prejuízo ao erário, importar enriquecimento ilícito ou violar princípios da Administração Pública.",
      "correct": "CERTO",
      "explanation": "A Lei 8.429/1992 tipifica três categorias de atos de improbidade: os que causam prejuízo ao erário, os que geram enriquecimento ilícito e os que atentam contra os princípios da Administração Pública."
    },
    {
      "id": "adm2-11",
      "type": "cebraspe",
      "statement": "O processo administrativo regido pela Lei nº 9.784/1999 aplica-se exclusivamente à Administração Pública Federal direta, excluindo-se autarquias e fundações públicas.",
      "correct": "ERRADO",
      "explanation": "A Lei 9.784/1999 aplica-se à Administração Federal direta e também à indireta, incluindo autarquias e fundações públicas federais."
    }
  ]
};
