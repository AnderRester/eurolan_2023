var typing = new Typed('.text_title', {
    strings: ['', 'TRAVEL <span>/ VISA</span>'],
    typeSpeed: 60,
});

var typing = setTimeout(() => {
    new Typed('.text_header', {
        strings: ['', 'VISA INFORMATION:'],
        typeSpeed: 60,
    });
}, 1000);

var typing = setTimeout(() => {
    new Typed('.text_info_header', {
        strings: ['', 'We encourage and welcome delegates from around the globe to take part in MITI2018.'],
        typeSpeed: 20,
    });
}, 2800);

var typing = setTimeout(() => {
    new Typed('.text_info', {
        strings: [
            '',
            'The list of countries whose citizens do not need visa for entry on the territory of the Republic of Moldova, as well as information on visa requirements to enter the Republic of Moldova, can be found on: <a href="https://mfa.gov.md/entry-visas-moldova">mfa.gov.md/entry-visas-moldova/</a> If you are a national or citizen of one of the countries who require visa for entrance to the Republic of Moldova, do not leave this for the last moment as visas can take time to be issued.',
        ],
        typeSpeed: 15,
    });
}, 5500);
