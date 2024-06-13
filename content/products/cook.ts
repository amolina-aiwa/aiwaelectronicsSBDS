import { Product } from "../types";
import { fileserver } from "../../config/config";

export const cook: Product[] = [
    { // AW-YG715
        name: `Yogurtera`,
        sku: `AW-YG715`,
        link: `/productos/AW-YG715`,
        categories: [112],
        imgs: [
            `/products/AW-YG715/img/1.webp`,
            `/products/AW-YG715/img/2.webp`,
            `/products/AW-YG715/img/3.webp`,
            `/products/AW-YG715/img/4.webp`,
            `/products/AW-YG715/img/5.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "3º Generación",
        altBackground: true,
        banners: [
            {
                title: `Disfrutá de un desayuno natural`,
                img: fileserver + `/banners/AW-YG715/AW-YG715_01.png`,
                desc: `Personaliza tus sabores favoritos con diferentes opciones,Fácil de usar y con resultados sorprendentes, nuestra yogurtera te permite experimentar con sabores y texturas. `,
            },
            {
                title: `¡ Super Fácil !`,
                img: fileserver + `/banners/AW-YG715/AW-YG715_02.png`,
                desc: `Un desayuno bien equilibrado te brinda la energía necesaria para enfrentar el día con todo. En simples pasos obetene los resultados mas deliciosos`,
            },
            {
                title: `Una opción saludable`,
                img: fileserver + `/banners/AW-YG715/AW-YG715_03.png`,
                desc: `Controlas cada ingrediente, asegurándote de que cada bocado sea puro placer y nutrición. `,
            },
            {
                title: `Prepará las raciones para todo el día`,
                img: fileserver + `/banners/AW-YG715/AW-YG715_04.png`,
                desc: `Con capacidad para preparar 1.2 litros de yogur, te permitirá disfrutar de un alimento casero fresco  con facilidad.`,
            }
        ],
        shortDesc: `Fácil, Casero y Sano`,
        longDesc:
            "Prepara yogures deliciosos en casa con nuestra Yogurtera de Acero Inoxidable. Equipada con 7 frascos de vidrio de 180 ml, control automático de temperatura y bajo consumo eléctrico, esta yogurtera combina comodidad y eficiencia. Su diseño elegante en acero inoxidable y la luz LED indicadora hacen que sea fácil y moderna. ¡Disfruta de yogures personalizados sin esfuerzo!",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 98 },
            { id: 99, },
            { id: 100 },
            { id: 101 },
            { id: 102 },
        ],
        features: [
            { id: 2, value: `20W` },
            { id: 16, value: `235 * 115 mm` },
            { id: 17, value: `250* 250 * 135 mm` },
            { id: 19, value: `7798111355364` },
            { id: 59, value: `220 - 240V` },
            { id: 60, value: `1,2L (7 frascos de 180 ml)` },
        ],
        includes: [
            38,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1wGn0gSBSx-IeRoY5tyqSLwL7b4HYglWl`,
    },

    { // AW-YG816
        name: `Yogurtera digital`,
        sku: `AW-YG816`,
        link: `/productos/AW-YG816`,
        categories: [112],
        imgs: [
            `/products/AW-YG816/img/1.webp`,
            `/products/AW-YG816/img/2.webp`,
            `/products/AW-YG816/img/3.webp`,
            `/products/AW-YG816/img/4.webp`,
            `/products/AW-YG816/img/5.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: `Disfrutá de un desayuno natural`,
                img: fileserver + `/banners/AW-YG816/AW-YG816_01.png`,
                desc: `Personaliza tus sabores favoritos con diferentes opciones,Fácil de usar y con resultados sorprendentes, nuestra yogurtera te permite experimentar con sabores y texturas.  `,
            },
            {
                title: `¡ Super Fácil !`,
                img: fileserver + `/banners/AW-YG816/AW-YG816_02.png`,
                desc: `Olvídate de los procesos complicados, nuestra yogurtera  hace todo el trabajo por vos, programá el tiempo, la temperatura y listo te avisará cuando el yogur esté listo.`,
            },
            {
                title: `Una opción saludable`,
                img: fileserver + `/banners/AW-YG816/AW-YG816_03.png`,
                desc: `Controlas cada ingrediente, asegurándote de que cada bocado sea puro placer y nutrición.  `,
            },
            {
                title: `Prepará las raciones para todo el día`,
                img: fileserver + `/banners/AW-YG816/AW-YG816_04.png`,
                desc: `Con capacidad para preparar 1.4 litros de yogur, te permitirá disfrutar de un alimento casero fresco.`,
            }
        ],
        shortDesc: `Súper Fácil, Automático`,
        longDesc:
            "Prepara yogures deliciosos con nuestra Yogurtera Premium. Con 8 frascos de vidrio, panel digital, y exterior de acero inoxidable, es fácil de usar y eficiente energéticamente. ¡Disfruta de yogures caseros con un sabor perfecto!",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 103 },
            { id: 100 },
            { id: 101 },
            { id: 102 },
        ],
        features: [
            { id: 2, value: `25W` },
            { id: 16, value: `145 * 368 * 190 mm` },
            { id: 17, value: `140* 360 * 190 mm` },
            { id: 19, value: `7798111355357` },
            { id: 59, value: `220 - 240V` },
            { id: 60, value: `1,4L (8 frascos de 180 ml)` },
        ],
        includes: [
            38,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1XymTgGHR137SIuVi9aRM5vItax_H2RcU`,
    },

    { // AW-BP508B
        name: `Batidora de pie Blanco`,
        sku: `AW-BP508B`,
        link: `/productos/AW-BP508B`,
        categories: [115],
        imgs: [
            `/products/AW-BP508B/img/1.webp`,
            `/products/AW-BP508B/img/2.webp`,
            `/products/AW-BP508B/img/3.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Accesorios de Teflón:`,
                img: fileserver + `/banners/AW-BP508B/1.png`,
                desc: `Experimenta la cocina sin límites con los accesorios de Teflón de nuestra batidora. Batir, mezclar y amasar nunca fue tan fácil, gracias a la tecnología antiadherente que asegura resultados perfectos y sin esfuerzo.`,
            },
            {
                title: `Control Total `,
                img: fileserver + `/banners/AW-BP508B/2.png`,
                desc: `Perfecciona cada receta con nuestro panel digital touch. Explora los 8 modos de velocidad y programa el temporizador con precisión. La combinación perfecta de control y comodidad para lograr resultados excelentes.`,
            },
            {
                title: `Potencia y Eficiencia`,
                img: fileserver + `/banners/AW-BP508B/3.png`,
                desc: `Haz frente a cualquier desafío  con nuestra batidora de pie digital. Su potencia de 1200W y capacidad de 5,2`,
            },
        ],
        shortDesc: `Versátil, Potente, Precisa`,
        longDesc:
            "Experimenta la cocina sin límites con nuestra batidora de pie digital. Equipada con accesorios de Teflón, ofrece una experiencia antiadherente para batir, mezclar y amasar con facilidad. El panel digital touch con 8 modos de velocidad y temporizador brinda control preciso. Con una potencia de 1200W y una capacidad de 5,2 litros, esta batidora es la elección perfecta para superar cualquier desafío culinario, logrando resultados excelentes en cada receta.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 106 },
            { id: 105 },
            { id: 102 },
            { id: 107 },
            { id: 108 },
            { id: 103 },
            { id: 109, value: `1200W` },
            { id: 110 },
        ],
        features: [
            { id: 59, value: `220 - 240V` },
            { id: 2, value: `1200W` },
            { id: 60, value: `5,2L` },
            { id: 16, value: `390 * 314 * 231 mm` },
            { id: 17, value: `413* 339 * 244 mm` },
            { id: 61, value: `Si` }, //Temporizador digital
            { id: 62, value: `0 a 15 minutos` }, //Duración de temporizador
            { id: 63, value: `8` }, //Cantidad de velocidades
            { id: 64, value: `Si` }, //Es planetaria
            { id: 65, value: `Bate, mezcla y amasa` }, //Funciones
            { id: 66, value: `3` }, //Cantidad de accesorios
            { id: 67, value: `Teflón` }, //Material de los accesorios
            { id: 68, value: `Si` }, //Panel digital touch
            { id: 69, value: `Doméstico` }, //Uso recomendado
            { id: 70, value: `50/60 Hz` }, //Frecuencia
            { id: 71, value: `4KG` }, //Peso


        ],
        includes: [
            39,
            40,
            41,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1QteI1l_MlK_aNEGzbvVVDhFxVNAB8Unz`,
    },

    { // AW-BP508C
        name: `Batidora de pie Crema`,
        sku: `AW-BP508C`,
        link: `/productos/AW-BP508C`,
        categories: [115],
        imgs: [
            `/products/AW-BP508C/img/1.webp`,
            `/products/AW-BP508C/img/2.webp`,
            `/products/AW-BP508C/img/3.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Accesorios de Teflón:`,
                img: fileserver + `/banners/AW-BP508C/1.png`,
                desc: `Experimenta la cocina sin límites con los accesorios de Teflón de nuestra batidora. Batir, mezclar y amasar nunca fue tan fácil, gracias a la tecnología antiadherente que asegura resultados perfectos y sin esfuerzo.`,
            },
            {
                title: `Control Total `,
                img: fileserver + `/banners/AW-BP508C/2.png`,
                desc: `Perfecciona cada receta con nuestro panel digital touch. Explora los 8 modos de velocidad y programa el temporizador con precisión. La combinación perfecta de control y comodidad para lograr resultados excelentes.`,
            },
            {
                title: `Potencia y Eficiencia`,
                img: fileserver + `/banners/AW-BP508C/3.png`,
                desc: `Haz frente a cualquier desafío  con nuestra batidora de pie digital. Su potencia de 1200W y capacidad de 5,2`,
            },
        ],
        shortDesc: `Versátil, Potente, Precisa`,
        longDesc:
            "Experimenta la cocina sin límites con nuestra batidora de pie digital. Equipada con accesorios de Teflón, ofrece una experiencia antiadherente para batir, mezclar y amasar con facilidad. El panel digital touch con 8 modos de velocidad y temporizador brinda control preciso. Con una potencia de 1200W y una capacidad de 5,2 litros, esta batidora es la elección perfecta para superar cualquier desafío culinario, logrando resultados excelentes en cada receta.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 106 },
            { id: 105 },
            { id: 102 },
            { id: 107 },
            { id: 108 },
            { id: 103 },
            { id: 109, value: `1200W` },
            { id: 110 },
        ],
        features: [

            { id: 59, value: `220 - 240V` },
            { id: 2, value: `1200W` },
            { id: 60, value: `5,2L` },
            { id: 16, value: `390 * 314 * 231 mm` },
            { id: 17, value: `413* 339 * 244 mm` },
            { id: 61, value: `Si` }, //Temporizador digital
            { id: 62, value: `0 a 15 minutos` }, //Duración de temporizador
            { id: 63, value: `8` }, //Cantidad de velocidades
            { id: 64, value: `Si` }, //Es planetaria
            { id: 65, value: `Bate, mezcla y amasa` }, //Funciones
            { id: 66, value: `3` }, //Cantidad de accesorios
            { id: 67, value: `Teflón` }, //Material de los accesorios
            { id: 68, value: `Si` }, //Panel digital touch
            { id: 69, value: `Doméstico` }, //Uso recomendado
            { id: 70, value: `50/60 Hz` }, //Frecuencia
            { id: 71, value: `4KG` }, //Peso
        ],
        includes: [
            39,
            40,
            41,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1YzhlyNZVoJjESNjuzOntG_NwXiqiEQNm`,
    },

    { // AW-BP508N
        name: `Batidora de pie Negro`,
        sku: `AW-BP508N`,
        link: `/productos/AW-BP508N`,
        categories: [115],
        imgs: [
            `/products/AW-BP508N/img/1.webp`,
            `/products/AW-BP508N/img/2.webp`,
            `/products/AW-BP508N/img/3.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Accesorios de Teflón:`,
                img: fileserver + `/banners/AW-BP508N/1.png`,
                desc: `Experimenta la cocina sin límites con los accesorios de Teflón de nuestra batidora. Batir, mezclar y amasar nunca fue tan fácil, gracias a la tecnología antiadherente que asegura resultados perfectos y sin esfuerzo.`,
            },
            {
                title: `Control Total `,
                img: fileserver + `/banners/AW-BP508N/2.png`,
                desc: `Perfecciona cada receta con nuestro panel digital touch. Explora los 8 modos de velocidad y programa el temporizador con precisión. La combinación perfecta de control y comodidad para lograr resultados excelentes.`,
            },
            {
                title: `Potencia y Eficiencia`,
                img: fileserver + `/banners/AW-BP508N/3.png`,
                desc: `Haz frente a cualquier desafío  con nuestra batidora de pie digital. Su potencia de 1200W y capacidad de 5,2`,
            },
        ],
        shortDesc: `Versátil, Potente, Precisa`,
        longDesc:
            "Experimenta la cocina sin límites con nuestra batidora de pie digital. Equipada con accesorios de Teflón, ofrece una experiencia antiadherente para batir, mezclar y amasar con facilidad. El panel digital touch con 8 modos de velocidad y temporizador brinda control preciso. Con una potencia de 1200W y una capacidad de 5,2 litros, esta batidora es la elección perfecta para superar cualquier desafío culinario, logrando resultados excelentes en cada receta.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 106 },
            { id: 105 },
            { id: 102 },
            { id: 107 },
            { id: 108 },
            { id: 103 },
            { id: 109, value: `1200W` },
            { id: 110 },
        ],
        features: [

            { id: 59, value: `220 - 240V` },
            { id: 2, value: `1200W` },
            { id: 60, value: `5,2L` },
            { id: 16, value: `390 * 314 * 231 mm` },
            { id: 17, value: `413* 339 * 244 mm` },
            { id: 61, value: `Si` }, //Temporizador digital
            { id: 62, value: `0 a 15 minutos` }, //Duración de temporizador
            { id: 63, value: `8` }, //Cantidad de velocidades
            { id: 64, value: `Si` }, //Es planetaria
            { id: 65, value: `Bate, mezcla y amasa` }, //Funciones
            { id: 66, value: `3` }, //Cantidad de accesorios
            { id: 67, value: `Teflón` }, //Material de los accesorios
            { id: 68, value: `Si` }, //Panel digital touch
            { id: 69, value: `Doméstico` }, //Uso recomendado
            { id: 70, value: `50/60 Hz` }, //Frecuencia
            { id: 71, value: `4KG` }, //Peso


        ],
        includes: [
            39,
            40,
            41,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1zaeA8_DUJfLOPkqzdFZHPCupSF4t-eXN`,
    },

    { // AW-BP508R
        name: `Batidora de pie Rojo`,
        sku: `AW-BP508R`,
        link: `/productos/AW-BP508R`,
        categories: [115],
        imgs: [
            `/products/AW-BP508R/img/1.webp`,
            `/products/AW-BP508R/img/2.webp`,
            `/products/AW-BP508R/img/3.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Accesorios de Teflón:`,
                img: fileserver + `/banners/AW-BP508R/1.png`,
                desc: `Experimenta la cocina sin límites con los accesorios de Teflón de nuestra batidora. Batir, mezclar y amasar nunca fue tan fácil, gracias a la tecnología antiadherente que asegura resultados perfectos y sin esfuerzo.`,
            },
            {
                title: `Control Total `,
                img: fileserver + `/banners/AW-BP508R/2.png`,
                desc: `Perfecciona cada receta con nuestro panel digital touch. Explora los 8 modos de velocidad y programa el temporizador con precisión. La combinación perfecta de control y comodidad para lograr resultados excelentes.`,
            },
            {
                title: `Potencia y Eficiencia`,
                img: fileserver + `/banners/AW-BP508R/3.png`,
                desc: `Haz frente a cualquier desafío  con nuestra batidora de pie digital. Su potencia de 1200W y capacidad de 5,2`,
            },
        ],
        shortDesc: `Versátil, Potente, Precisa`,
        longDesc:
            "Experimenta la cocina sin límites con nuestra batidora de pie digital. Equipada con accesorios de Teflón, ofrece una experiencia antiadherente para batir, mezclar y amasar con facilidad. El panel digital touch con 8 modos de velocidad y temporizador brinda control preciso. Con una potencia de 1200W y una capacidad de 5,2 litros, esta batidora es la elección perfecta para superar cualquier desafío culinario, logrando resultados excelentes en cada receta.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 106 },
            { id: 105 },
            { id: 102 },
            { id: 107 },
            { id: 108 },
            { id: 103 },
            { id: 109, value: `1200W` },
            { id: 110 },
        ],
        features: [

            { id: 59, value: `220 - 240V` },
            { id: 2, value: `1200W` },
            { id: 60, value: `5,2L` },
            { id: 16, value: `390 * 314 * 231 mm` },
            { id: 17, value: `413* 339 * 244 mm` },
            { id: 61, value: `Si` }, //Temporizador digital
            { id: 62, value: `0 a 15 minutos` }, //Duración de temporizador
            { id: 63, value: `8` }, //Cantidad de velocidades
            { id: 64, value: `Si` }, //Es planetaria
            { id: 65, value: `Bate, mezcla y amasa` }, //Funciones
            { id: 66, value: `3` }, //Cantidad de accesorios
            { id: 67, value: `Teflón` }, //Material de los accesorios
            { id: 68, value: `Si` }, //Panel digital touch
            { id: 69, value: `Doméstico` }, //Uso recomendado
            { id: 70, value: `50/60 Hz` }, //Frecuencia
            { id: 71, value: `4KG` }, //Peso


        ],
        includes: [
            39,
            40,
            41,
            9, // Manual y garantía
        ],
        downloads: `https://drive.google.com/drive/folders/1HqjImgwSVlN5EtmzZZyr40ujbl2jV4-H`,
    },

    { // AW-FA35B
        name: `Freidora de Aire Blanco`,
        sku: `AW-FA35B`,
        link: `/productos/AW-FA35B`,
        categories: [113],
        imgs: [
            `/products/AW-FA35B/img/1.webp`,
            `/products/AW-FA35B/img/2.webp`,
            `/products/AW-FA35B/img/3.webp`,
            `/products/AW-FA35B/img/4.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Potencia y capacidad`,
                img: fileserver + `/banners/AW-FA35B/1.png`,
                desc: `Experimentá cocinando, con capacidad de 3,6 L  podras preparar porciones generosas y gracias a su potencia de 1400 W obtendras resultados rápidos y crujientes. `,
            },
            {
                title: `Cociná saludable`,
                img: fileserver + `/banners/AW-FA35B/2.png`,
                desc: `Reducí el aceite para una alimentación más saludable al disminuir grasas saturadas. Además, facilita la limpieza al generar menos residuos grasos.`,
            },
            {
                title: `Variedad de alimentos`,
                img: fileserver + `/banners/AW-FA35B/3.png`,
                desc: `Podrás preparar una amplia variedad de alimentos y también recalentarlos con facilidad en cuestion de minutos manteniendo su textura y sabor originales. `,
            },
            {
                title: `Ahorrá energía`,
                img: fileserver + `/banners/AW-FA35B/4.png`,
                desc: `No solo reduce el consumo de energía, sino que también cuenta con apagado automático para una mayor seguridad y conveniencia.  Además podrás limpiar sin esfuerzo  su canasta desmontable apta para lavavajillas.  `,
            },
        ],
        shortDesc: `Potente, Saludable, Versátil.`,
        longDesc:
            "La freidora de aire de 3.6 L y 1400 W es potente y versátil. Reduce el uso de aceite para una alimentación saludable y facilita la limpieza. Ideal para preparar una variedad de alimentos y recalentarlos rápidamente, manteniendo su textura y sabor originales.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 109, value: `1400W` },
            { id: 111 }, //Ahorro de energia
            { id: 112 }, //Aire caliente 360°
            { id: 113 }, //Apagado automático
            { id: 114 }, //Apto para lavavajillas
            { id: 115, value: `3,6L` }, //Capacidad 
            { id: 116 }, //Interior antiadherente
            { id: 117 }, //Multiples comidas
            { id: 118 }, //Recalentá o cociná
        ],
        features: [
            { id: 59, value: `220 - 240V` }, //Tension
            { id: 2, value: `1400W` }, //Potencia
            { id: 60, value: `3,6L` }, //Capacidad
            { id: 16, value: `240 * 260 * 310 mm` },
            { id: 17, value: `310* 310 * 330 mm` },
            { id: 19, value: `7798111355425` },


        ],
        includes: [
            9, // Manual y garantía
        ],
        downloads: ``,
    },

    { // AW-FA35N
        name: `Freidora de Aire Negro`,
        sku: `AW-FA35N`,
        link: `/productos/AW-FA35N`,
        categories: [113],
        imgs: [
            `/products/AW-FA35N/img/1.webp`,
            `/products/AW-FA35N/img/2.webp`,
            `/products/AW-FA35N/img/3.webp`,
            `/products/AW-FA35N/img/4.webp`,
        ].map((e) => fileserver + e),
        360: false,
        gen: "1º Generación",
        altBackground: true,
        banners: [
            {
                title: ` Potencia y capacidad`,
                img: fileserver + `/banners/AW-FA35N/1.png`,
                desc: `Experimentá cocinando, con capacidad de 3,6 L  podras preparar porciones generosas y gracias a su potencia de 1400 W obtendras resultados rápidos y crujientes. `,
            },
            {
                title: `Cociná saludable`,
                img: fileserver + `/banners/AW-FA35N/2.png`,
                desc: `Reducí el aceite para una alimentación más saludable al disminuir grasas saturadas. Además, facilita la limpieza al generar menos residuos grasos.`,
            },
            {
                title: `Variedad de alimentos`,
                img: fileserver + `/banners/AW-FA35N/3.png`,
                desc: `Podrás preparar una amplia variedad de alimentos y también recalentarlos con facilidad en cuestion de minutos manteniendo su textura y sabor originales. `,
            },
            {
                title: `Ahorrá energía`,
                img: fileserver + `/banners/AW-FA35N/4.png`,
                desc: `No solo reduce el consumo de energía, sino que también cuenta con apagado automático para una mayor seguridad y conveniencia.  Además podrás limpiar sin esfuerzo  su canasta desmontable apta para lavavajillas.  `,
            },
        ],
        shortDesc: `Potente, Saludable, Versátil.`,
        longDesc:
            "La freidora de aire de 3.6 L y 1400 W es potente y versátil. Reduce el uso de aceite para una alimentación saludable y facilita la limpieza. Ideal para preparar una variedad de alimentos y recalentarlos rápidamente, manteniendo su textura y sabor originales.",
        buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
        featuredFeatures: [
            { id: 109, value: `1400W` },
            { id: 111 }, //Ahorro de energia
            { id: 112 }, //Aire caliente 360°
            { id: 113 }, //Apagado automático
            { id: 114 }, //Apto para lavavajillas
            { id: 115, value: `3,6L` }, //Capacidad 
            { id: 116 }, //Interior antiadherente
            { id: 117 }, //Multiples comidas
            { id: 118 }, //Recalentá o cociná
        ],
        features: [
            { id: 59, value: `220 - 240V` }, //Tension
            { id: 2, value: `1400W` }, //Potencia
            { id: 60, value: `3,6L` }, //Capacidad
            { id: 16, value: `240 * 260 * 310 mm` },
            { id: 17, value: `310* 310 * 330 mm` },
            { id: 19, value: `7798111355432` },


        ],
        includes: [
            9, // Manual y garantía
        ],
        downloads: ``,
    },

    //     { // AW-FA20N
    //         name: `Freidora de Aire Negro`,
    //         sku: `AW-FA20N`,
    //         link: `/productos/AW-FA20N`,
    //         categories: [113],
    //         imgs: [
    //             `/products/AW-FA20N/img/1.webp`,
    //             `/products/AW-FA20N/img/2.webp`,
    //             `/products/AW-FA20N/img/3.webp`,
    //         ].map((e) => fileserver + e),
    //         360: false,
    //         gen: "1º Generación",
    //         altBackground: true,
    //         banners: [
    //             {
    //                 title: ` Potencia y capacidad`,
    //                 img: fileserver + `/banners/AW-FA20N/1.png`,
    //                 desc: `Con capacidad de 2,3 L  podras preparar porciones para tus invitados y gracias a su potencia de 1000 W disfrutarás de resultados rápidos y sabrosos en cada comida.  `,
    //             },
    //             {
    //                 title: `Cociná saludable`,
    //                 img: fileserver + `/banners/AW-FA20N/2.png`,
    //                 desc: `Reducí el aceite para una alimentación más saludable al disminuir grasas saturadas. Además, facilita la limpieza al generar menos residuos grasos.`,
    //             },
    //             {
    //                 title: `Variedad de alimentos`,
    //                 img: fileserver + `/banners/AW-FA20N/3.png`,
    //                 desc: `Podrás preparar una amplia variedad de alimentos, hornear, asar y recalentar con facilidad, ofreciendo versatilidad en la cocina. Desde papas fritas crujientes hasta pollo jugoso y vegetales asados.  Además, su función de recalentado te permite disfrutar de tus comidas favoritas en minutos, manteniendo su textura y sabor originales.  `,
    //             },
    //             {
    //                 title: `Facíl de limpiar`,
    //                 img: fileserver + `/banners/AW-FA20N/4.png`,
    //                 desc: `Su canasta desmontable y revestimiento antiadherente hacen que la limpieza sea sencilla. Además, es apta para lavavajillas, simplificando aún más tu rutina.  `,
    //             },
    //         ],
    //         shortDesc: `Súper Fácil, Casero y Sano.`,
    //         longDesc:
    //             "La freidora de aire de 2.3 L y 1000 W es potente y versátil. Reduce el uso de aceite un 85% para una alimentación saludable y facilita la limpieza. Ideal para preparar una variedad de alimentos y recalentarlos rápidamente, manteniendo su textura y sabor originales.",
    //         buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
    //         featuredFeatures: [
    //             { id: 109, value: `1000W` },
    //             { id: 111 }, //Ahorro de energia
    //             { id: 112 }, //Aire caliente 360°
    //             { id: 113 }, //Apagado automático
    //             { id: 114 }, //Apto para lavavajillas
    //             { id: 115, value: `2,3L` }, //Capacidad
    //             { id: 116 }, //Interior antiadherente
    //             { id: 117 }, //Multiples comidas
    //             { id: 118 }, //Recalentá o cociná
    //             { id: 119 }, //Temperatura regulable
    //             { id: 120 }, //Timer programable
    //         ],
    //         features: [
    //             { id: 59, value: `220 - 240V` }, //Tension
    //             { id: 2, value: `900w - 1000W` }, //Potencia
    //             { id: 60, value: `2,3L` }, //Capacidad
    //             { id: 16, value: `215 * 265 * 280 mm` },
    //             { id: 17, value: `255 * 255 * 315 mm` },
    //             { id: 19, value: `7798111355449` },


    //         ],
    //         includes: [
    //             9, // Manual y garantía
    //         ],
    //         downloads: ``,
    //     },

    //     { // AW-FA65N
    //         name: `Freidora de Aire Negro`,
    //         sku: `AW-FA65N`,
    //         link: `/productos/AW-FA65N`,
    //         categories: [113],
    //         imgs: [
    //             `/products/AW-FA65N/img/1.webp`,
    //             `/products/AW-FA65N/img/2.webp`,
    //             `/products/AW-FA65N/img/3.webp`,
    //         ].map((e) => fileserver + e),
    //         360: false,
    //         gen: "1º Generación",
    //         altBackground: true,
    //         banners: [
    //             {
    //                 title: ` Potencia y capacidad`,
    //                 img: fileserver + `/banners/AW-FA65N/1.png`,
    //                 desc: `Esta potencia excepcional de 1850W garantiza un calentamiento rápido y una cocción uniforme, asegurando que cada bocado sea perfectamente dorado y crujiente. Con una capacidad espaciosa de 6.5 litros, tienes espacio más que suficiente para preparar porciones abundantes de tus platillos favoritos.  `,
    //             },
    //             {
    //                 title: `Experimentá cocinando`,
    //                 img: fileserver + `/banners/AW-FA65N/2.png`,
    //                 desc: ` 8 programas de cocción preestablecidos para simplificar aún más tus preparaciones. Cada programa está diseñado para garantizar resultados perfectos con solo presionar un botón. Con esta freidora, puedes experimentar la versatilidad de un chef profesional en la comodidad de tu hogar.`,
    //             },
    //             {
    //                 title: `Cociná saludable`,
    //                 img: fileserver + `/banners/AW-FA65N/3.png`,
    //                 desc: `¡Haz que tus comidas sean más saludables sin renunciar al sabor exquisito! Con la capacidad de reducir hasta un 85% el uso de aceite, esta freidora te permite disfrutar de tus comidas favoritas con menos grasa, sin comprometer la calidad ni el gusto.`,
    //             },
    //             {
    //                 title: `Cocciones aseguradas`,
    //                 img: fileserver + `/banners/AW-FA20N/4.png`,
    //                 desc: `Gracias a sus funciones de aire caliente 360°, temperatura regulable y un timer programable, podras prepara tus platos favoritos con precisión y facilidad. Además, su función de apagado automático garantiza una cocina segura y sin preocupaciones.`,
    //             },
    //         ],
    //         shortDesc: `Sano y riquísimo`,
    //         longDesc:
    //             "La freidora de aire de 6.5 L y 1850 W es potente y versátil. Reduce el uso de aceite un 85% para una alimentación saludable y facilita la limpieza. Ideal para preparar una variedad de alimentos y recalentarlos rápidamente, manteniendo su textura y sabor originales.",
    //         buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
    //         featuredFeatures: [
    //             { id: 109, value: `1850W` },
    //             { id: 111 }, //Ahorro de energia
    //             { id: 112 }, //Aire caliente 360°
    //             { id: 113 }, //Apagado automático
    //             { id: 114 }, //Apto para lavavajillas
    //             { id: 115, value: `6,5L` }, //Capacidad
    //             { id: 116 }, //Interior antiadherente
    //             { id: 119 }, //Temperatura regulable
    //             { id: 120 }, //Timer programable
    //             { id: 121 }, //8 programas de cocción
    //             { id: 122 }, //Panel touch digital
    //         ],
    //         features: [
    //             { id: 59, value: `220 - 240V` }, //Tension
    //             { id: 2, value: `1700w - 1850W` }, //Potencia
    //             { id: 60, value: `6,5L` }, //Capacidad
    //             { id: 16, value: `275 * 335 * 260 mm` }, //medidas producto
    //             { id: 17, value: `285 * 375 * 325 mm` },
    //             { id: 19, value: `7798111355456` },


    //         ],
    //         includes: [
    //             9, // Manual y garantía
    //         ],
    //         downloads: ``,
    //     },

    //     { // AW-FA80I
    //         name: `Freidora de Aire Digital`,
    //         sku: `AW-FA80I`,
    //         link: `/productos/AW-FA80I`,
    //         categories: [113],
    //         imgs: [
    //             `/products/AW-FA80I/img/1.webp`,
    //             `/products/AW-FA80I/img/2.webp`,
    //             `/products/AW-FA80I/img/3.webp`,
    //             `/products/AW-FA80I/img/4.webp`,
    //         ].map((e) => fileserver + e),
    //         360: false,
    //         gen: "1º Generación",
    //         altBackground: true,
    //         banners: [
    //             {
    //                 title: ` Potencia y capacidad`,
    //                 img: fileserver + `/banners/AW-FA80N/1.png`,
    //                 desc: `Gracias a su potente rendimiento, podrás preparar una amplia variedad de platos,Su generosa capacidad de 8 litros te permite cocinar para toda la familia o para tus amigos sin preocuparte por las porciones. Además, su diseño elegante y fácil de limpiar la convierte en la compañera perfecta para cualquier cocina moderna.`,
    //             },
    //             {
    //                 title: `Experimentá cocinando`,
    //                 img: fileserver + `/banners/AW-FA80N/2.png`,
    //                 desc: `Gracias a su tecnología avanzada, cada programa de cocción ajusta automáticamente la temperatura y el tiempo para garantizar una cocción precisa y uniforme en cada ocasión. ¡Nunca antes había sido tan fácil cocinar como un profesional en casa!`,
    //             },
    //             {
    //                 title: `Panel touch digital`,
    //                 img: fileserver + `/banners/AW-FA80N/3.png`,
    //                 desc: `Su pantalla digital te brinda una visualización clara y precisa de todas las configuraciones, para que nunca pierdas de vista el progreso de tus platos. Podrás seleccionar entre los 10 programas de cocción, personalizar la temperatura y el tiempo según tus preferencias.`,
    //             },
    //             {
    //                 title: `Control absoluto`,
    //                 img: fileserver + `/banners/AW-FA80N/4.png`,
    //                 desc: `Con su temperatura regulable, puedes personalizar cada sesión de cocina, mientras que la circulación de aire caliente 360° garantiza una cocción uniforme y rápida. Además, su capacidad para conservar el calor asegura que tus platos permanezcan calientes y deliciosos hasta el momento de servir. Pero eso no es todo, con el visor integrado en el canasto, tienes la libertad de observar el progreso de tu comida sin tener que abrir la tapa, asegurando resultados perfectos en cada preparación.`,
    //             },
    //         ],
    //         shortDesc: `Sano, casero y riquísimo`,
    //         longDesc:
    //             "La freidora de aire de 8 L y 2000 W es potente y versátil. Reduce el uso de aceite un 85% para una alimentación saludable y facilita la limpieza. Ideal para preparar una variedad de alimentos y recalentarlos rápidamente, manteniendo su textura y sabor originales.",
    //         buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
    //         featuredFeatures: [
    //             { id: 109, value: `2000W` },
    //             { id: 112 }, //Aire caliente 360°
    //             { id: 113 }, //Apagado automático
    //             { id: 114 }, //Apto para lavavajillas
    //             { id: 115, value: `8L` }, //Capacidad
    //             { id: 116 }, //Interior antiadherente
    //             { id: 119 }, //Temperatura regulable
    //             { id: 120 }, //Timer programable
    //             { id: 123 }, //10 programas de cocción
    //             { id: 122 }, //Panel touch digital
    //             { id: 124 }, //Conserva el calor
    //             { id: 125 }, //Rapida coccion
    //         ],
    //         features: [
    //             { id: 59, value: `220 - 240V` }, //Tension
    //             { id: 2, value: `1800w - 2000W` }, //Potencia
    //             { id: 60, value: `8L` }, //Capacidad
    //             { id: 16, value: `355 * 380 * 290 mm` }, //medidas producto
    //             { id: 17, value: `400 * 402 * 347 mm` },
    //             { id: 19, value: `7798111355463` },


    //         ],
    //         includes: [
    //             9, // Manual y garantía
    //         ],
    //         downloads: ``,
    //     },

    //     { // AW-FA244
    //         name: `Freidora de Aire Digital`,
    //         sku: `AW-FA244`,
    //         link: `/productos/AW-FA244`,
    //         categories: [113],
    //         imgs: [
    //             `/products/AW-FA244/img/1.webp`,
    //             `/products/AW-FA244/img/2.webp`,
    //             `/products/AW-FA244/img/3.webp`,
    //         ].map((e) => fileserver + e),
    //         360: false,
    //         gen: "1º Generación",
    //         altBackground: true,
    //         banners: [
    //             {
    //                 title: ` Potencia y capacidad`,
    //                 img: fileserver + `/banners/AW-FA244/1.png`,
    //                 desc: `Con 2600W de potencia y una capacidad total de 8 litros divididos en dos canastas de 4 litros cada una, esta freidora es perfecta para satisfacer incluso los apetitos más grandes.`,
    //             },
    //             {
    //                 title: `Cociná en simultaneo`,
    //                 img: fileserver + `/banners/AW-FA244/2.png`,
    //                 desc: `Con sus dos canastas independientes, puedes cocinar dos platos diferentes simultáneamente, ahorrando tiempo y energía en la cocina.`,
    //             },
    //             {
    //                 title: `Experimentá cocinando`,
    //                 img: fileserver + `/banners/AW-FA244/3.png`,
    //                 desc: `Ya sea que desees freír, hornear, asar, deshidratar, descongelar o simplemente calentar tus platos favoritos, nuestros programas de cocción te permiten lograr resultados perfectos con solo tocar un botón. `,
    //             },
    //             {
    //                 title: `Panel touch digital`,
    //                 img: fileserver + `/banners/AW-FA244/4.png`,
    //                 desc: `Con solo tocar la pantalla, puedes seleccionar fácilmente entre los 6 programas de cocción preestablecidos y ajustar la temperatura y el tiempo según tus preferencias. Además, su pantalla digital proporciona una visualización clara y precisa de todas las configuraciones, facilitando el seguimiento del progreso de tus platos.`,
    //             },
    //         ],
    //         shortDesc: `Súper fácil y casero`,
    //         longDesc:
    //             "La freidora de aire de 4L + 4L y 2600 W es potente y versátil. Reduce el uso de aceite un 85% para una alimentación saludable y facilita la limpieza. Ideal para preparar una variedad de alimentos y recalentarlos rápidamente, manteniendo su textura y sabor originales.",
    //         buyLink: `https://tienda.mercadolibre.com.ar/aiwa-electronics`,
    //         featuredFeatures: [
    //             { id: 109, value: `2600W` },
    //             { id: 112 }, //Aire caliente 360°
    //             { id: 113 }, //Apagado automático
    //             { id: 114 }, //Apto para lavavajillas
    //             { id: 115, value: `8L` }, //Capacidad
    //             { id: 116 }, //Interior antiadherente
    //             { id: 119 }, //Temperatura regulable
    //             { id: 120 }, //Timer programable
    //             { id: 126 }, //6 programas de cocción
    //             { id: 122 }, //Panel touch digital
    //             { id: 127 }, //Descongelar
    //             { id: 128 }, //Deshidratador
    //         ],
    //         features: [
    //             { id: 59, value: `220 - 240V` }, //Tension
    //             { id: 2, value: `2000w - 2600W` }, //Potencia
    //             { id: 60, value: `8L (cada canasta 4L)` }, //Capacidad
    //             { id: 16, value: `390 * 290 * 360 mm` }, //medidas producto
    //             { id: 17, value: `436 * 315 * 395 mm` },
    //             { id: 19, value: `7798111355470` },


    //         ],
    //         includes: [
    //             9, // Manual y garantía
    //         ],
    //         downloads: ``,
    //     },
]