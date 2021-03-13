Plotly.newPlot("plotLinear", new function() {

  graph = [{
    type: 'scatter',
    x: [1, 4],
    y: [10, 17],
    mode: 'lines',
    name: 'Lineare Graph',
    line: {
      color: 'rgb(219, 64, 82)',
      width: 3
    }
  }];

  layout = {
      title: 'Lineare Funktion',
      xaxis: {
          title: 'x'
      },
      yaxis: {
        title: 'y'
      },
      annotations: [
          {
              text: 'y-Achsenabschnitt',
              x: 0,
              xref: 'paper',
              yref: 'paper'
          }
      ]
  };

  config = {
    responsive: true,
    scrollZoom: true
  };

  return {
    data:graph,
    layout:layout,
    config:config
  };

});

Plotly.newPlot("plotQuad", new function() {

  let graph = [{
    type: 'scatter',
    x: new function() {
      let result = [];
      for(i = -20; i<=20; i++) {
        result.push(i);
      }
      return result;
    },
    y: new function() {
      let result = [];
      for(i = -20; i<=20; i++) {
        result.push(i*i);
      }
      return result;
    }, //function values here
    mode: 'lines',
    name: 'Quadratischer Graph',
    line: {
      color: 'rgb(219, 64, 82)',
      width: 3
    }
  }];

  layout = {
      title: 'Quadratische Funktion',
      xaxis: {
          title: 'x'
      },
      yaxis: {
        title: 'y'
      },
      annotations: [
          {
              text: 'test',
              x: 0,
              xref: 'paper',
              y: 0,
              yref: 'paper'
          }
      ]
  };

  config = {
    responsive: true,
    scrollZoom: true
  };

  return {
    data:graph,
    layout:layout,
    config:config
  };

});
