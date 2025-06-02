// Cursos basicos 
var basico1 = {
    curso: 'Análisis Complejo 1',
    profesor: "José Antonio Gómez Ortega",
    creditos: 9,
    sede: 'FC',
    email: 'jago@ciencias.unam.mx',
    salon: "S104-Depto.Mat. (presencial)",
    dias: 'ma,mi,ju',
    horario: '9:00-10:30'
};


var basico2 = {
    curso: 'Análisis Real 1',
    profesor: "Luis Octavio Silva Pereyra",
    creditos: 9,
    sede: 'IIMAS',
    email: 'silva@iimas.unam.mx',
    salon: "por definir (presencial)",
    dias: 'ma, mi, vi',
    horario: '9:00-10:30'
};

var basico3 = {
    curso: 'Análisis Real 1',
    profesor: "Salvador Pérez Esteva",
    creditos: 9,
    sede: 'IM-CVCA',
    email: 'spesteva@im.unam.mx',
    salon: "Aula inteligente N2-15 (presencial)",
    dias: 'lu,mi,vi',
    horario: '9:30-11:00'
};

var basico4 = {
    curso: 'Análisis Funcional 1',
    profesor: "Gerardo Sánchez Licea",
    creditos: 9,
    sede: 'FC',
    email: 'gesl@ciencias.unam.mx',
    salon: "por definir (presencial)",
    dias: 'ma,mi,ju',
    horario: '11:00-12:30'
};

var basico5 = {
    curso: 'Análisis Funcional 1',
    profesor: "Yesenia Bravo Ortega",
    creditos: 9,
    sede: 'IM-CVCA',
    email: 'yesenia.bravo@im.unam.mx',
    salon: "Aula 1 en UCIM (presencial)",
    dias: 'lu, mi, vi',
    horario: '11:00-12:30'
};
// Add PDF properties only to selecto and seminario objects

// Cursos selectos
var selecto1 = {
    curso: 'Teoría de Fourier y análisis de singularidades',
    profesor: "Yesenia Bravo Ortega",
    creditos: 9,
    sede: 'IM-CVCA',
    email: 'yesenia.bravo@im.unam.mx',
    salon: "Aula 2 en UCIM (presencial)",
    dias: 'lu,mi,ju',
    horario: '9:00-10:30',
    pdf: './Temarios/Bravo.pdf'
};

var selecto2 = {
    curso: 'Análisis microlocal',
    profesor: "Francisco Marcos López García",
    creditos: 9,
    sede: 'IM-CVCA',
    email: 'marcos.lopez@im.unam.mx',
    salon: "Aula 2 en UCIM (presencial)",
    dias: 'ma, ju',
    horario: '11:30-13:45',
    pdf: './Temarios/Lopez.pdf'
};

var selecto3 = {
    curso: 'Dinámica holomorfa y geometría conforme',
    profesor: "Peter Makienko",
    creditos: 9,
    sede: 'IM-CVCA',
    email: 'makienko@im.unam.mx',
    salon: "Aula N2, 16 (presencial)",
    dias: 'lu, mi',
    horario: '9:30-12:00',
    pdf: './Temarios/Makienko.pdf'
};

var selecto4 = {
    curso: 'Regularity theory for perimeter minimizers under volume constraint',
    profesor: "Saen Mc Curdy Ries",
    creditos: 9,
    sede: 'IM-CU',
    email: 'sean.mccurdy@im.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu,mi,vi',
    horario: '10:00-11:30',
    pdf: './Temarios/McCurdy.pdf'
};


var selecto5 = {
    curso: 'Teoría espectral de operadores de Schrodinger',
    profesor: "Carlos Villegas Blas",
    creditos: 9,
    sede: 'IM-CVCA',
    email: 'carlos.villegas@im.unam.mx',
    salon: "salón de seminarios, PB (presencial)",
    dias: 'ma, ju',
    horario: '12:00-14:30',
    pdf: './Temarios/Villegas.pdf'
};


var selecto6 = {
    curso: 'Teoría espectral de operadores',
    profesor: "Rafael del Río",
    creditos: 6,
    sede: 'IIMAS',
    email: 'delriomagia@gmail.com',
    salon: " (en línea)",
    dias: 'lu,mi',
    horario: '12:00-13:30',
    pdf: './Temarios/DelRio.pdf'
};

// Seminarios 


var seminario1 = {
    curso: 'El invariante de Dixmier-Douady',
    profesor: "Jorge Castillejos",
    creditos: 5,
    sede: 'IM-CVCA',
    email: 'jorge.castillejos@im.unam.mx',
    salon: "por definir (presencial)",
    dias: 'ma',
    horario: '10:00-12:30',
    pdf: './Temarios/Castillejos.pdf'
};

var seminario2 = {
    curso: 'Herramientas analíticas para la teoría de los números',
    profesor: "Gerónimo Francisco Uribe Bravo",
    creditos: 5,
    sede: 'IM-CU',
    email: 'geronimo@matem.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu',
    horario: '15:00-17:30',
    pdf: './Temarios/Uribe.pdf'
};

// ... similarly for other selecto and seminario objects

document.addEventListener('DOMContentLoaded', function () {
    var objects1 = [basico1,basico2,basico3,basico4,basico5];
    var objects2 = [selecto1,selecto2,selecto3,selecto4,selecto5,selecto6];
    var objects3 = [seminario1,seminario2];

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
