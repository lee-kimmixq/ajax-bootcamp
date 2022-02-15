const getOneItem = (itemId) => {
  axios
    .get(`/items/${itemId}`)
    .then(({ data }) => {
      const descDiv = document.createElement('div');
      descDiv.innerText = data.item.description;
      const btnDiv = document.querySelector(`#div${itemId}`);
      btnDiv.appendChild(descDiv);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

const getItems = () => {
  axios
    .get('/items')
    .then(({ data }) => {
      const container = document.querySelector('#container');
      data.items.forEach((item) => {
        const newDiv = document.createElement('div');
        newDiv.id = `div${item.id}`;
        const newBtn = document.createElement('button');
        newBtn.innerText = item.name;
        newBtn.addEventListener('click', () => { getOneItem(item.id); })
        newDiv.appendChild(newBtn);
        container.appendChild(newDiv);
      });
    })
    .catch((error) => {
    // handle error
      console.log(error);
    });
};

const button = document.querySelector('#theBtn');
button.addEventListener('click', () => { getItems(); });
