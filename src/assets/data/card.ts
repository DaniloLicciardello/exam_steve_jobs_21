export interface Card {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  departure: string;
  arrival: string;
  duration: string;
  seatsAvailable: number;
  trainType: string;
  services: string[];
}

export const cards: Card[] = [
  {
    id: 1,
    title: 'Intercity Express',
    subtitle: 'Veloce e Confortevole',
    description: 'Viaggia ad alta velocità con comfort moderni.',
    price: 49.99,
    departure: '2023-11-22T10:30:00Z',
    arrival: '2023-11-22T13:00:00Z',
    duration: '2h 30m',
    seatsAvailable: 120,
    trainType: 'Intercity',
    services: ['WiFi', 'Presa elettrica', 'Ristorante'],
  },
  {
    id: 2,
    title: 'Nightjet Express',
    subtitle: 'Dormi mentre viaggi',
    description: 'Riposa in una comoda cuccetta e svegliati rigenerato.',
    price: 99.99,
    departure: '2023-11-22T22:00:00Z',
    arrival: '2023-11-23T08:00:00Z',
    duration: '10h',
    seatsAvailable: 50,
    trainType: 'Notturno',
    services: ['Biancheria da letto', 'Servizio ristorazione a bordo'],
  },
  {
    id: 3,
    title: 'Regionale Express',
    subtitle: 'Scopri la campagna',
    description: 'Goditi panorami mozzafiato e viaggi rilassanti.',
    price: 29.99,
    departure: '2023-11-23T09:00:00Z',
    arrival: '2023-11-23T12:30:00Z',
    duration: '3h 30m',
    seatsAvailable: 80,
    trainType: 'Regionale',
    services: ['Spazio per biciclette'],
  },
  {
    id: 4,
    title: 'Alta Velocità',
    subtitle: 'Viaggi rapidissimi',
    description:
      'Raggiungi la tua destinazione in tempi record con i nostri treni ad alta velocità.',
    price: 79.99,
    departure: '2023-11-24T07:00:00Z',
    arrival: '2023-11-24T10:00:00Z',
    duration: '3h',
    seatsAvailable: 150,
    trainType: 'Alta Velocità',
    services: ['Bar a bordo'],
  },
  {
    id: 5,
    title: 'Treno Pendolari',
    subtitle: 'Il tuo pendolarismo semplificato',
    description: 'Pendolari convenienti ed economici per lavoro o scuola.',
    price: 19.99,
    departure: '2023-11-25T08:30:00Z',
    arrival: '2023-11-25T09:15:00Z',
    duration: '45m',
    seatsAvailable: 200,
    trainType: 'Pendolari',
    services: ['WiFi', 'Presa elettrica', 'Ristorante'],
  },
  {
    id: 6,
    title: 'Treno Turistico',
    subtitle: 'Scopri siti storici e paesaggi mozzafiato',
    description:
      'Intraprendi un viaggio panoramico attraverso paesaggi mozzafiato e città storiche.',
    price: 59.99,
    departure: '2023-11-26T10:00:00Z',
    arrival: '2023-11-26T17:00:00Z',
    duration: '7h',
    seatsAvailable: 70,
    trainType: 'Turistico',
    services: ['WiFi', 'Presa elettrica', 'Bar a bordo'],
  },
  {
    id: 7,
    title: 'Frecciargento',
    subtitle: 'The elegance of travel',
    description: 'Travel in style and comfort aboard a Frecciargento.',
    price: 69.99,
    departure: '2023-11-27T12:00:00Z',
    arrival: '2023-11-27T15:30:00Z',
    duration: '3h 30m',
    seatsAvailable: 100,
    trainType: 'High-Speed',
    services: ['WiFi', 'Power outlet', 'Restaurant'],
  },

  {
    id: 8,
    title: 'Historic Train',
    subtitle: 'A journey through time',
    description: 'Experience a unique journey aboard a vintage train.',
    price: 129.99,
    departure: '2023-12-01T10:00:00Z',
    arrival: '2023-12-01T18:00:00Z',
    duration: '8h',
    seatsAvailable: 50,
    trainType: 'Historic',
    services: ['Onboard bar'],
  },
];
