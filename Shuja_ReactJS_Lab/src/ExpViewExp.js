import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExpListing = () => {
    const [expdata, expdatachange] = useState(null);
    const [sum, setSum] = useState();
    const [jyospent, setJyospent] = useState();
    const [rishispent, setRishispent] = useState();
    useEffect(() => {
        console.log("1st")
        fetch("http://localhost:8000/expense").then((res) => {
            return res.json();
        }).then((resp) => {
            console.log("resp:", resp)
            expdatachange(resp);
            fetchShares(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    const fetchShares = (data) => {
        let jyo = 0, rishi = 0, jyoTot, rishiTot;
        console.log(data);
        for (let eachObj of data) {
            if (eachObj.name === 'Jyo') {
                jyoTot = parseInt(eachObj.price)
                jyo += jyoTot;
                console.log("Jyo:", jyo)

            } else {
                rishiTot = parseInt(eachObj.price)
                rishi += rishiTot;
                console.log("rishi:", rishiTot)
            }
        }
        setSum(jyo + rishi)
        setJyospent(jyo);
        setRishispent(rishi);
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>View Total Expense</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/" className="btn btn-success">Home</Link>
                    </div>
                    <table className="table table-bordered">
                        <tr>
                            <th>Total:</th>
                            <td>{sum}</td>
                        </tr>
                        <tr>
                            <th>Jyo paid:</th>
                            <td>{jyospent}</td>
                        </tr>
                        <tr>
                            <th>Rishi paid:</th>
                            <td>{rishispent}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ExpListing;