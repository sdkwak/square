document.addEventListener('DOMContentLoaded', function () {
    const wrappers = document.querySelectorAll('div[data-v-ab1ca44a].w-wrapper');
    console.log(`Found ${wrappers.length} wrappers`);

    wrappers.forEach(wrapper => {
        const nav = wrapper.querySelector('nav[data-v-ab1ca44a]');
        if (nav) {
            console.log('Found nav inside wrapper');
            const span = nav.querySelector('span[data-v-54fd6eb4]');
            if (span) {
                console.log('Found span inside nav with text:', span.textContent.trim());
                if (span.textContent.trim() === 'Services') {
                    console.log('Hiding nav because span text is "Services"');
                    nav.style.display = 'none';
                }
            } else {
                console.log('No span found inside nav');
            }
        } else {
            console.log('No nav found inside wrapper');
        }
    });
});
