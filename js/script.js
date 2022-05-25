// Partendo dal markup dei file che vi passo nello zip, far funzionare lo slider.
// Avrà sia le funzionalità di navigazione Prev-Next (con anche il cambio della thumb attiva) come fatto insieme questa mattina,
// sia la possibilità di navigazione direttamente dalle thumb (ovvero se clicco su una thumb quella diventa active e vedo l’item corrispondente in grande).

const appArray = new Vue ({
    el: "#app",
    data: {
        slideActive: 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]
    },
    methods: {
        next: function () {
            if (this.slideActive === slides.length - 1 ) {
                this.slideActive = 0;
            } else 
            this.slideActive ++;
        },
        prev: function () {
            if (this.slideActive === 0) {
                this.slideActive = slides.length - 1;
            }   else 
                this.slideActive --;
        },
    }
});

