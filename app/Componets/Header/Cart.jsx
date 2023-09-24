

function Cart({ showCart }) {
    return (
        <div className={`fixed z-[99999] p-2 trans right-0 ${showCart ? 'w-[50vw]' : 'w-[0]'} h-[100vh] bg-black`}>
            <h1 className="text-white text-center text-2xl font-bold">Cart</h1>
            <div className="border h-[85%] m-auto overflow-y-scroll">

            </div>



        </div>
    )
}

export default Cart