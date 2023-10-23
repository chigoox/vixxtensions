import VIXBAN3 from "../public/Images/Banners/Banner2.png";
import VIXBAN2 from "../public/Images/Banners/Banner1.png";
import IMG from "public/Images/0A90A7F5-E6FC-421A-8A5D-9383ED7A1868.JPG";

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

export const emailCollectorIMG = IMG

export const categoryLinks = category.map((category)=>{
    return category.replace(/\s/g, '')
})




//salePrice category type
