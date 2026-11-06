export const MANIKANDAN_WHATSAPP = '917010354426';

export const openManikandanWhatsApp = (message: string) => {
  const url = `https://wa.me/${MANIKANDAN_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const manikandanWhatsAppLink = (message = 'Hello Natchathra Finance, I would like to know more about your loan services.') =>
  `https://wa.me/${MANIKANDAN_WHATSAPP}?text=${encodeURIComponent(message)}`;
