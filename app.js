// Database de 24 Mascotas Rescatadas de la Calle con Historias de Superación
const PETS_DATA = [
  {
    id: 1,
    name: "Max",
    type: "perro",
    age: "joven",
    ageText: "2 años",
    size: "mediano",
    gender: "Macho",
    energy: "Alta",
    housing: "casa_pequena",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600",
    description:
      "Encontrado en un eriazo urbano con serios signos de desnutrición. Tras meses de tratamiento veterinario y cuidados intensivos, recuperó su peso óptimo y demostró un temperamento noble y sumamente leal.",
    health: "Esterilizado, vacunas al día, microchip registrado.",
    personality: ["Resiliente", "Sociable", "Leal"],
    monthlyCost: 38000,
    vetInitialCost: 15000,
  },
  {
    id: 2,
    name: "Luna",
    type: "gato",
    age: "joven",
    ageText: "1.5 años",
    size: "pequeño",
    gender: "Hembra",
    energy: "Baja",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600",
    description:
      "Rescatada durante una tormenta de un tejado abandonado junto a sus crías. Cumplió su rol de madre y hoy busca la tranquilidad de un espacio sereno donde dormir al sol.",
    health: "Esterilizada, desparasitada, test FeLV/FIV negativo.",
    personality: ["Tranquila", "Protectora", "Dócil"],
    monthlyCost: 25000,
    vetInitialCost: 12000,
  },
  {
    id: 3,
    name: "Rocky",
    type: "perro",
    age: "adulto",
    ageText: "4 años",
    size: "grande",
    gender: "Macho",
    energy: "Media",
    housing: "parcela",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600",
    description:
      "Vivió más de dos años vagando en carreteras periurbanas evitando peligros vehiculares. Al ingresar al refugio mostró un carácter sereno y una profunda devoción por el contacto humano.",
    health: "Esterilizado, esquema sanitario al día.",
    personality: ["Sereno", "Guardián", "Equilibrado"],
    monthlyCost: 52000,
    vetInitialCost: 18000,
  },
  {
    id: 4,
    name: "Mimi",
    type: "gato",
    age: "cachorro",
    ageText: "5 meses",
    size: "pequeño",
    gender: "Hembra",
    energy: "Alta",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=600",
    description:
      "Rescatada con apenas unas semanas de vida en una caja abandonada. Fue criada con biberón por el equipo de acogida, desarrollándose con excelente salud y vitalidad.",
    health: "Primeras vacunas administradas, desparasitación completa.",
    personality: ["Curiosa", "Juguetona", "Atenta"],
    monthlyCost: 22000,
    vetInitialCost: 10000,
  },
  {
    id: 5,
    name: "Toby",
    type: "perro",
    age: "cachorro",
    ageText: "8 meses",
    size: "mediano",
    gender: "Macho",
    energy: "Alta",
    housing: "casa_pequena",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600",
    description:
      "Hallado desorientado en la vía pública con lesiones leves de las que se recuperó totalmente. Muestra alta capacidad de aprendizaje y entusiasmo en dinámicas de juego.",
    health: "Vacunado, desparasitado y con chip.",
    personality: ["Inteligente", "Activo", "Afectuoso"],
    monthlyCost: 35000,
    vetInitialCost: 14000,
  },
  {
    id: 6,
    name: "Simba",
    type: "gato",
    age: "adulto",
    ageText: "3 años",
    size: "pequeño",
    gender: "Macho",
    energy: "Baja",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&q=80&w=600",
    description:
      "Sufrió el abandono por parte de sus antiguos dueños tras una mudanza. A pesar del impacto inicial, ha recuperado la confianza y responde muy bien al cariño constante.",
    health: "Esterilizado, vacuna triple felina al día.",
    personality: ["Tranquilo", "Confianza recuperada", "Calmo"],
    monthlyCost: 26000,
    vetInitialCost: 12000,
  },
  {
    id: 7,
    name: "Bella",
    type: "perro",
    age: "joven",
    ageText: "2 años",
    size: "grande",
    gender: "Hembra",
    energy: "Alta",
    housing: "parcela",
    image:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=600",
    description:
      "Rescatada de una quebrada con una fractura en su pata posterior. Mediante cirugía y fisioterapia veterinaria recuperó la movilidad sin secuelas para correr con libertad.",
    health: "Esterilizada, de alta médica definitiva.",
    personality: ["Ágil", "Perseverante", "Noble"],
    monthlyCost: 48000,
    vetInitialCost: 16000,
  },
  {
    id: 8,
    name: "Chloe",
    type: "gato",
    age: "joven",
    ageText: "1 año",
    size: "pequeño",
    gender: "Hembra",
    energy: "Media",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=600",
    description:
      "Encontrada en un sector industrial donde dependía del alimento esporádico de transeúntes. En su hogar temporal ha demostrado ser metódica, limpia y de costumbres tranquilas.",
    health: "Esterilizada y vacunada.",
    personality: ["Observadora", "Pacífica", "Educada"],
    monthlyCost: 24000,
    vetInitialCost: 11000,
  },
  {
    id: 9,
    name: "Bruno",
    type: "perro",
    age: "adulto",
    ageText: "5 años",
    size: "grande",
    gender: "Macho",
    energy: "Media",
    housing: "casa_pequena",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=600",
    description:
      "Pasó años cuidando un terreno deshabitado bajo desamparo. Tras ser rescatado demostró un carácter extremadamente manso, ideal para entornos familiares pacientes.",
    health: "Esterilizado, perfil sanguíneo perfecto.",
    personality: ["Manso", "Paciente", "Equilibrado"],
    monthlyCost: 45000,
    vetInitialCost: 15000,
  },
  {
    id: 10,
    name: "Pelusa",
    type: "gato",
    age: "adulto",
    ageText: "4 años",
    size: "pequeño",
    gender: "Hembra",
    energy: "Baja",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&q=80&w=600",
    description:
      "Rescatada con severos nudos en su pelaje y deshidratación. Luego de un proceso completo de cuidado estético y nutricional, luce un pelaje impecable y saludable.",
    health: "Esterilizada y desparasitada.",
    personality: ["Serena", "Afectuosa", "Silenciosa"],
    monthlyCost: 27000,
    vetInitialCost: 12000,
  },
  {
    id: 11,
    name: "Jack",
    type: "perro",
    age: "joven",
    ageText: "1 año",
    size: "pequeño",
    gender: "Macho",
    energy: "Alta",
    housing: "casa_pequena",
    image:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&q=80&w=600",
    description:
      "Hallado amarrado en las afueras de un taller. Su rescate permitió descubrir a un animal lleno de vitalidad, sin resentimientos y deseoso de actividad física diaria.",
    health: "Esterilizado, vacunas vigentes.",
    personality: ["Energetico", "Vivaz", "Sociable"],
    monthlyCost: 28000,
    vetInitialCost: 13000,
  },
  {
    id: 12,
    name: "Nala",
    type: "gato",
    age: "cachorro",
    ageText: "4 meses",
    size: "pequeño",
    gender: "Hembra",
    energy: "Alta",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80&w=600",
    description:
      "Nacida en la calle bajo una estructura abandonada. Rescatada a tiempo junto con su camada, ha crecido sin miedos y muy habituada a la compañía de personas.",
    health: "Vacunas al día segun edad.",
    personality: ["Social", "Juguetona", "Confiada"],
    monthlyCost: 23000,
    vetInitialCost: 10000,
  },
  {
    id: 13,
    name: "Cuchito",
    type: "gato",
    age: "adulto",
    ageText: "6 años",
    size: "pequeño",
    gender: "Macho",
    energy: "Baja",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=600",
    description:
      "Sobreviviente a un atropello menor en una avenida concurrida. Recibió atención veterinaria inmediata y descansó en un hogar temporal donde demostró su gran nobleza.",
    health: "Esterilizado, recuperado 100%.",
    personality: ["Calmo", "Cariñoso", "Agradecido"],
    monthlyCost: 25000,
    vetInitialCost: 12000,
  },
  {
    id: 14,
    name: "Kira",
    type: "perro",
    age: "joven",
    ageText: "2.5 años",
    size: "grande",
    gender: "Hembra",
    energy: "Media",
    housing: "parcela",
    image:
      "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=600",
    description:
      "Rescatada tras haber sido dejada a su suerte en la periferia rural. Responde excelente al entrenamiento básico de obediencia y demuestra moderación.",
    health: "Esterilizada y microchip insertado.",
    personality: ["Atenta", "Disciplinada", "Leal"],
    monthlyCost: 46000,
    vetInitialCost: 15000,
  },
  {
    id: 15,
    name: "Pepe",
    type: "perro",
    age: "adulto",
    ageText: "3 años",
    size: "pequeño",
    gender: "Macho",
    energy: "Baja",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=600",
    description:
      "Encontrado deambulando en ferias libres buscando cobijo. Posee una conducta ejemplar en espacios interiores y es muy paciente con su entorno.",
    health: "Esterilizado, control dental recién realizado.",
    personality: ["Tranquilo", "Adaptable", "Tranquilo"],
    monthlyCost: 26000,
    vetInitialCost: 12000,
  },
  {
    id: 16,
    name: "Maya",
    type: "perro",
    age: "joven",
    ageText: "1.5 años",
    size: "mediano",
    gender: "Hembra",
    energy: "Alta",
    housing: "parcela",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=600",
    description:
      "Rescatada de un canal de regadío en una situación crítica. Su rápida recuperación evidenció su gran fuerza física e inteligencia sobresaliente.",
    health: "Esterilizada, vacunación completa.",
    personality: ["Inteligente", "Ágil", "Receptiva"],
    monthlyCost: 36000,
    vetInitialCost: 14000,
  },
  {
    id: 17,
    name: "Felix",
    type: "gato",
    age: "joven",
    ageText: "2 años",
    size: "pequeño",
    gender: "Macho",
    energy: "Media",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=600",
    description:
      "Rescatado en un callejón con infección ocular aguda que se trató satisfactoriamente sin perder la visión. Es extremadamente afectuoso y limpio.",
    health: "Esterilizado, sanado completamente.",
    personality: ["Afectuoso", "Limpio", "Sociable"],
    monthlyCost: 25000,
    vetInitialCost: 11000,
  },
  {
    id: 18,
    name: "Chocolatina",
    type: "perro",
    age: "cachorro",
    ageText: "6 meses",
    size: "mediano",
    gender: "Hembra",
    energy: "Alta",
    housing: "casa_pequena",
    image:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=600",
    description:
      "Encontrada junto a una acequia cuando era solo una lactante. Fue criada en hogar temporal socializando exitosamente con personas y otros animales.",
    health: "Plan de vacunación al día.",
    personality: ["Sociable", "Alegre", "Dócil"],
    monthlyCost: 32000,
    vetInitialCost: 13000,
  },
  {
    id: 19,
    name: "Garfield",
    type: "gato",
    age: "adulto",
    ageText: "5 años",
    size: "pequeño",
    gender: "Macho",
    energy: "Baja",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=600",
    description:
      "Abandonado por edad avanzada pero con excelente estado organico general. Le agrada la rutina calmada y pasar largos periodos descansando.",
    health: "Esterilizado, perfil renal sano.",
    personality: ["Sereno", "Calmo", "Casero"],
    monthlyCost: 26000,
    vetInitialCost: 12000,
  },
  {
    id: 20,
    name: "Kaiser",
    type: "perro",
    age: "adulto",
    ageText: "4 años",
    size: "grande",
    gender: "Macho",
    energy: "Media",
    housing: "parcela",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&q=80&w=600",
    description:
      "Superó condiciones desfavorables de desamparo en obras en construcción. Demuestra ser muy agradecido, firme y respetuoso con sus tutores.",
    health: "Esterilizado y desparasitado.",
    personality: ["Firme", "Respetuoso", "Agradecido"],
    monthlyCost: 50000,
    vetInitialCost: 16000,
  },
  {
    id: 21,
    name: "Molly",
    type: "gato",
    age: "joven",
    ageText: "1 año",
    size: "pequeño",
    gender: "Hembra",
    energy: "Media",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?auto=format&fit=crop&q=80&w=600",
    description:
      "Rescatada de un patio baldío. Es juguetona pero también independiente, sabiendo autoregular sus descansos en espacios de interior.",
    health: "Esterilizada y desparasitada.",
    personality: ["Independiente", "Curiosa", "Tranquila"],
    monthlyCost: 24000,
    vetInitialCost: 11000,
  },
  {
    id: 22,
    name: "Tomy",
    type: "perro",
    age: "joven",
    ageText: "2 años",
    size: "pequeño",
    gender: "Macho",
    energy: "Media",
    housing: "casa_pequena",
    image:
      "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&q=80&w=600",
    description:
      "Encontrado amarrado en un sitio deshabitado. Mostró ser extremadamente cariñoso desde el primer instante en que fue desatado.",
    health: "Esterilizado, microchip al día.",
    personality: ["Cariñoso", "Juguetón", "Sociable"],
    monthlyCost: 29000,
    vetInitialCost: 12000,
  },
  {
    id: 23,
    name: "Sasha",
    type: "gato",
    age: "cachorro",
    ageText: "6 meses",
    size: "pequeño",
    gender: "Hembra",
    energy: "Alta",
    housing: "departamento",
    image:
      "https://images.unsplash.com/photo-1577023311546-acd0767731ff?auto=format&fit=crop&q=80&w=600",
    description:
      "Rescatada junto a un grupo de gatitos. Es alegre, le encanta perseguir juguetes pluma y roncronear cuando la toman en brazos.",
    health: "Vacunada y desparasitada.",
    personality: ["Vivaz", "Dulce", "Afectuosa"],
    monthlyCost: 23000,
    vetInitialCost: 10000,
  },
  {
    id: 24,
    name: "Rocco",
    type: "perro",
    age: "adulto",
    ageText: "3.5 años",
    size: "mediano",
    gender: "Macho",
    energy: "Media",
    housing: "casa_pequena",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&q=80&w=600",
    description:
      "Vagó varios meses en zonas de mercado municipal. Es un excelente compañero, camina sin tirar de la correa y responde a mandos básicos.",
    health: "Esterilizado, sanitizado completamente.",
    personality: ["Educado", "Equilibrado", "Manso"],
    monthlyCost: 37000,
    vetInitialCost: 14000,
  },
];

