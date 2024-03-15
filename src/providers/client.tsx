'use client';

import { Provider as StoreProvider } from 'react-redux';
import { store } from '@/lib/store/store';
import { UserLocationContext } from '@/context/UserLocationContext';
import { SelectedBusinessContext } from '@/context/SelectedBusinessContext';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export function ReduxProvider({ children }: Props) {
  const [userLocation, setUserLocation] = useState<any>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<any>([]);

  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  return (
    <>
      <>
        <StoreProvider store={store}>
          <SelectedBusinessContext.Provider
            value={{ selectedBusiness, setSelectedBusiness }}
          >
            <UserLocationContext.Provider
              value={{ userLocation, setUserLocation }}
            >
              {children}
            </UserLocationContext.Provider>
          </SelectedBusinessContext.Provider>
        </StoreProvider>
      </>
    </>
  );
}
