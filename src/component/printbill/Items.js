import React from 'react'
// import { http } from '../../axios'

function Products({ items }) {    

    var total = 0, gst = 0, grandTotal = 0;

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>S.No</td>
                        <th>Product</th>
                        <th>HSNNO</th>
                        <th>MRP</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Taxable Amount</th>
                        <th>GST</th>
                        <th>GST Amount</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((data, index) => {
                            // console.log("data", data)
                            total += data.total
                            gst += data.gstTotal
                            grandTotal += data.grandTotal



                            return (
                                <tr key={data._id}>
                                    <td>{index + 1}</td>
                                    <td>{data.product}</td>
                                    <td>{data.hsnno}</td>
                                    <td>{data.mrp}</td>
                                    <td>{data.qt}</td>
                                    <td>{data.rate}</td>
                                    <td>{data.total}</td>
                                    <td>{data.gst}%</td>
                                    <td>{data.gstTotal}</td>
                                    <td>{data.grandTotal}</td>
                                </tr>
                            )
                        })
                    }

                    <tr className="is-tr">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{total}</td>
                        <td></td>
                        <td>{gst}</td>
                        <td>{grandTotal}</td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default Products