// DATABASE DE EXPEDIENTES VETERINARIOS DINÁMICOS
const VET_RECORDS = {};

function initVetRecords() {
  PETS_DATA.forEach((pet) => {
    const isDog = pet.type === "perro";
    const baseChip = 941000000000000 + pet.id * 12345;

    VET_RECORDS[pet.id] = {
      chip: baseChip.toString(),
      overallBadge: "Al Día",
      overallBadgeColor: "emerald",
      vacunaStatus: "100% Vigente",
      esterilizadoStatus: pet.health.includes("Esterilizad")
        ? "Realizada"
        : "Programada",
      reminders: [
        {
          id: 1,
          title: isDog
            ? "Refuerzo Vacuna Óctuple Canina"
            : "Refuerzo Vacuna Triple Felina",
          sub: "Programado para Noviembre 2026",
          color: "teal",
          icon: "fa-syringe",
          completed: false,
        },
        {
          id: 2,
          title: "Desparasitación Interna y Externa",
          sub: "Aplicación de Pipeta / Comprimido",
          color: "amber",
          icon: "fa-bug",
          completed: false,
        },
        {
          id: 3,
          title: "Chequeo Preventivo y Peso",
          sub: "Control Anual de RUTina",
          color: "blue",
          icon: "fa-clipboard-check",
          completed: false,
        },
      ],
      history: [
        {
          date: "12 Oct 2026",
          type: "Control",
          title: "Evaluación clínica general de ingreso",
          vet: "Dr. Roberto Fuentes",
          status: "Completado",
        },
        {
          date: "05 Sep 2026",
          type: "Vacunación",
          title: isDog
            ? "Vacuna Antirrábica Obligatoria"
            : "Triple Felina Dosis 2",
          vet: "Dra. Carolina Silva",
          status: "Completado",
        },
        {
          date: "15 Jun 2026",
          type: "Cirugía",
          title: "Procedimiento de Esterilización Quirúrgica",
          vet: "Clínica Municipal",
          status: "Completado",
        },
      ],
    };
  });
}

