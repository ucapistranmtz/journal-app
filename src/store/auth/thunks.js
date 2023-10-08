import { checkingCredentials, logout, login } from './';
 
export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
    }
}


export const startGoogleSignin = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
    }
}
