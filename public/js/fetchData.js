document.addEventListener('DOMContentLoaded', async function () {
    try {
        const { Calendar } = await import('https://cdn.skypack.dev/@fullcalendar/core@6.1.12');
        const dayGridPlugin = await import('https://cdn.skypack.dev/@fullcalendar/daygrid@6.1.12');
        const timeGridPlugin = await import('https://cdn.skypack.dev/@fullcalendar/timegrid@6.1.12');

        const calendarEl = document.getElementById('calendar');
        const calendar = new Calendar(calendarEl, {
            timeZone: 'UTC',
            plugins: [dayGridPlugin.default, timeGridPlugin.default],
            headerToolbar: {
                left: 'prev next today',
                center: 'title',
                right: 'dayGridMonth timeGridDay timeGridFourDay'
            },
            initialView: 'timeGridFourDay',
            views: {
                timeGridFourDay: {
                    type: 'timeGrid',
                    duration: { days: 3 },
                    buttonText: '3 Days'
                }
            },
            events: await fetchTasks(),
            eventClick: function (info) {
                openPopupTasksEvent(info.event);
            },
        });
        calendar.render();
    } catch (error) {
        console.error('Error loading FullCalendar:', error);
    }

    async function fetchTasks() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/tasks');
            const data = await response.json();
            return data.map(event => ({
                id: event.id,
                title: event.name,
                start: event.start,
                end: event.finish,
                detail: event.detail,
                person: event.person,
                // extendedProps: {
                //     detail: event.detail,
                //     person: event.person,
                // },
                color: event.color,
                textColor: 'black'
            }));
        } catch (error) {
            console.error('Error fetching tasks:', error);
            return [];
        }
    }
    fetchTasks();

});
