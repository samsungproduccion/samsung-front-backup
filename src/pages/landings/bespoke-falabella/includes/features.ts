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
        description: 'Elige la dirección de apertura de la puerta según el diseño de tu cocina',
        img: feature1,
        alt: 'feature 1',
    },
    {
        title: 'Refrigeración Flexible*',
        description: 'Elige activar el modo conservador o congelador de acuerdo a tus necesidades',
        img: feature2,
        alt: 'feature 2',
        info: '*Aplica solo en modelo 1 Door'
    },
    {
        title: 'Metal Cooling™',
        description: 'Recupera el frío perdido hasta un 40% más rápido',
        img: feature3,
        alt: 'feature 3',
    },
    {
        title: 'SpaceMax™',
        description: 'Disfruta de un mayor espacio interno sin aumentar el tamaño exterior',
        img: feature4,
        alt: 'feature 4',
    },
    {
        title: 'All-Around Cooling',
        description: 'Multiples salidas de aire para una mayor distribución del frío en tus alimentos',
        img: feature5,
        alt: 'feature 5',
    },
    {
        title: 'Power Cool / Power Freeze',
        description: 'Toca el botón <b>Power Cool</b>  para enfriar rápidament y <b>Power Freeze</b> para congelar',
        img: feature6,
        alt: 'feature 6',
    }
];