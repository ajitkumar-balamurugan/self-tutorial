const url = "https://randomuser.me/api/";
export default async () => {
  let data = await fetch(url);
  data = await data.json();
  const person = data.results[0];
  //   console.log(person);
  const {
    picture: { large: image },
    name: { first, last },
    email,
    dob: { age },
    location: {
      street: { number, name },
    },
    phone,
    login: { password },
  } = person;
  return {
    image,
    name: `${first} ${last}`,
    email,
    age,
    street: `${number}, ${name}`,
    phone,
    password,
  };
};
