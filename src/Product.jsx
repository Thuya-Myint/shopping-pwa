import React ,{useState,useEffect}  from 'react'
import Nav from './components/Nav'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import banner from './assets/img/banner.png'
import Footer from './components/Footer'
import {category} from './constants'
import {products} from './constants'
import { MdFilterAlt } from "react-icons/md";
import { FaRegStar, FaStar,FaStarHalfAlt } from "react-icons/fa";
const Product = () => {

  const location =useLocation()
  const {state} =location
  const passedCategory = state?.category
  const [selectedCategory,setSelectedCategory] =useState(passedCategory || 'all')
  const [isFilterOpen, setIsFilterOpen] = useState(true)
  const [allProducts, setAllProducts] = useState(products)
  const [isSearching,setIsSearching] =useState(false)
  const [searchItem, setSearchItem] = useState('')
  const limit = 3
  const [currentPage,setCurrentPage] =useState(0) 
  const firstIndex = currentPage * limit
  const lastIndex = firstIndex+(limit)


  useEffect(() => {
    setIsSearching(true)
    const foundItem = products.filter(item=>item.name.toLowerCase().includes(searchItem.toLowerCase()))
    setAllProducts(foundItem)
    setCurrentPage(0)
    setIsFilterOpen(false)
    if (searchItem===''){
      setIsFilterOpen(true)
      setIsSearching(false)
      setCurrentPage(0)
    }
  }, [searchItem])
  

  useEffect(()=>{
    const shownProducts = products.slice(firstIndex,lastIndex)
    setAllProducts(shownProducts)
    setSelectedCategory('all')
    setIsSearching(false)
  },[currentPage])

  useEffect(()=>{
    setIsSearching(true)
    const shownProducts = products.slice(firstIndex,lastIndex)
    if(selectedCategory === 'all'){
          return setAllProducts(shownProducts)
    }
    const filteredProduct = products.slice(firstIndex,lastIndex).filter(product => product.category===selectedCategory)
    setAllProducts(filteredProduct)
  },[selectedCategory])

  return (
    <div className=''>
      <div className='sticky top-0 z-20 bg-white shadow-md'><Nav /></div>
      <div className='flex items-center justify-center gap-4 p-3'>
        <input type="text" placeholder='Search for item' className='p-2 border-1 border-black focus:outline-0'
        onClick={()=>setIsSearching(true)}
        onChange={(e)=>setSearchItem(e.target.value)}
        />
        <button className='px-[30px] py-2 bg-gray-700 text-white hover:bg-slate-500 active:opacity-70 hover:cursor-pointer rounded-lg disabled:bg-gray-300/40' 
        onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===0}>Prev</button>
        {Array.from({length: 6},(_,i)=>
          <div key={i} className={`p-2 h-10 w-10 border border-black flex justify-center items-center  active:opacity-70 hover:cursor-pointer ${currentPage===i ? 'bg-slate-500 text-white hover:opacity-60':'hover:bg-white'}`}
          onClick={()=>setCurrentPage(i)}
          >{i+1} </div>
      )}

        <button className='px-[30px] py-2 bg-gray-700 text-white hover:bg-slate-500 active:opacity-70 hover:cursor-pointer rounded-lg disabled:bg-gray-300/40'
        onClick={()=>setCurrentPage(currentPage+1)}
        disabled={currentPage===5}
        >Next</button>
      </div>
      <div className='px-[50px] py-6 flex flex-col bg-white'>
        <div className='font-roboto flex justify-between px-4 py-2 border-b-1' >

          <p className='text-3xl'>{selectedCategory!=='all'? selectedCategory : 'All Items'} {`(${allProducts?.length})`}</p>

          
          <button className=' px-4 py-2 md:flex  items-center active:opacity-70 hover:cursor-pointer gap-2 text-xl rounded-lg hidden'
          onClick={()=>setIsFilterOpen(!isFilterOpen)}
          >
            {
              isFilterOpen? 'Hide Filter' : 'Show Filter'
            }
            <MdFilterAlt className='text-xl'/>
          </button>
        </div>
        <div className='relative flex text-xl flex-col md:flex-row gap-4'>
          <div className={`flex-1/5 md:flex-col ${isFilterOpen? 'flex':'hidden'} shadow-slate-400`} >
              <div className={`px-4 py-2 ${selectedCategory ==='all'?'underline font-bold' :'' }`} onClick={()=>setSelectedCategory('all')}>All Items</div>
              {
                category.map((cat)=>(
                  <div key={cat.id} className={`px-4 py-2 ${cat.name === selectedCategory?'underline font-bold':''} cursor-pointer`} onClick={()=>setSelectedCategory(cat.name)}>
                      {cat.name}
                  </div>
                ))}
              
          </div>
          <div className='flex-4/5  grid md:grid-cols-3 grid-cols-2 gap-3'>
                {
                  allProducts.length === 0 && <div className='text-2xl flex justify-center items-center md:col-span-3 col-span-2 '>
                    There is no product to display
                  </div>
                }
                {
                allProducts.map((item)=>{

                    const rating = item.rating
                    const fullStars=Math.floor(rating) 
                    const hasHalf = rating % 1 >= 0.5
                    const emptyStars=5-fullStars-(hasHalf ? 1 : 0)
                    
                    return(
                    <div key={item.id} className='flex flex-col gap-3 bg-white p-4 content-stretch'>
                        <div className=''>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='font-roboto flex flex-col gap-3'>
                            <p className='text-xl font-bold flex justify-between'>
                                {item.name} 
                                
                                <span>${parseInt(item.price)}<span className='text-sm align-top font-semibold'>.{item.price.toFixed(2).split('.')[1]} </span>
                                </span>
                            </p>
                            <p className='text-gray-600'>{item.detail}</p>
                            <div className='flex gap-3 items-center'>
                                {
                                    [...Array(fullStars)].map((_,i)=>(
                                        <FaStar key={i} className=' text-xl'/>
                                    ))
                                }
                                {
                                    hasHalf && <FaStarHalfAlt className='text-xl'/>
                                }
                                {
                                    [...Array(emptyStars)].map((_,i)=>(
                                        <FaRegStar key={i} className='text-xl'/>                              
                                    ))                                
                                }
                                <p>({item.ratingCount})</p>
                            </div>
                        </div>

                        <div className='py-4 flex justify-center md:justify-start'>
                            <button className='rounded-full px-[50px] py-2 border-primary border-2 transition-all duration-300 hover:bg-black hover:text-white hover:cursor-pointer'>Add to Cart</button>
                        </div>
                    </div>
                )})
              }

          </div>
        </div>
      </div>
















      {/* <div className='sticky top-0 z-20 bg-white shadow-md'><Nav /></div>
      <div className='flex lg:justify-around justify-center lg:px-[100px] items-center bg-background gap-5'>
        <div className='flex flex-col gap-[30px]'>
          <div className='flex flex-col gap-[15px]'>
            <p className='md:text-[20px] text-xl'>---- 10% OFF</p>
            <p className='md:text-[40px] text-2xl'>NEW YEAR SALE</p>
          </div>
          <div className='flex '>
            <Link to={'/product'} className='md:px-[40px] md:py-[10px] px-4 py-2 bg-black text-white text-xl hover:bg-primay'> SHOP SALE</Link>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src={banner} alt="" className='md:w-[200px] w-[150px]' />
        </div>
      </div>    */}


      {/* <Footer /> */}
    </div>
  )
}

export default Product