const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;
export const menu = [
 {id:1,name:'Shoyu Ramen',category:'Ramen & Noodles',price:58000,rating:'4.9',description:'Kaldu shoyu hangat, mi lembut, dan telur ajitama.',image:photo('photo-1569718212165-3a8278d5f624'),tag:'THE COMFORT BOWL'},
 {id:2,name:'Salmon Sushi Selection',category:'Sushi & Sashimi',price:65000,rating:'4.9',description:'Salmon lembut, nasi sushi, dan sentuhan wasabi.',image:photo('photo-1579871494447-9811cf80d66c'),tag:'A LITTLE WORK OF ART'},
 {id:3,name:'Japanese Rice Bowl',category:'Donburi',price:48000,rating:'4.8',description:'Semangkuk nasi dengan topping gurih pilihan.',image:photo('photo-1512058564366-18510be2db19'),tag:'SIMPLE. SATISFYING.'},
 {id:4,name:'Chicken Gyoza',category:'Agemono & Sides',price:32000,rating:'4.9',description:'Pangsit dengan isian gurih, sempurna untuk berbagi.',image:photo('photo-1563245372-f21724e3856d'),tag:'MADE FOR SHARING'},
 {id:5,name:'Uji Matcha Latte',category:'Matcha & Drinks',price:28000,rating:'4.9',description:'Matcha yang earthy berpadu susu lembut.',image:photo('photo-1515823064-d6e0c04616a7'),tag:'A MOMENT OF CALM'},
 {id:6,name:'Sushi Maki Platter',category:'Sushi & Sashimi',price:72000,rating:'4.8',description:'Gulungan sushi untuk momen makan bersama.',image:photo('photo-1553621042-f6e147245754'),tag:'ROLL INTO GOOD TIMES'},
 {id:7,name:'Noodle Bowl',category:'Ramen & Noodles',price:52000,rating:'4.8',description:'Mi, sayuran, dan kuah dengan rasa yang hangat.',image:photo('photo-1552611052-33e04de081de'),tag:'WARMTH IN EVERY BITE'},
 {id:8,name:'Japanese Tea',category:'Matcha & Drinks',price:24000,rating:'4.9',description:'Seduhan teh ringan sebagai penutup yang tenang.',image:photo('photo-1544787219-7f47ccb76574'),tag:'SLOW DOWN & SIP'},
];
export const categories=['All',...new Set(menu.map(item=>item.category))];
export const heroImage=photo('photo-1617093727343-374698b1b08d');
export const gallery=[{image:heroImage,name:'The art of a good bowl'},...menu.slice(1,5).map(({image,name})=>({image,name}))];
export const rupiah=value=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(value);
export const reviews=[{name:'Nadia P.',initials:'NP',text:'Semangkuk ramen hangat dan suasana yang tenang. Kombinasi sederhana yang bikin ingin kembali.',date:'12 Oktober 2026'}, {name:'Aditya R.',initials:'AR',text:'Suka presentasi sushinya. Setiap detail terasa dipikirkan, dari sajian sampai suasananya.',date:'18 Oktober 2026'}, {name:'Clara W.',initials:'CW',text:'Matcha latte-nya jadi favorit. Tempat yang pas untuk menikmati waktu tanpa terburu-buru.',date:'24 Oktober 2026'}];
