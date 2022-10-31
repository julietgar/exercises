class urlParser {
    constructor (urlFormatString, urlInstance) {
        this.urlFormatString = urlFormatString;
        this.urlInstance = urlInstance;
    }

    getKeyParts() {
        return this.urlFormatString.split("/");
    }

    getKeyValueParts() {
        let urlParts = this.urlInstance.split("?");
        let urlValues = urlParts[0].split("/");
        let urlKeysValues = [];
        let keyParts = this.getKeyParts();

        for(let key in keyParts) {
            if(keyParts[key].includes(":")) {
                let keyPart = keyParts[key].replace(':', '')
                urlKeysValues[keyPart] = urlValues[key];
            }
        }

        return urlKeysValues;
    }

    getKeyValueParameters() {
        let urlParts = this.urlInstance.split("?");
        let urlKeysValues = [];

        if(urlParts.length === 1) {
            return urlKeysValues;
        }

        let urlParameters = urlParts[1].split("&");

        for(let param in urlParameters) {
            let keyValue = urlParameters[param].split("=");
            urlKeysValues[keyValue[0]] = keyValue[1];
        }

        return urlKeysValues;
    }

    getJson() {
        return {...this.getKeyValueParts(), ...this.getKeyValueParameters()};
    }
}

const urlParserJson = new urlParser('/:version/api/:collection/:id', '/6/api/listings/3?sort=desc&limit=10');
console.log(urlParserJson.getJson());