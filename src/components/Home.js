import React, { useEffect, useState, useRef } from 'react'
import { AiOutlineEdit, AiOutlineDelete ,AiOutlinePrinter} from 'react-icons/ai';
import { VscPreview } from "react-icons/vsc";
import ReactToPrint from 'react-to-print';
import {addLists} from '../features/Slice'
import {useDispatch} from 'react-redux'
function Home() {
    const dispatch=useDispatch();
    const [total, setTotal] = useState(0)
    const [show, setShow] = useState(true)
    const [list, setList] = useState([])
    const [data, setData] = useState({
        fullname: '', address: '', email: '', number: '', anumber: '', bank: '',
        acnum: '', cname: '', caddress: '', invoice: '', idate: '', ddate: '', notes: ''
    })
    const componentRef = useRef()
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setData((data) => {
            return { ...data, [name]: value }
        })
    }
    const handleEdit = (id) => {
        const editingData = list.find((_, index) => index === id)
        console.log(editingData)
        data.pname = editingData.pname
        data.unit = editingData.unit
        data.cost = editingData.cost
        data.amount = editingData.amount
        handleDelete(id)
    }
    const handleDelete = (id) => {
        console.log(id)
        setList(list.filter((_, index) => index !== id))
    }
    const handleClear=()=>{
        
        console.log(data.fullname)
        // data.fullname="";
        // data.address='';
        // data.email='';
        // data.number='';
        // data.anumber='';
        // data.bank='';
        // data.acnum='';
    }

    const addList = (e) => {
        e.preventDefault()
        const newList = {
            pname: data.pname,
            cost: data.cost,
            unit: data.unit,
            amount: data.unit * data.cost
        }
        if (data.pname && data.cost && data.unit) {
            data.pname = ''
            data.cost = ''
            data.unit = ''
            data.amount = ''
            dispatch(addLists(newList))
            setList([...list, newList])
        } else {
            alert('add item description')
        }



    }

    useEffect(() => {
        const addTotal = () => {
            let s = 0
            if (list) {
                list.map((i) => {
                    return s += i.amount
                })
            } else {
                s = 0
            }

            setTotal(s)
        }
        addTotal()
    }, [list])

    return (
        <>{show ? <>
            <div className="container mt-4">
                <div className="row ">
                    <div className="col-6">
                        
                    </div>
                    <div className="col-6"></div>
                </div>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputtext1" className="form-label">Enter your full name:</label>
                        <input type="text" className="form-control" id="inputtext1" name="fullname" onChange={handleChange} value={data.fullname}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputtext2" className="form-label">Enter your Address</label>
                        <input type="text" className="form-control" id="inputtext2" name="address" onChange={handleChange} value={data.address}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputtext3" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputtext3" name="email" onChange={handleChange} value={data.email}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputtext1" className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" id="inputtext4" name='number' onChange={handleChange} value={data.number}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputAddress" className="form-label">Alternative mobile number:</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="" name="anumber" onChange={handleChange} value={data.anumber}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress2" className="form-label">Enter your Bank Name</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="" name="bank" onChange={handleChange} value={data.bank}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Enter your account number:</label>
                        <input type="text" className="form-control" id="inputCity" name="acnum" onChange={handleChange} value={data.acnum}/>
                    </div>
                    {/* <div className="col-md-1 offset-md-1">
                    <button type="button" className="btn btn-outline-success mt-4" style={{marginTop:'2rem'}} onClick={handleClear} disabled>Clear</button>
                    </div> */}

                    {/* Client Description */}
                    <div className="col-12">
                        <article className='display-5'>Client Description:</article>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="pname" className="form-label">Enter your client name:</label>
                        <input type="text" className="form-control" id="product" name="cname" onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cost" className="form-label">Enter your client address:</label>
                        <input type="text" className="form-control" id="cost" name="caddress" onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputunit" className="form-label">Invoice Number:</label>
                        <input type="text" className="form-control" id="inputunit" name="invoice" onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputunit" className="form-label">Invoice Date:</label>
                        <input type="date" className="form-control" id="inputunit" name="idate" onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputunit" className="form-label">Due Date:</label>
                        <input type="date" className="form-control" id="inputunit" name="ddate" onChange={handleChange} />
                    </div>

                    {/* item description */}
                    <div className="col-12">
                        <h5>Item Description</h5>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="pname" className="form-label">Product description:</label>
                        <input type="text" className="form-control" id="product" name="pname" onChange={handleChange} value={data.pname} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cost" className="form-label">Price:</label>
                        <input type="text" className="form-control" id="cost" name="cost" onChange={handleChange} value={data.cost} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputunit" className="form-label">Quantity:</label>
                        <input type="text" className="form-control" id="inputunit" name="unit" onChange={handleChange} value={data.unit} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputunit" className="form-label">Amount:</label>
                        <input type='text' className="form-control" id="inputunit" name='amount' value={data.unit * data.cost || '0'} onChange={handleChange} readOnly />
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary mt-4" onClick={addList}>Add Item</button>
                    </div>
                    {list && Object.keys(list).length > 0 ? <>
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead className="card-header">
                                                <tr>
                                                    <td className="col-4"><strong>Product Description</strong></td>
                                                    <td className="col-2 text-center"><strong>Rate</strong></td>
                                                    <td className="col-2 text-center"><strong>QTY</strong></td>
                                                    <td className="col-2 text-end"><strong>Amount</strong></td>
                                                    <td className="col-2 text-center"><strong></strong></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {list.map((i, index) => {
                                                    return (<tr key={index}>
                                                        <td className="col-4 text-1">{i.pname}</td>
                                                        <td className="col-2 text-center">{i.cost}</td>
                                                        <td className="col-2 text-center">{i.unit}</td>
                                                        <td className="col-2 text-end">{i.amount}</td>
                                                        <td className="col-2 text-center"><AiOutlineEdit className="editIcon" onClick={() => handleEdit(index)} /> <AiOutlineDelete className='deleteIcon' onClick={() => handleDelete(index)} /></td>
                                                    </tr>)
                                                })}

                                            </tbody>
                                            <tfoot className="card-footer">
                                                <tr>
                                                    <td colSpan="3" className="text-end"><strong>Total:</strong></td>
                                                    <td className="text-end">{total}</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div></> : <></>}
                    <div className="col-12">
                        <h5>Additional Notes:-</h5>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name="notes" style={{ height: "100px" }}></textarea>
                            <label htmlFor="floatingTextarea2">Pay to the bank account indicated above</label>
                        </div>
                    </div>

                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary" onClick={() => setShow(false)}>Preveiw Invoice <VscPreview /></button>
                    </div>
                </form>
            </div>

        </>
            : <>
            <div className="container-fluid mt-4 ps-4">
            <ReactToPrint trigger={() => <button>Print <AiOutlinePrinter/></button>} content={() => componentRef.current} />
            
                    </div>
           
                <div className="container-fluid invoice-container" ref={componentRef}>
                    
                    

                    <header>

                        <div className="row align-items-center">
                            <div className="col-sm-7 text-center text-sm-start mb-3 mb-sm-0">
                                {/* <img id="logo" src="images/logo.png" title="Koice" alt="Koice" /> */}
                            </div>
                            <div className="col-sm-5 text-center text-sm-end">
                                <h4 className="text-7 mb-0">Invoice</h4>
                            </div>
                        </div>
                        <hr />
                    </header>


                    <main>
                        <div className="row">
                            <div className="col-sm-6"><strong>Date:</strong> {data.idate}</div>
                            <div className="col-sm-6 text-sm-end"> <strong>Invoice No:</strong> {data.invoice}</div>

                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-6 text-sm-end order-sm-1"> <strong>Pay To:</strong>
                                <address>
                                    {data.fullname}<br />
                                    {data.address}<br />
                                    {data.number}<br />
                                    {data.email}
                                </address>
                            </div>
                            <div className="col-sm-6 order-sm-0"> <strong>Invoiced To:</strong>
                                <address>
                                    {data.cname}<br />
                                    {data.caddress}<br />
                                    { }<br />
                                </address>
                            </div>
                        </div>
                        <footer className="text-center mt-4">
                            <p className="text-1">*pay bill to the {data.bank}-{data.acnum} before {data.ddate}</p>
                        </footer>
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <thead className="card-header">
                                            <tr>
                                                <td className="col-4"><strong>Product Description</strong></td>
                                                <td className="col-3 text-center"><strong>Rate</strong></td>
                                                <td className="col-2 text-center"><strong>QTY</strong></td>
                                                <td className="col-3 text-end"><strong>Amount</strong></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {list.map((i, index) => {
                                                return (<tr key={index}>
                                                    <td className="col-4 text-1">{i.pname}</td>
                                                    <td className="col-3 text-center">{i.cost}</td>
                                                    <td className="col-2 text-center">{i.unit}</td>
                                                    <td className="col-3 text-end">{i.amount}</td>
                                                </tr>)
                                            })}

                                        </tbody>
                                        <tfoot className="card-footer">
                                            <tr>
                                                <td colSpan="3" className="text-end border-bottom-0"><strong>Total:</strong></td>
                                                <td className="text-end border-bottom-0">{total}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer className="text-center mt-4">
                        <p className="text-1"><strong>NOTE :</strong> {data.notes || 'This is computer generated receipt and does not require physical signature.'}</p>
                    </footer>

                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-danger" style={{ width: '50%' }} onClick={() => setShow(true)}>Edit Invoice</button>
                </div>



            </>}



        </>
    )
}

export default Home