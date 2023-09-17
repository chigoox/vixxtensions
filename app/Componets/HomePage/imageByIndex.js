

export const imageByIndex = (index, slides) =>{ 
    console.log(index)
    return slides[index % slides.length]
}
 
