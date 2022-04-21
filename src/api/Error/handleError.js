import {
    errorMessage
} from './errorMessage.js'
const handleError = (error) => {

    return error.response ? error.response : errorMessage;
}
export default handleError