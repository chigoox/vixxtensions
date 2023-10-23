import VIXBAN3 from "../public/Images/Banners/Banner2.png";
import VIXBAN2 from "../public/Images/Banners/Banner1.png";
import { GoalIcon } from "lucide-react";



export const siteName = <div className="center-col"> 
    Vihair
</div>

export const NavBarVideoURL = 'QWHjHFtDfV8'
export const siteTag = 'Raw Luxury Hair'
export const orderNumberPrefix = 'Vi'
export const category = ['Luxury Bundles', 'Luxury Lace', 'Luxury Wigs', 'Hot Tools','hoodies','shirts']

export const IGFeedURL = 'https://feeds.behold.so/trP3rN6f5NfTye0m7zu0'

export const bannerImage = [VIXBAN2, VIXBAN3]



export const categoryLinks = category.map((category)=>{
    return category.replace(/\s/g, '')
})




//salePrice category type
