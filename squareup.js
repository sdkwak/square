        document.addEventListener('DOMContentLoaded', function () {
            const wrappers = document.querySelectorAll('div[data-v-ab1ca44a].w-wrapper');
            wrappers.forEach(wrapper => {
                const nav = wrapper.querySelector('nav[data-v-ab1ca44a]');
                if (nav) {
                    const span = nav.querySelector('span[data-v-54fd6eb4]');
                    if (span && span.textContent.trim() === 'Services') {
                        nav.style.display = 'none';
                    }
                }
            });
        });
