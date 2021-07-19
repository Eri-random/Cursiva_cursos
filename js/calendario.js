document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Nuevo curso de HTML5',
                start: '2021-07-19',
            },
            {
                title: 'Nuevo curso de CSS3',
                start: '2021-07-25'
            },

            {
                title: 'Nuevo curso de JavaScript',
                start: '2021-08-01'
            },

            {
                title: 'Nuevo curso de JQuery',
                start: '2021-08-01'
            },

            {
                title: 'Nuevo curso de Blockchain',
                start: '2021-08-03'
            },
        ]
    });

    calendar.render();
  });
