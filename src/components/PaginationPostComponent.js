import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Posts from "./Posts";
import PaginationItem from "./PaginationItem";
import PaginationPostPerPage from "./PaginationPostPerPage";

const PaginationPostComponent = ({ someData, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  //Get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = someData.slice(indexOfFirstPost, indexOfLastPost);

  const onPageChange = (pageNumber) => {
    if (pageNumber === "..." || pageNumber === " ...") {
      setCurrentPage(currentPage + 2);
    } else if (pageNumber === "... ") {
      setCurrentPage(currentPage - 2);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const changeDisplayedResultsPerPage = (e) => {
    setCurrentPage(1);
    setPostPerPage(e.target.value);
  };

  return (
    <Container>
      <PaginationPostPerPage
        changeDisplayedResultsPerPage={changeDisplayedResultsPerPage}
        postPerPage={postPerPage}
      />
      <Posts posts={currentPosts} isLoading={isLoading} />
      <PaginationItem
        postPerPage={postPerPage}
        totalPost={someData.length}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default PaginationPostComponent;
