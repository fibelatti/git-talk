var trunk = new GitGraph({
  template: defaultTemplate,
  mode: "compact",
  orientation: "horizontal",
  elementId: "gitgraph-example-trunk"
});

var trunkMaster = trunk.branch({ name: "master", column: 1 })
  .commit({ message: "Adds initial project files" })
  .commit()
  .commit();

var trunkFeatureFoo = trunk.branch({ name: "feature/foo", column: 0 });

trunkFeatureFoo.commit().commit();

trunkMaster.commit();

trunkFeatureFoo.merge(trunkMaster).delete();

trunkMaster.commit();

var trunkReleaseOneZero = trunkMaster.branch({ name: "release/1.0.0", column: 2 })
  .commit();

trunkMaster.commit().commit().commit();

var trunkReleaseOneOne = trunkMaster.branch({ name: "release/1.1.0", column: 2 })
  .commit();