// DATABASE DE ARTÍCULOS EDUCATIVOS
const ARTICLES_DATA = [
  {
    id: 1,
    title: "Guía Definitiva de la Ley 21.020 (Ley Cholito) en Chile",
    category: "legal",
    categoryText: "Legal",
    author: "Dra. Carolina Silva",
    date: "15 Feb 2026",
    readTime: "5 min lectura",
    summary:
      "Conoce las obligaciones legales, sanciones por maltrato, obligatoriedad del microchip e inscripción en el Registro Nacional de Mascotas.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
    content: `
                    <p>La <strong>Ley 21.020 de Tenencia Responsable de Mascotas y Animales de Compañía</strong> establece una serie de obligaciones que todo tutor debe cumplir para garantizar el bienestar animal y la seguridad pública.</p>
                    <h4 class="font-bold text-slate-900 text-base mt-4">1. Identificación e Inscripción Obligatoria</h4>
                    <p>Todas las mascotas (perros y gatos) deben contar con un microchip subcutáneo de 15 dígitos bajo la norma ISO 11784/11785. Posterior a la implantación, es obligatorio registrarlos en la plataforma del Registro Nacional de Mascotas de la Subdere.</p>
                    <h4 class="font-bold text-slate-900 text-base mt-4">2. Deberes Principales del Tutor</h4>
                    <ul class="list-disc ml-5 space-y-1">
                        <li>Proporcionar alimento, agua y albergue adecuado a las condiciones climáticas.</li>
                        <li>Brindarle atención veterinaria regular y mantener su vacunación al día.</li>
                        <li>No abandonarlos ni mantenerlos atados en condiciones inhumanas.</li>
                        <li>Pasear a perros siempre con correa (y bozal en razas potencialmente peligrosas).</li>
                    </ul>
                    <h4 class="font-bold text-slate-900 text-base mt-4">3. Sanciones por Incumplimiento</h4>
                    <p>Las multas por infracción a la tenencia responsable van desde 1 a 30 UTM, mientras que los actos de crueldad o maltrato animal con resultado de muerte pueden implicar presidio y la inhabilitación perpetua para la tenencia de animales.</p>
                `,
  },
  {
    id: 2,
    title: "Esquema Sanitario Esencial: Vacunas para Perros y Gatos",
    category: "salud",
    categoryText: "Salud",
    author: "Dr. Roberto Fuentes",
    date: "02 Ene 2026",
    readTime: "4 min lectura",
    summary:
      "Explicación detallada de la vacuna Óctuple Canina, Triple Felina y Antirrábica obligatoria para prevenir enfermedades mortales.",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=600",
    content: `
                    <p>Mantener al día el calendario de vacunación es el pilar preventivo para proteger a tus animales de virus mortales e invisibles.</p>
                    <h4 class="font-bold text-slate-900 text-base mt-4">En Perros: Vacuna Óctuple y Antirrábica</h4>
                    <p>Protege contra el Distemper (Moquillo), Parvovirus, Hepatitis Infecciosa, Leptospirosis y Parainfluenza. El esquema inicia a las 2 meses con 3 dosis consecutivas y luego se renueva de forma anual.</p>
                    <h4 class="font-bold text-slate-900 text-base mt-4">En Gatos: Vacuna Triple Felina y FeLV</h4>
                    <p>Previene la Panleucopenia felina, el Calicivirus y la Rhinotraqueitis viral. En gatos de exterior es crucial adicionar la vacuna contra la Leucemia Felina previa prueba negativa.</p>
                `,
  },
  {
    id: 3,
    title: "Período de Adaptación: Las Primeras 72 Horas Post-Adopción",
    category: "conducta",
    categoryText: "Conducta",
    author: "Dra. Patricia Morales (Etóloga)",
    date: "20 Ene 2026",
    readTime: "6 min lectura",
    summary:
      "Estrategias prácticas para disminuir la ansiedad de un animal rescatado al ingresar a un nuevo hogar y crear apego positivo.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
    content: `
                    <p>La regla de los 3 días, 3 semanas y 3 meses explica la descompresión psicológica de una mascota adoptada.</p>
                    <h4 class="font-bold text-slate-900 text-base mt-4">Los primeros 3 días</h4>
                    <p>El animal se siente abrumado y puede no querer comer o esconderse. Proporciónale una zona segura y tranquila, sin forzar la interacción ni invitar visitas excesivas.</p>
                    <h4 class="font-bold text-slate-900 text-base mt-4">Las primeras 3 semanas</h4>
                    <p>Comienza a acostumbrarse a la rutina del hogar y demuestra su verdadera personalidad. Establece horarios fijos de alimentación y paseos.</p>
                `,
  },
  {
    id: 4,
    title: "Nutrición Felina y Canina: ¿Cómo Elegir el Alimento Adecuado?",
    category: "nutricion",
    categoryText: "Nutrición",
    author: "Dr. Manuel Rojas",
    date: "10 Feb 2026",
    readTime: "4 min lectura",
    summary:
      "Aprende a leer la etiqueta de los sacos de alimento y distinguir fuentes de proteína de calidad frente a subproductos.",
    image:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=600",
    content: `
                    <p>El primer ingrediente en la lista del alimento debe ser proteína de origen animal (carne de pollo, salmón o vacuno), no cereales ni maíz en abundancia.</p>
                    <p>Los gatos son carnívoros strictly que requieren taurina en su dieta, mientras que los perros son carnívoros facultativos adaptados a cierto nivel de carbohidratos complejos.</p>
                `,
  },
];

