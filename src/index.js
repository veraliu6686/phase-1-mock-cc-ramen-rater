// write your code here

const remanMenu = document.querySelector("#ramen-menu")
const largeImg = document.querySelector(".detail-image")
const imgName = document.querySelector(".name")
const imgRestaurant = document.querySelector(".restaurant")
const imgRating = document.querySelector("#rating-display")
const imgComment = document.querySelector("#comment-display")


fetch("http://localhost:3000/ramens")
.then (r => r.json ())
.then (ramenAry => {
// images go under div#reman-menu

    ramenAry.forEach( (ramenObj)=>{

    let remanImage= document.createElement("img")
    remanImage.src= ramenObj.image
    remanMenu.append(remanImage)

    //render image detail to div#ramen-detail
    remanImage.addEventListener("click", () => {

       return renderRamen(ramenObj)

    })
    })

    function renderRamen(ramenObj){

        largeImg.src = ramenObj.image
        imgName.textContent = ramenObj.name
        imgRestaurant.textContent = ramenObj.restaurant
        imgRating.textContent = ramenObj.rating
        imgComment.textContent = ramenObj.comment
        console.log (ramenObj)
    }

// add new item "OBJECT" and submit to the form
    const form = document.querySelector("#new-ramen")

    form.addEventListener("submit",(e)=>{
        e.preventDefault()

        const newRamenObj = {
        name : e.target.name.value,
        restaurant : e.target.restaurant.value,
        image : e.target.image.value,
        rating : e.target.rating.value,
        comment : e.target["new-comment"].value
        }
        renderRamen(newRamenObj)

        form.reset()
    })

    // const editForm = document.querySelector("#eidt-ramen")
    // editForm.addEventListener("submit",(e)=>{
    //     e.preventDefault()
    //     renderRamenUpdate(newRamenObj)
    // })
    

    // function renderRamenUpdate(ramenObjNew){

    //     imgRating.textContent = ramenObjNew.rating
    //     imgComment.textContent = ramenObjNew.comment

    // }

})
