import apis from '../apis';
import { LOGGIN } from '../constants/ActionsType'
import jwtDecode from 'jwt-decode'

export const login = (data) => (dispatch) => {
    return apis.login(data).then(res => {
        if (res.data.token != "") {
            const userData = jwtDecode(res.data.token)
            dispatch({ type: LOGGIN, payload: { name: userData.username } })
            localStorage.setItem("token", res.data.token)
        }
        return res
    })
}