// QUIZ MITOS VS REALIDAD DATA
const MYTHS_DATA = [
  {
    question:
      "1. ¿Los gatos hembra deben tener al menos una camada antes de ser esterilizadas?",
    isTrue: false,
    title: "¡FALSO!",
    desc: "No existe beneficio biológico en hacerlas parir. De hecho, la esterilización antes del primer celo reduce casi al 100% el riesgo de tumores mamarios e infecciones uterinas.",
  },
  {
    question:
      "2. ¿Es obligatorio por ley colocar microchip a los perros y gatos en Chile?",
    isTrue: true,
    title: "¡VERDADERO!",
    desc: "La Ley 21.020 exige la implantación de un microchip subcutáneo de 15 dígitos y su posterior registro en la plataforma oficial del Estado.",
  },
  {
    question:
      "3. ¿Un perro de raza mestiza o criollo es físicamente más resistente a enfermedades?",
    isTrue: true,
    title: "¡VERDADERO!",
    desc: "Debido a la diversidad genética (vigor híbrido), sufren menos de patologías hereditarias consanguíneas comunes en razas puras.",
  },
];

let currentMythIndex = 0;

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initVetRecords();
  populateVetPetSelect();
  populateSponsorPetSelect();
  renderPets();
  updateVetCard();
  renderArticles();
  loadMythQuestion();
});

// CALCULATOR LOGIC
function calculateFoodPortion(e) {
  e.preventDefault();
  const species = document.getElementById("calc-species").value;
  const stage = document.getElementById("calc-stage").value;
  const weight = parseFloat(document.getElementById("calc-weight").value) || 10;
  const activity = document.getElementById("calc-activity").value;

  let factor = 15; // base grams per kg
  if (species === "perro") {
    factor = 16;
    if (stage === "cachorro") factor = 24;
    if (stage === "senior") factor = 13;
    if (activity === "alta") factor *= 1.25;
  } else {
    factor = 14;
    if (stage === "cachorro") factor = 20;
    if (activity === "baja") factor *= 0.85;
  }

  const grams = Math.round(weight * factor);
  document.getElementById("calc-portion-text").textContent =
    `${grams} gramos / día`;
  document.getElementById("calc-result").classList.remove("hidden");
}

