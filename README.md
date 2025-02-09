# leaf-let challenge
Overview
The United States Geological Survey (USGS) collects a vast amount of data about natural hazards, including earthquake occurrences, around the world. However, the data is difficult to interpret without meaningful visualization tools. This project aims to create a dynamic and interactive map that visualizes earthquake data collected by the USGS, allowing users to better understand the magnitude, depth, and location of recent earthquakes. This tool will be valuable for educating the public, government organizations, and researchers, ultimately supporting USGS efforts in addressing global challenges related to natural disasters.

Project Goals
Visualize earthquake data using an interactive map.
Display important details about each earthquake, including magnitude, location, and depth.
Use color-coding to represent the depth of earthquakes.
Add size variation to the markers based on the magnitude of each earthquake.
Create a legend to explain the color and size scaling used in the map.
Provide an option to visualize tectonic plates to offer additional context for seismic activity.
Features
Interactive Map: A user-friendly map that displays recent earthquake data.
Circle Markers: Earthquake locations are shown using circle markers with varying sizes and colors.
Color: Represents the depth of the earthquake.
Size: Represents the magnitude of the earthquake.
Popup Information: Each marker includes a popup with detailed information about the earthquake, including its location, magnitude, and depth.
Legend: A dynamic legend helps users understand the color and size scaling based on earthquake depth and magnitude.
Tectonic Plate Visualization (Optional): An additional layer showing tectonic plates to help understand the geographical context of the earthquake data.
Technologies Used
Leaflet.js: A JavaScript library used for creating interactive maps.
D3.js: A JavaScript library used for data-driven manipulation of the map, including GeoJSON parsing.
USGS Earthquake Feed: The data source for earthquake information, pulled from the USGS API.
