const BASE_URL = 'https://whirlpood.herokuapp.com/api';

async function getRecentTen() {
  try {
    const response = await fetch(`${BASE_URL}/pods/ten/recent`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
}

async function getTenLiked() {
  try {
    const response = await fetch(`${BASE_URL}/pods/ten/liked`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
}

async function submitLike(id) {
  try {
    const response = await fetch(`${BASE_URL}/pods/${id}`, {
      method: 'POST',
	    headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
	    },
    });
    return response.json();
  } catch (err) {
    throw Error(err);
  }
}

async function getChannels(){
  try {
    const response = await fetch(`${BASE_URL}/channels`);
    return response.json();
  } catch (err){
    throw Error(err);
  }
}

async function getChannel (title, type){
  try {
    const response = await fetch(`${BASE_URL}/pods/ten/${title}/${type}`);
    return response.json();
  } catch (err){
    throw Error(err);
  }
}

export {
  getRecentTen,
  getTenLiked,
  submitLike,
	getChannels,
	getChannel
};

