import VIXBAN3 from "../public/Images/Banners/Banner2.png";
import VIXBAN2 from "../public/Images/Banners/Banner1.png";
import IMG from "public/Images/0A90A7F5-E6FC-421A-8A5D-9383ED7A1868.JPG";
import RawBundlesImage from '../public/Images/RawBundles.jpeg'
import RawLace from '../public/Images/RawLace.jpeg'
import RawWig from '../public/Images/RawWig.jpeg'
import RawTools from '../public/Images/RawTools.jpeg'


export const siteName = <div className="center-col"> 
    Vihair
</div>

export const NavBarVideoURL = 'QWHjHFtDfV8'
export const siteTag = 'Raw Luxury Hair'
export const orderNumberPrefix = 'Vi'
export const category = ['Luxury Bundles', 'Luxury Lace', 'Luxury Wigs', 'Hot Tools','hoodies','shirts']

export const IGFeedURL = 'https://feeds.behold.so/trP3rN6f5NfTye0m7zu0'

export const bannerImage = [VIXBAN2, VIXBAN3]

export const emailCollectorIMG = IMG

export const categoryLinks = category.map((category)=>{
    return category.replace(/\s/g, '')
})

export const HomePageCategoryImages = (category) =>{  
    switch (category) {
        case 'Luxury Wigs':
                return RawLace
            case 'Luxury Lace':
                return RawLace 
            case 'Luxury Bundles':
                return RawBundlesImage 
            case 'Hot Tools' :
                return RawTools
        default:
            return 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=2193&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
}
    
    
    
    
    
    
                            



//salePrice category type
