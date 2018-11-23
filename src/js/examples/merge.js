var gitflowMerge = new GitGraph({
  template: defaultTemplate,
  mode: "compact",
  orientation: "horizontal",
  elementId: "gitgraph-example-gitflow-merge"
});

var mergeMaster = gitflowMerge.branch({ name: "master", column: 4 })
  .commit({ message: "Initial commit" });

var mergeDevelop = mergeMaster.branch({ name: "develop", column: 2 })
  .commit({ message: "Adds initial project files" });

var mergeFeatureFoo = mergeDevelop.branch({ name: "feature/foo", column: 1 });

var mergeFeatureBar = mergeDevelop.branch({ name: "feature/bar", column: 0 })

mergeFeatureFoo.commit({ message: "Adds layout files" });

mergeFeatureBar
  .commit()
  .commit();

mergeFeatureFoo
  .commit({ message: "Adds implementation" })
  .commit({ message: "Adds unit tests" });

mergeFeatureFoo.merge(mergeDevelop).delete();
mergeFeatureBar.merge(mergeDevelop).delete()

var mergeReleaseOneZero = mergeDevelop.branch({ name: "release/1.0.0", column: 3 })
  .commit()
  .commit();

mergeReleaseOneZero.merge(mergeMaster, { tag: "v1.0.0" });
mergeReleaseOneZero.merge(mergeDevelop).delete();

mergeDevelop.commit()
