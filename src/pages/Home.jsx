import React from "react";
// import Chart from "chart.js/auto";

const Home = () => {
  // const chartRef = useRef(null);

  // useEffect(() => {
  // const ctx = document.getElementById("myChart").getContext("2d");

  // Check if a chart instance already exists
  // if (chartRef.current !== null) {
  //   chartRef.current.destroy();
  // }

  // Create a new chart instance
  // chartRef.current = new Chart(ctx, {
  //   type: "bar",
  //   data: {
  //     labels: ["January", "February", "March", "April", "May", "June", "July"],
  //     datasets: [{
  //       label: "Revenue",
  //       backgroundColor: "rgba(54, 162, 235, 0.5)",
  //       borderColor: "rgba(54, 162, 235, 1)",
  //       borderWidth: 1,
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //     }],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  // });

  // Cleanup function to destroy chart when component
  //   return () => {
  //     if (chartRef.current !== null) {
  //       chartRef.current.destroy();
  //     }
  //   };
  // }, []);
  return (
    <>
      <div className="container mx-auto ">
        <div className="row py-4">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body p-4">
                <h3 className="card-title text-center fw-semibold text-success">
                  Users
                </h3>
                <p className="card-text text-center"> Total user</p>
                <h4 className="card-text text-center">10 +</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border ">
              <div className="card-body p-4">
                <h3 className="card-title text-center fw-semibold text-primary">
                  Products
                </h3>
                <p className="card-text text-center"> Total products</p>
                <h4 className="card-text text-center">16 +</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body p-4">
                <h3 className="card-title text-center fw-semibold text-danger">
                  Orders
                </h3>
                <p className="card-text text-center"> Total orders</p>
                <h4 className="card-text text-center">4 +</h4>
              </div>
            </div>
          </div>

          {/* Graph */}
          {/* <div className="col-md-12 mt-4">
            <div className="card shadow">
              <div className="card-body py-1">
                <h3 className="card-title text-center fw-semibold">
                  Graph
                </h3>
                <div className="text-center">
                <canvas id="myChart" width="400" height="130"></canvas>

                </div>
              </div>
            </div>
          </div> */}
          <div className="container py-4 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <h3 className="capitalize fw-semibold text-primary py-4 border-bottom border-2 ">
                  Welcome To Our RJ Decor
                </h3>
                <div className="">
                <div className="adminCard">
                  <strong>Admin</strong>
                  <br />
                  Sudhira Yadav
                  <br />
                  9803437150
                  <br />
                  Gothatar, Kathmandu
                </div>
                </div>
                
              </div>
              <div className="col-md-6">
                <div className="sideimg">
                  <img src="/FB_IMG_1712640094410.jpg" alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
