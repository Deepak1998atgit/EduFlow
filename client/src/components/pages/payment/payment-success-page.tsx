import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, Typography, CardFooter, Button } from '@material-tailwind/react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function PaymentSuccessPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    useEffect(() => {
    }, [])


    return (
        <div className="flex justify-center items-center min-h-screen"> {/* Center the card on the page */}
            <Card className="mt-6 w-96 text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <CardBody className="flex flex-col items-center justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> {/* Center the content */}
                    <CheckCircleIcon className="h-12 w-12 text-green-500 mb-4" /> {/* Green tick icon */}
                    <Typography variant="h5" color="green" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Payment Successful
                    </Typography>
                    <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Your payment has been successfully processed.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Link to={`?id=${id}`}>
                        <Button size="sm" variant="text" className="flex justify-center gap-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            View Details
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