// MYTH QUIZ LOGIC
function loadMythQuestion() {
  const myth = MYTHS_DATA[currentMythIndex];
  if (!myth) return;
  document.getElementById("myth-question").textContent = myth.question;
  document.getElementById("myth-feedback").classList.add("hidden");
}

function answerMyth(userAnswer) {
  const myth = MYTHS_DATA[currentMythIndex];
  const isCorrect = userAnswer === myth.isTrue;
  const feedbackEl = document.getElementById("myth-feedback");

  feedbackEl.className = `p-4 rounded-2xl border text-xs space-y-1 ${isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"}`;
  document.getElementById("myth-feedback-title").textContent = isCorrect
    ? `¡Correcto! ${myth.title}`
    : `Incorrecto. ${myth.title}`;
  document.getElementById("myth-feedback-desc").textContent = myth.desc;
  feedbackEl.classList.remove("hidden");
}

function nextMythQuestion() {
  currentMythIndex = (currentMythIndex + 1) % MYTHS_DATA.length;
  loadMythQuestion();
}

// ARTICLES LOGIC
function renderArticles() {
  const grid = document.getElementById("articles-grid");
  if (!grid) return;

  const categoryFilter = document.getElementById("article-category").value;
  const searchInput = document
    .getElementById("article-search")
    .value.toLowerCase();

  const filtered = ARTICLES_DATA.filter((art) => {
    const matchesCategory =
      categoryFilter === "all" || art.category === categoryFilter;
    const matchesSearch =
      art.title.toLowerCase().includes(searchInput) ||
      art.summary.toLowerCase().includes(searchInput);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full py-8 text-center text-slate-400 text-xs">No se encontraron artículos con los filtros aplicados.</div>`;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (art) => `
                <div class="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                        <div class="h-44 overflow-hidden relative">
                            <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover">
                            <span class="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-extrabold uppercase text-slate-800">
                                ${art.categoryText}
                            </span>
                        </div>
                        <div class="p-5 space-y-2">
                            <h4 class="font-extrabold text-slate-900 text-base leading-snug line-clamp-2">${art.title}</h4>
                            <p class="text-xs text-slate-500 line-clamp-2">${art.summary}</p>
                        </div>
                    </div>
                    <div class="p-5 pt-0">
                        <button onclick="openArticleModal(${art.id})" class="w-full py-2.5 bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold rounded-xl transition-all">
                            Leer Artículo Completo →
                        </button>
                    </div>
                </div>
            `,
    )
    .join("");
}

function filterArticles() {
  renderArticles();
}

function openArticleModal(articleId) {
  const art = ARTICLES_DATA.find((a) => a.id === articleId);
  if (!art) return;

  document.getElementById("article-modal-category").textContent =
    art.categoryText;
  document.getElementById("article-modal-title").textContent = art.title;
  document.getElementById("article-modal-author").innerHTML =
    `<i class="fa-solid fa-user-doctor mr-1"></i> ${art.author}`;
  document.getElementById("article-modal-date").innerHTML =
    `<i class="fa-solid fa-calendar mr-1"></i> ${art.date}`;
  document.getElementById("article-modal-readtime").innerHTML =
    `<i class="fa-solid fa-clock mr-1"></i> ${art.readTime}`;
  document.getElementById("article-modal-content").innerHTML = art.content;

  document.getElementById("article-modal").classList.remove("hidden");
}

function closeArticleModal() {
  document.getElementById("article-modal").classList.add("hidden");
}

function populateVetPetSelect() {
  const select = document.getElementById("vet-pet-select");
  if (!select) return;
  select.innerHTML = PETS_DATA.map(
    (pet) => `
                <option value="${pet.id}">${pet.name} (${pet.type === "perro" ? "Perro" : "Gato"}) - ${pet.ageText}</option>
            `,
  ).join("");
}

function populateSponsorPetSelect() {
  const select = document.getElementById("sponsor-pet-select");
  if (!select) return;
  select.innerHTML = PETS_DATA.map(
    (pet) => `
                <option value="${pet.id}">${pet.name} (${pet.type === "perro" ? "Perro" : "Gato"}) - ${pet.ageText}</option>
            `,
  ).join("");
}

function onVetPetChange() {
  updateVetCard();
}

function renderPets() {
  const grid = document.getElementById("pets-grid");
  if (!grid) return;

  const typeFilter = document.getElementById("filter-type").value;
  const sizeFilter = document.getElementById("filter-size").value;
  const ageFilter = document.getElementById("filter-age").value;

  const filteredPets = PETS_DATA.filter((pet) => {
    if (typeFilter !== "all" && pet.type !== typeFilter) return false;
    if (sizeFilter !== "all" && pet.size !== sizeFilter) return false;
    if (ageFilter !== "all" && pet.age !== ageFilter) return false;
    return true;
  });

  if (filteredPets.length === 0) {
    grid.innerHTML = `
                    <div class="col-span-full py-12 text-center text-slate-400">
                        <i class="fa-solid fa-paw text-4xl mb-2 text-slate-300"></i>
                        <p class="font-medium">No se encontraron mascotas con los filtros seleccionados.</p>
                    </div>
                `;
    return;
  }

  grid.innerHTML = filteredPets
    .map(
      (pet) => `
                <div class="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="relative h-56 overflow-hidden">
                            <img src="${pet.image}" alt="${pet.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <span class="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold ${pet.type === "perro" ? "text-brand-600" : "text-teal-600"} shadow-sm">
                                ${pet.type === "perro" ? "Perro" : "Gato"}
                            </span>
                            <span class="absolute top-3 right-3 px-2.5 py-1 bg-slate-900/80 backdrop-blur text-white rounded-lg text-[10px] font-semibold uppercase">
                                ${pet.size}
                            </span>
                        </div>

                        <div class="p-5">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-extrabold text-slate-900">${pet.name}</h3>
                                <span class="text-xs font-semibold text-slate-400">${pet.ageText}</span>
                            </div>

                            <p class="text-xs text-slate-500 mt-2 line-clamp-2">${pet.description}</p>

                            <div class="mt-3 flex flex-wrap gap-1.5">
                                ${pet.personality.map((p) => `<span class="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-semibold">${p}</span>`).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="px-5 pb-5 pt-0">
                        <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                            <div>
                                <span class="text-[10px] text-slate-400 block uppercase font-bold">Mantención</span>
                                <span class="text-xs font-extrabold text-slate-800">$${pet.monthlyCost.toLocaleString("es-CL")}/mes</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <button onclick="openSponsorModalForPet(${pet.id})" class="px-2.5 py-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-pet-orange text-xs font-bold transition-all" title="Apadrinar">
                                    <i class="fa-solid fa-hand-holding-heart"></i>
                                </button>
                                <button onclick="openPetModal(${pet.id})" class="px-3 py-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold transition-all">
                                    Ficha
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    )
    .join("");
}

function updateVetCard() {
  const petSelect = document.getElementById("vet-pet-select");
  if (!petSelect) return;
  const petId = parseInt(petSelect.value);
  const pet = PETS_DATA.find((p) => p.id === petId);
  const record = VET_RECORDS[petId];

  if (!pet || !record) return;

  document.getElementById("vet-card-chip").textContent = record.chip;
  document.getElementById("vet-card-name").textContent = pet.name;
  document.getElementById("vet-card-desc").textContent =
    `${pet.ageText} • ${pet.gender}`;
  document.getElementById("vet-card-specie").textContent =
    `${pet.type === "perro" ? "Perro Rescatado" : "Gato Rescatado"} (${pet.size})`;
  document.getElementById("vet-card-img").src = pet.image;
  document.getElementById("vet-card-vacuna-status").textContent =
    record.vacunaStatus;
  document.getElementById("vet-card-esterilizacion-status").textContent =
    record.esterilizadoStatus;

  const badgeEl = document.getElementById("vet-card-status-badge");
  badgeEl.textContent = record.overallBadge;
  badgeEl.className = `px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-${record.overallBadgeColor}-500/20 text-${record.overallBadgeColor}-300 border border-${record.overallBadgeColor}-400/30`;

  document.getElementById("vet-history-subtitle").textContent =
    `Mostrando expediente médico oficial de ${pet.name} (Chip: ${record.chip})`;

  const remindersList = document.getElementById("reminders-list");
  if (record.reminders.length === 0) {
    remindersList.innerHTML = `<div class="p-4 text-center text-slate-400 text-xs bg-slate-50 rounded-2xl border border-slate-100">No hay recordatorios pendientes.</div>`;
  } else {
    remindersList.innerHTML = record.reminders
      .map(
        (r) => `
                    <div class="p-3 bg-${r.color}-50 border border-${r.color}-200/60 rounded-xl flex items-center justify-between gap-3 ${r.completed ? "opacity-50 line-through" : ""}">
                        <div class="flex items-start gap-2.5">
                            <i class="fa-solid ${r.icon} text-${r.color}-600 mt-0.5 text-sm"></i>
                            <div>
                                <p class="text-xs font-bold text-${r.color}-900">${r.title}</p>
                                <p class="text-[11px] text-${r.color}-700">${r.sub}</p>
                            </div>
                        </div>
                        <button onclick="toggleReminder(${petId}, ${r.id})" class="text-xs font-bold px-2 py-1 rounded-lg ${r.completed ? "bg-slate-200 text-slate-600" : "bg-white text-" + r.color + "-700 shadow-sm hover:bg-" + r.color + "-100"} transition-all">
                            <i class="fa-solid ${r.completed ? "fa-rotate-left" : "fa-check"}"></i>
                        </button>
                    </div>
                `,
      )
      .join("");
  }

  renderVetHistory();
}

function renderVetHistory() {
  const petSelect = document.getElementById("vet-pet-select");
  if (!petSelect) return;
  const petId = parseInt(petSelect.value);
  const record = VET_RECORDS[petId];
  const tableBody = document.getElementById("vet-history-table");

  if (!record || !tableBody) return;

  tableBody.innerHTML = record.history
    .map(
      (item) => `
                <tr class="hover:bg-slate-50/80 transition-colors">
                    <td class="py-3 px-4 font-semibold text-slate-900">${item.date}</td>
                    <td class="py-3 px-4"><span class="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold text-slate-700">${item.type}</span></td>
                    <td class="py-3 px-4 font-medium text-slate-800">${item.title}</td>
                    <td class="py-3 px-4 text-slate-500">${item.vet}</td>
                    <td class="py-3 px-4 text-right"><span class="text-brand-600 font-bold">${item.status}</span></td>
                </tr>
            `,
    )
    .join("");
}

function toggleReminder(petId, reminderId) {
  const record = VET_RECORDS[petId];
  if (!record) return;
  const rem = record.reminders.find((r) => r.id === reminderId);
  if (rem) {
    rem.completed = !rem.completed;
    updateVetCard();
  }
}

function openAddReminderModal() {
  const dateInput = document.getElementById("reminder-date");
  if (dateInput) dateInput.valueAsDate = new Date();
  document.getElementById("add-reminder-modal").classList.remove("hidden");
}

function closeAddReminderModal() {
  document.getElementById("add-reminder-modal").classList.add("hidden");
}

function saveCustomReminder(e) {
  e.preventDefault();
  const petId = parseInt(document.getElementById("vet-pet-select").value);
  const title = document.getElementById("reminder-title").value;
  const rawDate = document.getElementById("reminder-date").value;
  const color = document.getElementById("reminder-color").value;

  let formattedSub = "Fecha programada";
  if (rawDate) {
    const parts = rawDate.split("-");
    if (parts.length === 3) {
      const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
      const options = { day: "numeric", month: "long", year: "numeric" };
      formattedSub = `Programado para el ${dateObj.toLocaleDateString("es-ES", options)}`;
    }
  }

  const iconMap = {
    amber: "fa-triangle-exclamation",
    teal: "fa-syringe",
    blue: "fa-clipboard-check",
    purple: "fa-wand-magic-sparkles",
  };

  if (VET_RECORDS[petId]) {
    VET_RECORDS[petId].reminders.unshift({
      id: Date.now(),
      title: title,
      sub: formattedSub,
      color: color,
      icon: iconMap[color] || "fa-bell",
      completed: false,
    });
    updateVetCard();
  }
  closeAddReminderModal();
}

let currentModalPetId = 1;
function openSponsorModal(presetAmount) {
  populateSponsorPetSelect();
  if (presetAmount) {
    document.getElementById("sponsor-amount-select").value = presetAmount;
  }
  document.getElementById("sponsor-modal").classList.remove("hidden");
}

function openSponsorModalForPet(petId) {
  openSponsorModal();
  document.getElementById("sponsor-pet-select").value = petId;
}

function sponsorCurrentPetModal() {
  closePetModal();
  openSponsorModalForPet(currentModalPetId);
}

function closeSponsorModal() {
  document.getElementById("sponsor-modal").classList.add("hidden");
}

function saveSponsorship(e) {
  e.preventDefault();
  const petId = parseInt(document.getElementById("sponsor-pet-select").value);
  const pet = PETS_DATA.find((p) => p.id === petId);
  const petName = pet ? pet.name : "la mascota";
  alert(
    `¡Muchas gracias por apadrinar a ${petName}! Te enviaremos el comprobante y los reportes médicos mensuales a tu correo.`,
  );
  closeSponsorModal();
}

function openPetModal(petId) {
  currentModalPetId = petId;
  const pet = PETS_DATA.find((p) => p.id === petId);
  if (!pet) return;

  document.getElementById("modal-pet-img").src = pet.image;
  document.getElementById("modal-pet-badge").textContent =
    pet.type === "perro" ? "Perro Rescatado" : "Gato Rescatado";
  document.getElementById("modal-pet-name-title").textContent = pet.name;
  document.getElementById("modal-pet-subtitle").textContent =
    `${pet.ageText} • ${pet.gender} • Tamaño ${pet.size}`;
  document.getElementById("modal-pet-desc").textContent = pet.description;
  document.getElementById("modal-pet-cost").textContent =
    `$${pet.monthlyCost.toLocaleString("es-CL")} / mes`;
  document.getElementById("modal-pet-vet-cost").textContent =
    `$${pet.vetInitialCost.toLocaleString("es-CL")} aprox.`;
  document.getElementById("modal-pet-health").textContent = pet.health;

  document.getElementById("pet-detail-modal").classList.remove("hidden");
}

function closePetModal() {
  document.getElementById("pet-detail-modal").classList.add("hidden");
}

function openAddControlModal() {
  const petId = parseInt(document.getElementById("vet-pet-select").value);
  const pet = PETS_DATA.find((p) => p.id === petId);
  if (!pet) return;

  document.getElementById("modal-pet-name").value = `${pet.name} (${pet.type})`;
  document.getElementById("control-date").valueAsDate = new Date();
  document.getElementById("add-control-modal").classList.remove("hidden");
}

function closeAddControlModal() {
  document.getElementById("add-control-modal").classList.add("hidden");
}

function saveMedicalControl(e) {
  e.preventDefault();
  const petId = parseInt(document.getElementById("vet-pet-select").value);

  const rawDate = document.getElementById("control-date").value;
  const dateObj = new Date(rawDate);
  const formattedDate = dateObj.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const type = document.getElementById("control-type").value;
  const title = document.getElementById("control-desc").value;
  const vet = document.getElementById("control-vet").value;

  VET_RECORDS[petId].history.unshift({
    date: formattedDate,
    type: type,
    title: title,
    vet: vet,
    status: "Completado",
  });

  closeAddControlModal();
  renderVetHistory();
}

function requestAdoption() {
  closePetModal();
  switchTab("match");
}

function calculateMatch(e) {
  e.preventDefault();
  const form = document.getElementById("quiz-form");
  const formData = new FormData(form);

  const housing = formData.get("housing");
  const time = formData.get("time");
  const budget = formData.get("budget");
  const speciesPref = formData.get("species_pref");

  const scoredPets = PETS_DATA.map((pet) => {
    let score = 70;

    if (housing === "departamento" && pet.housing === "departamento")
      score += 15;
    if (housing === "parcela" && pet.housing === "parcela") score += 15;
    if (housing === "casa_pequena" && pet.housing === "casa_pequena")
      score += 15;

    if (time === "bajo" && pet.energy === "Baja") score += 10;
    if (time === "alto" && pet.energy === "Alta") score += 10;

    if (budget === "bajo" && pet.monthlyCost <= 30000) score += 10;
    if (budget === "medio" && pet.monthlyCost <= 45000) score += 10;
    if (budget === "alto") score += 10;

    if (speciesPref === pet.type) score += 10;

    return { ...pet, matchScore: Math.min(score, 99) };
  });

  scoredPets.sort((a, b) => b.matchScore - a.matchScore);
  const topMatches = scoredPets.slice(0, 3);

  const resultsGrid = document.getElementById("results-grid");
  resultsGrid.innerHTML = topMatches
    .map(
      (pet) => `
                <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col justify-between">
                    <div>
                        <div class="relative h-40 rounded-xl overflow-hidden mb-3">
                            <img src="${pet.image}" alt="${pet.name}" class="w-full h-full object-cover">
                            <span class="absolute top-2 right-2 px-2.5 py-1 bg-brand-600 text-white font-extrabold text-xs rounded-lg shadow">
                                ${pet.matchScore}% Match
                            </span>
                        </div>
                        <h4 class="font-extrabold text-slate-900 text-lg">${pet.name}</h4>
                        <p class="text-xs text-slate-500 mt-1">${pet.ageText} • ${pet.gender}</p>
                        <p class="text-xs font-bold text-slate-700 mt-2">Mantención: $${pet.monthlyCost.toLocaleString("es-CL")}/mes</p>
                    </div>
                    <button onclick="openPetModal(${pet.id})" class="mt-4 w-full py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow transition-all">
                        Ver Detalles
                    </button>
                </div>
            `,
    )
    .join("");

  document.getElementById("match-results").classList.remove("hidden");
  window.scrollTo({
    top: document.getElementById("match-results").offsetTop - 100,
    behavior: "smooth",
  });
}

function switchTab(tabId) {
  document
    .querySelectorAll(".tab-content")
    .forEach((el) => el.classList.add("hidden"));
  const targetView = document.getElementById(`view-${tabId}`);
  if (targetView) targetView.classList.remove("hidden");

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("text-brand-600", "bg-brand-50");
    btn.classList.add("text-slate-600");
  });

  const activeNav = document.getElementById(`nav-${tabId}`);
  if (activeNav) {
    activeNav.classList.remove("text-slate-600");
    activeNav.classList.add("text-brand-600", "bg-brand-50");
  }

  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) mobileMenu.classList.add("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openFosterModal(presetModality) {
  const selectMod = document.getElementById("foster-form-modality");
  if (selectMod && presetModality) {
    if (presetModality === "emergencia") selectMod.value = "emergencia";
    else if (presetModality === "cuidados") selectMod.value = "cuidados";
    else if (presetModality === "cachorros") selectMod.value = "cachorros";
    else selectMod.value = "regular";
  }
  document.getElementById("foster-modal").classList.remove("hidden");
}

