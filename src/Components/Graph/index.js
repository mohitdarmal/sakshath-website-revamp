// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import Chart from "react-apexcharts";

// class PieChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [25, 15, 44, 55, 41],
//       options: {
//         chart: {
//           width: "100%",
//           type: "pie",
//         },
//         labels: [
//           "Process Discovery ",
//           "Process Analysis",
//           "Process Monitoring",
//           "Process Redesign",
//           "Process Implementation",
//         ],
//         theme: {
//           monochrome: {
//             enabled: true,
//           },
//         },
//         plotOptions: {
//           pie: {
//             dataLabels: {
//               offset: -5,
//             },
//           },
//         },
//         title: {
//           // text: "Monochrome Pie"
//         },
//         dataLabels: {
//           formatter(val, opts) {
//             const name = opts.w.globals.labels[opts.seriesIndex];
//             return [name, val.toFixed(1) + "%"];
//           },
//         },
//         legend: {
//           show: false,
//         },
//       },
//     };
//   }

//   render() {
//     return (
//       <div>
//         <div id="chart">
//           {/* <ReactApexChart options={this.state.options} series={this.state.series} type="pie" /> */}
//         </div>
//         <div id="html-dist">
//           <div className="pie">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="pie"
//               width="540"
//               height="540"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default PieChart;


import React from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    series: [20,20,20,20,20],
      // Removed Process Implementation
      options: {
        chart: {
          width: "100%",
          type: "pie",
        },
        labels: [
          "Process Discovery ",
          "Process Analysis",
          "Process Monitoring",
          "Process Redesign",
          "Process Monitoring"
        ], // Adjusted labels accordingly
        theme: {
          monochrome: {
            enabled: false, // Disabled monochrome theme for colors
          },
        },
        colors: [
          "#24688f", // dark Blue
          "#32a4d5", // Blue
          "#808080c9", // grey
        //   "#df960fc9",  //ornage
        "#24688f", // dark Blue
         
         
        //   "#13aa13ad", // Green
        "#32a4d5", // Blue
        ], // Added colors
        // plotOptions: {
        //   pie: {
        //     dataLabels: {
        //       offset: -5,
        //     },
        //   },
        // },
        title: {
          // text: "Monochrome Pie"
        },
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex];
            // return [name, val.toFixed(1) + "%"];
             return [name, val.toFixed(1)+ ""];
          },
        },
        legend: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          {/* <ReactApexChart options={this.state.options} series={this.state.series} type="pie" /> */}
        </div>
        <div id="html-dist">
          <div className="pie">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="pie"
              width="550"
              height="540"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PieChart;
