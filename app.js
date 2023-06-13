// DOM MANIPULATION

// Goal: Retail Site 
    // Dynamically change the Entire Site with a click of a button
    // General -- Mens -- Womens -- Children

    let majorContainer ={
        mens: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of men’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1617113930975-f9c7243ae527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        womens: {
            headImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            optionTags: ["Boots", "Dresses", "Athleisure Wear", "Purses"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1529339944280-1a37d3d6fa8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1542841791-1925b02a2bbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1528812969535-4bcefc071532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1601924349924-e2da825ad42a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1526163796497-cf4baaee40ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1538&q=80"
                },
            ],
            textDescription: 'If you’ve ever wished that you could be one of those people who always looks on-trend and incredibly put together, we’ve got some news for you: You can—and you can do it on a budget. And thank goodness for that, because life is expensive enough as it is without having to overhaul your entire wardrobe every season! The key to looking like you spent a fortune without bankrupting yourself is to shop smart. By knowing some clever style tricks, mixing the right pieces, and investing in a few well-made staples, you can completely transform and elevate your look.',
            lowImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80'},
        kids: {
            headImage: "https://images.unsplash.com/photo-1622218286192-95f6a20083c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            optionTags: ["Boots", "Hoodies", "Casual Wear", "Costumes"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=601&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1588641657136-a2b97ca9512a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1519225919213-d22b2f9d640d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1458546450666-ebb1e605853f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80"
                },
            ],
            textDescription: 'A fresh start always feels good — especially when that fresh start includes your kids’ clothes. But what can you do to make sure their wardrobe stays fresh year after year? We all know that being a parent isn’t always easy and one of the biggest challenges that parents have is teaching their kids about style. This challenge is difficult for even the most fashion-forward parent when it comes to their kids’ wardrobes. Kids grow so fast, and clothing made for kids is expensive. We all want our kids to look great without breaking the bank, and that’s why we created this guide to help parents find some affordable yet fashionable kids’ clothing essentials',
            lowImage: 'https://images.unsplash.com/photo-1578897367107-2828e351c8a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80'}
    }
// -----------------------

let mainImage = document.querySelector('.mainImg')
let option = document.querySelector('.options')
let miniOp = document.querySelectorAll('.choice')
let productBox = document.querySelector('.productContainer')
let pic = document.querySelector('.polaroid')
let textBox= document.querySelector('.textContainer')
let productImage = document.querySelector('.productImg')




const changeAll = (category) => {
    if(category==='mens'){
    changeTopPic('mens')
    changeOptions('mens')
    product('mens')
    details('mens')
    } else if(category==='womens'){
        changeTopPic('womens')
        changeOptions('womens')
        product('womens')
        details('womens')
    } else if(category==='kids'){
        changeTopPic('kids')
        changeOptions('kids')
        product('kids')
        details('kids')
    }
}
 const changeTopPic = (category) =>{
    // createImage 
    if(category==='mens'){
    let newimage = document.createElement('img')
        newimage.setAttribute('src', majorContainer.mens.headImage)
        newimage.setAttribute('class','topPic')
        // replaceWith current
       mainImage.replaceWith(newimage)
    }else if(category==='womens'){
        let newimage = document.createElement('img')
            newimage.setAttribute('src', majorContainer.womens.headImage)
            newimage.setAttribute('class','topPic')
        // replaceWith current
        mainImage.replaceWith(newimage)
    }else if(category==='kids'){
            let newimage = document.createElement('img')
                newimage.setAttribute('src', majorContainer.kids.headImage)
                newimage.setAttribute('class','topPic')
            // replaceWith current
            mainImage.replaceWith(newimage)
    }
}

    const changeOptions = (category) =>{
        if(category==='mens'){
            majorContainer.mens.optionTags.forEach((tagname)=>{
            // CREATE ELE
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
            })
        }else if(category==='womens'){
            majorContainer.womens.optionTags.forEach((tagname)=>{
            // CREATE ELE
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
            })
        }else if(category==='kids'){
            majorContainer.kids.optionTags.forEach((tagname)=>{
            // CREATE ELE
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
            })
        }
    }

        const product= (category) => {
            if(category==='mens'){
                majorContainer.mens.productImages.forEach((obj)=>{
                let shopBox  = document.createElement('img')
                shopBox.setAttribute('src',obj.pic)
                shopBox.setAttribute('class','product')
                productBox.append(shopBox)
                productImage.replaceWith(shopBox)
                })
            } else  if(category==='womens'){
                majorContainer.womens.productImages.forEach((obj)=>{
                let shopBox  = document.createElement('img')
                shopBox.setAttribute('src',obj.pic)
                shopBox.setAttribute('class','product')
                productBox.append(shopBox)
                productImage.replaceWith(shopBox)
                })
            } else  if(category==='kids'){
                majorContainer.kids.productImages.forEach((obj)=>{
                let shopBox  = document.createElement('img')
                shopBox.setAttribute('src',obj.pic)
                shopBox.setAttribute('class','product')
                productBox.append(shopBox)
                productImage.replaceWith(shopBox)
                })
            }

        

    }

    // ---------------------------------------------------
    const details= (category) => {
        if(category==='mens'){
            let body = document.querySelector('body')
            body.style.backgroundImage = "url('https://media4.giphy.com/media/l41K3o5TzvmhZwd4A/giphy.gif')"
            addText(textBox,majorContainer.mens.textDescription)
            addImage(pic,majorContainer.mens.lowImage)
        } 
        else  if(category==='womens'){
            let body = document.querySelector('body')
            body.style.backgroundImage = "url('https://i.gifer.com/HkiH.gif')"
            addText(textBox,majorContainer.womens.textDescription)
            addImage(pic,majorContainer.womens.lowImage)
        } else  if(category==='kids'){
            let body = document.querySelector('body')
            body.style.backgroundImage = "url('https://i.pinimg.com/originals/5a/69/43/5a6943b231c1eb459b78484fdc95196c.gif')"
            addText(textBox,majorContainer.kids.textDescription)
            addImage(pic,majorContainer.kids.lowImage)
        }
    }   
    
    const addText =(target, text)=>{
        target.innerHTML = text
    }
    const addImage =(target, url)=>{
        target.setAttribute('src',url)
    }

    
    