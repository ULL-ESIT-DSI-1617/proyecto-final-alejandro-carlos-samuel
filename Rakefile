desc "sync repo"
task :sync do
  out = []
  IO.popen("git remote").each do |line|
    out.push(line.chomp)
  end
  unless out.include?('upstream')
    exec "git remote add upstream #{ARGV[1]}"
  end
  sh 'git fetch upstream'
  sh 'git checkout master'
  sh'git merge upstream/master'
end