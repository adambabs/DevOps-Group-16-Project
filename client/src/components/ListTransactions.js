import { transition } from "d3";
import React, { Fragment, useEffect, useState } from "react";

import EditTransaction from "./EditTransaction";

const ListTransactions = () => {



    const [transactions, setTransactions] = useState([]);



    //delete transaction function

    const deleteTransaction = async id => {
        try {
            const deleteTransaction = await fetch(`http://localhost:8000/transactions/${id}`, {
                method: "DELETE"
            });

            setTransactions(transactions.filter(transaction => transaction.transaction_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };



    const getTransactions = async () => {
        try {
            const response = await fetch("http://localhost:8000/transactions");
            const jsonData = await response.json();

            setTransactions(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTransactions();
    }, []);

    console.log(transactions);

    return (
        <Fragment>
            {" "}
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.transaction_id}>
                            <td>{transaction.description}</td>
                            <td> <EditTransaction transaction={transaction} /></td>
                            <td> <button class="btn btn-danger"
                                onClick={() => deleteTransaction(transaction.transaction_id)}>
                                Delete
                            </button></td>

                        </tr>

                    ))}
                </tbody>
            </table>
        </Fragment >
    );
};

export default ListTransactions;