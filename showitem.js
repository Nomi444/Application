export default function Showitem({ cart }) {
    return (

        <div>
            { cart.map(c =>

                <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">{c.name}</h6>


                        </div>
                        <span className="badge bg-secondary rounded-pill">{c.cartQty}</span>
                        <span className="text-muted">{c.price}</span>
                    </li>

                </ul>

            )}
         

            <div>
                <li class="list-group-item d-flex justify-content-between">
                    <span>Total (Rs)</span>
                    <strong>  {cart.reduce((sum, i) => sum + i.cartQty * i.price, 0)}</strong>
                </li>
            </div>
            <div>
                <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Promo code" />
                        <button type="submit" className="btn btn-secondary">Redeem</button>
                    </div>
                </form>
            </div>
        </div>
    )

}