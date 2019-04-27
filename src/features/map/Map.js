import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaAlbersLow from "@amcharts/amcharts4-geodata/usaAlbersLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default class Map extends Component {
  componentDidMount() {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_usaAlbersLow;
    map.projection = new am4maps.projections.AlbersUsa();

    let polygonSeries = new am4maps.MapPolygonSeries();
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonSeries.useGeodata = true;
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    polygonSeries.data = [{
        "id": "US-CA",
        "name": "California",
        "value": 100,
        "fill": am4core.color("#F05C5C")
      },{
          "id": "US-TX",
          "name": "Texas",
          "value": 200,
          "fill": am4core.color("#F05C5C")
      }];
      polygonTemplate.propertyFields.fill = "fill";

    polygonTemplate.tooltipText = "{name}: {value}";
    map.seriesContainer.draggable = false;
    map.seriesContainer.resizable = false;
    map.maxZoomLevel = 1;

      console.log(polygonSeries)

    map.series.push(polygonSeries);
  }

  componentWillUnmount() {}

  render() {
    return <div id="chartdiv" style={{height: 400}} />;
  }
}
