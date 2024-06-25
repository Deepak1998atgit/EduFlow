// import MyChart from "./components/chatOne";
// export default function adminHome() {
//     const dummySeries = [
//         {
//             name: 'South',
//             data: [{ x: 1, y: 20 }, { x: 2, y: 25 }, { x: 3, y: 30 }],
//         },
//         // Add more series as needed
//     ];

//     const dummyChart = {
//         type: 'line',
//         height: 350,
//         stacked: true,
//         // ... other properties
//     };

//     const dummyColors = ['#008FFB', '#00E396', '#CED4DC'];

//     const dummyDataLabels = {
//         enabled: false,
//         // ... other properties
//     };

//     const dummyStroke = {
//         curve: 'smooth',
//         // ... other properties
//     };

//     const dummyFill = {
//         type: 'gradient',
//         gradient: {
//             opacityFrom: 0.6,
//             opacityTo: 0.8,
//             // ... other properties
//         },
//     };

//     const dummyLegend = {
//         position: 'top',
//         horizontalAlign: 'left',
//         // ... other properties
//     };

//     const dummyXAxis = {
//         type: 'datetime',
//         // ... other properties
//     };

//     return (
//         <div>
//             <div className="flex gap-6 mb-10 mt-10 mx-1">
//                 <div className="flex-1 w-52 ">
//                     <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                         <svg fill="#3b3b3b" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="104px" height="104px" viewBox="0 0 190.06 190.06" xml: space="preserve" stroke="#3b3b3b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M74.855,43.025c-10.73-14.002-31.93-16.26-47.206-8.84C11.909,41.831,7.812,54.189,5.331,70.255 c-0.938,6.078-2.285,12.806-1.322,18.95c0.025,0.162,0.148,0.505,0.327,0.88c0.007,0.106,0.011,0.211,0.019,0.317 c-0.033,0.006-0.065,0.013-0.097,0.02c-1.345,0.311-1.339,2.391,0,2.705c5.374,1.262,11.005,1.763,16.698,1.952 c5.135,8,17.062,12.442,26.559,12.487c7.552,0.036,15.428-2.715,20.226-8.733c0.595-0.747,1.134-1.584,1.619-2.48 c4.592,0.026,9.123-0.193,13.455-0.919c0.473-0.079,0.822-0.326,1.102-0.637c1.289,0.093,2.675-0.687,2.715-2.354 C87.047,75.596,85.46,56.863,74.855,43.025z"></path> <path d="M140.683,68.427c-12.234-0.564-27.683,1.199-38.47,7.469c-0.698,0.406-0.768,1.209-0.467,1.808 c-5.535,12.933,7.087,23.47,22.425,26.943c-0.466,1.787-0.215,3.979-0.291,5.595c-0.209,4.429,0.03,9.219,1.852,13.322 c3.709,8.352,11.908,6.092,19.282,4.73c1.091-0.201,1.843-1.381,1.849-2.427c0.021-4.707,0.046-9.414,0.039-14.122 c-0.004-2.491,0.173-5.111,0.148-7.698c8.583-2.807,15.386-9.011,17.029-19.646c0.069-0.451,0.019-0.86-0.104-1.229 c0.194-0.224,0.352-0.498,0.41-0.877C166.14,71.033,148.104,68.769,140.683,68.427z"></path> <path d="M161.333,44.139c-7.608-6.377-18.305-12.044-28.522-10.951c-13.587,1.454-44.702,16.072-34.179,34.116 c0.109,0.187,0.245,0.335,0.393,0.458c0.067,0.688,0.7,1.342,1.523,1.119c13.963-3.786,29.942-11.271,44.73-7.76 c4.397,1.044,8.683,3.013,12.773,4.878c1.761,0.803,3.478,1.695,5.172,2.628c0.673,0.379,1.331,0.784,1.974,1.214 c0.29,0.187,0.501,0.337,0.667,0.463c-0.024,0.986,0.73,1.927,1.877,1.99c2.062,0.112,2.972-1.106,2.997-2.554 c0.817,0.1,1.712-0.226,2.147-0.977C177.918,60.074,167.328,49.165,161.333,44.139z"></path> <path d="M183.553,130.486c-3.356-5.223-15.951-21.392-24.495-19.159c-0.874-0.67-2.129-0.81-3.009,0.176 c-2.332,2.615-2.227,6.881-2.574,10.188c-0.56,5.334-0.686,10.795-1.759,16.064c-11.903-1.195-23.748,2.08-35.601,0.652 c0.069-8.096,0.336-16.262-1.424-24.183c0.96-1.025,0.695-3.035-0.553-3.806c-7.473-4.607-18.241,8.033-22.205,12.755 c-1.031,1.229-3.695,4.444-5.631,7.689c-5.083-8.275-14.536-14.853-23.763-14.402c-1.467-1.078-4.24-0.385-4.409,2.054 c-0.263,3.776,0.083,7.613-0.471,11.366c-0.789,5.345-5.969,5.386-10.087,5.3c-5.248-0.109-10.593-1.166-15.792-0.375 c-0.109-4.39-0.211-8.777-0.375-13.164c-0.059-1.582,0.349-4.753-1.262-5.852l-0.002-0.002c-0.041-0.027-0.068-0.069-0.112-0.095 c-0.048-0.028-0.093-0.027-0.141-0.048c-0.096-0.049-0.194-0.083-0.302-0.104c-0.077-0.015-0.15-0.021-0.224-0.021 c-0.028,0-0.056,0.007-0.084,0.008c-1.172-2.561-5.591-1.17-7.808-0.216c-6.328,2.722-12.717,9.518-16.765,14.914 c-4.222,5.629-5.735,14.696-4,21.452c1.713,6.668,11.312,5.716,16.411,5.56c10.735-0.33,21.159-1.408,31.94-1.192 c16.462,0.329,32.908,1.225,49.365,1.727c15.853,0.482,31.634,0.683,47.471,1.645c7.742,0.472,15.485,0.764,23.24,0.536 c5.145-0.15,11.948,0.197,16.566-2.534c0.951-0.562,1.288-1.381,1.22-2.168C193.839,148.863,187.771,137.051,183.553,130.486z"></path> </g> </g> </g></svg>
//                         <a href="#">
//                             <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Students </h5>
//                         </a>
//                         <div className="inline-flex mx-1 items-center text-xl">
//                             3
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex-1 w-52 ">
//                     <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                         <svg fill="#3b3b3b" height="104px" width="104px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" stroke="#3b3b3b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M167.331,277.436c-3.694,2.138-4.406,7.163-1.388,10.181l85.499,85.499c2.52,2.52,6.603,2.52,9.123,0l85.499-85.499 c3.018-3.018,2.304-8.043-1.388-10.181C289.939,245.762,222.163,245.706,167.331,277.436z"></path> <path d="M377.312,301.682c-2.54-2.379-6.518-2.304-8.979,0.156L265.125,405.046c-5.04,5.038-13.206,5.038-18.247,0 L143.67,301.838c-2.46-2.46-6.438-2.535-8.979-0.156c-34.619,32.427-56.286,78.522-56.286,129.585v61.38 c0,10.688,8.665,19.353,19.353,19.353h316.485c10.688,0,19.353-8.665,19.353-19.353v-61.38 C433.597,380.204,411.931,334.109,377.312,301.682z"></path> <path d="M156.128,238.41c8.766,0,190.985,0,199.749,0c10.688,0,19.353-8.665,19.353-19.353v-99.875c0-0.001,0-0.001,0-0.003 c0-59.951-44.512-109.95-102.162-118.001h0.001C200.133-8.925,136.775,47.24,136.775,119.179c0,0.001,0,0.001,0,0.003v99.875 C136.775,229.745,145.438,238.41,156.128,238.41z M194.516,67.249c28.69,48.508,88.914,70.303,142.006,51.506 c0.001,0.141,0.001,0.283,0.001,0.424c0,44.4-36.122,80.521-80.521,80.521c-44.4,0-80.522-36.122-80.522-80.521 C175.481,99.842,182.474,81.523,194.516,67.249z"></path> </g> </g> </g> </g></svg>
//                         <a href="#">
//                             <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Tutors</h5>
//                         </a>
//                         <div className="inline-flex mx-1 items-center text-xl">
//                             3
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex-1 w-52 ">
//                     <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                         <svg fill="#3b3b3b" width="104px" height="104px" viewBox="0 0 1920.00 1920.00" xmlns="http://www.w3.org/2000/svg" stroke="#3b3b3b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1750.176 0v1468.235h-225.882v338.824h169.412V1920H451.353c-82.447 0-161.506-36.141-215.718-99.388-42.917-50.824-66.635-116.33-66.635-182.965V282.353C169 126.494 295.494 0 451.353 0h1298.823Zm-338.823 1468.235H463.776c-89.223 0-166.023 60.989-179.576 140.047-1.13 9.036-2.259 18.07-2.259 25.977v3.388c0 40.659 13.553 79.059 40.659 109.553 31.624 38.4 79.059 59.859 128.753 59.859h960v-112.941H408.435v-112.942h1002.918v-112.94Zm-56.47-564.706h-790.59v112.942h790.588V903.529Zm56.47-564.705h-903.53v451.764h903.53V338.824ZM620.765 677.647h677.647V451.765H620.765v225.882Z" fill-rule="evenodd"></path> </g></svg>
//                         <a href="#">
//                             <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Courses</h5>
//                         </a>
//                         <div className="inline-flex mx-1 items-center text-xl">
//                             6
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex-1 w-52 ">
//                     <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                         <svg className="w-[104px] h-[104px] text-gray-500 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#3b3b3b" viewBox="0 0 20 20">
//                             <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
//                         </svg>
//                         <a href="#">
//                             <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Profit</h5>
//                         </a>
//                         <div className="inline-flex mx-1 items-center text-xl">
//                             12%
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <MyChart
//                 series={dummySeries}
//                 chart={dummyChart}
//                 colors={dummyColors}
//                 dataLabels={dummyDataLabels}
//                 stroke={dummyStroke}
//                 fill={dummyFill}
//                 legend={dummyLegend}
//                 xaxis={dummyXAxis}
//             />
//         </div>
//     )
// }




