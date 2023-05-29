import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [product, productchange] = useState("");
    const [price, pricechange] = useState("");
    const [date, datechange] = useState("");
    const[validation,valchange]=useState(false);



    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const expdata = { name, product, price, date };


        fetch("http://localhost:8000/expense", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(expdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Add New Item</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <select name="name" required id="name" onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control">
                                                <option value="">Choose</option>
                                                <option value="Jyo">Jyo</option>
                                                <option value="Rishi">Rishi</option>
                                            </select>                                            
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Product Purchased *</label>
                                            <input value={product} required onChange={e => productchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input value={price} required onChange={e => pricechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Date</label>
                                            <input type = "date" required value={date} onChange={e => datechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;