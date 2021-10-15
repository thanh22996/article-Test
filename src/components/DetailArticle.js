import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetailArticleAction } from "../redux/actions";

function DetailArticle(props) {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [contentData, setContentData] = useState();
  console.log("id: ", id);
  const getArticleChangePage = () => {
    dispatch(
      getDetailArticleAction({ id }, (stt, data) => {
        // setArrPagination([]);
        console.log("data", data);
        if (stt === 1000) {
          setContentData(data);
        }
      })
    );
  };
  useEffect(() => {
    getArticleChangePage();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <h2 className="mb-5">Chi tiết bài viết</h2>
      {contentData && (
        <Card>
          <Card.Img variant="top" src={contentData.image} />
          <Card.Body>
            <Card.Title>{contentData.title}</Card.Title>
            <Card.Text>{contentData.content}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default DetailArticle;
