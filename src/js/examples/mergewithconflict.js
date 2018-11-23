var gitflowMergeConflict = new GitGraph({
  template: defaultTemplate,
  mode: "compact",
  orientation: "horizontal",
  elementId: "gitgraph-example-gitflow-merge-conflict"
});

var mergeConflictDevelop = gitflowMergeConflict.branch({ name: "develop", column: 3 })
  .commit({ message: "Adds initial project files" });

var mergeConflictFeatureFoo = mergeConflictDevelop.branch({ name: "feature/foo", column: 2 });

var mergeConflictFeatureBar = mergeConflictDevelop.branch({ name: "feature/bar", column: 0 })

mergeConflictFeatureFoo.commit().merge(mergeConflictDevelop).delete();

mergeConflictFeatureBar.commit();

var mergeConflictFeatureBaz = mergeConflictDevelop.branch({ name: "feature/baz", column: 2 });

var mergeConflictFeatureQux = mergeConflictDevelop.branch({ name: "feature/qux", column: 1 });

mergeConflictFeatureBaz.commit().commit()

mergeConflictFeatureBar.commit()

mergeConflictFeatureQux.commit()

mergeConflictFeatureBar.commit()

mergeConflictFeatureBaz.merge(mergeConflictDevelop).delete();
mergeConflictFeatureQux.merge(mergeConflictDevelop).delete()

mergeConflictDevelop.merge(mergeConflictFeatureBar);

mergeConflictFeatureBar.merge(mergeConflictDevelop).delete();
