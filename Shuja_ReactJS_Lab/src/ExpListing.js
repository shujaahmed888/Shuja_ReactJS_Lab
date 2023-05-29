import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmpListing = () => {
    const [expdata, expdatachange] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/expense").then((res) => {
            return res.json();
        }).then((resp) => {
            expdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Expense Tracker</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="expense/create" className="btn btn-success">Add Expense</Link>
                        <Link to="expense/view" className="btn btn-success">View Expenses</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Date</td>
                                <td>Product Purchased</td>
                                <td>Price</td>
                                <td>Payee</td>                                
                            </tr>
                        </thead>
                        <tbody>

                            {expdata &&
                                expdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.date}</td>
                                        <td>{item.product}</td>
                                        <td>{item.price}</td>
                                        <td>{item.name}</td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;