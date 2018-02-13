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
      method: 'POSt',
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

export {
  getRecentTen,
  getTenLiked,
  submitLike,
};

