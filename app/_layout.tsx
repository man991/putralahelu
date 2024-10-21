
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Slot, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';


const InitialLayout = () => {

  const [token, setToken] = useState<string | null>(null);
    const router = useRouter();
    
    
    const getTokenExist = async () => {
        try {
            const value = await AsyncStorage.getItem('token_value');
            if (value !== null) {

                setToken(value);
            }
            else {
                setToken(null)
            }
        } catch (e) {
            alert(e)
        }
    };

    useEffect(() => {
        getTokenExist();
        if (token != null) {
          router.replace('/(tabs)')
        }
        else{
          router.replace('/(tabs)')
        }
    }, [token]);

  return <Slot />;
};


const RootLayoutNav = () => {
  return (
    
      <InitialLayout />
  );
};

export default RootLayoutNav;



