require 'rouge'

module Jekyll
  class CodeBlockTag < Liquid::Block
    def initialize(tag_name, lang, tokens)
      super
      @lang = lang.strip
    end

    def render(context)
      code = super.rstrip.sub(/^\n/, '')

      formatter = Rouge::Formatters::HTML.new
      lexer = Rouge::Lexer.find_fancy(@lang, code) || Rouge::Lexers::PlainText
      highlighted_code = formatter.format(lexer.lex(code))

      <<~HTML
        <div class="code-block expanded language-#{@lang || 'plaintext'} highlighter-rouge">
          <pre class="highlight"><code class="highlight">#{highlighted_code}</code></pre>
          <button class="expand-button">Expand</button>
        </div>
      HTML
    end
  end
end

Liquid::Template.register_tag('codeblock', Jekyll::CodeBlockTag)