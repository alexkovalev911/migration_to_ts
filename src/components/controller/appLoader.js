import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'ea34f106d0354da48c4f9adcb546ca76', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