function closeFosterModal() {
  document.getElementById("foster-modal").classList.add("hidden");
}

function switchReqTab(category) {
  document
    .querySelectorAll(".req-content")
    .forEach((el) => el.classList.add("hidden"));
  const target = document.getElementById(`req-content-${category}`);
  if (target) target.classList.remove("hidden");

  document.querySelectorAll(".req-tab-btn").forEach((btn) => {
    btn.classList.remove(
      "bg-brand-50",
      "text-brand-700",
      "border",
      "border-brand-200",
    );
    btn.classList.add("bg-slate-100", "text-slate-600");
  });

  const activeBtn = document.getElementById(`req-tab-${category}`);
  if (activeBtn) {
    activeBtn.classList.remove("bg-slate-100", "text-slate-600");
    activeBtn.classList.add(
      "bg-brand-50",
      "text-brand-700",
      "border",
      "border-brand-200",
    );
  }
}

function saveFosterApplication(e) {
  e.preventDefault();
  alert(
    "¡Muchas gracias por postular como Hogar Temporal! Nos pondremos en contacto contigo a la brevedad.",
  );
  closeFosterModal();
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.toggle("hidden");
}

// ================= COMPARTIR CON CÓDIGO QR =================
// Enlace corto oficial: muestra "AdoptaMatch" y redirige a la página publicada.
const QR_PUBLIC_URL = "https://is.gd/AdoptaMatch";

