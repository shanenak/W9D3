const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const p = document.createElement("p");
    p.innerText = string;
    while (htmlElement.firstChild){
        htmlElement.removeChild(htmlElement.firstChild);
    }
    htmlElement.append(p);
};

htmlGenerator('Party time!!.', partyHeader);