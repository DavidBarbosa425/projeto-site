class TimeAndDate {
    constructor() {
        this.hourDate = document.querySelector('.hourDate')
        this.initialize();
    }

    dateFormatted() {
       this.date = new Date();
       this.hourDate.innerHTML = this.date.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})
       this.hourDate.innerHTML += ' - '
       this.hourDate.innerHTML += this.date.toLocaleDateString('pt-BR', {weekday: 'long', year: 'numeric', month: "long", day: "numeric"})
    }

    initialize() {
        setInterval(() => {
            this.dateFormatted()
        },1000)
    }
}

let timeAndDate = new TimeAndDate();

