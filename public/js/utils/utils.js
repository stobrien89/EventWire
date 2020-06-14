const isUserLoggedIn = () => {
  return localStorage.getItem('token') ? true : false;
}

const parseDestinationID = (searchURL) => {
  const indexD = searchURL.indexOf("?d=");
  const indexI = searchURL.indexOf("&i=");

  if (indexD > -1) {
    const destinationId = indexI > -1 ? searchURL.substring(indexD + 3, indexI) : searchURL.substring(indexD + 3);

    return destinationId;
  }
  return '';
}


const parseEventID = (searchURL) => {
  const indexE = searchURL.indexOf("?e=");
  const indexI = searchURL.indexOf("&i=");

  if (indexE > -1) {
    const eventId = indexI > -1 ? searchURL.substring(indexE + 3, indexI) : searchURL.substring(indexE + 3);

    return eventId;
  }
  return '';
}

const parseItineraryID = (searchURL) => {
  const index = searchURL.indexOf("&i=");
  if (index > -1) {
    const itineraryId = searchURL.substring(index + 3);
    return itineraryId;
  }
  return '';
}

const FirstSentence = (str) => {
  const regex = /^(.*?(?<!\b\w)[.?!])\s+[A-Z0-9]/;
  let sentence = regex.exec(str);

  if (sentence !== null) {
    // keep it to 80 char
    return sentence[1].substring(0, 80);
  }
}