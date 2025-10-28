const categories = [
  {
    image: require("../assets/Categories/social-networks.png"),
    name: "Tomarse un break",
    router:"Timer",
    maxPhaseTime:600,
    minPhaseTime:100,
    counterTime:0,
    phaseInTime:1,
    phase:3,
    progress:30,
  },
  {
    image: require("../assets/Categories/mobile.png"),
    name: "Mobile",
    router:"Timer",
    maxPhaseTime:600,
    minPhaseTime:100,
    counterTime:0,
    phaseInTime:1,
    phase:3,
    progress:30,
  },
  {
    image: require("../assets/Categories/stroll.png"),
    name: "Ir a caminar",
    router:"Timer",
    maxPhaseTime:600,
    minPhaseTime:100,
    counterTime:0,
    phaseInTime:1,
    phase:3,
    progress:30,
  },
  {
    image: require("../assets/Categories/dinner.png"),
    name: "Almuerzo/Café",
    router:"Timer",
    maxPhaseTime:600,
    minPhaseTime:100,
    counterTime:0,
    phaseInTime:1,
    phase:3,
    progress:30,
  }
];

const record = [
  {
    date:"21/10/2025",
    time:"00:00:05",
    categorie:"Ir a caminar",
    points:100
  },
  {
    date:"18/09/2025",
    time:"00:45:05",
    categorie:"Almuerzo/Café",
    points:525
  },
  {
    date:"17/09/2025",
    time:"01:00:05",
    categorie:"Almuerzo/Café",
    points:650
  },
  {
    date:"18/09/2025",
    time:"01:10:08",
    categorie:"Almuerzo/Café",
    points:680
  },
  {
    date:"18/09/2025",
    time:"00:52:05",
    categorie:"Almuerzo/Café",
    points:610
  },
];

const profile = {
  points:500,
  image:require("../assets/Profile/profile-image.png"),
  name:"Carolina Fernandez",
  credential:"1123423",
  team:"Marketing",
  telephoneNumber:"+541123234343",
  mail:"c.fernandez@empresa.com",
  location:"Buenos Aires, Argentina",
  timeZone: "Buenos Aires (GMT - 3)"
  
};

const awards = [
  { 
    description:"+1 día de vacaciones",
    points:20.000,
    categorie:"Beneficios"
  },
   { 
    description:"+1 día flex",
    points:10.000,
    categorie:"Beneficios"
  },
   { 
    description:"Auriculares",
    points:8.000,
    categorie:"Productos"
  },
   { 
    description:"Mochila",
    points:6.000,
    categorie:"Productos"
  },
   { 
    description:"+1 día home office",
    points:15.000,
    categorie:"Beneficios"
  },
  { 
    description:"$20.000 Pedidos ya",
    points:10.000,
    categorie:"Servicios"
  }
];

const weeklyAssigment = [
  {
    assigment:"Tomarse un break",
    phase:2,
    progress:30,
    time:"Hace 2 minutos"
  },
  {
    assigment:"Ir a caminar",
    phase:2,
    progress:30,
    time:"Hace 1 dia"
  },
];

const alerts = [
  {
    date:"20/09/25",
    message:"Estamos llegando a las 18, no te olvides de finalizar tu timer"
  },
  {
    date:"20/09/25",
    message:"Recordá tomarte una pausa activa para recargar energías"
  },
  {
    date:"20/09/25",
    message:"¡Ya son las 9! Es momento de comenzar tu timer"
  },
  {
    date:"19/09/25",
    message:"Estamos llegando a las 18, no te olvides de finalizar tu timer"
  },
  {
    date:"19/09/25",
    message:"Recordá tomarte una pausa activa para recargar energías"
  }
];

const credentials = {
  credential:"11492291",
  mail:"ignaciomorinigo848@gmail.com",
  password:"12345678"
};

const emote = {
  happy:require("../assets/Emote/happy.png"),
  exhausted:require("../assets/Emote/exhausted.png"),
  noWords:require("../assets/Emote/noWords.png"),
  unsure:require("../assets/Emote/unsure.png")
};

module.exports = {weeklyAssigment,categories,record,profile,awards,alerts,credentials,emote}