import React, { Fragment, useState } from "react";

const EditTransaction = ({ transaction }) => {

  const [description, setDescription] = useState(transaction.description);

  //edit description function

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:8000/transactions/${transaction.transaction_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>

      <button type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${transaction.transaction_id}`}
      >
        Edit
      </button>


      <div class="modal" id={`id${transaction.transaction_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">


            <div class="modal-header">
              <h4 class="modal-title">Edit Transaction</h4>
              <button type="button"
                class="close"
                data-dismiss="modal">&times;</button>
            </div>


            <div class="modal-body">
              <input type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>


            <div class="modal-footer">
              <button type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}>
                Edit</button>

              <button type="button"
                class="btn btn-danger"
                data-dismiss="modal">
                Close</button>
            </div>

          </div>
        </div>
      </div>
    </Fragment >
  );
};

export default EditTransaction;