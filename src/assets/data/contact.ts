export interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

export interface Contact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastActive: string;
  number_phone: string;
  messages: Message[];
  status: string; 
}

export const contacts: Contact[] = [
  {
    id: 1,
    name: 'Tom',
    avatar: 'T',
    lastMessage: 'Ciao, come stai?',
    lastActive: '2023-12-05T08:30:00Z',
    number_phone: '39 333 1234567',
    status: 'Pronto per una giornata produttiva!', 
    messages: [
      {
        id: 1,
        sender: 'me',
        content: 'Ehi Tom!',
        timestamp: '2023-12-04T14:00:00Z',
      },
      {
        id: 2,
        sender: 'Tom',
        content: 'Ciao, come stai?',
        timestamp: '2023-12-04T14:05:00Z',
      },
    ],
  },
  {
    id: 2,
    name: 'Bill',
    avatar: 'B',
    lastMessage: 'Vediamoci domani.',
    lastActive: '2023-12-05T09:00:00Z',
    number_phone: '39 347 8901234',
    status: 'In pausa caffè, ritorno tra poco!', 
    messages: [
      {
        id: 1,
        sender: 'me',
        content: 'Ciao Bill!',
        timestamp: '2023-12-04T12:00:00Z',
      },
      {
        id: 2,
        sender: 'Bill',
        content: 'Vediamoci domani.',
        timestamp: '2023-12-04T12:05:00Z',
      },
    ],
  },
  {
    id: 3,
    name: 'Alex',
    avatar: 'A',
    lastMessage: 'Buonanotte!',
    lastActive: '2023-12-05T07:45:00Z',
    number_phone: '39 328 5678901',
    status: 'Ogni giorno è una nuova opportunità!', 
    messages: [
      {
        id: 1,
        sender: 'Alex',
        content: 'Com’è andata la giornata?',
        timestamp: '2023-12-04T20:00:00Z',
      },
      {
        id: 2,
        sender: 'me',
        content: 'Abbastanza bene, grazie!',
        timestamp: '2023-12-04T20:10:00Z',
      },
      {
        id: 3,
        sender: 'Alex',
        content: 'Buonanotte!',
        timestamp: '2023-12-04T22:00:00Z',
      },
    ],
  },
  {
    id: 4,
    name: 'Sophia',
    avatar: 'S',
    lastMessage: 'Ci vediamo presto!',
    lastActive: '2023-12-05T06:30:00Z',
    number_phone: '39 366 4567890',
    status: 'Il successo è la somma di piccoli sforzi ripetuti ogni giorno!', 
    messages: [
      {
        id: 1,
        sender: 'me',
        content: 'Hai controllato l’email?',
        timestamp: '2023-12-03T10:00:00Z',
      },
      {
        id: 2,
        sender: 'Sophia',
        content: 'Sì, sembra tutto ok!',
        timestamp: '2023-12-03T10:05:00Z',
      },
      {
        id: 3,
        sender: 'me',
        content: 'Ottimo, ci vediamo presto!',
        timestamp: '2023-12-03T10:10:00Z',
      },
    ],
  },
  {
    id: 5,
    name: 'Emma',
    avatar: 'E',
    lastMessage: 'Finiamo tutto domani.',
    lastActive: '2023-12-05T04:50:00Z',
    number_phone: '39 380 1234567',
    status: 'Ogni piccolo passo è un passo verso il successo!', 
    messages: [
      {
        id: 1,
        sender: 'Emma',
        content: 'Quando possiamo chiudere il progetto?',
        timestamp: '2023-12-02T14:00:00Z',
      },
      {
        id: 2,
        sender: 'me',
        content: 'Domani va bene.',
        timestamp: '2023-12-02T14:30:00Z',
      },
      {
        id: 3,
        sender: 'Emma',
        content: 'Finiamo tutto domani.',
        timestamp: '2023-12-02T15:00:00Z',
      },
    ],
  },
  {
    id: 6,
    name: 'John',
    avatar: 'J',
    lastMessage: 'Chiamami quando puoi.',
    lastActive: '2023-12-04T22:30:00Z',
    number_phone: '39 392 8901234',
    status: 'Non smettere mai di imparare!', 
    messages: [
      {
        id: 1,
        sender: 'John',
        content: 'Ehi, sei disponibile?',
        timestamp: '2023-12-04T20:00:00Z',
      },
      {
        id: 2,
        sender: 'me',
        content: 'Non ora, ti chiamo più tardi.',
        timestamp: '2023-12-04T20:15:00Z',
      },
      {
        id: 3,
        sender: 'John',
        content: 'Chiamami quando puoi.',
        timestamp: '2023-12-04T21:00:00Z',
      },
    ],
  },
  {
    id: 7,
    name: 'Liam',
    avatar: 'L',
    lastMessage: 'Grazie per l’aiuto!',
    lastActive: '2023-12-05T00:15:00Z',
    number_phone: '39 320 5678901',
    status: 'L’impegno è la chiave del successo!', 
    messages: [
      {
        id: 1,
        sender: 'Liam',
        content: 'Puoi aiutarmi con questa cosa?',
        timestamp: '2023-12-03T18:00:00Z',
      },
      {
        id: 2,
        sender: 'me',
        content: 'Certo, mandami i dettagli.',
        timestamp: '2023-12-03T18:10:00Z',
      },
      {
        id: 3,
        sender: 'Liam',
        content: 'Grazie per l’aiuto!',
        timestamp: '2023-12-03T19:00:00Z',
      },
    ],
  },
  {
    id: 8,
    name: 'Olivia',
    avatar: 'O',
    lastMessage: 'Ci sentiamo presto!',
    lastActive: '2023-12-05T01:45:00Z',
    number_phone: '39 340 1234567',
    status: 'Rimanere positivi porta sempre ai risultati migliori!', 
    messages: [
      {
        id: 1,
        sender: 'Olivia',
        content: 'Organizziamo un incontro.',
        timestamp: '2023-12-03T16:00:00Z',
      },
      {
        id: 2,
        sender: 'me',
        content: 'Ottima idea!',
        timestamp: '2023-12-03T16:30:00Z',
      },
      {
        id: 3,
        sender: 'Olivia',
        content: 'Ci sentiamo presto!',
        timestamp: '2023-12-03T17:00:00Z',
      },
    ],
  },
  {
    id: 9,
    name: 'Noah',
    avatar: 'N',
    lastMessage: 'Controllo e ti faccio sapere.',
    lastActive: '2023-12-04T21:30:00Z',
    number_phone: '39 351 8901234',
    status: 'Ogni errore è un’opportunità di crescita!', 
    messages: [
      {
        id: 1,
        sender: 'me',
        content: 'Puoi rivedere questo documento?',
        timestamp: '2023-12-04T15:00:00Z',
      },
      {
        id: 2,
        sender: 'Noah',
        content: 'Certo, controllo e ti faccio sapere.',
        timestamp: '2023-12-04T15:30:00Z',
      },
    ],
  },
  {
    id: 10,
    name: 'Ava',
    avatar: 'A',
    lastMessage: 'Tutto pronto per l’evento?',
    lastActive: '2023-12-05T03:30:00Z',
    number_phone: '39 389 5678901',
    status: 'Ogni passo avanti è una vittoria!', 
    messages: [
      {
        id: 1,
        sender: 'Ava',
        content: 'Siamo pronti per l’evento?',
        timestamp: '2023-12-03T11:00:00Z',
      },
      {
        id: 2,
        sender: 'me',
        content: 'Sì, è tutto organizzato.',
        timestamp: '2023-12-03T11:15:00Z',
      },
      {
        id: 3,
        sender: 'Ava',
        content: 'Tutto pronto per l’evento?',
        timestamp: '2023-12-03T12:00:00Z',
      },
    ],
  },
];
