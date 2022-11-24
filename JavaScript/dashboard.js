const labels = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];

new Chart("mesChart", {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Ventas C$',
      data: [65, 59, 80, 81, 56, 55, 40,100,150,130,160,200],
      lineTension: 0,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgb(201, 203, 207, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
        'rgba(255, 159, 64)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(54, 162, 235)',
        'rgba(153, 102, 255)'
      ],
      borderWidth: 1,
      order:1
    },
    {
      label: 'Ganancias C$',
      type: 'line',
      fill:false,
      data: [65, 59, 80, 81, 56, 55, 40,100,150,130,160,200],
      lineTension: 0,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgb(201, 203, 207, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      order: 10
    }
  ]
  },
  options: {
    legend: {display: false},
    
    scales: {
      y: {
        beginAtZero: true
      }
    },
    title: {
      display: true,
      text: 'Año 2022',
    }
  }
});



const labels2 = ['Semana 1','Semana 2','Semana 3','Semana 4'];

new Chart("semChart", {
  type: 'bar',
  data: {
    labels: labels2,
    datasets: [{
      label: 'Ventas C$',
      data: [2500,2300,1850,3000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)'
      ],
      borderWidth: 1,
      order: 1
    },
    {
      label: 'Ganancias C$',
      type: 'line',
      data: [1650,1342,758,1954],
        fill: false,
        lineTension: 0,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgb(201, 203, 207)'
        ],
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
        order: 0
    }
  ]
  },
  options: {
    legend: {display: false},
    
    scales: {
      y: {
        beginAtZero: true
      }
    },
    title: {
      display: true,
      text: 'Noviembre 2022',
    }
  }
});



new Chart("diaChart", {
  type: 'bar',
  
  data:{
    labels: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo'
    ],
    datasets: [{
        label: 'Ventas C$',
        data: [52,62,85,47,36,95,87],
        lineTension: 0,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgb(201, 203, 207,0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        order: 1

      },
      {
        label: 'Ganancias C$',
        type: 'line',
        data: [32,48,65,32,21,78,64],
        fill: false,
        lineTension: 0,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgb(201, 203, 207,0.2)'
        ],
        borderColor: [
          'rgb(201, 203, 207)'
        ],
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15
      }
    ]
  },
  options: {
    legend: {display: false},
    
    scales: {
      y: {
        beginAtZero: true
      }
    },
    title: {
      display: true,
      text: 'dd/mm/xxxx - dd/mm/xxxxx',
    }
  }
});


new Chart("donaChart", {
  type: 'doughnut',
  data:{
    labels: ['Lapiceros', 'Cuadernos', 'Marcadores', 'Foamy', 'Otros'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5,9,3,7,4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)'
        ],
      },

    ]
  },
  options: {
    responsive: true,

      legend: {
        display: true,        
        position: 'right'
      },
      title: {
        display: false,                
      }

  }
});