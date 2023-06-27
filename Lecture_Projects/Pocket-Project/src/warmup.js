const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const p = document.createElement('p');
    p.innerHTML = string;
    htmlElement.replaceChildren(p)


};

htmlGenerator('Party Time.', partyHeader);
