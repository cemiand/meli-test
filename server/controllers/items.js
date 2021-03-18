const axios = require("axios");

const meliApiPelada = "https://api.mercadolibre.com/";
const meliApi = "https://api.mercadolibre.com/sites/MLA/search?q="; // ...query;
const meliApiId = "https://api.mercadolibre.com/items/"; //:id

//FUNCIONES PARA DAR FORMATO A LOS ITEMS
const getAuthor = () => {
  return {
    name: "Emiliano",
    lastname: "Cantisani",
  };
};

const getCategories = ([itemsWithCategoriesInside]) => {
  let categories = [];
  categories = itemsWithCategoriesInside
    ? itemsWithCategoriesInside.values[0].path_from_root.map((category) => {
        return category.name;
      })
    : [];
  return categories;
};

const getSearchedItems = (items) => {
  return items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price.toFixed(),
        decimals: (item.price.toFixed(2) - Math.floor(item.price)).toFixed(2),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      address: item.address.state_name,
    };
  });
};

function finalProductsToSend(res) {
  productsToSend = {};
  productsToSend.author = getAuthor();
  productsToSend.categories = getCategories(res.filters);
  productsToSend.items = getSearchedItems(res.results);
  return productsToSend;
}

//FUNCIONES PARA DAR FORMATO A ITEM/ID
const getSearchedItemById = (item, description) => {
  const itemWithId = {};

  itemWithId.id = item.id;
  itemWithId.title = item.title;
  itemWithId.price = {
    currency: item.currency_id,
    amount: item.price.toFixed(),
    decimals: (item.price.toFixed(2) - Math.floor(item.price))
      .toFixed(2)
      .slice(2, 4),
  };
  itemWithId.picture = item.pictures[0].url;
  itemWithId.condition = item.condition === "new" ? "Nuevo" : "Usado";
  itemWithId.free_shipping = item.shipping.free_shipping;
  itemWithId.sold_quantity = item.sold_quantity;
  itemWithId.description = description.plain_text;

  return itemWithId;
};

exports.getItems = (req, res) => {
  const quantity = 4;
  const searchValue = req.query.search;
  axios
    .get(`${meliApi}${searchValue}&limit=${quantity}`)
    .then((response) => {
      res.send(finalProductsToSend(response.data));
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getOneItem = (req, res) => {
  const ItemWithDescription = {};
  const id = req.params.id;
  const reqWithid = axios.get(`${meliApiId}${id}`);
  const reqWithIdAndDescription = axios.get(`${meliApiId}${id}/description`);

  axios.all([reqWithid, reqWithIdAndDescription]).then(
    axios.spread((item, description) => {
      ItemWithDescription.author = getAuthor();
      ItemWithDescription.item = getSearchedItemById(
        item.data,
        description.data
      );
      axios
        .get(`${meliApiPelada}categories/${item.data.category_id}`)
        .then((response) => {
          ItemWithDescription.categories = response.data.path_from_root.map(
            (category) => {
              return category.name;
            }
          );
          res.send(ItemWithDescription);
        });
    })
  );
};
