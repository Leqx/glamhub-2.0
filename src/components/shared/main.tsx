'use client';
import GlobalApi from '@/shared/GlobalApi';
import BusinessList from '@/components/map/BusinessList';
import CategoryList from '@/components/map/CategoryList';
import GoogleMapView from '@/components/map/GoogleMapView';
import RangeSelect from '@/components/map/RangeSelect';
import SelectRating from '@/components/map/SelectRating';
import SkeltonLoading from '@/components/map/SkeltonLoading';
import { UserLocationContext } from '@/context/UserLocationContext';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

export default function Main() {
  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(2500);
  const [businessList, setBusinessList] = useState([]);
  const [businessListOrg, setBusinessListOrg] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userLocation, setUserLocation } = useContext<any>(
    UserLocationContext
  );

  useEffect(() => {
    getGooglePlace();
  }, [category, radius]);

  const getGooglePlace = () => {
    if (category) {
      setLoading(true);

      GlobalApi.getGooglePlace(
        category,
        radius,
        userLocation.lat,
        userLocation.lng
      ).then(
        (resp: {
          data: { product: { results: SetStateAction<never[]> } };
        }) => {
          // console.log(resp.data.product.results);
          setBusinessList(resp.data.product.results);
          setBusinessListOrg(resp.data.product.results);
          setLoading(false);
        }
      );
    }
  };

  const onRatingChange = (rating: string | any[]) => {
    if (rating.length == 0) {
      setBusinessList(businessListOrg);
    }
    const result = businessList.filter((item) => {
      for (let i = 0; i < rating.length; i++) {
        if (item.rating >= rating[i]) {
          return true;
        }
        return false;
      }
    });

    console.log(result);
  };
  return (
    <div
      className="grid 
    grid-cols-1
    md:grid-cols-4 "
    >
      <div className="p-3">
        <CategoryList
          onCategoryChange={(value: SetStateAction<undefined>) =>
            setCategory(value)
          }
        />
        <RangeSelect
          onRadiusChange={(value: SetStateAction<number>) =>
            setRadius(value)
          }
        />
      </div>
      <div className=" col-span-3">
        <GoogleMapView businessList={businessList} />
        <div
          className="md:absolute mx-2 w-[90%] md:w-[74%]
           bottom-36 relative md:bottom-3"
        >
          {!loading ? (
            <BusinessList businessList={businessList} />
          ) : (
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <SkeltonLoading key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
