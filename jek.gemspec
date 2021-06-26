# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jek"
  spec.version       = "0.0.7"
  spec.authors       = ["tcbutler320"]
  spec.email         = ["tcbutler320@gmail.com"]

  spec.summary       = "Jek is a minimalist jekyll theme putting the power of color schemes in the user’s hands"
  spec.homepage      = "https://jekyll-jek.netlify.app/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
