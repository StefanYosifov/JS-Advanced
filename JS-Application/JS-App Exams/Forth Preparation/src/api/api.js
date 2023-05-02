const host = 'http://localhost:3030';


async function request(url,method, data) {
    const options = {
        method,
        headers: {}
    };

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export function get(url) {
    return request(url,'get');
}

export function post(url, data) {
    return request(url,'post', data);
}

export function put(url, data) {
    return request(url, 'put', data);
}

export function del(url) {
    return request(url,'delete');
}