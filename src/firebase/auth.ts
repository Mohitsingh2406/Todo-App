// import {auth} from "./firebase"

// import { createUserWithEmailAndPassword , GoogleAuthProvider , sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

// export const doCreateUserWithEmailAndPassword = async (email , password) => {
//     return createUserWithEmailAndPassword (auth , email, password)
// }

// export const doSignInWithEmailAndPassword = async (email , password) => {
//     return signInWithEmailAndPassword (auth , email, password)
// };

// export const doSignInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     const result = await signInWithPopup(auth, provider);

//     return result;
// };

// export const doSignOut = async () => {
//     return auth.signOut();
// };

// export const doPasswordChange = (password) =>{
//     return updatePassword(auth.currentUser,password);
// }

// export const doPasswordReset = (email) =>{
//     return sendPasswordResetEmail(auth,email);
// }

// export const doSendEmailVerification = () =>{
//     return sendEmailVerification(auth.currentUser,{
//         url:`${window.location.origin}/home`, 
//     });
// }

// import { auth } from "./firebase";
// import { 
//     createUserWithEmailAndPassword, 
//     GoogleAuthProvider, 
//     // sendEmailVerification, 
//     // sendPasswordResetEmail, 
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     UserCredential
// } from "firebase/auth";

// export const doCreateUserWithEmailAndPassword = async (
//     email: string, 
//     password: string
// ): Promise<UserCredential> => {
//     return createUserWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithEmailAndPassword = async (
//     email: string, 
//     password: string
// ): Promise<UserCredential> => {
//     return signInWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithGoogle = async (): Promise<UserCredential> => {
//     const provider = new GoogleAuthProvider();
//     const result = await signInWithPopup(auth, provider);
//     return result;
// };

// export const doSignOut = async (): Promise<void> => {
//     return auth.signOut();
// };
