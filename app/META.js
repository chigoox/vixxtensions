import VIXBAN3 from "../public/Images/Banners/Banner2.png";
import VIXBAN2 from "../public/Images/Banners/Banner1.png";



export const siteName = 'ViHair'
export const siteTag = 'Raw Luxury Hair'
export const orderNumberPrefix = 'Vi'
export const category = ['Luxury Bundles', 'Luxury Lace', 'Luxury Wigs', 'Hot Tools','hoodies','shirts']


export const bannerImage = [VIXBAN2, VIXBAN3]



export const categoryLinks = category.map((category)=>{
    return category.replace(/\s/g, '')
})




//salePrice category type
