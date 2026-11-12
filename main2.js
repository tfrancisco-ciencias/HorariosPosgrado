// Cursos basicos 

var basico1 = {
    curso: 'ANÁLISIS REAL I',
    profesor: "Miguel A. Ballesteros Montero", // Formato corregido 
    creditos: 9,
    sede: 'IIMAS',
    email: 'miguel.ballesteros@iimas.unam.mx', 
    salon: "por definir (presencial)",
    dias: 'ma,mi',
    horario: '9:00-11:15'
};


var basico2 = {
    curso: 'ANALISIS FUNCIONAL I',
    profesor: "Ma. de la Luz Jimena de Teresa de Oteyza", // Formato corregido 
    creditos: 9,
    sede: 'IMATE CU',
    email: 'ldeteresa@im.unam.mx',
    salon: "cubículo 206",
    dias: 'mi, vi',
    horario: '10:00-12:30'
};


var basico3 = {
    curso: 'ANÁLISIS FUNCIONAL I',
    profesor: "Cintia Pacchiano Camacho", // Formato corregido 
    creditos: 9,
    sede: 'IMATE Cvca',
    email: 'cintia.pacchiano@im.unam.mx', 
    salon: "por definir (híbrida)",
    dias: 'lu, mi, vi',
    horario: '11:00-12:30'
};


var basico4 = {
    curso: 'ANÁLISIS COMPLEJO I',
    profesor: "Jorge Castillejos López", // Formato corregido 
    creditos: 9,
    sede: 'IMATE Cvca',
    email: 'jorge.castillejos@im.unam.mx',
    salon: "por definir (híbrida)",
    dias: 'por definir',
    horario: 'por definir'
};



var basico5 = {
    curso: 'ANÁLISIS COMPLEJO I',
    profesor: "Quentin E. Gendron", // Formato corregido 
    creditos: 9,
    sede: 'IMATE CU',
    email: 'gendron@matem.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu,ju',
    horario: '11:00-13:30'
};





// Cursos selectos
var selecto1 = {
    curso: 'TEORÍA ESPECTRAL DE OPERADORES DE SCHRODINGER',
    profesor: "Carlos Villegas Blas", // Formato corregido 
    creditos: 9,
    sede: 'IMATE Cvca',
    email: 'carlos.villegas@im.unam.mx',
    salon: "salón de seminarios,planta baja (híbrida)",
    dias: 'ma,ju',
    horario: '12:00-14:30',
    pdf: './Temarios/Villegas.pdf'
};

var selecto2 = {
    curso: 'TEORÍA DE CONTROL PARA SISTEMAS DE DIMENSIÓN INFINITA',
    profesor: "Francisco Marcos López Gracía", // Formato corregido 
    creditos: 9,
    sede: 'IMATE Cvca',
    email: 'marcos.lopez@im.unam.mx',
    salon: "salón 2 UCIM (híbrida)",
    dias: 'ma, ju',
    horario: '8:00-10:15',
    pdf: './Temarios/Lopez.pdf'
};

var selecto3 = {
    curso: 'ANÁLISIS EN LA ERA DE LA IAGen',
    profesor: "Alberto Saldaña de Fuentes", // Formato corregido 
    creditos: 6,
    sede: 'IMATE CU',
    email: 'alberto.saldana@im.unam.mx',
    salon: "salón 6 (presencial)",
    dias: 'lu,mi',
    horario: '15:00-16:30',
    pdf: './Temarios/Saldana.pdf'
};

var selecto4 = {
    curso: 'DINÁMICA HOLOMORFA',
    profesor: "Laura Rosales Ortiz", // Formato corregido 
    creditos: 6, 
    sede: 'IMATE Cvca',
    email: 'laura.rosales@im.unam.mx',
    salon: "por definir (presencial)",
    dias: 'ma,ju',
    horario: '9:30-11:00',
    pdf: './Temarios/Rosales.pdf'
};

var selecto5 = {
    curso: 'OPERADORES EN ESPACIOS DE HILBERT',
    profesor: "Rafael del Río Castillo", // Formato corregido 
    creditos: 6,
    sede: 'IIMAS',
    email: 'delriomagia@gmail.com',
    salon: "(en línea)",
    dias: 'lu,mi',
    horario: '12:00-13:30',
    pdf: './Temarios/Rio.pdf'
};

var selecto6 = {
    curso: 'OPTIMIZACIÓN EN ESPACIOS DE BANACH Y CONTROL ÓPTIMO',
    profesor: "Karla Lorena Cortez del Río", // Formato corregido 
    creditos: 6,
    sede: 'IIMAS',
    email: 'karla.cortez@iimas.unam.mx',
    salon: "por definir (presencial)",
    dias: 'ma,ju',
    horario: '12:00-13:30',
    pdf: './Temarios/Cortez.pdf'
};


var selecto7 = {
    curso: 'ANÁLISIS FUNCIONAL Y CÁLCULO PROXIMAL',
    profesor: "Javier Fernando Rosenblueth Laguette", // Formato corregido 
    creditos: 6,
    sede: 'IIMAS',
    email: 'jfrl@unam.mx',
    salon: "B200 (presencial)",
    dias: 'vi',
    horario: '12:00-15:00',
    pdf: './Temarios/Rosenblueth.pdf'
};



var selecto8 = {
    curso: 'ANÁLISIS ESPECTRAL DE OPERADORES Y TEORÍA MATEMÁTICA DE DISPERSIÓN',
    profesor: "Luis Octavio Silva Pereyra", // Formato corregido 
    creditos: 6,
    sede: 'IIMAS',
    email: 'silva@iimas.unam.mx',
    salon: "por definir (presencial)",
    dias: 'lu,mi,vi',
    horario: '9:00-10:00',
    pdf: './Temarios/Silva.pdf'
};


var selecto9 = {
    curso: 'FUNCIONES ZETA',
    profesor: "Timothy Mooney Gendron", // Formato corregido 
    creditos: 9,
    sede: 'IMATE Cvca',
    email: 'tim@matcuer.unam.mx',
    salon: "por definir (híbrida)",
    dias: 'ma,ju',
    horario: '15:45-18:00',
    pdf: './Temarios/Gendron.pdf'
};

document.addEventListener('DOMContentLoaded', function () {
    var objects1 = [basico1, basico2, basico3, basico4, basico5];
    var objects2 = [selecto1, selecto2, selecto3, selecto4, selecto5, selecto6, selecto7, selecto8,selecto9];
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