// import { useState } from "react";
// import "./basket.css"



// const Basket = ({ cart, removeItem, addItem}) => {



//     return (

//     <div>

//         <div className="modalBody">
//             {/* <div>{cart.length === 0 && <div>Nothing in the basket</div>}</div> */}
//             { cart.map( ( item ) => (
//             <div key={item.id} className="Cat" >
//                 <h3>{ item.name }</h3>
//                 <div className="mainBox">
//                 <img className="basketImg" src={ item.url } alt="basket item" />
//                 <div>
//                 <div className="price">Sub-total: {(parseInt(item.price*item.qty))}</div>
//                 <div className="mainButtons">
//                 <button className="addButton"
//                 onClick={()=> addItem(item)}>
//                 +
//                 </button>
//                 <p className="qty">{item.qty}</p>
//                 <button className="removeButton"
//                 onClick={()=> removeItem(item) }>
//                 -
//                 </button>
//                 </div>
//                 </div>
//                 </div>
//             </div>
//             ))}
//             </div>

//             <h5 className="modalFooter">This is pulling from basket.js</h5>
//         </div>

//     );
// };

// export default Basket;

