var gitgraph = new GitGraph({ template: defaultTemplate });

gitgraph.template.commit.message.font = "normal 24pt Calibri";

var talk = gitgraph.branch("talk")
  .commit({ message: "Start Git Talk" })
  .commit()
  .commit({ message: "Give a quick introduction", detailId: "quick-introduction" });

var agenda = talk.branch("agenda")
  .commit({ message: "Keep local copy up to date", detailId: "agenda-keeping-up-to-date" })
  .commit({ message: "Show real life examples", detailId: "agenda-real-life-example" })
  .commit({ message: "Enforce your policies through integrations", detailId: "agenda-integrations-and-policies" })
  .commit({ message: "Show the importance of commit messages", detailId: "agenda-commit-messages" })
  .commit({ message: "Show some handy commands" });

agenda.merge(talk, "").delete();

talk.commit({ message: "Keep local copy up to date", detailId: "keeping-sync" });

talk.commit({ message: "Show real life examples", detailId: "real-life-examples" });

talk.commit({ message: "Enforce your policies through integrations", detailId: "integrations-and-policies" }).commit();

var commitMessages = talk.branch("commit-messages")
  .commit({ message: "Show the importance of commit messages", detailId: "commit-messages" })
  .commit({ message: "Show sample commit message rules", detailId: "commit-messages-sample-rules" });

commitMessages.merge(talk, "").delete();

var commands = talk.branch("useful-commands")
  .commit({ message: "Keep it clean and tidy", detailId: "command-cleanup" })
  .commit({ message: "Looking for code", detailId: "command-log-s" })
  .commit({ message: "Come out, come out wherever you are", detailId: "command-bisect" })
  .commit({ message: "Update a .gitignore file", detailId: "command-ls-files" });

commands.merge(talk, "").delete();

talk.commit({ message: "Add sources and recommended reading", detailId: "sources-and-recommended-reads" });

talk.commit("Answer questions");

talk.commit().commit("Finish talk");
