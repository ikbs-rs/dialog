export const Country = {
  getCountryData(uId) {
    return [
      {
        id: '1000',
        code: 're-rs',
        name: 'Serbia',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
    ];
  },
  getCountry(uId) {
    return Promise.resolve(this.getCountryData(uId));
  },
};
