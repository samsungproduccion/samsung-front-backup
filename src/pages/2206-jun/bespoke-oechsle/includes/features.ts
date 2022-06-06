import feature1 from "../../../../assets/images/bespoke-falabella/feature-1.jpg";
import feature2 from "../../../../assets/images/bespoke-falabella/feature-2.jpg";
import feature3 from "../../../../assets/images/bespoke-falabella/feature-3.jpg";
import feature4 from "../../../../assets/images/bespoke-falabella/feature-4.jpg";
import feature5 from "../../../../assets/images/bespoke-falabella/feature-5.jpg";
import feature6 from "../../../../assets/images/bespoke-falabella/feature-6.jpg";

import { feature } from "../../../../types/bespoke";


export const feature_list: feature[] =[
    {
        title: 'Puerta Reversible',
        description: 'Sistema de refrigeración con múltiples salidas de aire para una mayor distribucion del frio de esquina a esquina.',
        img: feature1,
        alt: 'feature 1',
    },
    {
        title: 'Refrigeracion Flexible',
        description: 'Recupera el frío perdido rápidamente ayudando a mantener la temperatura óptima dentro de la refrigeradora, restaurándola hasta en un 40% más rápido.',
        img: feature2,
        alt: 'feature 2',
        info: '*Aplica solo en modelo 1 Door'
    },
    {
        title: 'Metal Cooling™',
        description: 'Disfruta de mayor espacio interno, sin aumentar el tamaño exterior. Las paredes de la refrigeradora son mas delgadas para una mayor capacidad de alamcenamiento.',
        img: feature3,
        alt: 'feature 3',
    },
    {
        title: 'SpaceMax™',
        description: 'Puedes elegir la dirección de apertura de la refrigeradora, y combinarla con el diseño de tu cocina.',
        img: feature4,
        alt: 'feature 4',
    },
    {
        title: 'All-Around Cooling',
        description: 'Elige entre activar el modo conservador o congelador, en base a lo que necesites almacenar.',
        img: feature5,
        alt: 'feature 5',
    },
    {
        title: 'Power Cool / Power Freeze',
        description: 'Genera aire frío intensamente en el conservador, por lo que los alimentos y las bebidas se enfrían rapidamente.',
        img: feature6,
        alt: 'feature 6',
    }
];