export const TabButtons = {
    home:[
        { id: 1, name:'Notizie Ea', reqCategory: 'Eletronics Arts' },
        { id: 2, name:'EA Play', reqCategory: 'Eletronics Arts Inc.' },
        { id: 3, name:'FIFA', reqCategory: 'FIFA' },
        { id: 4, name:'F1', reqCategory: 'F1® 22' },
        { id: 5, name:'Apex Legends', reqCategory: 'Apex Legends' },
        { id: 6, name:'The Sims', reqCategory: 'The Sims 4' },
        { id: 7, name:'Battlefield', reqCategory: 'Battlefield 2042' },
        { id: 8, name:'Inside Ea', reqCategory: 'Inside EA' }],
    insideEa:[
        { id: 1, name:'Le storie', reqCategory: 'Storie' },
        { id: 2, name:'Diversità e Inclusione', reqCategory: 'Diversità' },
        { id: 3, name:'Persone e Cultura', reqCategory: 'Cultura' },
        { id: 4, name:'Investire nella Comunità', reqCategory: 'Comunità' }],
    eaSports:[
        { id: 1, name:'FIFA', reqCategory: 'FIFA' },
        { id: 2, name:'Madden NFL™', reqCategory: 'MADDEN NFL', void: true},
        { id: 3, name:'F1', reqCategory: 'F1® 22' },
        { id: 4, name:'NHL', reqCategory: 'NHL', void: true},
        { id: 5, name:'UFC', reqCategory: 'UFC' },
        { id: 6, name:'NBA LIVE', reqCategory: 'NBA LIVE' },
        { id: 7, name:'FIFA Mobile', reqCategory: 'FIFA Mobile' },
        { id: 8, name:'Madden NFL Mobile', reqCategory: 'Madden NFL Mobile', void: true},
        { id: 9, name:'NBA LIVE Mobile', reqCategory: 'NBA LIVE Mobile' }
    ]
}

//complete your page and add the route

export const pages = [
    [
        {
            id: 1,
            image: `/assets/images/article/Inside EA/ea-inside-immagine 1.jpg`,
            title: `HOME`,
            link: `/`,
        },
        {
            id: 2,
            image: `/assets/images/EASPORTSpage/ufc4-feature-image-ea-play.jpg.adapt.crop16x9.431p.jpg`,
            title: `EA SPORTS`,
            link: `/EaSports`,
        },
        {
            id: 3,
            image: `/assets/images/EASPORTSpage/optimized-pj-f122-por-006-mag-1.jpg.adapt.crop16x9.431p.jpg`,
            title: `FREE GAMES`,
            link: `/EaSports`,
        },
        {
            id: 4,
            image: `/assets/images/EASPORTSpage/ufc4-featured-image-primeicons-16x9.png.adapt.crop16x9.431p.png`,
            title: `LAST GAMES`,
            link: `/EaSports`,
        }
    ],
    [
        {
            id: 5,
            image: `/assets/images/pages/about/ea-about-our-products-tile-2.jpg.adapt.crop16x9.652w.jpg`,
            title: `PC`,
            link: `/`,
        },
        {
            id: 6,
            image: `/assets/images/pages/about/ea-about-our-products-tile-1.jpg.adapt.crop16x9.652w.jpg`,
            title: `PS 5`,
            link: `/`,
        },
        {
            id: 7,
            image: `/assets/images/pages/about/ea-about-grid-tile-ts4-cottage-living.jpg.adapt.crop16x9.652w.jpg`,
            title: `X-BOX`,
            link: `/`,
        },
        {
            id: 8,
            image: `/assets/images/Diversita-e-inclusione/inclusion-feature-image.jpg`,
            title: `POSITIVE PLAY`,
            link: `/`,
        }
    ],
    [
        {
            id: 9,
            image: `/assets/images/article/Notizie EA/ea-notizie-immagine 6.jpg`,
            title: `EXECUTIVE TEAM`,
            link: `/`,
        },
        {
            id: 10,
            image: `/assets/images/article/Notizie EA/ea-notizie-immagine 5.png`,
            title: `REDEEM`,
            link: `/`,
        },
        {
            id: 11,
            image: `/assets/images/article/Apex Legends/ea-apexLegends-immagine 3.jpg`,
            title: `NOTIZIE`,
            link: `/informazioni/notizie`,
        },
        // {
        //     id: 12,
        //     image: `/assets/images/article/Inside EA/ea-inside-immagine 3.jpg`,
        //     title: `ABOUT`,
        //     link: `/`,
        // },
        {
            id: 13,
            image: `/assets/images/article/Inside EA/ea-inside-immagine 3.jpg`,
            title: `INSIDE EA`,
            link: `/informazioni/inside-ea`,
        },
    ]
]

//Picture component

//Data media queries & images

export const picturesData = {
    
    //page insideEA
    img_insideEa:'/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.320w.jpg',
    insideEa:[
        {mq:'(max-width: 320px)', content:'/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.320w.jpg'},
        {mq:'(max-width: 767px)', content:'/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.768w.jpg'},
        {mq:'(max-width: 1023px)', content:'/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.1024w.jpg'},
        {mq:'(max-width: 1455px)', content:'/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.1456w.jpg'},
        {mq:'(min-width: 1456px)', content:'/assets/images/hero/insideEA/eacom-section-header-brand-xl.jpg.adapt.1920w.jpg'},
    ],

    //page news
    img_news: '/assets/images/hero/news/h3-3840-600-notiziee.jpg',
    news:[
        {mq:'(max-width: 768px)', content:'/assets/images/hero/news/h3-1534-696-notizie.jpg'},
        {mq:'(max-width: 1024px)', content:'/assets/images/hero/news/h3-2046-560notizie.jpg.jpg'},
        {mq:'(max-width: 1456px)', content:'/assets/images/hero/news/h3-2910-600notizie.jpg.jpg'},
        {mq:'(max-width: 1920px)', content:'/assets/images/hero/news/h3-3840-600-notiziee.jpg'},
    ]
}