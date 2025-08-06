import React from 'react'
import { useNavigate } from 'react-router-dom'
const Category = ({category}) => {
    const navigate=useNavigate()
  return (
    <div className='flex xl:py-[80px] xl:px-[40px] flex-wrap justify-center py-[30px] gap-3'>
        {category.map((cat)=>(
            <div key={cat.id} className='flex flex-col justify-center items-center rounded-lg p-4 gap-3 hover:shadow-lg hover:translate-y-1 hover:cursor-pointer'
            onClick={()=>navigate('/product',
                {state:{category:cat.name}}
            )}
            >
                <img src={cat.image} alt="" className='w-[100px]'/>
                <p>{cat.name}</p>
            </div>
        ))
        }
    </div>
  )
}

export default Category