/*
// Chapter 2 stuff:
var ch2 = require('./chapter2') ;
ch2.default() ;
ch2.axisDemo() ;
ch2.FunkyD3PathGenerators() ;
ch2.myWeirdSVGDrawing() ;
ch2.renderDailyShowGuestTable() ;
*/

/*
// Chapter 3 stuff:
import 'babel-core/polyfill';
import {UlamSpiral, ScalesDemo, GeoDemo} from './chapter3';
new UlamSpiral();
new ScalesDemo();
new GeoDemo();
*/

/*
// Chapter 4 stuff:
import {Easingchart, Spirograph, PrisonPopulationChart, InteractivePrisonPopulationChart, DraggableInteractivePrisonChart, SelectableInteractivePrisonChart} from './chapter4';
//new Easingchart() ;
//new Spirograph() ;
//new PrisonPopulationChart('data/uk_prison_data_1900-2015.csv');
//new InteractivePrisonPopulationChart('data/uk_prison_data_1900-2015.csv');
//new DraggableInteractivePrisonChart('data/uk_prison_data_1900-2015.csv');
new SelectableInteractivePrisonChart('data/uk_prison_data_1900-2015.csv');
    */

/*
// Chapter 5 stuff

window.d3 = undefined;

 import PoliticalDonorChart from './chapter5';
// new PoliticalDonorChart('histogram');
// new PoliticalDonorChart('pie', 'The Rt Hon Edward Miliband MP');
// new PoliticalDonorChart('streamgraph');
// new PoliticalDonorChart('chord', 'Miliband');
// new PoliticalDonorChart('force');
// new PoliticalDonorChart('tree', 'Miliband');
// new PoliticalDonorChart('cluster', 'Miliband');
// new PoliticalDonorChart('partition', 'Miliband');
// new PoliticalDonorChart('pack');
 new PoliticalDonorChart('treemap', 'Miliband');

*/
import VoronoiAirports from './voronoi-airports';

new VoronoiAirports('41.961571, -87.959659');

