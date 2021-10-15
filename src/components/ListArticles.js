import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getListArticleAction } from "../redux/actions";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function ListArticles(props) {
  const dispatch = useDispatch();
  const [listArticle, setListArticle] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });
  const lengthData = useSelector((state) => state.listArticleReducer.length);
  const [arrPagination] = useState([]);
  const [dataSearch, setDataSearch] = useState({
    search: "",
  });

  const [dataSort, setDataSort] = useState({
    sortBy: "createdAt",
    order: "asc",
  });

  // const dispatch = useDispatch();

  console.log("lengthData", lengthData);

  const getArticleChangePage = () => {
    dispatch(
      getListArticleAction(
        { page: pagination.page, limit: 10 },
        (stt, dataList) => {
          if (stt === 1000) {
            setListArticle(dataList);
          }
        }
      )
    );
  };

  const onChangeSearch = (e) => {
    setDataSearch({
      [e.target.name]: e.target.value,
    });
  };

  const onSearch = (e) => {
    e.preventDefault();
    console.log("dataSearch: ", dataSearch);
    dispatch(
      getListArticleAction(dataSearch, (stt, dataList) => {
        if (stt === 1000) {
          setListArticle(dataList);
        }
      })
    );
  };

  const changePage = (page) => {
    setPagination({ ...pagination, page: page + 1 });
  };

  const changeSort = (e) => {
    setDataSort({ ...dataSort, order: e });
    const data = {
      ...dataSort,
      page: pagination.page,
      limit: pagination.limit,
    };
    console.log("data sort: ", data);
    dispatch(
      getListArticleAction(data, (stt, dataList) => {
        if (stt === 1000) {
          setListArticle(dataList);
        }
      })
    );
  };

  useEffect(() => {
    getArticleChangePage();
    // eslint-disable-next-line
  }, [pagination.page]);

  console.log("listArticle: ", lengthData);

  console.log("arrPagination: ", arrPagination);
  return (
    <div className="list-article">
      <div className="form-search">
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2 d-flex">
            <label htmlFor="inputPassword2" className="sr-only label-search">
              Tìm kiếm bài viết
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder="Nhập tên bài viết"
              name="search"
              onChange={onChangeSearch}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-2"
            onClick={onSearch}
          >
            Tìm kiếm
          </button>
        </form>
      </div>

      <div className="d-flex title-list-article">
        <p className="list-title">Danh sách bài viết</p>
        <Dropdown className="d-inline mx-2" autoClose="inside">
          <Dropdown.Toggle id="dropdown-autoclose-inside">
            Sắp xếp
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => changeSort("desc")}>
              Mới nhất
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeSort("asc")}>
              Cũ nhất
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="row">
        <ul className="list-unstyled">
          {listArticle.map((value, key) => {
            return (
              <NavLink to={`/list-article/detail/${value.id}`}>
                <li className="media">
                  <img src={value.image} className="mr-3" alt="..." />
                  <div className="media-body">
                    <h5 className="mt-0 mb-1 title-item">{value.title}</h5>
                    <p className="content-item">{value.content}</p>
                  </div>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className="pagination mt-5 mb-4">
        <Pagination>
          <Pagination.First onClick={() => changePage(0)} />
          {lengthData.map((v, k) => {
            return (
              <Pagination.Item onClick={() => changePage(k)}>
                {k + 1}
              </Pagination.Item>
            );
          })}
          <Pagination.Last onClick={() => changePage(lengthData.length - 1)} />
        </Pagination>
      </div>
    </div>
  );
}

export default ListArticles;
