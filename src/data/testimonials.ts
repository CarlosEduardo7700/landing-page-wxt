export type Testimonial = {
  name: string;
  role: string;
  content: string;
  stars: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Guilherme Mendo",
    role: "Software Engineer",
    content: "Essa extensão me poupou horas de trabalho manual repetitivo. O setup levou segundos e funcionou logo de primeira no meu fluxo.",
    stars: 5,
  },
  {
    name: "Ana Silva",
    role: "Indie Maker",
    content: "Ferramenta sensacional! Simples, direta ao ponto e sem firulas. Uso todos os dias para agilizar minhas validações.",
    stars: 5,
  },
  {
    name: "Carlos Henrique",
    role: "Product Manager",
    content: "Nunca imaginei que automatizar esse processo seria tão fácil. Economizo pelo menos 2 horas por semana só com essa extensão.",
    stars: 5,
  },
  {
    name: "Mariana Costa",
    role: "Freelancer",
    content: "Instalei em menos de um minuto e já estava funcionando. Interface limpa, sem configuração complicada. Recomendo demais.",
    stars: 5,
  },
  {
    name: "Felipe Rocha",
    role: "Growth Hacker",
    content: "Testei várias ferramentas parecidas e nenhuma funcionou tão bem quanto essa. Vale muito o investimento.",
    stars: 5,
  },
  {
    name: "Juliana Pires",
    role: "UX Designer",
    content: "Além de funcionar perfeitamente, a extensão é bem pensada visualmente. Dá para ver que foi feita com cuidado.",
    stars: 5,
  },
];
