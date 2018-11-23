var gitflowRebase = new GitGraph({
  template: defaultTemplate,
  mode: "compact",
  orientation: "horizontal",
  elementId: "gitgraph-example-gitflow-rebase"
});

var rebaseMaster = gitflowRebase.branch({ name: "master", column: 3 })
  .commit({ message: "Initial commit" });

var rebaseDevelop = rebaseMaster.branch({ name: "develop", column: 1 })
  .commit({ message: "Adds initial project files" });

var rebaseFeatureFoo = rebaseDevelop.branch({ name: "feature/foo", column: 0 })
  .commit({ message: "Adds layout files" })
  .commit({ message: "Adds implementation" })
  .commit({ message: "Adds unit tests" });

rebaseFeatureFoo.merge(rebaseDevelop).delete();

var rebaseFeatureBar = rebaseDevelop.branch({ name: "feature/bar", column: 0 })
  .commit()
  .commit();

rebaseFeatureBar.merge(rebaseDevelop).delete()

var rebaseReleaseOneZero = rebaseDevelop.branch({ name: "release/1.0.0", column: 2 })
  .commit()
  .commit();

rebaseReleaseOneZero.merge(rebaseMaster, { tag: "v1.0.0" });
rebaseReleaseOneZero.merge(rebaseDevelop).delete();

rebaseDevelop.commit()
