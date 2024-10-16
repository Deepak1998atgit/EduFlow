import { Button, Card, Typography } from "@material-tailwind/react";
import WalletDoughnutChart from "../charts/WalletDoughnutChart";
import usePagination from "@/hooks/usePagination";
export default function () {

    const items = [
        {
            name: 'React1',
            description: 'React Js Course',
            date: "1/4/2024",
            price: 6813,
        },
        {
            name: 'React2',
            description: 'React Js Course',
            date: "1/4/2024",
            price: 6813,
        },
        {
            name: 'Next JS3',
            description: 'Next Js course',
            date: "1/4/2024",
            price: 6831,
        },
        {
            name: 'Docker4',
            description: 'Docker Course',
            date: "1/4/2024",
            price: 81,
        },
        {
            name: 'React5',
            description: 'React Js Course',
            date: "1/4/2024",
            price: 61,
        },
        {
            name: 'Next JS6',
            description: 'Next Js course',
            date: "1/4/2024",
            price: 69,
        },
        {
            name: 'Docker7',
            description: 'Docker Course',
            date: "1/4/2024",
            price: 671,
        },
        {
            name: 'React8',
            description: 'React Js Course',
            date: "1/4/2024",
            price: 621,
        },
        {
            name: 'Next JS9',
            description: 'Next Js course',
            date: "1/4/2024",
            price: 683,
        },
        {
            name: 'Docker10',
            description: 'Docker Course',
            date: "1/4/2024",
            price: 281,
        },
    ];
    const { currentData, totalPages, goToPage, goToNextPage, currentPage, goToPreviousPage } = usePagination(items, 2)
    console.log(currentData, totalPages, goToPage, goToNextPage, currentPage, goToPreviousPage);
    const subtotal = items.reduce((acc, item) => acc + item.price, 0);
    return (
        <div className="col-span-3">
            <div className="flex flex-col md:flex-row  lg:flex-row w-full">
                <div className="w-full md:w-1/4  lg:w-1/3">
                    <WalletDoughnutChart />
                </div>
                <div className="w-full lg:w-2/3 md:w-1/4 mb-64 flex pt-12 justify-center">
                    <div className="w-96 flex   relative  items-end  justify-center bg-[#EE645B] bg-opacity-50 border-none h-36 rounded-3xl">
                        <Typography variant="h4" className=" text-white absolute top-5">User's Wallet</Typography>
                        <div className="w-full ml-6 border border-[#49BBBD] shadow-2xl text-white flex items-center justify-center content-center absolute -bottom-14 bg-[#49BBBD] bg-opacity-90 border-none  h-full rounded-3xl">
                            <Typography variant="h3">&#x20b9;3000/-</Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col gap-3 justify-start ">
                {/* Shopping Cart Section */}
                <div className="w-3/4  relative">
                    {currentData?.map((item, index) => (
                        <Card key={index} className="mb-4 p-4 flex-row shadow-2xl gap-2 justify-between">
                            <div className="flex gap-3">
                                <img src="https://picsum.photos/seed/picsum/200/300" className="w-16 rounded-xl" alt="" />
                                <div className="">
                                    <Typography variant="h6">{item.name}</Typography>
                                    <Typography variant="small" >{item.description}</Typography>
                                    <Typography variant="small">Published:{item.date}</Typography>
                                    <Typography variant="h6" className="mt-2" >&#x20b9;{item.price}</Typography>
                                </div>
                            </div>
                            <Typography variant="small">Declined 10
                                days ago
                            </Typography>
                        </Card>
                    ))}{
                        <>
                            <div className="flex items-center absolute right-0 -bottom-16  gap-2 pb-4">
                                <Button
                                    onClick={goToPreviousPage}
                                    disabled={currentPage === 1}
                                    variant="outlined"
                                    className="border-[#EE645B] hover:bg-[#EE645B] hover:text-white bg-opacity-50 relative"
                                    size='sm'>Prev
                                </Button>
                                <Typography variant='small' color='blue-gray' className='font-normal'>
                                    Page {currentPage} of {totalPages}
                                </Typography>
                                <Button
                                    onClick={goToNextPage}
                                    disabled={currentPage === totalPages}
                                    variant="outlined"
                                    className="border-[#49BBBD]  hover:bg-[#49BBBD] hover:text-white bg-opacity-50"
                                    size='sm'>next
                                </Button>
                            </div></>
                    }
                </div>
            </div> 
        </div>
    )
}