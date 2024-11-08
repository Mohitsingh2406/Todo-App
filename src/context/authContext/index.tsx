// import { useContext, useEffect, useState } from "react";
// import { auth } from "../../firebase/firebase";

// const AuthContext = React.createContext();

// export function useAuth(){
//     return useContext(AuthContext);
// }

// export function AuthProvider(children){
//     const [currentUser, setCurrentUser] = useState(null);
//     const [userLoggedIn, setUserLoggedIn] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(()=>{
//         const unsubscribe = auth.onAuthStateChanged(auth , initializeUser)
//         return unsubscribe; 
//     },[])

//     async function initializeUser(user){
//         if(user){
//             setCurrentUser({...user});
//             setUserLoggedIn(true);
//         }
//         else{
//             setCurrentUser(null);
//             setUserLoggedIn(false);
//         }
//         setLoading(false);
//     }
//     const value = {
//         currentUser,
//         userLoggedIn,
//         loading
//     }
//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }

// import { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import { User, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../firebase/firebase";

// // Define the structure of the authentication context
// interface AuthContextType {
//     currentUser: User | null;
//     userLoggedIn: boolean;
//     loading: boolean;
// }

// // Create the AuthContext with default values
// const AuthContext = createContext<AuthContextType>({
//     currentUser: null,
//     userLoggedIn: false,
//     loading: true,
// });

// export function useAuth() {
//     return useContext(AuthContext);
// }

// // Define the props for the AuthProvider component
// interface AuthProviderProps {
//     children: ReactNode;
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//     const [currentUser, setCurrentUser] = useState<User | null>(null);
//     const [userLoggedIn, setUserLoggedIn] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, initializeUser);
//         return unsubscribe;
//     }, []);

//     function initializeUser(user: User | null) {
//         if (user) {
//             setCurrentUser(user);
//             setUserLoggedIn(true);
//         } else {
//             setCurrentUser(null);
//             setUserLoggedIn(false);
//         }
//         setLoading(false);
//     }

//     const value = {
//         currentUser,
//         userLoggedIn,
//         loading,
//     };

//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// }
