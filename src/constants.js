import blog1 from './assets/img/blog1.jpg'
import blog2 from './assets/img/blog2.jpg'
import blog3 from './assets/img/blog3.jpg'
import image from './assets/img/iphone16.jpg'
import image2 from './assets/img/iphone-16-pro.jpg'
import image3 from './assets/img/iphone16e.jpg'
import image4 from './assets/img/iphone15.jpg'
const watchImages = import.meta.glob('./assets/watch images/*.jpg',{eager:true,as:'url'});
const watchData = Object.values(watchImages)
import accessories from './assets/Category/accessories.png'
import airpod from './assets/Category/airpod.png'
import airTag from './assets/Category/airTag.png'
import appleVision from './assets/Category/appleVision.png'
import applewatch from './assets/Category/applewatch.png'
import homepod from './assets/Category/homepod.png'
import iPad from './assets/Category/iPad.png'
import mac from './assets/Category/mac.png'
import iphone from './assets/Category/iphone.png'
import tv from './assets/Category/tv.png'
import mac1 from './assets/Products/MacBook Air.jpg'
import mac2 from './assets/Products/MacBook Pro.jpg'
import mac3 from './assets/Products/iMac.jpg'
import mac4 from './assets/Products/Mac mini.jpg'
import pad1 from './assets/Products/iPad Pro.jpg'
import pad2 from './assets/Products/iPad Air.jpg'
import pad3 from './assets/Products/iPad.jpg'
import pad4 from './assets/Products/iPad Mini.jpg'

export const products=[
  {
    id:'p1',
    name:'MacBook Air',
    detail:'Apple certified product',
    ratingCount:120,
    rating:4.0,
    image:mac1,
    price:998.99,
    category:'Mac',
  },
  {
    id:'p2',
    name:'MacBook Pro',
    detail:'Apple certified product',
    ratingCount:134,
    rating:4.8,
    image:mac2,
    price:1598.99,
    category:'Mac',
  },
  {
    id:'p3',
    name:'iMac',
    detail:'Apple certified product',
    ratingCount:231,
    rating:4.2,
    image:mac3,
    price:1298.99,
    category:'Mac',
  },
  {
    id:'p4',
    name:'Mac mini',
    detail:'Apple certified product',
    ratingCount:89,
    rating:3.5,
    image:mac4,
    price:598.99,
    category:'Mac',
  },
  {
    id:'p5',
    name:'iPhone 16',
    detail:'Apple certified product',
    ratingCount:110,
    rating:4.0,
    image:image,
    price:998.99,
    category:'iPhone',
  },
  {
    id:'p6',
    name:'iPhone 16 Pro',
    detail:'Apple certified product',
    ratingCount:114,
    rating:4.8,
    image:image2,
    price:1598.99,
    category:'iPhone',
  },
  {
    id:'p7',
    name:'iPhone 16e',
    detail:'Apple certified product',
    ratingCount:101,
    rating:3.2,
    image:image3,
    price:598.99,
    category:'iPhone',
  },
  {
    id:'p8',
    name:'iPhone 15',
    detail:'Apple certified product',
    ratingCount:39,
    rating:3.9,
    image:image4,
    price:598.99,
    category:'iPhone',
  },
  {
    id:'p9',
    name:'Apple Watch SE',
    detail:'Apple certified product',
    ratingCount:111,
    rating:4.3,
    price:348.99,
    image:watchData[0],
    category:'Apple watch'
  },
  {
    id:'p10',
    name:'Apple Watch Series 10A',
    detail:'Apple certified product',
    ratingCount:111,
    rating:4.3,
    price:598.99,
    image:watchData[1],
    category:'Apple watch'
  },
    {
    id:'p11',
      name:'Apple Watch Series 10T',
    detail:'Apple certified product',
    ratingCount:111,
    rating:4.3,
      price:1048.99,
    image:watchData[2],
    category:'Apple watch'
  },
    {
    id:'p12',
      name:'Apple Watch Ultra 2',
    detail:'Apple certified product',
    ratingCount:111,
    rating:4.3,
      price:1198.99,
    image:watchData[3],
    category:'Apple watch'
  },
    {
    id:'p13',
      name:'iPad Pro',
    detail:'Apple certified product',
    ratingCount:101,
    rating:4.3,
      price:998.99,
    image:pad1,
    category:'iPad'
  },
    {
    id:'p14',
      name:'iPad Air',
    detail:'Apple certified product',
    ratingCount:231,
    rating:3.6,
      price:598.99,
    image:pad2,
    category:'iPad'
  },
    {
    id:'p15',
      name:'iPad',
    detail:'Apple certified product',
    ratingCount:301,
    rating:4.6,
      price:348.99,
    image:pad3,
    category:'iPad'
  },
    {
    id:'p16',
      name:'iPad mini',
    detail:'Apple certified product',
    ratingCount:123,
    rating:4.3,
      price:498.99,
    image:pad1,
    category:'iPad'
  },
]



export const category=[
  {
    id:'cat1',
    name:'Mac',
    image: mac
  },
  {
    id:'cat2',
    name:'iPhone',
    image: iphone
  },
  {
    id:'cat3',
    name:'iPad',
    image: iPad
  },
  {
    id:'cat4',
    name:'Apple watch',
    image: applewatch
  },
  {
    id:'cat5',
    name:'Apple Vision',
    image: appleVision
  },
  {
    id:'cat6',
    name:'Air Pods',
    image: airpod
  },
  {
    id:'cat7',
    name:'Air tag',
    image: airTag
  },
  {
    id:'cat8',
    name:'Home Pod',
    image: homepod
  },
  {
    id:'cat9',
    name:'TV',
    image: tv
  },
  {
    id:'cat10',
    name:'Accessories',
    image: accessories
  },
]



export const watches=[
  {
    text:'Apple Watch SE',
    price:'349',
    image:watchData[0]
  },
  {
    text:'Apple Watch Series 10A',
    price:'599',
    image:watchData[1]
  },
    {
    text:'Apple Watch Series 10T',
    price:'1049',
    image:watchData[2]
  },
    {
    text:'Apple Watch Ultra 2',
    price:'1199',
    image:watchData[3]
  }
]

export const blogs=[
  {
    title:'Get Some Cool Gadget in 2025',
    date: 'July 23 2025',
    category: 'Gadgets',
    image:blog1
  },
    {
    title:'Technology Hacks You Wont Get',
    date: 'July 21 2025',
    category: 'Technology',
    image:blog2
  },
    {
    title:'Top 10 small camera in the world',
    date: 'July 1 2025',
    category: 'Camera',
    image:blog3
  }
]


export const images = [
  {
    text:'Iphone 16',
    price: "1299",
    image: image
  },
    {
    text:'Iphone 16 Pro',
    price: "1599",
    image: image2
  },
    {
    text:'Iphone 16e',
    price: "949",
    image: image3
  },
      {
    text:'Iphone 15 ',
    price: "1099",
    image: image4
  }
]


export const navItems =    [
    {name:"Home",path:'/home'},
    {name:"Products",path:'/product'},
    {name:"Pages",path:'/pages'},
    {name:"About Us",path:'/about-us'},
    {name:"Contact Us",path:'/contact-us'}
]