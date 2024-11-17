import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
type User = {
  _id: string;
  email: string;
  bio: string | null;
  addresss: string | null;
  profilePicture: string | null;
  coverPicture: string | null;
  createdAt: string;
  __v: number;
};

type AuthContextType = {
  user: User | null;
  token: string;
};
const AuthContext = createContext<AuthContextType>({
  user: null,
  token: '',
});
const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>('');
  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const data = await AsyncStorage.getItem('@auth');
        if (data) {
          const { token, user } = JSON.parse(data);
          setUser(user);
          setToken(token);
          console.log(JSON.stringify(user, null, 2));
          console.log(token);
        }
      } catch (error) {
        console.error('Error fetching authentication data:', error);
      }
    };
    fetchAuthData();
  }, []);

  return <AuthContext.Provider value={{ user, token }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
