import { API } from "../config";

exports.signup = (user) => {
  // console.log(user)
  return fetch(`/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.signin = (user) => {
  // console.log(user)
  return fetch(`/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

// to save user information to localstorage
exports.authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

exports.signout = (next) => {
  // to remove user information from localstorage
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
  }
  // api call
  return fetch(`/signout`, {
    method: "GET",
  })
    .then((res) => {
      console.log("signout", res);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  if (localStorage.getItem("jwt")) {
    // to parse user data to JSON and return it
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
