###
# Site Settings
###

# set site URL
set :site_url, 'http://blog.example.com'
# set site title
set :site_title, 'iQmetrix Developer Portal'
# set site description (only used for meta description for the moment)
set :site_description, 'Site Description'
# set site author name
set :site_author, 'Dan Wilcox'
# set site author profile information
set :site_author_profile, 'Lorem ipsum dolor sit amet, cu facilis indoctum interpretaris has. Ius ea quod euismod fierent, per in legere gubergren accommodare, ut labitur partiendo urbanitas duo. Tamquam inciderint at sed. Per at nibh graecis intellegebat. Probo brute ancillae sit ex, tota recusabo disputando usu et.'
# set site author profile image (should be in images_dir)
#set :site_author_image, 'profile.png'
# when true, the page and site titles will be reversed (page title | site title)
set :reverse_title, true

# twitter/facebook/github/linkedin links in author page (otherwise set nil)
#set :social_links,
#    twitter: 'https://twitter.com',
#    facebook: 'https://facebook.com',
#    github: 'https://github.com/5t111111',
#    linkedin: 'https://linkedin.com'
# set Google Analytics account, like "XX-12345678-9"
# set :google_analytics_account, 'XX-12345678-9'


# Markdown
set :markdown_engine, :redcarpet
set :markdown,
    fenced_code_blocks: true,
    smartypants: true,
    disable_indented_code_blocks: true,
    prettify: true,
    tables: true,
    with_toc_data: true,
    no_intra_emphasis: true

# Assets
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir, 'fonts'

# Activate the syntax highlighter
activate :syntax

activate :sprockets

activate :autoprefixer do |config|
  config.browsers = ['last 2 version', 'Firefox ESR']
  config.cascade  = false
  config.inline   = true
end


# Github pages require relative links
activate :relative_assets
set :relative_links, true

# Build Configuration
configure :build do
  # If you're having trouble with Middleman hanging, commenting
  # out the following two lines has been known to help
  activate :minify_css
  activate :minify_javascript
  activate :directory_indexes
  # activate :relative_assets
  # activate :asset_hash
  # activate :gzip
end

# Deploy Configuration
# If you want Middleman to listen on a different port, you can set that below
set :port, 4567
