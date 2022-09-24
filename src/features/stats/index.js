import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import style from "./stats.module.scss";

const Chart = ({ topRated }) => {
  const d3Chart = useRef();
  // Ref for updating dimention
  const dimensions = {
    width: "100%",
    height: "100%",
  };
  const sample = [];
  topRated.map((item, key) =>
    sample.push({
      title: item.title,
      vote: item.vote_average,
      voteCount: item.vote_count,
    })
  );
  useEffect(() => {
    DrawChart(sample, dimensions);
  }, []);

  const margin = { top: 50, right: 0, bottom: 200, left: 60 };
  function DrawChart(data, dimensions) {
    const chartwidth =
      parseInt(d3.select("#chart").style("width")) - margin.left - margin.right;
    const chartheight =
      parseInt(d3.select("#chart").style("height")) -
      margin.top -
      margin.bottom;

    const svg = d3
      .select(d3Chart.current)
      .attr("width", chartwidth + margin.left + margin.right)
      .attr("height", chartheight + margin.top + margin.bottom);

    // x scale
    const x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, chartwidth - margin.right])
      .padding(0.5);

    svg
      .append("g")
      .attr("transform", "translate(0," + chartheight + ")")
      .call(
        d3
          .axisBottom(x)
          .tickFormat((i) => data[i].title)
          .tickSizeOuter(1)
      );
    svg
      .selectAll("g")
      .selectAll("text")
      .attr("text-anchor", "start")
      .attr("transform", "translate(15,10) rotate(90)");

    // y scale
    const y = d3.scaleLinear().domain([0, 10]).range([chartheight, margin.top]);

    const y2 = d3
      .scaleLinear()
      .domain([0, 30000])
      .range([chartheight, margin.top]);
    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y).ticks(10));
    svg
      .append("g")
      .attr("id", "secondAxis")
      .attr("transform", "translate(" + 40 + ",0)")
      .call(d3.axisLeft(y2).ticks(10));
    svg.selectAll("g[id^=secondAxis]").selectAll("path").attr("stroke", "0");
    svg.selectAll("g[id^=secondAxis]").selectAll("line").attr("stroke", "0");

    var tooltip = d3
      .select("#tooltips")
      .style("visibility", "hidden")
      .style("position", "relative")
      .style("width", "fit-content")
      .style("width", "fit-content")
      .style("padding", "1rem")
      .style("border-radius", "1rem")
      .style("z-index", "50")
      .style("background", "#000");
    // Draw bars
    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("id", "chart1")
      .attr("fill", "#D3CEDF")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(0))
      .attr("height", (d) => chartheight - y(0))
      .attr("width", x.bandwidth())

      .on("mouseover", function (d) {
        this.setAttribute("fill", "#ffffff");
        tooltip.text(`Vote : ${d.target.__data__.vote}`);
        return tooltip.style("visibility", "visible");
      })
      .on("mousemove", function (d) {
        return tooltip
          .style("top", d.clientY - 10 + "px")
          .style("left", d.clientX + 10 + "px");
      })
      .on("mouseout", function () {
        this.setAttribute("fill", "#D3CEDF");

        return tooltip.style("visibility", "hidden");
      });

    svg
      .selectAll("rect[id^=chart1]")
      .transition()
      .duration(800)
      .attr("y", function (d) {
        return y(d.vote);
      })
      .attr("height", function (d) {
        return chartheight - y(d.vote);
      })
      .delay(function (d, i) {
        return i * 100;
      });
    svg
      .append("g")
      .attr("id", 2)
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("fill", "#748DA6")
      .on("mouseover", function (d) {
        this.setAttribute("fill", "white");
        tooltip.text(`Vote Count : ${d.target.__data__.voteCount}`);
        return tooltip.style("visibility", "visible");
      })
      .on("mousemove", function (d) {
        return tooltip
          .style("top", d.clientY - 10 + "px")
          .style("left", d.clientX + 10 + "px");
      })
      .on("mouseout", function () {
        this.setAttribute("fill", "#748DA6");
        return tooltip.style("visibility", "hidden");
      })
      .attr("id", "chart2")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y2(0))
      .attr("height", (d) => chartheight - y2(0))
      .attr("width", x.bandwidth())
      .transition()
      .duration(800);

    svg
      .selectAll("rect[id^=chart2]")
      .transition()
      .duration(800)
      .attr("y", function (d) {
        return y2(d.voteCount);
      })
      .attr("height", function (d) {
        return chartheight - y2(d.voteCount);
      })
      .delay(function (d, i) {
        return 1500 + i * 100;
      });
  }

  return (
    <div id="chart" className={style.d3Container}>
      <div id="tooltips"></div>
      <svg ref={d3Chart}></svg>
    </div>
  );
};

export default Chart;
