var basico1 = {
    curso: 'Análisis Complejo 1',
    profesor: "Francisco Marcos López García",
    creditos: 9,
    sede: 'IM-CU',
    email: 'marcos.lopez@im.unam.mx',
    salon: "Salón 3 IMATE, CU",
    dias: 'mar, ju',
    horario: '11:30-13:45'
};


var basico2 = {
    curso: 'Análisis Complejo 1',
    profesor: "Víctor Alfonso Vicente Benítez",
    ccreditos: 9,
    sede: 'IM-JUR',
    email: 'vavicentebenitez@im.unam.mx',
    salon: "Aula de seminarios 3",
    dias: 'lu, mi',
    horario: '15:00-17:45'
};



var basico3 = {
    curso: 'Análisis Real 1',
    profesor: "Salvador Pérez Esteva",
    ccreditos: 9,
    sede: 'IM-CVCA',
    email: 'spesteva@im.unam.mx',
    salon: "Cub. 5, Tercer piso",
    dias: 'mi,vi',
    horario: '10:00-12:15'
};

var basico4 = {
    curso: 'Análisis Real 1',
    profesor: "José María González Barrios Murguía",
    ccreditos: 9,
    sede: 'IIMAS',
    email: 'gonzalo@sigma.iimas.unam.mx',
    salon: "Por definir",
    dias: 'ma,ju',
    horario: '11:00-13:30'
};


var basico5 = {
    curso: 'Análisis Funcional 1',
    profesor: "Ramón Gabriel Plaza Villegas",
    ccreditos: 9,
    sede: "IIMAS",
    email: 'plaza@aries.iimas.unam.mx',
    salon: "Por definir",
    dias: 'lu,mi',
    horario: '15:00-17:15',
};





var selecto1= {
    curso: 'Métodos de análisis matemático para la resolución de problemas variacionales y ecuaciones en derivadas parciales',
    profesor: "Judith Campos Cordero",
    ccreditos: 9,
    sede: 'FC',
    email: 'judith@ciencias.unam.mx',
    salon: "Depto. Matemáticas",
    dias: 'ma,ju,vi',
    horario: '13:00-14:30'
};


var selecto2= {
    curso: 'Análisis Funcional y Proximal',
    profesor: "Javier Fernando Rosenblueth Laguette",
    ccreditos: 6,
    sede: 'IIMAS',
    email: 'jfrl@unam.mx',
    salon: "Por definir",
    dias: 'vi',
    horario: '12:00-15:00'
};


var selecto3= {
    curso: 'Sistemas dinámicos no conmutativos',
    profesor: "Jorge Castillejos",
    ccreditos: 6,
    sede: 'IM-CVCA',
    email: 'jorge.castillejos@im.unam.mx',
    salon: "Cub. 4, Primer piso Edificio nuevo",
    dias: 'ma',
    horario: '10:00-13:30'
};

var selecto4= {
    curso: "Teoría Espectral de operadores",
    profesor: "Rafael René del Río Castillo",
    ccreditos: 6,
    sede: 'IIMAS',
    email: 'delriomagia@gmail.com',
    salon: "En línea",
    dias: 'lu, mi',
    horario: '12:30-14:00'
};


var selecto5= {
    curso: "Algebras de Operadores 2",
    profesor: "Jonas Schober",
    ccreditos: 6,
    sede: 'IIMAS',
    email: 'schober.jonas@gmail.com',
    salon: "Por definir",
    dias: "ma,ju",
    horario: '14:00-15:30'
};


var selecto6= {
    curso: "Análisis de Fourier",
    profesor: "Francisco J. Torres",
    ccreditos: 9,
    sede: 'FC',
    email: 'tfrancisco@ciencias.unam.mx',
    salon: "Depto. Matemáticas, S102",
    dias: "lu,mi,ju",
    horario: '12:00-13:30'
};




var seminario1= {
    curso: "Topicos avanzados en la teoría de campos cuánticos",
    profesor: "Timothy Mooney Gendron",
    ccreditos: 5,
    sede: 'IM-CVCA',
    email: 'tim@matcuer.unam.mx',
    salon: "Por definir",
    dias: "vi",
    horario: '15:30-18:00'
};

/*import { object1, object2 } from './object1.js';
import { object2 } from './object2.js';
import { object3} from './object3.js';*/



document.addEventListener('DOMContentLoaded', function () {
    // Populate the arrays with objects
    var objects1 = [basico1,basico2,basico3,basico4,basico5];
    var objects2 = [selecto1, selecto2, selecto3, selecto4, selecto5, selecto6];
    var objects3 = [seminario1];

    // Function to create a table row for an object
    function createTableRow(object) {
        var row = document.createElement('tr');
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                var cell = document.createElement('td');
                 // Check if the property is 'e' (email) and format accordingly
                 if (key === 'email') {
                    cell.innerHTML = `<a href="mailto:${object[key]}">${object[key]}</a>`;
                } else {
                    cell.textContent = object[key];
                }
                row.appendChild(cell);
            }
        }
        return row;
    }

    // Get the table bodies
    var tableBody1 = document.querySelector('#objectTable1 tbody');
    var tableBody2 = document.querySelector('#objectTable2 tbody');
    var tableBody3 = document.querySelector('#objectTable3 tbody');

    // Populate the tables with rows for each object
    objects1.forEach(function (object) {
        tableBody1.appendChild(createTableRow(object));
    });

    objects2.forEach(function (object) {
        tableBody2.appendChild(createTableRow(object));
    });

    objects3.forEach(function (object) {
        tableBody3.appendChild(createTableRow(object));
    });
});
