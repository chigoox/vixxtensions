export const siteName = 'ViHair'
export const siteTag = 'Raw Luxury Hair'
export const orderNumberPrefix = 'Vi'


const shopItem = (title, img, price) =>{
    return {name: title, images:[img], metadata:{salePrice: price}}
}

export const bestseller = [
    shopItem('wig1','https://www.asteriahair.com/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/c/u/curly_wigs_long.jpg',200),
        shopItem('wig2','https://www.asteriahair.com/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/l/o/long_straight_wigs_.jpg',300),
        shopItem('wig2','https://www.asteriahair.com/media/wysiwyg/home/1654139996.jpg',300),
        shopItem('wig3','https://www.asteriahair.com/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/a/s/ash_blonde_highlights_on_blonde_human_hair_wig.jpg',230),
        shopItem('wig3','https://www.asteriahair.com/media/wysiwyg/home/1654139998.jpg',230),
        shopItem('wig4','https://www.asteriahair.com/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/w/e/wear_to_go_wig_-_body_wave_5x5_hd_lace_glueless_wigs.jpg',500),

]

export const category = ['Luxury Bundles', 'Luxury Lace', 'Luxury Wigs', 'Hot Tools & Accessories']



//salePrice category type
