import axios from 'axios'
axios.defaults.baseURL = "http://rallycoding.herokuapp.com";
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept-Language'] = 'en-US,en;q=0.9,vi;q=0.8';
axios.defaults.timeout = 10000;
export const call = async (url, data, method = "get") => {
    try {
        let payload = {}
        switch (method) {
            case 'post': case 'put': case 'patch':
                payload = { data }
                break;
            default:
                payload = { params: data }
                break;
        }
        let result = await axios.request({
            url,
            ...payload,
            method,
        })

        return result.data

    } catch (error) {
        // console.log("123123123  " + JSON.stringify(error))

        // if (err.status == 400) {
        //     let logout = await AsyncStorage.multiRemove(['token', 'dataLogin'])
        //     goAuth();
        // }
        throw new Error(error)
    }
}