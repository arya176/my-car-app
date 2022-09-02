export interface ICarBrand {
  name: string;
  models: ICar[];
}

export interface ICar {
  name: string;
  imgUrl: string;
  price: number;
}

export const cars: ICarBrand[] = [
  {
    name: "Subaru",
    models: [
      {
        name: "Impreza",
        price: 30000,
        imgUrl: "",
      },
      {
        name: "XV",
        price: 40000,
        imgUrl: "",
      },
      {
        name: "Outback",
        price: 60000,
        imgUrl: "",
      },
    ],
  },
  {
    name: "Toyota",
    models: [
      {
        name: "Collora",
        price: 30000,
        imgUrl: "",
      },
      {
        name: "Yaris",
        price: 4000,
        imgUrl: "",
      },
      {
        name: "Land cruiser",
        price: 60000,
        imgUrl: "",
      },
    ],
  },
  {
    name: "Kia",
    models: [],
  },
];
