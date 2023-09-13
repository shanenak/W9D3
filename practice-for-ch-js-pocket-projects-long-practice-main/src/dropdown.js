const dogs = 
{
  "Corgi":"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = function() {
  const dogLinks = [];
  for (const key in dogs) {
    const a = document.createElement("a")
    a.innerHTML = key;
    a.href = dogs[key]
    const li = document.createElement("li")
    li.className = 'dog-link'
    li.setAttribute("hidden", "hidden")
    li.append(a)
    dogLinks.push(li)
  }
  return dogLinks
}

const dropdownList = document.querySelector(".drop-down-dog-list")
const dropdownText = document.querySelector(".drop-down-dog-nav")
const handleEnter = function() { 
  Array.from(dropdownList.children).forEach((ele) => {
    ele.removeAttribute("hidden");
  })
}

const handleLeave = function() {
  Array.from(dropdownList.children).forEach((ele) => {
    ele.setAttribute("hidden", "hidden");
  })
}

const attachDogLinks = function() {
  const dogLinks = dogLinkCreator()
  dropdownText.addEventListener("mouseenter", handleEnter)
  dropdownText.addEventListener("mouseleave", handleLeave)

  dogLinks.forEach((ele) => {
    dropdownList.appendChild(ele);
  })
}



export default attachDogLinks;