const products = [
    { 
        id: '1', 
        name: '212 HEROES WOMEN EDP 30 ML', 
        marca: 'Carolina Herrera',
        price: 17300, 
        category: 'fragancias', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=623207ad7100c_m.jpg&tipo=AART&alto=250&ancho=250', 
        stock: 10, 
        description:'212 Heroes Forever Young de Carolina Herrera es una fragancia de la familia olfativa Floral Frutal para Mujeres. Esta fragrancia es nueva. 212 Heroes Forever Young se lanzó en 2022. Las Notas de Salida son frambuesa y mandarina; las Notas de Corazón son jazmín y flor de azahar del naranjo; las Notas de Fondo son sándalo y cedro.'
    },
    { 
        id: '2', 
        name: 'ALIBI WOMEN EDP 50 ML', 
        marca: 'OSCAR DE LA RENTA',
        price: 800, 
        category: 'fragancias', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=60e4604d8e647_m.jpg&tipo=AART&alto=250&ancho=250', 
        stock: 500, 
        description:'Alibi de Oscar de la Renta es una fragancia de la familia olfativa Floral Frutal Gourmand para Mujeres. Alibi se lanzó en 2021. Las Notas de Salida son flor de jengibre y mandarina; las Notas de Corazón son orquídea de vainilla, heliotropo y notas acuosas; las Notas de Fondo son praliné, almizcle y Amberwood.'
    },
    { 
        id: '3', 
        name: '5TH AVENUE EDP 30 ML', 
        price: 13290, 
        marca: 'ELIZABETH ARDEN',
        category: 'fragancias', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=5de995fe016ff_m.jpg&tipo=AART&alto=250&ancho=250', 
        stock: 650, 
        description:'5th Avenue Eau de Parfum de Elizabeth Arden es un perfume femenino con el que ninguna mujer pasará inadvertida. Esta fragancia floral con un fondo cálido, es uno de los perfumes que armonizan características clásicas y contemporáneas a su vez. Un perfume seductor con un principio dinámico y de tono vibrante, posa sobre su piel una suave estela perfumada y su carácter que ensalza a la mujer moderna que conoce sus posibilidades, hacen de este perfume un clásico entre los clásicos de la perfumería moderna. 5th Avenue Eau de Parfum pertenece a la familia olfativa Floral- Semi Oriental; de sensual y gran calidez descubre su feminidad con notas de salida caracterizadas por acordes florales-afrutados gracias a la magnolia, flor del tilo, mandarina, lila, lirio de los valles y Bergamota; desemboca en delicadas y refinadas notas florales de clavel, nardos, violeta, jazmín, ylang-ylang y rosa'
    },
    { 
        id: '4', 
        name: 'ADDICT EAU FRAICHE EDT 100 ML', 
        price: 27000, 
        marca: 'DIOR',
        category: 'fragancias', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=5e1661bf6a72e_m.jpg&tipo=AART&alto=250&ancho=250', 
        stock: 50, 
        description:'DIOR ADDICT EAU FRAÎCHE de Dior es un “Eau de Toilette” para mujer que se incluye en la familia Floral. Se trata de una nueva introducción en la saga Addict, sobre la cual se potencia el poder de las flores para crear un aroma que destaca por su feminidad, su sutileza y su delicadeza. Esta fragancia fue lanzada en el año 2014 por el perfumista François Demachy, quién afirma haber utilizado componentes muy sencillos, con una alta suavidad olfativa y alejados de cualquier tipo de opulencia. En esta ocasión, ADDICT EAU FRAÎCHE, es un perfecto aroma para el día a día, para las estaciones cálidas y para chicas alegres, coquetas y vitales. Mujeres que brillan con luz propia y contagian su bienestar a todo aquel que está a su alrededor. Su pirámide olfativa inicia con una brisa cítrica, procedente de la bergamota de Calabria. Seguidamente, su corazón adquiere un carácter totalmente floral, con notas como la fresia y el lirio de los valles. Para concluir su estela, el elegido ha sido el almizcle blanco, aportándole un toque final de inocente sensualidad.'
    },
    { 
        id: '5', 
        name: 'AGUA DE BAMBU EDT', 
        price: 8110, 
        marca: 'adolfo dominguez',
        category: 'fragancias', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=61c1f042b9345_m.jpg&tipo=AART&alto=250&ancho=250', 
        stock: 350, 
        description:'Agua de Bambú Woman pertenece a la familia olfativa Floral Acuática y se inicia con un desfile de notas frescas y luminosas de yuzu y flor de loto que se combinan con la originalidad del bambú. En el corazón, las flores más femeninas y sutiles de loto, jazmín y Fresia abren paso a la calidez del cedro y el almizcle, que conceden durabilidad y seducción al aroma. El frasco tiene una forma original y divertida de bambú. Una botella de vidrio transparente, teñido en un azul turquesa degradado hacia la transparencia en su parte superior, que representa la elegancia y distinción de la firma Adolfo Domínguez y la frescura y autenticidad de esta fragancia.'
    },
    { 
        id: '6', 
        name: '1 MILLION EDT 200 ML', 
        price: 30440, 
        marca: 'PACO RABANNE',
        category: 'fragancias', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=5e501fbdbc172_m.jpeg&tipo=AART&alto=250&ancho=250', 
        stock: 300, 
        description:'1 Million de Paco Rabanne, un perfume estrella de Paco Rabanne y desde su lanzamiento en el año 2008, unos de los perfumes de hombre más vendidos. No es por casualidad, frescura, seducción, sensualidad... son algunas de las sensaciones que nos transmite 1 Million de Paco Rabanne, un perfume para hombre cargado de originalidad y muy masculino. Desde sus notas de salida con el pomelo, la menta y un toque cítrico de mandarina, esta fragancia para hombres, nos transporta en un viaje sorprendente hacia la intensidad del aroma de canela, absoluto de rosa y especias, para desembocar en el inconfundible olor a cuero, pachulí y madera blanca.'
    },
    { 
        id: '7', 
        name: '212 HEROES MEN EDT 150 ML', 
        price: 31350, 
        marca: 'CAROLINA HERRERA',
        category: 'fragancias', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=6054f2b4adb77_m.jpg&tipo=AART&alto=250&ancho=250', 
        stock: 380, 
        description:'212 HEROES reinventa los perfumes “fougère” con un nuevo género olfativo: fougère afrutado amaderado. Auténtica hasta la médula, 212 heroes también cuenta con la certificación de producto 100 % vegano y sin crueldad animal. 212 heroes despierta nuestro lado más rebelde y despreocupado con una fórmula que desafía los principios de la perfumería, reinventando el clásico género “fougère” y, al mismo tiempo, respetando el planeta con su fórmula 100 % vegana y sin crueldad animal.'
    },
    { 
        id: '8', 
        name: 'AGUA DE BAMBU HOMBRE EDT', 
        price: 8110, 
        marca: 'ADOLFO DOMINGUEZ',
        category: 'fragancias', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=61c1f0c58a80d_m.jpg&tipo=AART&alto=250&ancho=250', 
        stock: 380, 
        description:'Es un perfume masculino atrevido y con personalidad. Se caracteriza por su persistente aroma cítrico, divertido y luminoso. Una fragancia creada para esos hombres enérgicos, divertidos, rebeldes y osados. Ellos no tienen miedo a nada, disfrutan de la vida y la ven desde el lado más positivo posible. Agua de Bambú Man pertenece a la familia olfativa Aromática Verde y contiene notas de bambú, ámbar, algodón, frescos aromas de jazmín y notas marinas.'
    },
    { 
        id: '9', 
        name: 'ALIEN MEN RECARGABLE EDT 50 ML', 
        price: 18800, 
        marca: 'MUGLER',
        category: 'fragancias', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=5e50420c80ce4_m.jpeg&tipo=AART&alto=250&ancho=250', 
        stock: 250, 
        description:'Alien Man de la marca Thierry Mugler es un perfume masculino, electrizante y elegante. Thierry Mugler presenta un nuevo Eau de Toilette de la gama Alien, Alien Man, una fragancia que simboliza la parte misteriosa que duerme en nuestro interior a la espera de resurgir. Representa a un hombre brillante, que irradia la fuerza y la serenidad de un héroe al que seguir los pasos. Alien Man de Thierry Mugler ha sido creada en el año 2019 por el maestro perfumista Jean-Christophe Herault y pertenece a la familia olfativa Oriental Amaderada. Para comenzar este juego de aromas, sus notas electrizantes de salida comienzan con haya, eneldo, anís, lavanda, limón, menta y tomillo. Un corazón elegante de cuero, madera de cachemira, osmanto, geranio y pimienta dan paso a una salida magnética de ámbar blanco, cachemira y vainilla.'
    },
    { 
        id: '10', 
        name: 'AQUA HOMME EDT 30 ML', 
        price: 12300, 
        marca: 'KENZO',
        category: 'fragancias', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=5de8390ec01df_m.jpg&tipo=AART&alto=250&ancho=250', 
        stock: 250, 
        description:'Aqua Kenzo Pour Homme es un perfume masculino, adictivo y pasional de la firma Kenzo. Una fragancia repleta de contrastes adictivos que transporta a las maravillosas sensaciones del agua, un antídoto contra la normalidad. Este perfume para hombres hace sentir la pasión por el mar y al aplicarlo sobre la piel, se posa una sensación de un cálido, adictivo y refrescante abrazo. Aqua Kenzo Pour Homme ha sido creada en el año 2019 por los maestros perfumistas Ane Ayo y Philippe Roma y pertenece a la familia olfativa Amaderada Fresca. La pirámide de notas olfativas comienza con el aroma adictivo de la pimienta rosa y notas refrescantes de manzana y bergamota. En su corazón, ingredientes que contrastan con notas acuáticas, de avellana y sésamo. Aqua Kenzo Pour Homme finaliza con un fondo cremoso e irresistible de sándalo, cedro, ámbar, almizcle, haba tonka y vainilla.'
    },
    { 
        id: '11', 
        name: 'BASE DE MAQUILLAJE COMPLETE COVERAGE', 
        price: 3090, 
        marca: 'LUCY ANDERSON',
        category: 'maquillaje', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=5ebc334f7f5a7_m.jpeg&tipo=AART&alto=250&ancho=250', 
        stock: 250, 
        description:'¿Por qué elegirla? • Textura fluida. • Cobertura extrema. • Duración de 18 hs. • Alto grado de corrección de imperfecciones. • Piel lisa, natural y uniforme. • Acabado mate símil segunda piel. • Disponible en tres tonos. • Para todo tipo de pieles.'
    },
    { 
        id: '12', 
        name: 'CORRECTOR PERFECTION HD', 
        price: 2265, 
        marca: 'AREX',
        category: 'maquillaje', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=5ebef1aadc79d_m.jpg&tipo=AART&alto=250&ancho=250', 
        stock: 120, 
        description:'CORRECTOR corrije y disimula ojeras, rojeces, signos de fatiga e imperfecciones. Proporciona un aspecto natural y uniforme.'
    },
    { 
        id: '13', 
        name: 'LABIAL LIQUIDO MATTE', 
        price: 935, 
        marca: 'AREX',
        category: 'maquillaje', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=5ebee0d61c70d_m.jpg&tipo=AART&alto=250&ancho=250', 
        stock: 250, 
        description:'El LABIAL LÍQUIDO MATTE posee una fórmula hipoalergénica. Es de textura aterciopelada, confortable y super humectante. Long Lasting (de larga duración) con tonos super saturados y de máxima cobertura.'
    },
    { 
        id: '14', 
        name: 'DELINEADOR DE OJOS RETRACTIL SMOKY HIGH DEFINITION 01', 
        price: 1550, 
        marca: 'LUCY ANDERSON',
        category: 'maquillaje', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=5ebed40d41446_m.jpeg&tipo=AART&alto=250&ancho=250', 
        stock: 600, 
        description:'¿Por qué elegirlo?• Mecanismo retráctil al que no se necesita sacarle punta.• Mirada bien definida.• Permiten perfilar, modificar e intensificar el contorno del ojo fácilmente.• Se desliza suavemente.'
    },
    { 
        id: '15', 
        name: 'MASCARA CON KERATINA NOIR', 
        price: 1600, 
        marca: 'ANDRE LATOUR',
        category: 'maquillaje', 
        img:'https://raffeperfumerias.com/Funciones/mostrarimagen.php?imagen=5eb98afe80738_m.jpg&tipo=AART&alto=250&ancho=250', 
        stock: 320, 
        description:'Máscara para pestañas Revitalizante con Keratina x 10grs. Color Noir (negro). Su exclusiva fórmula con Keratina, nutre y protege, alargando las pestañas.'
    },


]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProduct = (id) =>{


    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsCat = (catId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === catId))
        }, 1000)
    })
}