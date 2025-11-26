// Cursos basicos 
var basico1 = {
    curso: 'Análisis Complejo 1',
    profesor: "Jessie Diana Pontigo Herrera",
    creditos: 9,
    sede: 'IMATE C.U.',
    email: 'pontigo@ciencias.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu,mi,vi',
    horario: '9:30-11:00'
};


var basico2 = {
    curso: 'Análisis Complejo 1',
    profesor: "Carlos Alfonso Cabrera Ocañas",
    creditos: 9,
    sede: 'IMATE CVCA',
    email: 'carloscabrerao@im.unam.mx',
    salon: "salón de seminarios CUCA (híbrida)",
    dias: 'lu, mi, vi',
    horario: '9:00-10:30'
};

var basico3 = {
    curso: 'Análisis Complejo 1',
    profesor: "Jesús Alberto Palma Márquez",
    creditos: 9,
    sede: 'IMATE OAX',
    email: 'jpalma@im.unam.mx',
    salon: "por definir (híbrida)",
    dias: 'lu,mi,vi',
    horario: '8:00-9:30'
};

var basico4 = {
    curso: 'Análisis Funcional 1',
    profesor: "Luis Octavio Silva Pereyra",
    creditos: 9,
    sede: 'IIMAS',
    email: 'silva@iimas.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu,mi,vi',
    horario: '9:00-10:30'
};

var basico5 = {
    curso: 'Análisis Real 1',
    profesor: "Magali Louise Marie Folch Gabayet",
    creditos: 9,
    sede: 'IMATE C.U.',
    email: 'folchgab@matem.unam.mx',
    salon: "por definir (presencial)",
    dias: 'ma, mi, ju',
    horario: '11:00-13:00'
};
// Add PDF properties only to selecto and seminario objects

// Cursos selectos
var selecto1 = {
    curso: 'Operadores Pseudo diferenciales y análisis microlocal',
    profesor: "Francisco Marcos López García",
    creditos: 9,
    sede: 'IMATE-CVCA',
    email: 'marcos.lopez@.im.unma.mx',
    salon: " salón 2 (híbrida)",
    dias: 'ma,ju',
    horario: '8:00-10:15',
    pdf: './Temarios/Lopez.pdf'
};

var selecto2 = {
    curso: 'Introducción a la teoría de campos cuánticos',
    profesor: "Timothy Mooney Gendron",
    creditos: 9,
    sede: 'IMATE-CVCA',
    email: 'tim@matcuer.unam.mx',
    salon: "por definir (híbrida)",
    dias: 'ma, ju',
    horario: '15:45-18:00',
    pdf: './Temarios/Gendron.pdf'
};

var selecto3 = {
    curso: 'Dinámica holomorfa y geometría conforme II',
    profesor: "Peter Makienko",
    creditos: 9,
    sede: 'IMATE-CVCA',
    email: 'makienko@im.unam.mx',
    salon: "Aula N2, 16 (híbrida)",
    dias: 'lu, mi',
    horario: '9:30-12:00',
    pdf: './Temarios/Makienko.pdf'
};

var selecto4 = {
    curso: 'Métodos variacionales con algunas aplicaciones a variedades Riemannianas',
    profesor: "María de los Ángeles Sandocal Romero",
    creditos: 9,
    sede: 'FC C.U.',
    email: 'selegna@ciencias.unam.mx',
    salon: "salón 105 depto. matemáticas (híbrida)",
    dias: 'ma,mi,ju',
    horario: '11:30-13:00',
    pdf: './Temarios/Sandoval.pdf'
};


var selecto5 = {
    curso: 'Análisis convexo y optimización',
    profesor: "Javier Fernando Rosenblueth Laguette",
    creditos: 6,
    sede: 'IIMAS',
    email: 'jfrl@unam.mx',
    salon: "por definir (híbrida)",
    dias: 'vi',
    horario: '12:00-15:00',
    pdf: './Temarios/Rosenblueth.pdf'
};


var selecto6 = {
    curso: 'Teoría Espectral',
    profesor: "Rafael del Río",
    creditos: 6,
    sede: 'IIMAS',
    email: 'delrio@iimas.unam.mx',
    salon: "(en línea)",
    dias: 'lu,mi',
    horario: '12:00-13:30',
    pdf: './Temarios/DelRio.pdf'
};


var selecto7 = {
    curso: 'Teoría de dispersión para sistemas discretos',
    profesor: "Miguel Arturo Ballesteros Montero",
    creditos: 6,
    sede: 'IIMAS',
    email: 'miguel.ballesteros@iimas.unam.mx',
    salon: "por definir (híbrida)",
    dias: 'ma,ju',
    horario: '10:00-11:30',
    pdf: './Temarios/Ballesteros.pdf'
};


var selecto8 = {
    curso: 'Gráficas cuánticas',
    profesor: "Jorge Castillejos López",
    creditos: 6,
    sede: 'IMATE CVCA',
    email: 'jorge.castillejos@im.unam.mx',
    salon: "por definir (híbrida)",
    dias: 'por definir',
    horario: 'por definir',
    pdf: './Temarios/Castillejos.pdf'
};
// Seminarios 


var seminario1 = {
    curso: ' ',
    profesor: " ",
    creditos: 0,
    sede: ' ',
    email: ' ',
    salon: " ",
    dias: ' ',
    horario: ' ',
    pdf: './Temarios/test.pdf'
};

// ... similarly for other selecto and seminario objects

document.addEventListener('DOMContentLoaded', function () {
    var objects1 = [basico1,basico2,basico3,basico4,basico5];
    var objects2 = [selecto1,selecto2,selecto3,selecto4,selecto5,selecto6,selecto7,selecto8];
    var objects3 = [seminario1];

    function createTableRow(object, includePdf) {
        var row = document.createElement('tr');
        for (var key in object) {
            if (object.hasOwnProperty(key) && key !== 'pdf' ) {
                var cell = document.createElement('td');
                if (key === 'email' ) {
                    cell.innerHTML = `<a href="mailto:${object[key]}">${object[key]}</a>`;
                } else if (key === 'curso' && includePdf) {
                    cell.innerHTML = `<a href="${object['pdf']}" target="_blank">${object[key]}</a>`;
                } else {
                    cell.textContent = object[key];
                }
                row.appendChild(cell);
            }
        }
        return row;
    }

    var tableBody1 = document.querySelector('#objectTable1 tbody');
    var tableBody2 = document.querySelector('#objectTable2 tbody');
    var tableBody3 = document.querySelector('#objectTable3 tbody');

    objects1.forEach(function (object) {
        tableBody1.appendChild(createTableRow(object, false));
    });

    objects2.forEach(function (object) {
        tableBody2.appendChild(createTableRow(object, true));
    });

    objects3.forEach(function (object) {
        tableBody3.appendChild(createTableRow(object, true));
    });
});
