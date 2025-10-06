// src/data/villas.js

// PREMIUM 1 (përdor foto ekzistuese)
import premium1_cover from "../assets/3_7.jpg";
import premium1_b from "../assets/3_6.jpg";
import premium1_c from "../assets/3_5.jpg";

// PREMIUM 2
import premium2_cover from "../assets/2_8.jpg";
import premium2_b from "../assets/2_9.jpg";
import premium2_c from "../assets/2_10.jpg";

// PREMIUM 3
import premium3_cover from "../assets/5.jpg";
import premium3_b from "../assets/4.jpg";
import premium3_c from "../assets/6.jpg";

// VIP 1
import vip1_cover from "../assets/_P4A0270.jpg";
import vip1_b from "../assets/_P4A0269.jpg";
import vip1_c from "../assets/_P4A0273.jpg";

// VIP 2
import vip2_cover from "../assets/515550823.jpg";
import vip2_b from "../assets/7.jpg";
import vip2_c from "../assets/6.jpg";

// VIP 3
import vip3_cover from "../assets/2.jpg";
import vip3_b from "../assets/3.jpg";
import vip3_c from "../assets/1_11.jpg";

/** ——— Defaults në stil Booking (në shqip) ——— */
const BOOKING_DEFAULTS = {
  booking: {
    top_location_score: 10,
    highlights: [
      "Lokacion i shkëlqyer (vlerësuar 10.0)",
      "Parkim privat falas në vend",
      "Wi-Fi falas",
      "Dhomat familjare",
      "Saunë",
    ],
    breakfast: {
      available: true,
      options: ["Hallall", "Bufe", "Mëngjes për me marrë"],
      note: "Shërbehet çdo ditë",
    },
    parking: {
      free: true,
      private: true,
      on_site: true,
      reservation_needed: false,
    },
    internet: {
      wifi: true,
      areas: "I disponueshëm në të gjitha hapësirat",
      free: true,
    },
    outdoors: ["Tarracë", "Kopsht"],
    wellness: ["Saunë"],
    misc: ["Ndalohet duhani në të gjitha hapësirat", "Ngrohje", "Dhomat familjare"],
    distance_note:
      "Distancat në përshkrim llogariten duke përdorur © OpenStreetMap",
    airport_distance_km: 50,
    attractions: [
      { name: "Varri i Sulltan Muratit", distance_km: 34 },
      { name: "Muzeu i Kosovës", distance_km: 36 },
    ],
    languages: ["Anglisht", "Shqip"],
  },
};

