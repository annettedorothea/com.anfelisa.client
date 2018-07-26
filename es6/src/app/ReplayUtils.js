import stringify from "json-stable-stringify";

export default class ReplayUtils {

    static itemStringifyReplacer(key, value) {
        if (key === 'timestamp') {
            return undefined;
        } else {
            return value;
        }
    }

    static compareItems(expected, actual) {
        const expectedJson = stringify(expected, { space: '  ', replacer: ReplayUtils.itemStringifyReplacer});
        const actualJson = stringify(actual, { space: '  ', replacer: ReplayUtils.itemStringifyReplacer});
        return expectedJson === actualJson;
    }

    static prepareReplay() {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    static tearDownReplay() {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        window.location.hash = "#";
    }

}

/*       S.D.G.       */

