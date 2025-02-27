class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "9544c3a2-9ca1-48f5-a2e1-8da99a7924e4",
      },
    }).then((res) => res.json());
  }

  // other methods for working with the API
}

export default Api;
