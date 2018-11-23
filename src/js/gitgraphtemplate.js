// ----------------------- TEMPLATE FOR ALL GRAPHS ----------------------- //
var defaultTemplateConfig = {
  colors: [ "#03a9f4", "#757575", "#8bc34a", "#e91e63", "#ff9800"  ],
  branch: {
    lineWidth: 8,
    spacingX: 50,
    showLabel: true,
  },
  commit: {
    spacingY: -50,
    dot: {
      size: 12
    },
    message: {
      displayAuthor: false,
      displayBranch: false,
      displayHash: false,
      font: "normal 12pt Calibri"
    },
    shouldDisplayTooltipsInCompactMode: true,
    tooltipHTMLFormatter: function ( commit ) {
      return "" + commit.sha1 + "" + ": " + commit.message;
    }
  }
};

var defaultTemplate = new GitGraph.Template(defaultTemplateConfig);
