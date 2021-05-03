import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SearchScreen = () => {
  const { query } = useParams();

  const dispatch = useDispatch();

  return <Container></Container>;
};

export default SearchScreen;
