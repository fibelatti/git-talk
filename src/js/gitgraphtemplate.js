// ----------------------- TEMPLATE FOR ALL GRAPHS ----------------------- //
var defaultTemplateConfig = {
  colors: ["#03a9f4", "#a1a1a1", "#8bc34a", "#e91e63", "#ff9800"],
  branch: {
    lineWidth: 6,
    spacingX: 50,
    showLabel: true,
    labelFont: "normal 10pt Arial"
  },
  commit: {
    spacingY: -40,
    dot: {
      size: 10
    },
    message: {
      displayAuthor: false,
      displayBranch: false,
      displayHash: false,
      font: "normal 12pt Arial"
    },
    shouldDisplayTooltipsInCompactMode: false,
    tooltipHTMLFormatter: function (commit) {
      return "" + commit.sha1 + "" + ": " + commit.message;
    }
  }
};

var defaultTemplate = new GitGraph.Template(defaultTemplateConfig);
