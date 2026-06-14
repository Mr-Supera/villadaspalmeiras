// Dados de contacto da Villa das Palmeiras.
// Substituir os valores marcados com `TODO` pelos dados reais do cliente.

export const site = {
  name: "Villa das Palmeiras",
  tagline: "Hotel · Restaurante · Eventos",
  // TODO: substituir pelo número real (formato internacional sem +, espaços ou traços)
  whatsappNumber: "258840000000",
  whatsappDisplay: "+258 84 000 0000",
  phone: "+258 84 000 0000",
  email: "reservas@villadaspalmeiras.co.mz",
  address: "Av. das Palmeiras, Maputo, Moçambique",
  // Coordenadas para mapa (Maputo, placeholder)
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.7!2d32.5732!3d-25.9692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU4JzA5LjEiUyAzMsKwMzQnMjMuNSJF!5e0!3m2!1spt-PT!2spt!4v1700000000000",
  hours: [
    { day: "Recepção", value: "24 horas" },
    { day: "Restaurante", value: "07:00 – 23:00" },
    { day: "Eventos", value: "Sob marcação" },
  ],
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
};

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(
    message ??
      "Olá! Gostaria de obter mais informações sobre a Villa das Palmeiras."
  );
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
};
