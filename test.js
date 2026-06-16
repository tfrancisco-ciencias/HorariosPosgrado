// Cursos basicos 
var basico1 = {
    curso: 'ANÁLISIS FUNCIONAL I',
    profesor: "Mónica Clapp Jiménez Labora", // Formato corregido 
    creditos: 9,
    sede: 'IMATE- Juriquilla',
    email: 'monica.clapp@im.unam.mx', 
    salon: "IM-Juriquilla (presencial)",
    dias: 'lu, ma, mi',
    horario: '10:00-11:30'
};

var basico2 = {
    curso: 'ANALISIS REAL I',
    profesor: "Cintia Pacchiano Camacho", // Formato corregido 
    creditos: 9,
    sede: 'IMATE Cvca',
    email: 'cintia.pacchiano@im.unam.mx',
    salon: "por definir (híbrida)",
    dias: 'lu, mi, vi',
    horario: '11:00-12:30'
};

var basico3 = {
    curso: 'ANÁLISIS COMPLEJO I',
    profesor: "Luis Octavio Silva Pereyra", // Formato corregido 
    creditos: 9,
    sede: 'IIMAS',
    email: 'silva@iimas.unam.mx', 
    salon: "por definir (presencial)",
    dias: 'lu, mi, vi',
    horario: '9:00-10:30'
};

var basico4 = {
    curso: 'ANÁLISIS REAL I',
    profesor: "José María González Barrios Murguía", // Formato corregido 
    creditos: 9,
    sede: 'IIMAS',
    email: 'gonzaba@sigma.iimas.unam.mx', 
    salon: "por definir (presencial)",
    dias: 'ma, ju',
    horario: '9:00-11:30'
};

var basico5 = {
    curso: 'ANALISIS FUNCIONAL I',
    profesor: "Ivan Naumkin", // Formato corregido 
    creditos: 9,
    sede: 'IIMAS',
    email: 'ivannaumkinkaikin@gmail.com',
    salon: "por definir (híbrida)",
    dias: 'ma, mi',
    horario: 'ma 16:30-18:30 / mi 8:30-11:00' 
};

var basico6 = {
    curso: 'ANÁLISIS COMPLEJO I',
    profesor: "José Ferrán Valdez Lorenzo", // Formato corregido 
    creditos: 9,
    sede: 'CCM',
    email: 'ferran@matmor.unam.mx',
    salon: "Salón 3, Centro de Ciencias Matemáticas, Morelia (presencial)",
    dias: 'lu, ma, mi',
    horario: '12:00-13:30'
};

// Cursos selectos
var selecto1 = {
    curso: 'INTRODUCCIÓN A LA TEORÍA GEOMÉTRICA DE MEDIDAS',
    profesor: "Sean Mc Curdy Ries", // Formato corregido 
    creditos: 9,
    sede: 'IMATE-CU',
    email: 'sean.mccurdy@im.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu, mi, vi',
    horario: '10:00-11:30',
    pdf: './Temarios/McCurdy.pdf'
};

var selecto2 = {
    curso: 'TEORÍA DE CAMPOS CUÁNTICOS II: RENORMALIZACIÓN',
    profesor: "Timothy Mooney Gendron", // Formato corregido 
    creditos: 9,
    sede: 'IMATE Cvca',
    email: 'tim@matcuer.unam.mx',
    salon: "por definir (presencial)",
    dias: 'ma, ju',
    horario: '14:45-18:00',
    pdf: './Temarios/Gendron.pdf'
};

var selecto3 = {
    curso: 'ANÁLISIS DE FOURIER',
    profesor: "Magali Folch Gabayet", // Formato corregido 
    creditos: 6,
    sede: 'IMATE-CU',
    email: 'folchgab@matem.unam.mx',
    salon: "por definir (presencial)",
    dias: 'por definir',
    horario: 'por definir',
    pdf: './Temarios/Folch.pdf'
};

var selecto4 = {
    curso: 'TEORÍA ESPECTRAL AVANZADA',
    profesor: "Rafael René del Río Castillo", // Formato corregido 
    creditos: 6, 
    sede: 'IIMAS',
    email: 'delriomagia@gmail.com',
    salon: "en línea",
    dias: 'lu, mi',
    horario: '12:00-13:30',
    pdf: './Temarios/DelRio.pdf'
};

var selecto5 = {
    curso: 'TEORÍA DE DISPERSIÓN Y EVOLUCIÓN TEMPORAL PARA SISTEMAS CUÁNTICOS DISCRETOS',
    profesor: "Miguel Arturo Ballesteros Montero", // Formato corregido 
    creditos: 6,
    sede: 'IIMAS',
    email: 'miguel.ballesteros@iimas.unam.mx',
    salon: "Cubículo (híbrida)",
    dias: 'ma, ju',
    horario: '8:30-10:00',
    pdf: './Temarios/Ballesteros.pdf'
};

var selecto6 = {
    curso: 'ANÁLISIS NO SUAVE, OPTIMIZACIÓN Y MULTIPLICADORES',
    profesor: "Javier Fernando Rosenblueth Laguette", // Formato corregido 
    creditos: 6,
    sede: 'IIMAS',
    email: 'jfrl@unam.mx',
    salon: "por definir (híbrida)",
    dias: 'vi',
    horario: '12:00-15:00',
    pdf: './Temarios/Rosenblueth.pdf'
};

document.addEventListener('DOMContentLoaded', function () {
    var objects1 = [basico1, basico2, basico3, basico4, basico5, basico6];
    var objects2 = [selecto1, selecto2, selecto3, selecto4, selecto5, selecto6];
    var objects3 = []; 

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

    if(tableBody1) {
        objects1.forEach(function (object) {
            tableBody1.appendChild(createTableRow(object, false));
        });
    }

    if(tableBody2) {
        objects2.forEach(function (object) {
            tableBody2.appendChild(createTableRow(object, true));
        });
    }
});