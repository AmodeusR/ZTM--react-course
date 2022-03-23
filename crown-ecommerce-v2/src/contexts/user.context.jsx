import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener, createUserDoc } from '../utils/firebase/firebase';

export const UserContext = createContext({

});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
    setUser(user);
    if (user) {   
     createUserDoc(user);
    }
  });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{
      user, setUser
    }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserContext;