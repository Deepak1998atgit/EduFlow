import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input
} from "@material-tailwind/react";

const CheckOut: React.FC = () => {
    return (
        <>
            <div className="h-full w-full  p-20 justify-between mb-0 flex" >
                <Card className="w-1/2  mt-12 flex-col pt-7  pr-4 pl-5">
                    <Typography variant="h5" color="blue-gray" className="font-semibold leading-tight  tracking-normal">
                        CheckOut
                    </Typography>
                    <CardBody>
                        <div className="flex w-5/6">
                            <CardHeader  className="flex-1  p-5">
                                <img
                                    src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png"
                                    alt="card-image"
                                    className=" object-cover"
                                />
                            </CardHeader>
                            <CardHeader className="flex-1 p-5">
                                <img
                                    src="https://imgs.search.brave.com/PL1nsW-gCqvFkgpUJRKhEz1V5tGhliKP5pnaogm4ZWc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmVyZHdhbGxldC5j/b20vY2RuLWNnaS9p/bWFnZS9xdWFsaXR5/PTg1L2Nkbi9zb2Z0/d2FyZS9sb2dvcy9z/dHJpcGUucG5n"
                                    alt="card-image"
                                    className=" h-full object-contain"
                                />
                            </CardHeader>
                            <CardHeader  className="flex-1 p-5">
                                <img
                                    src="https://imgs.search.brave.com/CyGwDKAiibZ8jXj4GaTnCkTpg0tjeGdTYA8cgF-DV1o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXJhem9ycGF5LWxv/Z28taWNvbi1kb3du/bG9hZC1pbi1zdmct/cG5nLWdpZi1maWxl/LWZvcm1hdHMtLXBh/eW1lbnQtZ2F0ZXdh/eS1icmFuZC1sb2dv/cy1pY29ucy0xMzk5/ODc1LnBuZz9mPXdl/YnAmdz0yNTY"
                                    alt="card-image"
                                    className="object-cover"
                                />
                            </CardHeader>

                        </div>

                    </CardBody>
                    <div className="">
                        <form className="">
                            {/* Cardholder Name */}
                            <div>
                                <Typography variant="small" color="black" className="text-[#5B5B5B] font-semibold  block mb-2">
                                    Cardholder Name
                                </Typography>
                                <Input
                                    crossOrigin="anonymous"
                                    type="text"
                                    id="card-name"
                                    name="card-name"
                                    placeholder="John Doe"
                                    className="w-full px-3 py-2 border focus:outline-none rounded-md mb-2 shadow-sm"
                                />
                            </div>

                            {/* Card Number */}
                            <div>
                                <Typography variant="small" className="text-[#5B5B5B] mt-1 font-semibold  block mb-2">
                                    Card Number
                                </Typography>
                                <Input
                                    crossOrigin="anonymous"
                                    type="text"
                                    id="card-number"
                                    name="card-number"
                                    placeholder="1234 5678 9012 3456"
                                    className="w-full px-3 py-2 border focus:outline-none mb-2 rounded-md shadow-sm"
                                />
                            </div>
                            {/* Expiration Date and CVC */}
                            <div className="flex space-x-4 pt-2">
                                {/* Expiration Date */}
                                <div className="flex-1">
                                    <Typography variant="small" className="text-[#5B5B5B] font-semibold mt-1   block mb-1">
                                        Expiration Date
                                    </Typography>
                                    <Input
                                        crossOrigin="anonymous"
                                        type="text"
                                        id="expiry-date"
                                        name="expiry-date"
                                        placeholder="MM/YY"
                                        className="w-full px-3 py-2 border focus:outline-none border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>

                                {/* CVC */}
                                <div className="flex-1">
                                    <Typography variant="small" className="block mt-1 text-[#5B5B5B] font-semibold  mb-1">
                                        CVC
                                    </Typography>
                                    <Input
                                        crossOrigin="anonymous"
                                        type="text"
                                        id="cvc"
                                        name="cvc"
                                        placeholder="123"
                                        className="w-full px-3 py-2 border focus:outline-none border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full h-11 py-2 px-4 mt-5  mb-4 text-white font-semibold rounded-md shadow-sm"
                            >
                                Pay Now
                            </Button>
                        </form>
                    </div>
                </Card>
                <Card className="w-96 mr-16 mt-16 h-4/5 p-4 ml-11">
                    <div className="flex gap-3">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                            className="w-28 rounded-2xl"
                        />

                        <div>
                            <Typography variant="small" className="text-[#000000]">adipising elit, sed do eiusmod tempor</Typography>
                            <Typography variant="small" className="text-[#5B5B5B]">Lorem ipsum dollar...</Typography>
                            <Typography variant="h6">$24.69</Typography>
                        </div>
                    </div>
                    <hr className="border-t-[1px] border-gray-500 w-full my-4" />
                    <div className="flex gap-3">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                            className="w-28 rounded-2xl"
                        />

                        <div>
                            <Typography variant="small">adipising elit, sed do eiusmod tempor</Typography>
                            <Typography variant="small">Lorem ipsum dollar...</Typography>
                            <Typography variant="h6">$24.69</Typography>
                        </div>
                    </div>
                    <hr className="border-t-[1px] border-gray-500 w-full my-4" />
                    <div className="flex w-full justify-between text-[#5B5B5B]">
                        <Typography variant="small">Subtotal</Typography>
                        <Typography variant="small">$51.38</Typography>
                    </div>
                    <hr className="border-t-[1px] border-gray-500 w-full my-4" />
                    <div className="flex w-full justify-between text-[#5B5B5B]">
                        <Typography variant="small">Coupon Discount</Typography>
                        <Typography variant="small">0%</Typography>
                    </div>
                    <hr className="border-t-[1px] border-gray-500 w-full my-4" />
                    <div className="flex justify-between text-[#5B5B5B]">
                        <Typography variant="small">Tax</Typography>
                        <Typography variant="small">5</Typography>
                    </div>
                    <hr className="border-t-[1px] border-gray-500 w-full my-4" />
                    <div className="flex justify-between">
                        <Typography variant="h6">Total</Typography>
                        <Typography variant="h6">$56.38</Typography>
                    </div>
                </Card>
            </div>
        </>
    )
}



export default CheckOut;