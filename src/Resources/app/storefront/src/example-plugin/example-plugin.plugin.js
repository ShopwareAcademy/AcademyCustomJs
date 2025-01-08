import Plugin from 'src/plugin-system/plugin.class';

export default class ExamplePlugin extends Plugin {
    init() {
        window.addEventListener('scroll', this.onScroll.bind(this));
        console.log('Hello from the example plugin');
    }

    onScroll() {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            alert('Seems like there is nothing more to see here.');
        }
    }
}
