# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "terminal-dark"
  spec.version       = "0.1.0"
  spec.authors       = ["no u"]
  spec.email         = [""]

  spec.summary       = "Terminal theme"
  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