// En GitHub Pages, localhost o archivo local, el QR usa el enlace corto oficial.
// Si más adelante usas un dominio propio, el QR usará automáticamente ese dominio.
function getDefaultQrUrl() {
  const host = window.location.hostname;
  const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(host);
  const isGitHubPages = host.endsWith("github.io");
  if (window.location.protocol === "file:" || isLocalHost || isGitHubPages)
    return QR_PUBLIC_URL;
  return window.location.href;
}

const QR_DEFAULT_URL = getDefaultQrUrl();

// Precarga en el modal la URL de esta misma página.
const qrLinkInput = document.getElementById("qr-link-input");
if (qrLinkInput) qrLinkInput.value = QR_DEFAULT_URL;

// Genera la URL de la API pública que crea la imagen del QR (sin API key).
function qrApiUrl(url, size = 400) {
  // Evita codificar dos veces una URL que ya trae caracteres como %20.
  let cleanUrl = url;
  try {
    cleanUrl = decodeURI(url);
  } catch (error) {
    /* se usa tal cual */
  }
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=12&data=${encodeURIComponent(cleanUrl)}`;
}

// Normaliza el enlace escrito por el usuario.
function getQrTargetUrl() {
  const input = document.getElementById("qr-link-input");
  let url = (input.value || "").trim();
  if (!url) url = QR_DEFAULT_URL;
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  input.value = url;
  return url;
}

function updateQrCode() {
  const url = getQrTargetUrl();
  const img = document.getElementById("qr-image");
  const loading = document.getElementById("qr-loading");

  loading.classList.remove("hidden");
  img.classList.add("opacity-0");

  img.onload = () => {
    loading.classList.add("hidden");
    img.classList.remove("opacity-0");
  };
  img.onerror = () => {
    loading.innerHTML =
      '<span class="text-red-500"><i class="fa-solid fa-triangle-exclamation mr-1"></i>No se pudo generar el QR</span>';
  };

  img.src = qrApiUrl(url) + `&cb=${Date.now()}`;
  document.getElementById("qr-external-link").href = qrApiUrl(url, 600);
}

function openQrModal() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.add("hidden");

  const input = document.getElementById("qr-link-input");
  if (!input.value) input.value = QR_DEFAULT_URL;

  updateQrCode();
  document.getElementById("qr-modal").classList.remove("hidden");
}

function closeQrModal() {
  document.getElementById("qr-modal").classList.add("hidden");
}

async function downloadQrCode() {
  const url = qrApiUrl(getQrTargetUrl(), 1000);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al descargar");
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "adoptamatch-qr.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  } catch (error) {
    // Si la descarga falla, se abre la imagen en una pestaña nueva.
    window.open(url, "_blank", "noopener");
  }
}

async function copyQrLink() {
  const url = getQrTargetUrl();
  const label = document.getElementById("qr-copy-text");
  try {
    await navigator.clipboard.writeText(url);
    label.textContent = "¡Enlace copiado!";
  } catch (error) {
    const input = document.getElementById("qr-link-input");
    input.select();
    document.execCommand("copy");
    label.textContent = "¡Enlace copiado!";
  }
  setTimeout(() => {
    label.textContent = "Copiar enlace";
  }, 2000);
}

// Cerrar el modal de QR con la tecla Escape.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const qrModal = document.getElementById("qr-modal");
    if (qrModal && !qrModal.classList.contains("hidden")) closeQrModal();
  }
});
