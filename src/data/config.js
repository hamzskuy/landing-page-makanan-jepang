export const config = {
  brand: 'FOODSTORY', tagline: 'Japanese kitchen · A little soul in every bowl',
  address: '', hours: '', whatsapp: '', instagram: '', tiktok: '', mapsUrl: '',
};
// Isi whatsapp dengan nomor internasional, contoh 628xxxxxxxxxx (tanpa +).
// instagram / tiktok: username tanpa @. mapsUrl: URL HTTPS Google Maps.
export const contactLinks = {
  whatsapp: /^\d{8,15}$/.test(config.whatsapp) ? `https://wa.me/${config.whatsapp}` : '',
  instagram: config.instagram ? `https://www.instagram.com/${encodeURIComponent(config.instagram)}/` : '',
  tiktok: config.tiktok ? `https://www.tiktok.com/@${encodeURIComponent(config.tiktok)}` : '',
  maps: /^https:\/\//.test(config.mapsUrl) ? config.mapsUrl : '',
};
