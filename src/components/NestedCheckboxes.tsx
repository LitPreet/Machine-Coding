import React, { useState } from 'react'

interface CheckboxItem {
    id: number;
    name: string;
    checked: boolean | 'indeterminate';
    children?: CheckboxItem[];
  }

  const CheckBoxUI = ({checkboxData}:{checkboxData:CheckboxItem[] | undefined}) => {
    return (<div>
        {checkboxData?.map((checkbox:CheckboxItem, i:number) => {
            return (<div key={checkbox.id} className='ml-10'>
                <div className="flex gap-2">
                <input type="checkbox" />
                <p>{checkbox.name}</p>
                </div>
                <CheckBoxUI checkboxData={checkbox.children} />
                </div>)
        })}
    </div>)
}


const NestedCheckboxes = () => {
    const [checkboxData, setCheckboxData] = useState<CheckboxItem[]>([
        {
          id: 1,
          name: 'Electronics',
          checked:false,
          children: [
            {
              id: 2,
              name: 'Mobile phones',
              checked:false,
              children: [
                {
                  id: 3,
                  name: 'iPhone',
                  checked:false,
                },
                {
                  id: 4,
                  name: 'Android',
                  checked:false,
                },
              ],
            },
            {
              id: 5,
              name: 'Laptops',
              checked:false,
              children: [
                {
                  id: 6,
                  name: 'MacBook',
                  checked:false,
                },
                {
                  id: 7,
                  name: 'Surface Pro',
                  checked:false,
                },
              ],
            },
          ],
        },
        {
          id: 8,
          name: 'Books',
          checked:false,
          children: [
            {
              id: 9,
              name: 'Fiction',
              checked:false,
            },
            {
              id: 10,
              name: 'Non-fiction',
              checked:false,
            },
          ],
        },
        {
          id: 11,
          name: 'Toys',
          checked:false,
        },
      ])
  return (
    <div>
     <CheckBoxUI checkboxData={checkboxData}/>
    </div>
  )
}



export default NestedCheckboxes