// ——— LISTA KRYESORE (Premium 1–3, VIP 1–3) ———
export const RAW_VILLAS = [
  // PREMIUM
  {
    id: 1,
    slug: "premium-1",
    name: "Premium 1",
    category: "Premium",
    location: "Orllan, Liqeni i Batllavës",
    description:
      "Hapësirë moderne me dritare të mëdha dhe tarracë intime — perfekte për çifte ose familje të vogla.",
    cover_url: premium1_cover,
    price_per_night: 180, // ruajtur si referencë historike (nuk përdoret për shfaqje)
    max_guests: 4,
    size: 60,
    amenities: ["Pamje liqeni", "Tarracë private", "Ajër i kondicionuar (AC)", "Wi-Fi"],
    gallery: [premium1_cover, premium1_b, premium1_c],
  },
  {
    id: 2,
    slug: "premium-2",
    name: "Premium 2",
    category: "Premium",
    location: "Orllan, Liqeni i Batllavës",
    description:
      "Suitë e bollshme me dalje në kopsht, mini-kuzhinë dhe ambient të qetë për pushim total.",
    cover_url: premium2_cover,
    price_per_night: 200,
    max_guests: 4,
    size: 70,
    amenities: ["Kopsht privat", "Mini-kuzhinë", "BBQ", "Wi-Fi"],
    gallery: [premium2_cover, premium2_b, premium2_c],
  },
  {
    id: 3,
    slug: "premium-3",
    name: "Premium 3",
    category: "Premium",
    location: "Orllan, Liqeni i Batllavës",
    description:
      "Tarracë panoramike për darka nën yje, me interior komod dhe ndriçim natyral.",
    cover_url: premium3_cover,
    price_per_night: 220,
    max_guests: 5,
    size: 75,
    amenities: ["Tarracë e madhe", "Oxhak", "Ajër i kondicionuar (AC)", "Wi-Fi"],
    gallery: [premium3_cover, premium3_b, premium3_c],
  },

  // VIP
  {
    id: 4,
    slug: "vip-1",
    name: "VIP 1",
    category: "VIP",
    location: "Orllan, Liqeni i Batllavës",
    description:
      "Vilë e gjerë me pamje 180° dhe sallon elegant — ideale për mbrëmje me miq.",
    cover_url: vip1_cover,
    price_per_night: 320,
    max_guests: 6,
    size: 90,
    amenities: ["Pamje 180°", "Sistem audio", "Parkim", "Wi-Fi"],
    gallery: [vip1_cover, vip1_b, vip1_c],
  },
  {
    id: 5,
    slug: "vip-2",
    name: "VIP 2",
    category: "VIP",
    location: "Orllan, Liqeni i Batllavës",
    description:
      "Spa private (jacuzzi + saunë) dhe tarracë e izoluar për privatësi absolute.",
    cover_url: vip2_cover,
    price_per_night: 360,
    max_guests: 6,
    size: 100,
    amenities: ["Jacuzzi privat", "Saunë", "Tarracë e izoluar", "Wi-Fi"],
    gallery: [vip2_cover, vip2_b, vip2_c],
    booking: {
      wellness: ["Saunë", "Jacuzzi"],
    },
  },
  {
    id: 6,
    slug: "vip-3",
    name: "VIP 3",
    category: "VIP",
    location: "Orllan, Liqeni i Batllavës",
    description:
      "Simbol i luksit me kuzhinë të plotë, garazh privat dhe hapësira të mëdha sociale.",
    cover_url: vip3_cover,
    price_per_night: 420,
    max_guests: 8,
    size: 120,
    amenities: ["Kuzhinë e plotë", "Garazh privat", "Ajër i kondicionuar (AC)", "Wi-Fi"],
    gallery: [vip3_cover, vip3_b, vip3_c],
  },
];

// ——— NORMALIZIMI për komponentët ekzistues (Rooms/RoomDetails) ———
const normalize = (v) => {
  const mergedBooking = {
    ...BOOKING_DEFAULTS.booking,
    ...(v.booking || {}),
  };

  const badges = [
    mergedBooking.parking?.free ? "Parkim falas" : null,
    mergedBooking.internet?.wifi ? "Wi-Fi falas" : null,
    mergedBooking.misc?.includes("Dhomat familjare") ? "Dhomat familjare" : null,
    mergedBooking.wellness?.includes("Saunë") ? "Saunë" : null,
    mergedBooking.breakfast?.available ? "Mëngjes" : null,
  ].filter(Boolean);

  const facilities = [
    ...(mergedBooking.outdoors || []),
    ...(mergedBooking.wellness || []),
    ...(mergedBooking.misc || []),
  ];

  // ✅ Çmimi uniform sipas kategorisë
  const basePrice = v.category === "VIP" ? 250 : 200;

  return {
    ...v,
    cover: v.cover_url,
    price: basePrice, // përdoret kudo në UI
    capacity: v.max_guests,
    gallery: v.gallery?.length ? v.gallery : [v.cover_url],
    booking: mergedBooking,
    badges,
    facilities,

    // (opsionale) ruaj referencën origjinale nëse të duhet diku më vonë
    original_price_per_night: v.price_per_night,
  };
};

export const VILLAS = RAW_VILLAS.map(normalize);
export const VILLAS_BY_SLUG = Object.fromEntries(VILLAS.map((v) => [v.slug, v]));
