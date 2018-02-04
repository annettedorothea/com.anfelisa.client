import uuid from "uuid";

import InitAction from '../common/actions/InitAction';
import ACEController from "../../gen/ace/ACEController";
import ErrorView from "../common/views/ErrorView";

export default class AppUtils {

    static start() {
        new InitAction().apply();
    }

    static getClientVersion() {
        return "2.0.0";
    }

    static httpGet(url, queryParams, commandParam) {
        return new Promise((resolve, reject) => {
            let authorization = commandParam ? AppUtils.basicAuth(commandParam.username, commandParam.password) : undefined;
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            if (authorization !== undefined) {
                headers.append("Authorization", authorization);
            }

            const options = {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'no-cache'
            };

            const adjustedUrl = AppUtils.url(url);
            const completeUrl = adjustedUrl + AppUtils.queryParamString(adjustedUrl, queryParams);
            const request = new Request(completeUrl, options);

            fetch(request).then(function (response) {
                if (response.status >= 300) {
                    const status = {
                        code: response.status,
                        text: response.statusText
                    };
                    reject(status);
                } else {
                    return response.json();
                }
            }).then(function (data) {
                resolve(data);
            }).catch(function (error) {
                const status = {
                    code: error.name,
                    text: error.message
                };
                reject(status);
            });
        });
    }

    static httpChange(methodType, url, queryParams, data, commandParam) {
        return new Promise((resolve, reject) => {
            let authorization = commandParam ? AppUtils.basicAuth(commandParam.username, commandParam.password) : undefined;
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "text/plain");
            if (authorization !== undefined) {
                headers.append("Authorization", authorization);
            }

            const options = {
                method: methodType,
                headers: headers,
                mode: 'cors',
                cache: 'no-cache',
                body: JSON.stringify(data)
            };

            const adjustedUrl = AppUtils.url(url);
            const completeUrl = adjustedUrl + AppUtils.queryParamString(adjustedUrl, queryParams);
            const request = new Request(completeUrl, options);

            fetch(request).then(function (response) {
                if (response.status >= 300) {
                    const status = {
                        code: response.status,
                        text: response.statusText
                    };
                    reject(status);
                } else {
                    return response.text();
                }
            }).then(function (data) {
                resolve(data);
            }).catch(function (error) {
                const status = {
                    code: error.name,
                    text: error.message
                };
                reject(status);
            });
        });
    }

    static httpPost(url, queryParams, data, commandParam) {
        return AppUtils.httpChange("POST", url, queryParams, data, commandParam);
    }

    static httpPut(url, queryParams, data, commandParam) {
        return AppUtils.httpChange("PUT", url, queryParams, data, commandParam);
    }

    static httpDelete(url, queryParams, data, commandParam) {
        return AppUtils.httpChange("DELETE", url, queryParams, data, commandParam);
    }

    static queryParamString(url, queryParams) {
        let queryString = "";
        if (queryParams && queryParams.length > 0) {
            for (let i = 0; i < queryParams.length; i++) {
                if (url.indexOf('?') < 0 && i === 0) {
                    queryString += '?'
                } else {
                    queryString += '&'
                }
                queryString += queryParams[i].key + "=" + queryParams[i].value;
            }
        }
        return queryString;
    }

    static url(url) {
        if (ACEController.execution !== ACEController.E2E) {
            return url;
        } else {
            return url.replace('api', 'replay');
        }
    }

    static basicAuth(user, password) {
        if (user !== undefined && password !== undefined) {
            const wordArray = CryptoJS.enc.Utf8.parse(user + ':' + password);
            const hash = CryptoJS.enc.Base64.stringify(wordArray);
            return "anfelisaBasic " + hash;
        }
        return undefined;
    }

    static createUUID() {
        return uuid.v4();
    }

    static saveBug(description, reporter) {
        const browser = AppUtils.getBrowserInfo();
        const data = {
            description: description,
            reporter: reporter,
            timeline: JSON.stringify(ACEController.timeline),
            clientVersion: AppUtils.getClientVersion(),
            device: browser.name + " " + browser.version
        };
        return AppUtils.httpPost('api/bug/create', null, data);
    }

    static deleteBug(id) {
        let queryParams = [
            {
                key: "id",
                value: id
            }
        ];
        return AppUtils.httpDelete('api/bug/delete', queryParams);
    }

    static resolveBug(id) {
        let queryParams = [
            {
                key: "id",
                value: id
            }
        ];
        return AppUtils.httpDelete('api/bug/resolve', queryParams);
    }

    static loadBugs() {
        return AppUtils.httpGet('api/bug/all');
    }

    static loadBug(id) {
        let queryParams = [
            {
                key: "id",
                value: id
            }
        ];
        return AppUtils.httpGet('api/bug/single', queryParams);
    }

    static getBrowserInfo() {
        let ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return {name: 'IE ', version: (tem[1] || '')};
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR\/(\d+)/)
            if (tem != null) {
                return {name: 'Opera', version: tem[1]};
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: M[1]
        };
    }

    static displayUnexpectedError(error) {
        const data = {
            message: "Error",
            error
        };
        ErrorView.renderError(data);
    }

}

/*       S.D.G.       */

