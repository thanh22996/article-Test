import React from "react";
import { Modal } from "react-bootstrap";

function ModelRecruitment(props) {
  const { show, handleClose, dataRecruit } = props;
  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      backdrop="static"
      className="model-recruitment"
    >
      <Modal.Header>
        <img
          onClick={handleClose}
          className="icon-close"
          src="/assets/images/recruitment/Icon_close.png"
          alt="icon"
        />
        <Modal.Title>Mô tả công việc</Modal.Title>
      </Modal.Header>
      {dataRecruit && (
        <Modal.Body>
          <p className="title-name">{dataRecruit.name}</p>
          {dataRecruit.description && (
            <div className="bl-description">
              <p>Mô tả</p>
              <ul>
                {dataRecruit.description.map((value, key) => {
                  return <li key={key}>{value}</li>;
                })}
              </ul>
            </div>
          )}
          {dataRecruit.requirement && (
            <div className="bl-description">
              <p>Yêu cầu</p>
              <ul>
                {dataRecruit.requirement.map((value, key) => {
                  return <li key={key}>{value}</li>;
                })}
              </ul>
            </div>
          )}
          {dataRecruit.interest && (
            <div className="bl-description">
              <p>Quyền lợi</p>
              <ul>
                {dataRecruit.interest.map((value, key) => {
                  return <li key={key}>{value}</li>;
                })}
              </ul>
            </div>
          )}
          <p>
            Gửi CV về:{" "}
            <a href="mailto:nhansubankus@gmail.com">nhansubankus@gmail.com</a>
          </p>
        </Modal.Body>
      )}
    </Modal>
  );
}

export default ModelRecruitment;
