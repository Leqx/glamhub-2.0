import Data from '@/shared/Data';
import React, { useState } from 'react';

function SelectRating({ onRatingChange }: any) {
  const [selectedRating, setSelectedRating] = useState([]);

  const onSelectRating = (isChecked: boolean, value: any) => {
    if (isChecked) {
      setSelectedRating([...selectedRating, value]);
    } else {
      setSelectedRating(selectedRating.filter((n) => n !== value));
    }
    console.log(selectedRating);
    onRatingChange(selectedRating);
  };
  return (
    <div className="px-2 mt-5">
      <h2 className="font-bold">Select Rating</h2>
      <div>
        {Data.ratingList.map(
          (
            item: {
              icon:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<React.AwaitedReactNode>
                | null
                | undefined;
              name: any;
            },
            index: React.Key | null | undefined
          ) => (
            <div key={index} className="flex justify-between">
              <label>{item.icon}</label>
              <input
                type="checkbox"
                onChange={(e) =>
                  onSelectRating(e.target.checked, item.name)
                }
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SelectRating;
