// Cursos basicos 
var basico1 = {
    curso: 'Análisis Complejo 1',
    profesor: "Alberto Alonso y Coria",
    creditos: 9,
    sede: 'FC',
    email: 'alonsoalberto@gmail.com',
    salon: "por definir (presencial)",
    dias: 'lu,mi,vi',
    horario: 'por definir'
};


var basico2 = {
    curso: 'Análisis Complejo 1',
    profesor: "Salvador Pérez Esteva",
    creditos: 9,
    sede: 'IM-CVCA',
    email: 'salvador@matcuer.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu, mi, vi',
    horario: '9:30-11:00'
};

var basico3 = {
    curso: 'Análisis Real 1',
    profesor: "Javier Rosenblueth Laguette",
    creditos: 9,
    sede: 'IIMAS',
    email: 'jfrl@unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu, vi',
    horario: '12:00-14:15'
};

var basico4 = {
    curso: 'Análisis Funcional 1',
    profesor: "Iván Naumkin",
    creditos: 9,
    sede: 'IIMAS',
    email: 'ivan.naumkin@iimas.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu',
    horario: '8:30-13:00'
};

var basico5 = {
    curso: 'Análisis Funcional 1',
    profesor: "Yesenia Bravo Ortega",
    creditos: 9,
    sede: 'IM-CVCA',
    email: 'yesenia.bravo@im.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu, mi, vi',
    horario: '11:00-12:30'
};
// Add PDF properties only to selecto and seminario objects

// Cursos selectos
var selecto1 = {
    curso: 'Análisis Armónico',
    profesor: "Francisco Marcos López García",
    creditos: 9,
    sede: 'IM-CU',
    email: 'marcos.lopez@im.unam.mx',
    salon: "por definir (presencial)",
    dias: 'ma, ju',
    horario: '11:30-13:45',
    pdf: './Temarios/Lopez.pdf'
};

var selecto2 = {
    curso: 'Teoría de evolución y dispersión para la ecuación de Schrödinger',
    profesor: "Miguel Ballesteros Montero",
    creditos: 6,
    sede: 'IIMAS',
    email: 'miguel.ballesteros@iimas.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu, mi, vi',
    horario: '9:00-10:00',
    pdf: './Temarios/Ballesteros.pdf'
};

var selecto3 = {
    curso: 'Functions of bounded variation and isoperimetric problems',
    profesor: "Sean Mc. Curdy Ries",
    creditos: 6,
    sede: 'IM-CU',
    email: 'sean.mccurdy@im.unam.mx',
    salon: "por definir (presencial)",
    dias: 'ma, mi',
    horario: '10:00-11:30',
    pdf: './Temarios/McCurdy.pdf'
};

var selecto4 = {
    curso: 'Optimización y gradientes generalizados',
    profesor: "Javier Rosenblueth Laguette",
    creditos: 6,
    sede: 'IIMAS',
    email: 'jfrl@unam.mx',
    salon: "200 (presencial)",
    dias: 'mi',
    horario: '12:00-15:00',
    pdf: './Temarios/Rosenblueth.pdf'
};

var selecto5 = {
    curso: 'Algebras C*. Dimensión nuclear',
    profesor: "Jorge Castillejos Cordero",
    creditos: 6,
    sede: 'IM-CVCA',
    email: 'jorge.castillejos@im.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu, mi',
    horario: '10:00-11:30',
    pdf: './Temarios/Castillejos.pdf'
};

var selecto6 = {
    curso: 'Medidas de Young en soluciones a EDPs',
    profesor: "Judith Campos Cordero",
    creditos: 6,
    sede: 'FC',
    email: 'judith@ciencias.unam.mx',
    salon: "por definir (presencial)",
    dias: 'ma, vi',
    horario: '17:00-18:00 y 16:00-18:00',
    pdf: './Temarios/Campos.pdf'
};

var selecto7 = {
    curso: 'Dinámica simbólica',
    profesor: "Ricardo Gómez Aíza",
    creditos: 6,
    sede: 'IM-CU',
    email: 'rgomez@im.unam.mx',
    salon: "por definir (presencial)",
    dias: 'ma, ju',
    horario: '10:00-11:30',
    pdf: './Temarios/Gomez.pdf'
};

var selecto8 = {
    curso: 'Teroía espectral de operadores',
    profesor: "Rafael del Río",
    creditos: 6,
    sede: 'IIMAS',
    email: 'delrio@iimas.unam.mx',
    salon: "(en línea)",
    dias: 'lu, vi',
    horario: '12:00-13:30',
    pdf: './Temarios/DelRio.pdf'
};

var selecto9 = {
    curso: 'Espacios de Hardy y operadores de Hankel',
    profesor: "Jonas Schober",
    creditos: 6,
    sede: 'IIMAS',
    email: 'schober.jonas@gmail.com',
    salon: "por definir (presencial)",
    dias: 'lu, mi',
    horario: '14:00-15:30',
    pdf: './Temarios/Schober.pdf'
};


// Seminarios 
var seminario1 = {
    curso: 'NA',
    profesor: "NA",
    creditos: '',
    sede: 'NA',
    email: 'NA',
    salon: "NA",
    dias: 'NA',
    horario: 'NA',
    pdf: ''
}; 

// ... similarly for other selecto and seminario objects

document.addEventListener('DOMContentLoaded', function () {
    var objects1 = [basico1,basico2,basico3,basico4,basico5];
    var objects2 = [selecto1,selecto2,selecto3,selecto4,selecto5,selecto6,selecto7,selecto8,selecto9];
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

    /*objects3.forEach(function (object) {
        tableBody3.appendChild(createTableRow(object, true));
    });*/
});
