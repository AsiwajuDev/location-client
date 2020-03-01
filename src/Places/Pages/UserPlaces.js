import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../Components/PlaceList/PlaceList";

const DUMMY_Places = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrappers in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/220px-Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: "40.7484405",
      lng: "-73.9878584"
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous skyscrappers in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/220px-Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: "40.7484405",
      lng: "-73.9878584"
    },
    creator: "u2"
  },
  {
    id: "p3",
    title: "Empire State Building",
    description: "One of the most famous skyscrappers in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/220px-Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: "40.7484405",
      lng: "-73.9878584"
    },
    creator: "u3"
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_Places.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
